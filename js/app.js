// Main Application

const App = {
  init() {
    this.renderPlanSelector();  // must be before bindInputs — creates planId element
    this.bindInputs();
    this.bindTabs();
    this.bindCollapsibles();
    this.calculate();
    this.renderFoodTables();
    this.renderFAQ();
    this.renderGuide();
  },

  bindInputs() {
    const ids = ['gender','height','weight','age','bodyFat','trainingLevel',
                 'cardioHours','cardioType','planId'];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      el.addEventListener('input', () => this.calculate());
      el.addEventListener('change', () => {
        if (id === 'planId') this.onPlanChange();
        this.calculate();
      });
    }
  },

  readParams() {
    const g = document.getElementById('gender');
    const tl = document.getElementById('trainingLevel');
    const ct = document.getElementById('cardioType');
    return {
      gender: g ? g.value : 'male',
      height: parseFloat(document.getElementById('height')?.value) || 175,
      weight: parseFloat(document.getElementById('weight')?.value) || 75,
      age: parseInt(document.getElementById('age')?.value) || 25,
      bodyFat: parseFloat(document.getElementById('bodyFat')?.value) || 0,
      trainingLevel: tl ? tl.value : 'novice',
      planId: document.getElementById('planId')?.value || 'cut-morning-early',
      cardioHours: parseFloat(document.getElementById('cardioHours')?.value) || 0,
      cardioType: ct ? ct.value : 'moderate',
    };
  },

  onPlanChange() {
    const planId = document.getElementById('planId')?.value;
    if (!planId) return;
    const def = Engine.getPlan(planId);
    // Update training level visibility for no-training plan
    const tl = document.getElementById('trainingLevel');
    const tlLabel = tl?.closest('.form-group');
    if (tlLabel) tlLabel.style.display = def.hasTraining ? '' : 'none';
  },

  // ─── Main calculation ───
  calculate() {
    const p = this.readParams();
    const r = Engine.calculate(p);
    this.renderMetrics(r);
    this.renderMacros(r);
    this.renderMeals(r);
  },

  // ─── Render BMI, BMR, TDEE ───
  renderMetrics(r) {
    const el = document.getElementById('results-metrics');
    if (!el) return;
    const deficit = r.trainingCals > 0 ? r.balance.training - r.target.training : r.balance.rest - r.target.rest;
    const bmiLabel = 'bmi' + r.bmiCategory.charAt(0).toUpperCase() + r.bmiCategory.slice(1);

    el.innerHTML = `
      <div class="result-item">
        <div class="label">BMI</div>
        <div class="value">${r.bmi}</div>
        <div class="sub">${t(bmiLabel)}</div>
      </div>
      <div class="result-item">
        <div class="label">${t('bmr')}</div>
        <div class="value">${r.bmr}</div>
        <div class="sub">kcal</div>
      </div>
      <div class="result-item">
        <div class="label">${t('tdee')}</div>
        <div class="value">${r.tdee}</div>
        <div class="sub">kcal</div>
      </div>
      <div class="result-item highlight">
        <div class="label">${t('targetCalories')}</div>
        <div class="value">${r.hasTraining ? r.target.training : r.target.rest}</div>
        <div class="sub">${r.hasTraining ? t('trainingDay') : t('restDay')} · kcal</div>
      </div>
      <div class="result-item">
        <div class="label">${t('cardioDaily')}</div>
        <div class="value">${r.cardioDaily}</div>
        <div class="sub">${r.cardioDaily > 0 ? t('cardioNote') : ''}</div>
      </div>
    `;

    const wg = document.getElementById('weight-guide');
    if (wg) {
      wg.innerHTML = r.planType === 'cut'
        ? `${t('stopLoss')}: ${t('stopLossMale')} / ${t('stopLossFemale')} &nbsp;|&nbsp; ${t('adjustNote')}`
        : `BMI: ${r.bmi} (${t(bmiLabel)})`;
    }
  },

  // ─── Render macros ───
  renderMacros(r) {
    const el = document.getElementById('results-macros');
    if (!el) return;

    const tm = r.trainingMacros;
    const rm = r.restMacros;

    let html = '<div class="macro-row">';

    if (r.hasTraining) {
      html += `
        <div class="macro-card" style="border-left:3px solid #27ae60">
          <h4>${t('trainingDay')}</h4>
          <div>${t('carbs')}: <span class="grams">${tm.carbs}g</span> <span class="detail">(${r.trainingQuotas.carbs}${t('perKg')})</span></div>
          <div>${t('protein')}: <span class="grams">${tm.protein}g</span> <span class="detail">(${r.trainingQuotas.protein}${t('perKg')})</span></div>
          <div>${t('fat')}: <span class="grams">${tm.fat}g</span></div>
          <div class="detail">${tm.calories} kcal</div>
        </div>`;
    }

    html += `
        <div class="macro-card" style="border-left:3px solid #2980b9">
          <h4>${r.hasTraining ? t('restDay') : t('macroTotal')}</h4>
          <div>${t('carbs')}: <span class="grams">${rm.carbs}g</span> <span class="detail">(${r.restQuotas.carbs}${t('perKg')})</span></div>
          <div>${t('protein')}: <span class="grams">${rm.protein}g</span> <span class="detail">(${r.restQuotas.protein}${t('perKg')})</span></div>
          <div>${t('fat')}: <span class="grams">${rm.fat}g</span></div>
          <div class="detail">${rm.calories} kcal</div>
        </div>
      </div>`;

    html += `
      <div class="callout tip" style="margin-top:10px">
        <strong>${t('noteSimplified')}</strong><br>${t('noteFatGuide')}
      </div>`;
    el.innerHTML = html;
  },

  // ─── Render meal plans ───
  renderMeals(r) {
    const trainingEl = document.getElementById('meals-training');
    const restEl = document.getElementById('meals-rest');
    const trainingCard = trainingEl?.closest('.card');
    const restCard = restEl?.closest('.card');

    const tagClass = (tag) => tag === 'pre' ? 'pre' : tag === 'post' ? 'post' : 'other';
    const tagLabel = (tag) => tag === 'pre' ? t('mealTagPre') : tag === 'post' ? t('mealTagPost') : '';

    function mealHTML(meals, macros) {
      let totalCarbs = 0, totalProtein = 0;
      let html = '<ul class="meal-list">';
      for (const m of meals) {
        const carbs = Math.round(macros.carbs * m.carbPct);
        const protein = Math.round(macros.protein * m.proteinPct);
        totalCarbs += carbs;
        totalProtein += protein;
        const tag = tagLabel(m.tag);
        html += `
          <li class="meal-item ${m.tag === 'pre' ? 'pre-workout' : m.tag === 'post' ? 'post-workout' : 'other'}">
            <h4>
              ${t(m.key)}
              ${tag ? `<span class="meal-tag ${tagClass(m.tag)}">${tag}</span>` : ''}
            </h4>
            <div class="meal-macros">
              ${t('carbs')}: <strong>${carbs}g</strong> &nbsp; ${t('protein')}: <strong>${protein}g</strong>
            </div>
            ${m.noteKey ? `<div class="meal-note">${t(m.noteKey)}</div>` : ''}
          </li>`;
      }
      html += `
        <li class="meal-item" style="border-left-color:#555;background:#f5f5f5">
          <h4>${t('totalRow')}</h4>
          <div class="meal-macros">
            ${t('carbs')}: <strong>${totalCarbs}g</strong> &nbsp; ${t('protein')}: <strong>${totalProtein}g</strong>
            &nbsp; ${t('fat')}: <strong>${macros.fat}g</strong>
          </div>
        </li>`;
      html += '</ul>';
      return html;
    }

    if (r.hasTraining) {
      if (trainingCard) trainingCard.style.display = '';
      if (restCard) restCard.style.display = '';
      trainingEl.innerHTML = `
        <p class="callout info" style="font-size:.75rem;margin-bottom:10px">${r.mealOrder}</p>
        ${mealHTML(r.mealPlan.training, r.trainingMacros)}
        <div class="callout tip" style="margin-top:8px">
          <strong>${t('noteCarb')}</strong> · ${t('noteVeg')}<br>
          <span style="font-size:.72rem">${t('noteFruit')}</span>
        </div>`;
      restEl.innerHTML = `
        <p class="callout info" style="font-size:.75rem;margin-bottom:10px">${r.restNote}</p>
        ${mealHTML(r.restDayTemplate, r.restMacros)}`;
    } else {
      // No-training plan: only one meal plan
      if (trainingCard) trainingCard.style.display = 'none';
      if (restCard) {
        restCard.querySelector('h2').innerHTML = t('restDayMeals');
        restCard.classList.remove('rest-day');
      }
      restEl.innerHTML = `
        <p class="callout info" style="font-size:.75rem;margin-bottom:10px">${r.mealOrder}</p>
        ${mealHTML(r.mealPlan.training, r.restMacros)}
        <div class="callout tip" style="margin-top:8px">
          <strong>${t('noteCarb')}</strong> · ${t('noteVeg')}<br>
          <span style="font-size:.72rem">${t('noteFruit')}</span>
        </div>`;
    }
  },

  // ─── Plan selector ───
  renderPlanSelector() {
    const el = document.getElementById('plan-selector-area');
    if (!el) return;
    const plans = Engine.getPlanList();
    const lang = document.documentElement.lang === 'en' ? 'en' : 'zh';
    let optgroups = { cut: [], bulk: [] };
    for (const p of plans) {
      optgroups[p.planType].push(p);
    }
    let html = '<div class="form-group" style="flex:2;min-width:220px"><label>' + t('planLabel') + '</label>';
    html += '<select id="planId">';
    html += `<optgroup label="${t('fatLoss')}">`;
    for (const p of optgroups.cut) {
      html += `<option value="${p.id}">${lang === 'en' ? p.en : p.zh}</option>`;
    }
    html += '</optgroup>';
    html += `<optgroup label="${t('muscleGain')}">`;
    for (const p of optgroups.bulk) {
      html += `<option value="${p.id}">${lang === 'en' ? p.en : p.zh}</option>`;
    }
    html += '</optgroup></select>';
    html += '<div class="hint" id="plan-desc" style="margin-top:4px"></div></div>';
    el.innerHTML = html;

    document.getElementById('planId')?.addEventListener('change', () => {
      const planId = document.getElementById('planId')?.value;
      const def = Engine.getPlan(planId);
      const descEl = document.getElementById('plan-desc');
      if (descEl && def) descEl.textContent = lang === 'en' ? def.enDesc : def.zhDesc;
    });
    // Trigger initial description
    document.getElementById('planId')?.dispatchEvent(new Event('change'));
  },

  // ─── Tabs ───
  bindTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
        const panel = document.getElementById('panel-' + target);
        if (panel) panel.style.display = 'block';
      });
    });
    const defaultTab = document.querySelector('.tab-btn.active') || document.querySelector('.tab-btn');
    if (defaultTab) defaultTab.click();
  },

  bindCollapsibles() {
    document.querySelectorAll('.collapse-toggle').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('collapsed');
        const content = el.nextElementSibling;
        if (content) content.classList.toggle('hidden');
      });
    });
  },

  // ─── Food tables ───
  renderFoodTables() {
    const el = document.getElementById('panel-foods');
    if (!el) return;
    let html = `<h2 style="margin-bottom:12px">${t('foodTitle')}</h2>`;
    html += `<div class="food-search"><input type="text" id="food-search" placeholder="${t('foodSearch')}"></div>`;
    html += '<div class="food-tabs">';
    FOOD_CATEGORIES.forEach((cat, i) => {
      const active = i === 0 ? ' active' : '';
      const name = document.documentElement.lang === 'en' ? cat.en : cat.zh;
      html += `<button class="food-tab${active}" data-cat="${cat.id}">${name}</button>`;
    });
    html += '</div>';
    html += '<div class="food-table-wrap"><table class="food-table" id="food-table"></table></div>';
    el.innerHTML = html;

    document.getElementById('food-search')?.addEventListener('input', () => this.filterFoods());
    document.querySelectorAll('.food-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.food-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterFoods();
      });
    });
    this.filterFoods();
  },

  filterFoods() {
    const activeCat = document.querySelector('.food-tab.active')?.dataset.cat || 'rice';
    const searchTerm = document.getElementById('food-search')?.value.toLowerCase() || '';
    const tbl = document.getElementById('food-table');
    if (!tbl) return;

    let html = `<thead><tr>
      <th>${t('foodName')}</th><th>${activeCat === 'protein' ? t('foodProteinRate') : t('foodCarbRate')}</th>
      ${activeCat !== 'protein' && activeCat !== 'fat' ? '<th>GI</th>' : ''}
      <th>${t('foodNote')}</th></tr></thead><tbody>`;

    if (activeCat === 'fat') {
      const items = FOODS.fat || [];
      for (const f of items) {
        if (searchTerm && !foodName(f).toLowerCase().includes(searchTerm) && !foodNote(f).toLowerCase().includes(searchTerm)) continue;
        html += `<tr class="cat-row"><td colspan="3"><strong>${foodName(f)}</strong></td></tr>`;
        html += `<tr><td colspan="3" style="font-size:.75rem;color:#555;white-space:pre-line">${foodNote(f)}</td></tr>`;
      }
    } else if (activeCat === 'protein') {
      const items = FOODS.protein || [];
      for (const f of items) {
        if (searchTerm && !foodName(f).toLowerCase().includes(searchTerm) && !foodNote(f).toLowerCase().includes(searchTerm)) continue;
        const rateDisplay = typeof f.rate === 'number' && f.rate < 1 ? `${(f.rate*100).toFixed(0)}%` : f.rate + 'g';
        html += `<tr>
          <td><strong>${foodName(f)}</strong></td><td>${rateDisplay}</td>
          <td style="font-size:.72rem;color:#888">${foodNote(f)}</td></tr>`;
      }
    } else {
      const items = FOODS[activeCat] || [];
      for (const f of items) {
        if (searchTerm && !foodName(f).toLowerCase().includes(searchTerm) && !foodNote(f).toLowerCase().includes(searchTerm)) continue;
        const giClass = f.gi === 'high' ? 'gi-hi' : f.gi === 'mid' ? 'gi-mid' : 'gi-lo';
        const giLabel = f.gi === 'high' ? t('giHigh') : f.gi === 'mid' ? t('giMid') : t('giLow');
        html += `<tr>
          <td><strong>${foodName(f)}</strong></td><td>${(f.rate*100).toFixed(0)}%</td>
          <td class="${giClass}">${giLabel}</td>
          <td style="font-size:.72rem;color:#888">${foodNote(f)}</td></tr>`;
      }
    }
    html += '</tbody>';
    tbl.innerHTML = html;
  },

  // ─── FAQ ───
  renderFAQ() {
    const el = document.getElementById('panel-faq');
    if (!el) return;
    let html = `<h2 style="margin-bottom:12px">${t('faqTitle')}</h2>`;
    for (const [type, items] of Object.entries(FAQ_DATA)) {
      const title = type === 'cut' ? t('faqFatLoss') : t('faqMuscleGain');
      html += `<h3 style="margin:16px 0 8px;color:#2c7a4a">${title}</h3>`;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const q = document.documentElement.lang === 'en' ? item.qEn : item.qZh;
        const a = document.documentElement.lang === 'en' ? item.aEn : item.aZh;
        html += `<div class="faq-item"><div class="faq-q" data-faq="${type}-${i}">${q}</div>
          <div class="faq-a" id="faq-a-${type}-${i}">${a}</div></div>`;
      }
    }
    el.innerHTML = html;
    el.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const id = q.dataset.faq;
        const a = document.getElementById('faq-a-' + id);
        q.classList.toggle('open');
        if (a) a.classList.toggle('open');
      });
    });
  },

  renderGuide() {
    const el = document.getElementById('panel-guide');
    if (!el) return;
    el.innerHTML = `<h2 style="margin-bottom:12px">${t('guideTitle')}</h2>
      <div class="card" style="white-space:pre-line;font-size:.88rem;line-height:1.8">${t('guideContent')}</div>`;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
