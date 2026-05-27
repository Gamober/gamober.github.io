// Calculation Engine — all formulas from 好人松松 Excel suite

const PLAN_DEFS = {
  'cut-morning-early': {
    id: 'cut-morning-early', planType: 'cut',
    zh: '减脂·早饭后练（早起版）', en: 'Cut · Morning Post-Breakfast (Early)',
    zhDesc: '早饭作为练前餐，练后吃全天最大一顿练后餐',
    enDesc: 'Breakfast = pre-workout, then big post-workout meal',
    hasTraining: true,
    mealOrderZh: '早饭=练前 → 练后餐 → 午饭=其他 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast (pre) → Post-workout → Lunch → Dinner → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.15, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealPostWorkout', carbPct:0.35, proteinPct:0.30, tag:'post', noteKey:'mealNotePost' },
      { key:'mealLunch',       carbPct:0.20, proteinPct:0.26, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',      carbPct:0.20, proteinPct:0.22, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-morning-late': {
    id: 'cut-morning-late', planType: 'cut',
    zh: '减脂·早饭后练（晚起版）', en: 'Cut · Morning Post-Breakfast (Late)',
    zhDesc: '早饭=练前，练后吃午饭作为练后餐',
    enDesc: 'Breakfast = pre-workout, lunch = post-workout',
    hasTraining: true,
    mealOrderZh: '早饭=练前 → 午饭=练后 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast (pre) → Lunch (post) → Dinner → Snack',
    training: [
      { key:'mealBreakfast', carbPct:0.15, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealLunch',     carbPct:0.35, proteinPct:0.30, tag:'post', noteKey:'mealNotePost' },
      { key:'mealDinner',    carbPct:0.40, proteinPct:0.48, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',     carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-noon-before': {
    id: 'cut-noon-before', planType: 'cut',
    zh: '减脂·午饭前练', en: 'Cut · Pre-Lunch Training',
    zhDesc: '练前垫点碳水，午饭作为练后餐',
    enDesc: 'Light pre-workout carbs, lunch = post-workout',
    hasTraining: true,
    mealOrderZh: '早饭 → 练前餐 → 午饭=练后 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast → Pre-workout → Lunch (post) → Dinner → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealPreWorkout',  carbPct:0.12, proteinPct:0.05, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealLunch',       carbPct:0.35, proteinPct:0.35, tag:'post', noteKey:'mealNotePost' },
      { key:'mealDinner',      carbPct:0.25, proteinPct:0.36, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-noon-after': {
    id: 'cut-noon-after', planType: 'cut',
    zh: '减脂·午饭后练', en: 'Cut · Post-Lunch Training',
    zhDesc: '午饭作为练前餐垫肚子，练后吃练后餐',
    enDesc: 'Lunch = pre-workout, then dedicated post-workout meal',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=练前 → 练后餐 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast → Lunch (pre) → Post-workout → Dinner → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.17, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealPostWorkout', carbPct:0.30, proteinPct:0.30, tag:'post', noteKey:'mealNotePost' },
      { key:'mealDinner',      carbPct:0.25, proteinPct:0.28, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-evening-before': {
    id: 'cut-evening-before', planType: 'cut',
    zh: '减脂·晚饭前练', en: 'Cut · Pre-Dinner Training',
    zhDesc: '晚饭前练，练前垫点碳水，晚饭作为练后餐',
    enDesc: 'Light pre-workout snack before dinner, dinner = post-workout',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=其他 → 练前餐 → 晚饭=练后 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Pre-workout → Dinner (post) → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.25, proteinPct:0.30, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealPreWorkout',  carbPct:0.12, proteinPct:0.05, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealDinner',      carbPct:0.35, proteinPct:0.41, tag:'post', noteKey:'mealNotePost' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-evening-after': {
    id: 'cut-evening-after', planType: 'cut',
    zh: '减脂·晚饭后练', en: 'Cut · Post-Dinner Training',
    zhDesc: '晚饭作为练前餐垫肚子，练后吃练后餐',
    enDesc: 'Dinner = pre-workout, then post-workout meal',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=其他 → 晚饭=练前 → 练后餐 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Dinner (pre) → Post-workout → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.25, proteinPct:0.30, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',      carbPct:0.17, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealPostWorkout', carbPct:0.30, proteinPct:0.28, tag:'post', noteKey:'mealNotePost' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-night': {
    id: 'cut-night', planType: 'cut',
    zh: '减脂·夜里练', en: 'Cut · Night Training',
    zhDesc: '白天节约配额，夜里练完吃练后餐',
    enDesc: 'Save macros during day, big post-workout meal at night',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=其他 → 晚饭=其他 → 练后餐 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Dinner → Post-workout → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.15, proteinPct:0.18, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.22, proteinPct:0.28, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',      carbPct:0.22, proteinPct:0.25, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealPostWorkout', carbPct:0.31, proteinPct:0.25, tag:'post', noteKey:'mealNotePost' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'cut-no-training': {
    id: 'cut-no-training', planType: 'cut',
    zh: '减脂·无力训者', en: 'Cut · No Training',
    zhDesc: '无力训也能减脂，只需热量缺口无需力训',
    enDesc: 'No training needed for fat loss — just a calorie deficit',
    hasTraining: false,
    mealOrderZh: '早饭 → 午饭 → 晚饭 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Dinner → Snack',
    training: [ // used as the only meal plan
      { key:'mealBreakfast', carbPct:0.20, proteinPct:0.24, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',     carbPct:0.35, proteinPct:0.38, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',    carbPct:0.35, proteinPct:0.34, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',     carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  // ─── Bulk variants ───
  'bulk-morning-early': {
    id: 'bulk-morning-early', planType: 'bulk',
    zh: '增肌·早饭后练（早起版）', en: 'Bulk · Morning Post-Breakfast (Early)',
    zhDesc: '早饭作为练前餐，练后吃全天最大一顿练后餐',
    enDesc: 'Breakfast = pre-workout, then big post-workout meal',
    hasTraining: true,
    mealOrderZh: '早饭=练前 → 练后餐 → 午饭=其他 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast (pre) → Post-workout → Lunch → Dinner → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.15, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealPostWorkout', carbPct:0.35, proteinPct:0.30, tag:'post', noteKey:'mealNotePost' },
      { key:'mealLunch',       carbPct:0.20, proteinPct:0.26, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',      carbPct:0.20, proteinPct:0.22, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'bulk-morning-late': {
    id: 'bulk-morning-late', planType: 'bulk',
    zh: '增肌·早饭后练（晚起版）', en: 'Bulk · Morning Post-Breakfast (Late)',
    zhDesc: '早饭=练前，练后吃午饭作为练后餐',
    enDesc: 'Breakfast = pre, lunch = post-workout',
    hasTraining: true,
    mealOrderZh: '早饭=练前 → 午饭=练后 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast (pre) → Lunch (post) → Dinner → Snack',
    training: [
      { key:'mealBreakfast', carbPct:0.15, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealLunch',     carbPct:0.35, proteinPct:0.30, tag:'post', noteKey:'mealNotePost' },
      { key:'mealDinner',    carbPct:0.40, proteinPct:0.48, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',     carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'bulk-noon-before': {
    id: 'bulk-noon-before', planType: 'bulk',
    zh: '增肌·午饭前练', en: 'Bulk · Pre-Lunch Training',
    zhDesc: '练前垫点碳水，午饭作为练后餐',
    enDesc: 'Light pre-workout carbs, lunch = post-workout',
    hasTraining: true,
    mealOrderZh: '早饭 → 练前餐 → 午饭=练后 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast → Pre-workout → Lunch (post) → Dinner → Snack',
    training: [
      { key:'mealBreakfast',  carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealPreWorkout', carbPct:0.12, proteinPct:0.05, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealLunch',      carbPct:0.35, proteinPct:0.35, tag:'post', noteKey:'mealNotePost' },
      { key:'mealDinner',     carbPct:0.25, proteinPct:0.36, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',      carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'bulk-noon-after': {
    id: 'bulk-noon-after', planType: 'bulk',
    zh: '增肌·午饭后练', en: 'Bulk · Post-Lunch Training',
    zhDesc: '午饭作为练前餐垫肚子，练后吃练后餐',
    enDesc: 'Lunch = pre-workout, then dedicated post-workout meal',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=练前 → 练后餐 → 晚饭=其他 → 零食',
    mealOrderEn: 'Breakfast → Lunch (pre) → Post-workout → Dinner → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.17, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealPostWorkout', carbPct:0.30, proteinPct:0.30, tag:'post', noteKey:'mealNotePost' },
      { key:'mealDinner',      carbPct:0.25, proteinPct:0.28, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'bulk-evening-before': {
    id: 'bulk-evening-before', planType: 'bulk',
    zh: '增肌·晚饭前练', en: 'Bulk · Pre-Dinner Training',
    zhDesc: '晚饭前练，练前垫点碳水，晚饭作为练后餐',
    enDesc: 'Light pre-workout snack, dinner = post-workout',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=其他 → 练前餐 → 晚饭=练后 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Pre-workout → Dinner (post) → Snack',
    training: [
      { key:'mealBreakfast',  carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',      carbPct:0.25, proteinPct:0.30, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealPreWorkout', carbPct:0.12, proteinPct:0.05, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealDinner',     carbPct:0.35, proteinPct:0.41, tag:'post', noteKey:'mealNotePost' },
      { key:'mealSnack',      carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'bulk-evening-after': {
    id: 'bulk-evening-after', planType: 'bulk',
    zh: '增肌·晚饭后练', en: 'Bulk · Post-Dinner Training',
    zhDesc: '晚饭作为练前餐垫肚子，练后吃练后餐',
    enDesc: 'Dinner = pre-workout, then post-workout meal',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=其他 → 晚饭=练前 → 练后餐 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Dinner (pre) → Post-workout → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.18, proteinPct:0.20, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.25, proteinPct:0.30, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',      carbPct:0.17, proteinPct:0.18, tag:'pre',  noteKey:'mealNotePre' },
      { key:'mealPostWorkout', carbPct:0.30, proteinPct:0.28, tag:'post', noteKey:'mealNotePost' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
  'bulk-night': {
    id: 'bulk-night', planType: 'bulk',
    zh: '增肌·夜里练', en: 'Bulk · Night Training',
    zhDesc: '白天节约配额，夜里练完吃练后餐',
    enDesc: 'Save macros during day, big post-workout meal at night',
    hasTraining: true,
    mealOrderZh: '早饭 → 午饭=其他 → 晚饭=其他 → 练后餐 → 零食',
    mealOrderEn: 'Breakfast → Lunch → Dinner → Post-workout → Snack',
    training: [
      { key:'mealBreakfast',   carbPct:0.15, proteinPct:0.18, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealLunch',       carbPct:0.22, proteinPct:0.28, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealDinner',      carbPct:0.22, proteinPct:0.25, tag:'other',noteKey:'mealNoteOther' },
      { key:'mealPostWorkout', carbPct:0.31, proteinPct:0.25, tag:'post', noteKey:'mealNotePost' },
      { key:'mealSnack',       carbPct:0.10, proteinPct:0.04, tag:'other',noteKey:'mealNoteSnack' },
    ],
  },
};

// Shared rest day template (for plans that have training)
const REST_DAY_TEMPLATE = [
  { key:'mealBreakfast', carbPct:0.22, proteinPct:0.28, tag:'other', noteKey:'mealNoteOther' },
  { key:'mealLunch',     carbPct:0.36, proteinPct:0.36, tag:'other', noteKey:'mealNoteOther' },
  { key:'mealDinner',    carbPct:0.32, proteinPct:0.32, tag:'other', noteKey:'mealNoteOther' },
  { key:'mealSnack',     carbPct:0.10, proteinPct:0.04, tag:'other', noteKey:'mealNoteSnack' },
];

// Rest day note shared across plans
const REST_NOTE_ZH = '休息日碳水总量低一些，蛋白质和脂肪不变。早饭建议和训练日一样，简化操作。';
const REST_NOTE_EN = 'Rest day has slightly lower carbs. Protein and fat unchanged. Keep breakfast same as training day for simplicity.';

const Engine = {
  // Mifflin-St Jeor BMR
  bmr(gender, weight, height, age) {
    const base = 9.99 * weight + 6.25 * height - 4.92 * age;
    return Math.round(gender === 'male' ? base + 5 : base - 161);
  },

  tdee(bmr) {
    return Math.round(bmr / 0.7);
  },

  trainingCals(gender, level) {
    const table = {
      male:   { novice: 150, intermediate: 200, advanced: 250 },
      female: { novice: 100, intermediate: 150, advanced: 200 },
    };
    return table[gender]?.[level] || 150;
  },

  cardioPerHour(weight, type) {
    const rate = type === 'intense' ? 9 : 6;
    return Math.round(weight * rate);
  },

  cardioDaily(weight, hoursPerWeek, type) {
    const weekly = this.cardioPerHour(weight, type) * hoursPerWeek;
    return Math.round(weekly / 7);
  },

  balance(tdee, trainingCals, cardioCals) {
    return {
      training: tdee + trainingCals + cardioCals,
      rest: tdee + cardioCals,
    };
  },

  targetCut(balance) {
    return {
      training: Math.round(balance.training * 0.64),
      rest: Math.round(balance.rest * 0.64),
    };
  },

  targetBulk(balance) {
    return {
      training: Math.round(balance.training * 0.84),
      rest: Math.round(balance.rest * 0.84),
    };
  },

  fatGrams(gender, planType, weight) {
    if (planType === 'cut') {
      const base = gender === 'male' ? 60 : 50;
      return weight > 120 ? base + 10 : base;
    }
    return gender === 'male' ? 80 : 70;
  },

  macros(targetCals, fatGrams) {
    const fatCals = fatGrams * 9;
    const remaining = targetCals - fatCals;
    const carbCals = remaining * 0.64;
    const proteinCals = remaining * 0.36;
    return {
      carbs: Math.round(carbCals / 4),
      protein: Math.round(proteinCals / 4),
      fat: fatGrams,
      calories: targetCals,
    };
  },

  quotas(macros, weight) {
    return {
      carbs: (macros.carbs / weight).toFixed(1),
      protein: (macros.protein / weight).toFixed(1),
      fat: (macros.fat / weight).toFixed(1),
    };
  },

  bmi(weight, heightCm) {
    const h = heightCm / 100;
    return (weight / (h * h)).toFixed(1);
  },

  bmiCategory(bmi) {
    const v = parseFloat(bmi);
    if (v < 18.5) return 'underweight';
    if (v < 24) return 'normal';
    if (v < 28) return 'overweight';
    return 'obese';
  },

  // Get plan definition
  getPlan(id) {
    return PLAN_DEFS[id] || PLAN_DEFS['cut-morning-early'];
  },

  // List all plans for the dropdown
  getPlanList() {
    const list = [];
    for (const [id, def] of Object.entries(PLAN_DEFS)) {
      list.push({ id, zh: def.zh, en: def.en, planType: def.planType, zhDesc: def.zhDesc, enDesc: def.enDesc });
    }
    return list;
  },

  // Full calculation
  calculate(params) {
    const { gender, weight, height, age, trainingLevel, planId,
            cardioHours, cardioType } = params;

    const planDef = this.getPlan(planId);
    const planType = planDef.planType;
    const hasTraining = planDef.hasTraining;

    const b = this.bmr(gender, weight, height, age);
    const t = this.tdee(b);
    const tc = hasTraining ? this.trainingCals(gender, trainingLevel) : 0;
    const cc = this.cardioDaily(weight, cardioHours || 0, cardioType || 'moderate');
    const bal = this.balance(t, tc, cc);

    let targetCals;
    if (planType === 'cut') {
      targetCals = this.targetCut(bal);
    } else {
      targetCals = this.targetBulk(bal);
    }

    const fg = this.fatGrams(gender, planType, weight);
    const trainingMacros = this.macros(targetCals.training, fg);
    const restMacros = this.macros(targetCals.rest, fg);

    const bmiVal = this.bmi(weight, height);

    const lang = (typeof document !== 'undefined' && document.documentElement.lang === 'en') ? 'en' : 'zh';

    return {
      bmi: bmiVal,
      bmiCategory: this.bmiCategory(bmiVal),
      bmr: b,
      tdee: t,
      trainingCals: tc,
      cardioDaily: cc,
      balance: bal,
      target: targetCals,
      planType,
      planId,
      hasTraining,
      trainingMacros,
      restMacros,
      trainingQuotas: this.quotas(trainingMacros, weight),
      restQuotas: this.quotas(restMacros, weight),
      mealPlan: planDef,
      restDayTemplate: REST_DAY_TEMPLATE,
      restNote: lang === 'en' ? REST_NOTE_EN : REST_NOTE_ZH,
      trainingNote: lang === 'en' ? planDef.enDesc : planDef.zhDesc,
      mealOrder: lang === 'en' ? planDef.mealOrderEn : planDef.mealOrderZh,
      fatGrams: fg,
    };
  }
};
