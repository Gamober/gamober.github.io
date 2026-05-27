// FAQ data — from Sheets 17 (减脂) and 18 (增肌)

const FAQ_DATA = {
  cut: [
    {
      qZh: '执行了但体重1-2周稳定不掉该怎么调整？',
      qEn: 'No weight loss after 1-2 weeks — how to adjust?',
      aZh: `首先排查以下执行问题：
①是否吃了非瘦肉（排骨、肥牛、鸡翅、肉馅等）
②是否吃了糖油混合物（饼干、蛋糕、油条、花式面包等）
③是否大量吃水果没有从主食里扣减碳水
④是否吃了红薯/土豆/玉米等但没有计入主食碳水
⑤是否早饭没吃蛋黄/牛奶又没补坚果导致脂肪缺乏

确认以上都没问题后，每天再减少100-200大卡热量摄入（约100g米饭+1个全蛋的量），再执行两周看体重变化。`,
      aEn: `First check these common execution errors:
① Eating non-lean meat (ribs, fatty beef, chicken wings, ground meat)
② Eating junk carbs (cookies, cake, fried dough, fancy bread)
③ Eating lots of fruit without reducing staple carbs
④ Eating sweet potato/potato/corn without counting them as carbs
⑤ Skipping egg yolks/milk at breakfast without adding nuts

If none of the above, cut another 100-200 kcal/day (~100g cooked rice + 1 egg), try for 2 more weeks.`
    },
    {
      qZh: '为什么要定量饮食？',
      qEn: 'Why track food intake?',
      aZh: `因为新手对日常食物的碳蛋脂量没有概念，按感觉吃饭大概率导致碳蛋脂总量严重错误。如果按感觉吃饭能八九不离十，那大家也不会有减脂减不下去的问题了。

初期通过定量饮食建立饮食基线后，就不用再天天称重了。搞清楚自己一碗饭多重、一份菜有多少肉，真的不麻烦。`,
      aEn: `Beginners have no concept of macro amounts in everyday foods. Eating by feel almost always leads to major macro errors. If eating by feel worked, no one would struggle with weight loss.

After an initial period of tracking, you build a baseline and no longer need to weigh everything daily. Learning how much your typical bowl of rice or portion of meat weighs is genuinely not that hard.`
    },
    {
      qZh: '难道要一直称重吃饭？食物是生重还是熟重？',
      qEn: 'Must I weigh food forever? Raw or cooked weight?',
      aZh: `不用一直称重。初期把常吃食物测一下就行。

碳水主食的重量大体固定，外食米饭一盒碳水约100-120g。但面条/米线/卷饼饱腹感很低，容易低估。

食物营养率表给出的碳水率/蛋白质率是生重数据。如果是熟食，米饭碳水率约0.25-0.35，熟肉蛋白质率约0.25-0.30，蛋白粉约0.75。`,
      aEn: `No need to weigh forever. Just measure your common foods initially.

Staple carb portions are fairly consistent — a takeout rice box is ~100-120g carbs. But noodles/rice noodles/wraps are easy to underestimate (low satiety).

The nutrition rates in the food table are for raw weight. For cooked food: rice carb rate ~0.25-0.35, cooked meat protein rate ~0.25-0.30, protein powder ~0.75.`
    },
    {
      qZh: '外卖米饭/常见食物的固定碳水量？',
      qEn: 'Fixed carb amounts in common takeout foods?',
      aZh: `【外卖米饭（长方形盒）】碳水100g/盒（约330g熟饭）
【外卖米饭（圆形扁盒）】碳水75g/盒（约250g熟饭）
【馒头】碳水约50g/个（约100g馒头）
【切片面包】碳水约25g/片（约50g面包）
【香蕉】碳水约20-30g/根
【苹果/橙子】碳水约20-30g/个`,
      aEn: `【Takeout rice (rectangular box)】~100g carbs/box (~330g cooked rice)
【Takeout rice (round flat box)】~75g carbs/box (~250g cooked rice)
【Steamed bun】~50g carbs each (~100g bun)
【Sliced bread】~25g carbs/slice (~50g bread)
【Banana】~20-30g carbs each
【Apple/Orange】~20-30g carbs each`
    },
    {
      qZh: '吃外卖该怎么办？',
      qEn: 'How to handle takeout meals?',
      aZh: `【正确的外卖】单独的主食+较多的瘦肉，才方便定量。
外卖米饭：长方形盒碳水100g/盒，圆形盒碳水75g/盒。
瘦肉量自己称一下看够不够，如果不够，考虑加一份瘦肉菜。

【错误的外卖】面和料混在一起的（牛肉面、酸辣粉等），因为碳水是主食、肉和油很难分离定量。`,
      aEn: `【Good takeout】Separate carbs + plenty of lean meat = easy to track.
Takeout rice: rectangular box ~100g carbs, round box ~75g carbs.
Weigh the meat to check if enough; order extra lean meat dish if needed.

【Bad takeout】Noodles mixed with toppings (beef noodle soup, hot-sour noodles) — carbs, meat, and oil are all mixed together, impossible to track.`
    },
    {
      qZh: '食堂外卖的瘦肉量不够怎么办？',
      qEn: 'Not enough lean meat in cafeteria/takeout?',
      aZh: `吃食堂外卖，碳水和脂肪都不会缺的，容易缺的是瘦肉。补充蛋白质的方法：
①自己卤或在熟食店买鸡腿/酱牛肉等瘦肉，放冰箱每天取用
②用蛋白粉补充，1勺约25g蛋白质
③早饭多加鸡蛋（水煮蛋/茶叶蛋/鸡蛋羹，不要油煎蛋）
④正餐多点一份瘦肉菜`,
      aEn: `Cafeteria/takeout is usually fine for carbs and fat but often short on lean protein. Solutions:
① Cook or buy braised chicken legs / soy-marinated beef, keep in fridge
② Use protein powder — 1 scoop ≈ 25g protein
③ Add more eggs at breakfast (boiled/tea eggs/steamed, not fried)
④ Order an extra lean meat dish with meals`
    },
    {
      qZh: '为什么要先吃蔬菜后吃碳水？',
      qEn: 'Why eat vegetables before carbs?',
      aZh: `先吃、多吃蔬菜，后吃碳水，能压制胰岛素分泌，帮助减脂。

但力训的练后餐则相反：应先吃碳水和蛋白质，少吃、后吃蔬菜。因为练后需要胰岛素来促进肌肉合成，要避免胰岛素被蔬菜压制。`,
      aEn: `Eating vegetables first/before carbs suppresses insulin, which helps fat loss.

HOWEVER, post-workout meals are the opposite: eat carbs and protein first, limit/eat veggies last. Post-workout you WANT the insulin spike to drive muscle synthesis — don't suppress it with vegetables.`
    },
    {
      qZh: '减脂期很饿扛不住怎么办？',
      qEn: 'Too hungry during cut — what to do?',
      aZh: `①增加蔬菜摄入（不限量，先吃蔬菜填肚子）
②选择高饱腹感碳水（燕麦、红薯、糙米等）
③增加有氧运动来换取更多饮食热量
④检查蛋白质是否吃够（蛋白质抗饿）
⑤体重<70kg的人建议每周做2小时有氧来增加饮食量`,
      aEn: `① Eat more vegetables (unlimited, eat first to fill up)
② Choose high-satiety carbs (oats, sweet potato, brown rice)
③ Add cardio to earn more food calories
④ Check if protein intake is adequate (protein reduces hunger)
⑤ If <70kg, recommended to do 2hrs/week cardio to increase food allowance`
    },
    {
      qZh: '减到什么时候应该停止？',
      qEn: 'When should I stop cutting?',
      aZh: `肌肉量一般的普通人，切勿追求低体脂（腹肌、马甲线、肚子无赘肉）。

建议男性BMI 22-23、女性BMI 20-21就转增肌。

如果有向心肥胖趋势（空腹腰围：男>85cm 女>80cm）、脂肪肝、二型糖尿病，可以多减一些直至症状消除。`,
      aEn: `If you have average muscle mass, do NOT chase low body fat (abs, toned stomach, zero belly fat).

Recommended: transition to bulk at male BMI 22-23, female BMI 20-21.

Exceptions: if you have central obesity (waist: male >85cm, female >80cm), fatty liver, or type 2 diabetes, you can cut further until symptoms resolve.`
    },
    {
      qZh: '体重下降10kg后需要调整吗？',
      qEn: 'Need to adjust after losing 10kg?',
      aZh: `体重下降10kg，基础代谢会下降约150大卡。减重10kg以内不用调整配额。

减重达到10kg还要继续减的话，要么每天再少吃150大卡（约100g米饭+1个全蛋），要么每周多做约1000大卡有氧（但不额外加饮食）。`,
      aEn: `After 10kg weight loss, BMR drops ~150 kcal. No adjustment needed if you've lost less than 10kg.

If you reach 10kg loss and want to continue: either eat 150 kcal less per day (~100g cooked rice + 1 whole egg), or add ~1000 kcal/week cardio (without adding extra food).`
    },
  ],
  bulk: [
    {
      qZh: '执行了一个月但体重不长该怎么调整？',
      qEn: 'No weight gain after 1 month — how to adjust?',
      aZh: `首先确认力训频率是否够（练3-5次/周）。如果力训没问题，排查：
①是否吃了非瘦肉（排骨、肥牛等）
②碳水和蛋白质总量是否真的吃够了

确认执行没问题后，每天增加100-200大卡热量盈余（多吃25-50g碳水 = 约80-160g熟米饭）。`,
      aEn: `First confirm training frequency is adequate (3-5x/week). If training is fine, check:
① Are you eating enough? Check for non-lean meat errors
② Are carb and protein totals truly hitting targets?

If execution is fine, add 100-200 kcal/day surplus (eat 25-50g more carbs ≈ 80-160g more cooked rice).`
    },
    {
      qZh: '增肌期需要在体重增加后调整饮食配额吗？',
      qEn: 'Need to adjust macros as weight increases during bulk?',
      aZh: `一般不需要。体重增加10kg，基础代谢才增加约100多大卡，这时候都未必抹平了热量盈余。而一轮增肌一般增重也就几公斤，对基础代谢的影响很小。

但如果体重一个月完全不涨，参考上一问答进行调整。`,
      aEn: `Generally no. Gaining 10kg only raises BMR by ~100 kcal, which may not even offset the surplus. A typical bulk only gains a few kg, so the impact on BMR is minimal.

But if weight hasn't budged in a month, see the previous Q&A for adjustment.`
    },
    {
      qZh: '增肌到什么程度应该转减脂？',
      qEn: 'When to transition from bulk to cut?',
      aZh: `停止增肌主要取决于个人审美。
BMI = 体重kg ÷ 身高m ÷ 身高m

如果介意发胖：男性BMI 23-24、女性BMI 21-22转减脂。
如果不介意发胖：男性BMI 24-25、女性BMI 22-23转减脂。

一般不建议增到更高，除非你完全不在乎体脂率。`,
      aEn: `When to stop bulking is primarily an aesthetic choice.
BMI = weight(kg) ÷ height(m)²

If you mind getting fluffy: male BMI 23-24, female BMI 21-22 → cut.
If you don't mind some fluff: male BMI 24-25, female BMI 22-23 → cut.

Generally not recommended to go higher unless you truly don't care about body fat.`
    },
    {
      qZh: '为什么不要追求增肌减脂同时进行？',
      qEn: 'Why not pursue simultaneous bulk and cut?',
      aZh: `增肌减脂确实可以同时进行——比如新手用减脂饮食配额时，肌肉量仍可能略微增长。但这种增肌量和专门增肌期是不能比的。

增肌需要热量盈余，减脂需要热量缺口，两者的热量条件相反。同时进行意味着两者效率都低。建议增肌期和减脂期分开，效率最高。`,
      aEn: `Yes, simultaneous recomp happens — a novice on a cut may still gain some muscle. But the muscle gain is tiny compared to a dedicated bulk.

Bulking requires a calorie surplus; cutting requires a deficit — opposite conditions. Doing both at once means mediocre results on both fronts. Separate bulk/cut phases are far more efficient.`
    },
    {
      qZh: '有什么可以用于练前练后餐的便携碳水？',
      qEn: 'Portable carb options for pre/post workout?',
      aZh: `【吐司切片面包】碳水25g/片
【旺仔小馒头（46g装）】碳水37g/袋
【香蕉】碳水约20-30g/根
【娃哈哈八宝粥】碳水47g/罐
【旺仔QQ糖（小包20g）】碳水15g/袋
【脉动】碳水30g/瓶

注意：练前餐只能吃五六分饱，练后如果没正餐可用便携碳水+蛋白粉解决。`,
      aEn: `【Sliced toast bread】~25g carbs/slice
【Wangzai mini buns (46g)】37g carbs/pack
【Banana】~20-30g carbs
【Wahaha congee】47g carbs/can
【Wangzai QQ gummies (20g)】15g carbs/pack
【Mizone/Pocari Sweat】30g carbs/bottle

Note: pre-workout only eat to 50-60% fullness. Post-workout, if no proper meal, use portable carbs + protein shake.`
    },
    {
      qZh: '有什么低热量能填肚子的零食？',
      qEn: 'Low-calorie snacks for hunger?',
      aZh: `以下零食用于体重增速正常但两餐之间饿的情况（不是为了增加饮食热量）：
• 内蒙牛肉干（碳水率<10%的）
• 低糖鸡肉干
• 无糖饮料（零度可乐等）
• 蔬菜（不限量）
• 鸡蛋
• 无糖酸奶

注意：饼干、膨化食品、甜品糕点等糖油混合物不能作为零食。`,
      aEn: `These are for between-meal hunger when weight gain is on track (NOT for adding calories):
• Inner Mongolian beef jerky (sugar <10%)
• Low-sugar chicken jerky
• Zero-cal drinks (Coke Zero, etc.)
• Vegetables (unlimited)
• Eggs
• Unsweetened yogurt

Note: cookies, puffed snacks, pastries, etc. are junk food — not acceptable snacks.`
    },
  ]
};
