// i18n — Chinese and English translations
const I = {
  zh: {
    siteTitle: '健身饮食计算器',
    subtitle: '基于好人松松Excel套表 · 减脂增肌饮食方案',
    langLabel: '语言',
    planLabel: '方案',

    // Tabs
    tabCalculator: '计算器',
    tabFoods: '食物营养表',
    tabFAQ: '问答汇总',
    tabGuide: '使用说明',

    // Personal info
    personalInfo: '个人基本信息',
    gender: '性别',
    genderMale: '男',
    genderFemale: '女',
    height: '身高',
    heightUnit: 'cm',
    weight: '体重',
    weightUnit: 'kg',
    age: '年龄',
    ageUnit: '岁',
    bodyFat: '体脂率',
    bodyFatUnit: '% (选填)',
    trainingLevel: '训练水平',
    levelNovice: '新手',
    levelIntermediate: '有基础',
    levelAdvanced: '老手',
    trainingTime: '训练时间',
    trainingTimeLabel: '训练时间点',
    trainingTimeDesc: '早饭前/后训练决定餐序',

    // Calculated metrics
    bmi: 'BMI',
    bmr: '基础代谢',
    tdee: '无运动消耗',
    balance: '平衡热量',
    targetCalories: '目标热量',
    targetLabel: '减脂目标热量',
    fatLoss: '减脂',
    muscleGain: '增肌',
    deficit: '热量缺口',
    deficitDesc: '含20%缺口+20%预留',

    // Macros
    dailyMacros: '每日宏量营养素',
    carbs: '碳水',
    protein: '蛋白质',
    fat: '脂肪',
    perKg: '/kg体重',
    grams: '克',
    kcal: '大卡',
    trainingDay: '训练日',
    restDay: '休息日',
    macroTotal: '全天总量',

    // Meals
    trainingDayMeals: '力训日餐单',
    restDayMeals: '休息日餐单',
    mealBreakfast: '早饭',
    mealPreWorkout: '练前餐',
    mealPostWorkout: '练后餐',
    mealLunch: '午饭',
    mealDinner: '晚饭',
    mealSnack: '零食/夜宵',
    mealOther: '其他餐',
    mealTagPre: '练前',
    mealTagPost: '练后',
    mealTagOther: '其他',
    mealNotePre: '垫点碳水即可，只能吃到五六分饱，吃了就准备开练',
    mealNotePost: '最好练完后半小时内开始吃，如要吃蔬菜应少吃后吃',
    mealNoteOther: '先吃蔬菜后吃碳水，蔬菜不限量',
    mealNoteSnack: '10%碳水用于抵扣牛奶/蔬菜/调料中未计入的碳水',

    // Cardio
    cardio: '有氧运动',
    cardioWeekly: '每周有氧时间',
    cardioHours: '小时/周',
    cardioType: '有氧类型',
    cardioTypeModerate: '中低强度 (快走/骑车)',
    cardioTypeIntense: '中高强度 (跑步/游泳)',
    cardioCals: '每日有氧消耗',
    cardioNote: '有氧消耗的热量可置换为额外饮食',

    // Food table
    foodTitle: '食物营养率参考表',
    foodSearch: '搜索食物...',
    foodCategory: '分类',
    foodName: '食物',
    foodCarbRate: '碳水率',
    foodProteinRate: '蛋白质率',
    foodGi: 'GI',
    foodNote: '备注',
    catRice: '米类主食',
    catWheat: '麦类主食',
    catOtherStaple: '其他主食',
    catInstant: '方便食品',
    catPortable: '便携碳水',
    catFruit: '水果',
    catProtein: '蛋白质',
    catFat: '脂肪说明',
    giHigh: '高',
    giMid: '中',
    giLow: '低',

    // FAQ
    faqTitle: '问答汇总',
    faqFatLoss: '减脂问答',
    faqMuscleGain: '增肌问答',

    // Guide
    guideTitle: '使用说明',
    guideContent: `1. 输入你的性别、身高、体重、年龄
2. 选择训练水平（影响训练热量消耗估算）
3. 如有有氧运动，填写每周有氧时间
4. 系统自动计算出每天应吃的碳水、蛋白质、脂肪总量
5. 参考「力训日餐单」和「休息日餐单」分配各餐
6. 在「食物营养表」中选择具体食物，按碳水率/蛋白质率换算成食物重量
7. 有疑问请查看「问答汇总」

重要提醒：
• 减脂热量已预留20%缺口 + 20%少报缓冲（即平衡热量×0.64）
• 脂肪不需要精确计算，按文字指导吃即可
• 1-2周的体重变化才有参考意义，不要每天称重焦虑
• 减到男性BMI 22-23 / 女性BMI 20-21建议转增肌`,

    // Notes
    noteSimplified: '简化饮食：脂肪不用逐餐计算，全天把握总量即可',
    noteFatGuide: '早饭吃鸡蛋/牛奶 + 正餐吃带油瘦肉菜 + 每天30g坚果 = 脂肪合适',
    noteProtein: '蛋白质各餐大概均分，可以互相调剂',
    noteCarb: '碳水训练日集中在练前+练后，休息日均分',
    noteVeg: '蔬菜无限任意吃，不用计算；红薯/土豆/玉米/山药/芋头是主食不是蔬菜',
    noteFruit: '水果是糖水，要计入碳水量，从主食中置换',

    // Misc
    weightChange: '体重参考',
    bmiUnderweight: '偏瘦',
    bmiNormal: '正常',
    bmiOverweight: '超重',
    bmiObese: '肥胖',
    stopLoss: '减到何时',
    stopLossMale: '男性BMI 22-23转增肌',
    stopLossFemale: '女性BMI 20-21转增肌',
    adjustNote: '体重下降10kg后才需调整配额',
    cardioNote2: '减脂体重<70kg建议每周2小时有氧；70-80kg先不做，饿了再加；>80kg不做有氧',
    defaultPreset: '初始数值为预设，请改为自己的数据',
    trainingCals: '力训消耗',
    cardioDaily: '有氧消耗 (日均)',
    perMeal: '每餐分配',
    mealCarbs: '碳水',
    mealProtein: '蛋白质',
    totalRow: '全天合计',
  },

  en: {
    siteTitle: 'Fitness Diet Calculator',
    subtitle: 'Based on HaoRen SongSong Excel · Cut & Bulk Diet Plans',
    langLabel: 'Language',
    planLabel: 'Plan',

    tabCalculator: 'Calculator',
    tabFoods: 'Food Data',
    tabFAQ: 'FAQ',
    tabGuide: 'Guide',

    personalInfo: 'Personal Info',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    height: 'Height',
    heightUnit: 'cm',
    weight: 'Weight',
    weightUnit: 'kg',
    age: 'Age',
    ageUnit: 'yr',
    bodyFat: 'Body Fat',
    bodyFatUnit: '% (optional)',
    trainingLevel: 'Training Level',
    levelNovice: 'Novice',
    levelIntermediate: 'Intermediate',
    levelAdvanced: 'Advanced',
    trainingTime: 'Training Time',
    trainingTimeLabel: 'Training schedule',
    trainingTimeDesc: 'Determines meal order around workout',

    bmi: 'BMI',
    bmr: 'BMR',
    tdee: 'NEAT TDEE',
    balance: 'Balance',
    targetCalories: 'Target Calories',
    targetLabel: 'Fat Loss Target',
    fatLoss: 'Cut',
    muscleGain: 'Bulk',
    deficit: 'Deficit',
    deficitDesc: '20% deficit + 20% buffer',

    dailyMacros: 'Daily Macros',
    carbs: 'Carbs',
    protein: 'Protein',
    fat: 'Fat',
    perKg: '/kg BW',
    grams: 'g',
    kcal: 'kcal',
    trainingDay: 'Training Day',
    restDay: 'Rest Day',
    macroTotal: 'Daily Total',

    trainingDayMeals: 'Training Day Meals',
    restDayMeals: 'Rest Day Meals',
    mealBreakfast: 'Breakfast',
    mealPreWorkout: 'Pre-Workout',
    mealPostWorkout: 'Post-Workout',
    mealLunch: 'Lunch',
    mealDinner: 'Dinner',
    mealSnack: 'Snack',
    mealOther: 'Other Meal',
    mealTagPre: 'Pre',
    mealTagPost: 'Post',
    mealTagOther: 'Other',
    mealNotePre: 'Light carbs only, 50-60% full, eat and go train',
    mealNotePost: 'Eat within 30min post-workout, limit veggies to avoid insulin suppression',
    mealNoteOther: 'Veggies first then carbs, unlimited vegetables',
    mealNoteSnack: '10% carb buffer for unaccounted carbs in milk/veggies/seasonings',

    cardio: 'Cardio',
    cardioWeekly: 'Weekly Cardio',
    cardioHours: 'hrs/wk',
    cardioType: 'Cardio Type',
    cardioTypeModerate: 'Moderate (brisk walk/cycling)',
    cardioTypeIntense: 'Intense (running/swimming)',
    cardioCals: 'Daily Cardio Burn',
    cardioNote: 'Cardio calories can be exchanged for extra food intake',

    foodTitle: 'Food Nutrition Reference',
    foodSearch: 'Search foods...',
    foodCategory: 'Category',
    foodName: 'Food',
    foodCarbRate: 'Carb%',
    foodProteinRate: 'Protein%',
    foodGi: 'GI',
    foodNote: 'Notes',
    catRice: 'Rice',
    catWheat: 'Wheat',
    catOtherStaple: 'Other Staples',
    catInstant: 'Instant Foods',
    catPortable: 'Portable Carbs',
    catFruit: 'Fruits',
    catProtein: 'Protein',
    catFat: 'Fat Guide',
    giHigh: 'High',
    giMid: 'Mid',
    giLow: 'Low',

    faqTitle: 'Q&A',
    faqFatLoss: 'Cut FAQ',
    faqMuscleGain: 'Bulk FAQ',

    guideTitle: 'How to Use',
    guideContent: `1. Enter your gender, height, weight, age
2. Select training level (affects calorie burn estimate)
3. If you do cardio, enter weekly hours
4. The calculator outputs daily carb, protein, fat targets
5. Follow the Training Day / Rest Day meal plans for per-meal distribution
6. Use the Food Data table to convert macro grams to actual food weight
7. Check the FAQ for common questions

Important:
• Fat loss target already includes 20% deficit + 20% underreporting buffer (balance × 0.64)
• Fat intake uses simplified method — no need to count per meal
• Only 1-2 week weight trends matter, don't obsess over daily scale
• Transition to bulk at male BMI 22-23 / female BMI 20-21`,

    noteSimplified: 'Simplified: fat is tracked at daily total only, not per meal',
    noteFatGuide: 'Breakfast eggs/milk + meals with some oil + 30g nuts/day = adequate fat intake',
    noteProtein: 'Protein distributed roughly evenly across meals, flexible',
    noteCarb: 'Carbs concentrated around workout (pre + post) on training days',
    noteVeg: 'Unlimited vegetables, no tracking needed; sweet potatoes, corn, taro are STARCHES not vegetables',
    noteFruit: 'Fruit is sugar water — count the carbs and swap from staple carbs',

    weightChange: 'Weight Guide',
    bmiUnderweight: 'Underweight',
    bmiNormal: 'Normal',
    bmiOverweight: 'Overweight',
    bmiObese: 'Obese',
    stopLoss: 'Stop Cut At',
    stopLossMale: 'Male BMI 22-23 → transition to bulk',
    stopLossFemale: 'Female BMI 20-21 → transition to bulk',
    adjustNote: 'Only adjust plan after 10kg weight loss',
    cardioNote2: 'Cut: <70kg do 2h/wk cardio; 70-80kg try without first; >80kg skip cardio',
    defaultPreset: 'Default values are presets — enter your own data',
    trainingCals: 'Training Burn',
    cardioDaily: 'Cardio Burn (daily avg)',
    perMeal: 'Per Meal',
    mealCarbs: 'Carbs',
    mealProtein: 'Protein',
    totalRow: 'Daily Total',
  }
};

function t(key) {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'zh';
  return I[lang][key] || I.zh[key] || key;
}
