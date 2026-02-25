// ═══════════════════════════════════════
//   FindJob — App Logic
// ═══════════════════════════════════════

/* ── TRANSLATIONS ── */
const T = {
  ru: {
    home: 'Главная', resume: 'Резюме', vacancies: 'Поиск вакансий',
    courses: 'Курсы', world: 'Мировые запросы',
    seeker: 'Кабинет соискателя', employer: 'Кабинет работодателя',
    students: 'Студентам', employers: 'Работодателям',
    heroTag: '🚀 AI-поиск нового поколения',
    heroTitle: 'Ищи работу не по фильтрам,\nа по шансам',
    heroSub: 'Мы оцениваем твой профиль и находим вакансии, где у тебя реальный шанс.',
    heroCta1: 'Начать поиск', heroCta2: 'Моё резюме',
    stat1: 'Вакансий', stat2: 'Работодателей', stat3: 'Студентов', stat4: 'Откликов',
    chatTitle: 'FindJob AI', chatOnline: 'Онлайн',
    chatPlaceholder: 'Напиши вопрос о работе или карьере…',
    promptsTitle: '💡 Быстрые вопросы',
    p1: 'Какие вакансии мне подходят?', p2: 'Как улучшить резюме?',
    p3: 'Какие навыки в тренде?', p4: 'Сколько я стою на рынке?',
    statsTitle: '📊 Мой профиль',
    vacancyTitle: 'Поиск вакансий по шансам',
    searchPlaceholder: 'Поиск по должности, компании…',
    safeBtn: '🛡️ Безопасно', riskBtn: '🔥 Рискую',
    chanceLabel: '🎯 Твой шанс', applyBtn: 'Откликнуться',
    fullTime: 'Полный день', partTime: 'Частичная', remote: 'Удалённо', hybrid: 'Гибрид',
    resumeTitle: 'Моё резюме', editResume: 'Редактировать', downloadCV: 'Скачать PDF',
    expSection: 'Опыт работы', eduSection: 'Образование', skillsSection: 'Навыки',
    langSection: 'Языки', aboutSection: 'О себе',
    scoreTitle: '🎯 Индекс конкурентности', scoreDesc: 'Привлекательность профиля',
    improveTitle: '💡 Улучшите резюме',
    save: 'Сохранить', yourName: 'Ваше имя', yourRole: 'Желаемая должность',
    coursesTitle: 'Курсы для карьеры', coursesDesc: 'Прокачай навыки и повыси шансы',
    relevanceLabel: 'Релевантность для вакансий', enroll: 'Записаться', enrolled: '✓ Записан',
    worldTitle: 'Мировые запросы на специальности', worldDesc: 'Самые востребованные профессии',
    countriesTitle: '🌍 Горящие вакансии по странам', jobs: 'вак.', growth: 'рост',
    seekerTitle: 'Кабинет соискателя',
    applications: 'Мои отклики', saved: 'Сохранённые', settings: 'Настройки',
    statusPending: '⏳ Ожидает', statusViewed: '👁 Просмотрено',
    statusRejected: '✕ Отказ', statusAccepted: '✓ Приглашение',
    employerTitle: 'Кабинет работодателя',
    myVacancies: 'Мои вакансии', addVacancy: '+ Новая вакансия', candidates: 'Кандидаты',
    applicants: 'откликов', viewCandidates: 'Смотреть',
    empStats1: 'Активных вакансий', empStats2: 'Всего откликов',
    empStats3: 'Просмотров', empStats4: 'Нанято',
    editProfile: 'Редактировать профиль', student: 'Студент',
    available: '🟢 Готов к работе',
    // Welcome
    welcomeTitle: 'Добро пожаловать в FindJob',
    welcomeSub: 'Ищем работу не по фильтрам, а по шансам',
    newAccount: 'Новый аккаунт',
    newAccountSub: 'Пройти опрос и создать резюме',
    demoAccount: 'Войти как студент',
    demoAccountSub: 'Демо-профиль с готовыми данными',
  },
  kz: {
    home: 'Басты бет', resume: 'Түйіндеме', vacancies: 'Бос орындар',
    courses: 'Курстар', world: 'Әлемдік сұраныстар',
    seeker: 'Іздеуші кабинеті', employer: 'Жұмыс беруші кабинеті',
    students: 'Студенттерге', employers: 'Жұмыс берушілерге',
    heroTag: '🚀 Жаңа буын AI-іздеу',
    heroTitle: 'Жұмысты сүзгілермен емес,\nмүмкіндіктермен іздеңіз',
    heroSub: 'Біз профиліңізді бағалап, нақты мүмкіндіктері бар бос орындарды табамыз.',
    heroCta1: 'Іздеуді бастау', heroCta2: 'Түйіндемем',
    stat1: 'Бос орын', stat2: 'Жұмыс беруші', stat3: 'Студент', stat4: 'Өтінім',
    chatTitle: 'FindJob AI', chatOnline: 'Онлайн',
    chatPlaceholder: 'Жұмыс немесе мансап туралы сұраңыз…',
    promptsTitle: '💡 Жылдам сұрақтар',
    p1: 'Маған қандай бос орындар сәйкес?', p2: 'Түйіндемемді қалай жақсартуға болады?',
    p3: 'Қандай дағдылар трендте?', p4: 'Нарықта менің бағам қанша?',
    statsTitle: '📊 Менің профилім',
    vacancyTitle: 'Мүмкіндік бойынша бос орын іздеу',
    searchPlaceholder: 'Лауазым, компания бойынша іздеу…',
    safeBtn: '🛡️ Қауіпсіз', riskBtn: '🔥 Тәуекел',
    chanceLabel: '🎯 Сіздің мүмкіндігіңіз', applyBtn: 'Жіберу',
    fullTime: 'Толық күн', partTime: 'Жарты күн', remote: 'Қашықтан', hybrid: 'Гибридті',
    resumeTitle: 'Менің түйіндемем', editResume: 'Өңдеу', downloadCV: 'PDF жүктеу',
    expSection: 'Жұмыс тәжірибесі', eduSection: 'Білім', skillsSection: 'Дағдылар',
    langSection: 'Тілдер', aboutSection: 'Өзім туралы',
    scoreTitle: '🎯 Бәсекеге қабілеттілік', scoreDesc: 'Профиль тартымдылығы',
    improveTitle: '💡 Түйіндемені жақсартыңыз',
    save: 'Сақтау', yourName: 'Сіздің атыңыз', yourRole: 'Қалаған лауазым',
    coursesTitle: 'Мансап курстары', coursesDesc: 'Дағдыларды арттырып, мүмкіндіктеріңізді арттырыңыз',
    relevanceLabel: 'Бос орындарға сәйкестігі', enroll: 'Тіркелу', enrolled: '✓ Тіркелді',
    worldTitle: 'Мамандықтарға әлемдік сұраныс', worldDesc: 'Ең сұранысқа ие мамандықтар',
    countriesTitle: '🌍 Елдер бойынша бос орындар', jobs: 'бос.', growth: 'өсім',
    seekerTitle: 'Іздеуші кабинеті',
    applications: 'Өтінімдерім', saved: 'Сақталған', settings: 'Параметрлер',
    statusPending: '⏳ Күтуде', statusViewed: '👁 Қаралды',
    statusRejected: '✕ Бас тарту', statusAccepted: '✓ Шақыру',
    employerTitle: 'Жұмыс беруші кабинеті',
    myVacancies: 'Менің бос орындарым', addVacancy: '+ Жаңа бос орын', candidates: 'Үміткерлер',
    applicants: 'өтінім', viewCandidates: 'Қарау',
    empStats1: 'Белсенді бос орындар', empStats2: 'Барлық өтінімдер',
    empStats3: 'Қаралым', empStats4: 'Жалданған',
    editProfile: 'Профильді өңдеу', student: 'Студент',
    available: '🟢 Жұмысқа дайын',
    welcomeTitle: 'FindJob-қа қош келдіңіз',
    welcomeSub: 'Жұмысты сүзгілермен емес, мүмкіндіктермен іздейміз',
    newAccount: 'Жаңа аккаунт',
    newAccountSub: 'Сауалнамадан өтіп, түйіндеме жасау',
    demoAccount: 'Студент ретінде кіру',
    demoAccountSub: 'Дайын деректері бар демо-профиль',
  }
};

/* ── STATE ── */
let currentLang = 'ru';
let currentPage = 'home';
let riskMode = 'safe';
let enrolledCourses = new Set();

/* ── USER PROFILE (built by onboarding) ── */
let userProfile = {
  name: '', initials: '?', role: '', university: '', specialization: '',
  skills: [], experience: '', salary: '', about: '', isNew: true,
  resumeScore: 0,
};

/* ── ONBOARDING ── */
let onboardingActive = false;
let onboardingStep = 0;

const ONBOARDING_QUESTIONS = {
  ru: [
    { q: '👋 Привет! Я помогу создать твоё резюме за несколько вопросов.\n\nКак тебя зовут?', field: 'name', placeholder: 'Введи своё имя…' },
    { q: 'Отлично! В каком университете или колледже ты учишься?', field: 'university', placeholder: 'Например: КазНТУ, МУИТ, НУ…' },
    { q: 'Какая у тебя специальность или направление?', field: 'specialization', placeholder: 'Например: Информатика, Экономика, Дизайн…' },
    { q: 'На какую должность ты хочешь устроиться?', field: 'role', placeholder: 'Например: Frontend Developer, Маркетолог…' },
    { q: 'Какие у тебя навыки? Перечисли через запятую.', field: 'skills', placeholder: 'Например: React, Python, Figma, Excel…' },
    { q: 'Есть ли у тебя опыт работы или стажировки? Расскажи коротко.', field: 'experience', placeholder: 'Например: 6 мес. стажировка в Kolesa Group' },
    { q: 'Какую зарплату ты ожидаешь?', field: 'salary', placeholder: 'Например: от 250 000 ₸', options: ['от 150 000 ₸', 'от 250 000 ₸', 'от 350 000 ₸', 'от 500 000 ₸'] },
  ],
  kz: [
    { q: '👋 Сәлем! Бірнеше сұрақ арқылы түйіндемеңізді жасауға көмектесемін.\n\nСіздің атыңыз кім?', field: 'name', placeholder: 'Атыңызды енгізіңіз…' },
    { q: 'Керемет! Қай университет немесе колледжде оқисыз?', field: 'university', placeholder: 'Мысалы: ҚазҰТУ, МУИТ, НУ…' },
    { q: 'Мамандығыңыз немесе бағытыңыз қандай?', field: 'specialization', placeholder: 'Мысалы: Информатика, Экономика, Дизайн…' },
    { q: 'Қандай лауазымға орналасқыңыз келеді?', field: 'role', placeholder: 'Мысалы: Frontend тәзірибешісі, Маркетолог…' },
    { q: 'Қандай дағдыларыңыз бар? Үтірмен жазыңыз.', field: 'skills', placeholder: 'Мысалы: React, Python, Figma, Excel…' },
    { q: 'Жұмыс тәжірибесі немесе тағылымдамасы бар ма? Қысқаша айтыңыз.', field: 'experience', placeholder: 'Мысалы: Kolesa Group-та 6 ай тағылымдама' },
    { q: 'Қандай жалақы күтесіз?', field: 'salary', placeholder: 'Мысалы: 250 000 ₸-дан', options: ['150 000 ₸-дан', '250 000 ₸-дан', '350 000 ₸-дан', '500 000 ₸-дан'] },
  ]
};

/* ── VACANCIES DATA ── */
const vacanciesBase = [
  { id: 1, emoji: '💻', title: 'Frontend Developer', company: 'Kolesa Group', salary: '300–500k ₸', location: 'Алматы', type: 'hybrid', tags: ['react', 'javascript', 'html', 'css', 'typescript', 'frontend'], risky: false },
  { id: 2, emoji: '📊', title: 'Data Analyst Intern', company: 'Jusan Bank', salary: '180–250k ₸', location: 'Нур-Султан', type: 'fulltime', tags: ['python', 'sql', 'excel', 'data', 'аналитик', 'анализ'], risky: false },
  { id: 3, emoji: '🎨', title: 'UX/UI Designer', company: 'Chocofamily', salary: '250–350k ₸', location: 'Алматы', type: 'remote', tags: ['figma', 'дизайн', 'design', 'ui', 'ux', 'adobe'], risky: false },
  { id: 4, emoji: '🤖', title: 'ML Engineer', company: 'Sber Kazakhstan', salary: '500–800k ₸', location: 'Алматы', type: 'hybrid', tags: ['python', 'ml', 'tensorflow', 'ai', 'machine learning'], risky: true },
  { id: 5, emoji: '📱', title: 'iOS Developer', company: 'Kaspi.kz', salary: '600–900k ₸', location: 'Алматы', type: 'fulltime', tags: ['swift', 'ios', 'mobile', 'xcode'], risky: true },
  { id: 6, emoji: '🌐', title: 'Marketing Manager', company: 'BI Group', salary: '200–300k ₸', location: 'Нур-Султан', type: 'fulltime', tags: ['маркетинг', 'marketing', 'smm', 'контент', 'excel'], risky: false },
  { id: 7, emoji: '🔐', title: 'Cybersecurity Analyst', company: 'КазМунайГаз', salary: '400–650k ₸', location: 'Атырау', type: 'fulltime', tags: ['security', 'кибербезопасность', 'linux', 'network'], risky: true },
  { id: 8, emoji: '✍️', title: 'Content Creator', company: 'Kcell', salary: '160–220k ₸', location: 'Алматы', type: 'remote', tags: ['контент', 'content', 'smm', 'копирайтинг', 'маркетинг'], risky: false },
  { id: 9, emoji: '🏗️', title: 'Project Manager', company: 'Expo 2025', salary: '350–550k ₸', location: 'Алматы', type: 'hybrid', tags: ['менеджмент', 'управление', 'project', 'agile', 'scrum'], risky: true },
  { id: 10, emoji: '🧪', title: 'QA Engineer', company: 'Air Astana', salary: '220–320k ₸', location: 'Алматы', type: 'fulltime', tags: ['тестирование', 'qa', 'testing', 'selenium', 'jira'], risky: false },
];

/* compute chance based on profile skills */
function computeChance(vacancy) {
  if (!userProfile.skills.length) return vacancy.risky ? Math.floor(20 + Math.random() * 25) : Math.floor(50 + Math.random() * 35);
  const userSkillsLower = userProfile.skills.map(s => s.toLowerCase().trim());
  const matched = vacancy.tags.filter(tag => userSkillsLower.some(us => us.includes(tag) || tag.includes(us)));
  const base = Math.round((matched.length / vacancy.tags.length) * 100);
  return Math.min(98, Math.max(5, base + Math.floor(Math.random() * 15)));
}

let vacancies = [];

function rebuildVacancies() {
  vacancies = vacanciesBase.map(v => ({ ...v, chance: computeChance(v) }));
  vacancies.sort((a, b) => b.chance - a.chance);
}

/* ── COURSES ── */
const courses = [
  { id: 1, emoji: '⚛️', title: 'React & TypeScript', duration: '40ч • 8нед', level: 'Средний', price: 'Бесплатно', relevance: 92, gradient: 'linear-gradient(135deg,#1A0533,#0D1A2E)' },
  { id: 2, emoji: '🎨', title: 'UI/UX Дизайн от нуля', duration: '28ч • 6нед', level: 'Начинающий', price: '9 900 ₸', relevance: 78, gradient: 'linear-gradient(135deg,#0D1A0A,#01291F)' },
  { id: 3, emoji: '📊', title: 'Data Science с Python', duration: '56ч • 12нед', level: 'Средний', price: '14 900 ₸', relevance: 85, gradient: 'linear-gradient(135deg,#1A1400,#0D0A1E)' },
  { id: 4, emoji: '🤖', title: 'Machine Learning Intro', duration: '32ч • 8нед', level: 'Начинающий', price: 'Бесплатно', relevance: 70, gradient: 'linear-gradient(135deg,#001A1A,#0D001E)' },
  { id: 5, emoji: '📈', title: 'Digital Marketing Pro', duration: '20ч • 4нед', level: 'Начинающий', price: '7 500 ₸', relevance: 65, gradient: 'linear-gradient(135deg,#1A0500,#1A0A00)' },
  { id: 6, emoji: '🔐', title: 'Кибербезопасность 101', duration: '24ч • 5нед', level: 'Начинающий', price: 'Бесплатно', relevance: 58, gradient: 'linear-gradient(135deg,#001A0D,#0A1A00)' },
];

const worldData = [
  { label: 'Software Engineer', count: '1.8M', pct: 95, color: 'linear-gradient(90deg,#7C3AED,#A855F7)' },
  { label: 'Data Scientist', count: '940K', pct: 80, color: 'linear-gradient(90deg,#0891B2,#06B6D4)' },
  { label: 'AI/ML Engineer', count: '780K', pct: 74, color: 'linear-gradient(90deg,#D97706,#F59E0B)' },
  { label: 'UX Designer', count: '620K', pct: 62, color: 'linear-gradient(90deg,#DB2777,#EC4899)' },
  { label: 'Cybersecurity', count: '540K', pct: 55, color: 'linear-gradient(90deg,#DC2626,#EF4444)' },
  { label: 'Product Manager', count: '480K', pct: 50, color: 'linear-gradient(90deg,#059669,#10B981)' },
  { label: 'DevOps Engineer', count: '390K', pct: 42, color: 'linear-gradient(90deg,#7C3AED,#06B6D4)' },
  { label: 'Cloud Architect', count: '310K', pct: 35, color: 'linear-gradient(90deg,#D97706,#DB2777)' },
];

const countries = [
  { flag: '🇺🇸', name: 'США', jobs: '320K', growth: '+18%' },
  { flag: '🇩🇪', name: 'Германия', jobs: '185K', growth: '+12%' },
  { flag: '🇰🇿', name: 'Казахстан', jobs: '92K', growth: '+29%' },
  { flag: '🇦🇪', name: 'ОАЭ', jobs: '140K', growth: '+35%' },
  { flag: '🇬🇧', name: 'Великобритания', jobs: '170K', growth: '+9%' },
  { flag: '🇨🇦', name: 'Канада', jobs: '115K', growth: '+15%' },
  { flag: '🇸🇬', name: 'Сингапур', jobs: '78K', growth: '+22%' },
  { flag: '🇳🇱', name: 'Нидерланды', jobs: '95K', growth: '+11%' },
];

const appliedJobs = [
  { emoji: '💻', title: 'Frontend Developer', company: 'Kolesa Group', date: '20 фев', status: 'viewed' },
  { emoji: '📊', title: 'Data Analyst', company: 'Jusan Bank', date: '18 фев', status: 'pending' },
  { emoji: '📱', title: 'iOS Developer', company: 'Kaspi.kz', date: '14 фев', status: 'rejected' },
  { emoji: '✍️', title: 'Content Creator', company: 'Kcell', date: '10 фев', status: 'accepted' },
];

const employerVacancies = [
  { emoji: '💻', title: 'Frontend Developer', applicants: 14, views: 240, status: 'active' },
  { emoji: '📊', title: 'Business Analyst', applicants: 8, views: 180, status: 'active' },
  { emoji: '🎨', title: 'Product Designer', applicants: 21, views: 390, status: 'active' },
  { emoji: '🔐', title: 'Security Engineer', applicants: 3, views: 95, status: 'paused' },
];

/* ── DEMO PROFILE ── */
const DEMO_PROFILE = {
  name: 'Алихан Маратов', initials: 'АМ', role: 'Frontend Developer',
  university: 'КазНТУ им. Сатпаева', specialization: 'Информационные системы',
  skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'Git'],
  experience: '6 мес. стажировка в Kolesa Group (React, code review)',
  salary: 'от 300 000 ₸', about: 'Студент 4 курса КазНТУ. Участвовал в 3 хакатонах, ищу возможность расти как разработчик.',
  isNew: false, resumeScore: 72,
};

/* ── AI RESPONSES (free-form after onboarding) ── */
const aiReplies = {
  ru: [
    '🎯 По твоему профилю я вижу **{topJob}** с высоким шансом. Навыки **{topSkill}** очень востребованы прямо сейчас!',
    '📈 Твоё резюме набирает **{score} из 100** по индексу конкурентности. Добавь GitHub — поднимешь до 85+.',
    '🔥 В тренде: **React, TypeScript, Python, SQL**. У тебя уже есть часть — отличный старт!',
    '💰 По твоему профилю рыночная зарплата **{salary}** в месяц. После года опыта вырастет на 40–60%.',
    '✅ Совет: добавь в резюме **pet-проекты и сертификаты** — это поднимет твой шанс на 15–25%.',
  ],
  kz: [
    '🎯 Профиліңіз бойынша **{topJob}** жоғары мүмкіндікпен бар. **{topSkill}** дағдылары қазір өте сұранысқа ие!',
    '📈 Түйіндемеңіз **100-ден {score}** ұпай жинайды. GitHub сілтемесін қосыңыз — 85+ болады.',
    '🔥 Трендте: **React, TypeScript, Python, SQL**. Сізде бір бөлігі бар — тамаша бастама!',
    '💰 Профиліңіз бойынша нарықтық жалақы айына **{salary}**. Бір жыл тәжірибеден кейін 40–60% өседі.',
    '✅ Кеңес: **pet-жобалар мен сертификаттар** қосыңыз — мүмкіндіктеріңіз 15–25%-ға өседі.',
  ]
};

/* ══════════════════════════════════════════
   WELCOME OVERLAY
══════════════════════════════════════════ */

function showWelcome() {
  document.getElementById('welcome-overlay').classList.remove('hidden');
}

function hideWelcome() {
  const el = document.getElementById('welcome-overlay');
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.4s ease';
  setTimeout(() => el.classList.add('hidden'), 400);
}

function startNewAccount() {
  userProfile = {
    name: '', initials: '?', role: '', university: '', specialization: '',
    skills: [], experience: '', salary: '', about: '', isNew: true, resumeScore: 0
  };
  hideWelcome();
  navigateTo('home');
  updateSidebarUser();

  onboardingActive = true;
  onboardingStep = 0;

  setTimeout(() => {
    updateOnboardingBar();
    askOnboardingQuestion(0);
    // disable free chat until done
    const input = document.getElementById('chat-input');
    const btn = document.getElementById('chat-send-btn');
    if (input) { input.disabled = true; input.placeholder = 'Ответь на вопросы выше…'; }
    if (btn) btn.disabled = true;
  }, 500);
}

function startDemoAccount() {
  userProfile = { ...DEMO_PROFILE };
  hideWelcome();
  rebuildVacancies();
  renderVacancies();
  updateSidebarUser();
  updateResumeFromProfile();
  navigateTo('home');
  setTimeout(() => {
    addMessage('👋 Привет, ' + userProfile.name + '! Я FindJob AI — твой карьерный ассистент. Чем могу помочь? 🎯', 'ai');
  }, 500);
}

/* ══════════════════════════════════════════
   ONBOARDING FLOW
══════════════════════════════════════════ */

function updateOnboardingBar() {
  const bar = document.getElementById('onboarding-bar');
  const fill = document.getElementById('onboarding-fill');
  const txt = document.getElementById('onboarding-step-text');
  const questions = ONBOARDING_QUESTIONS[currentLang];
  if (!onboardingActive) { bar.classList.remove('visible'); return; }
  bar.classList.add('visible');
  const pct = Math.round((onboardingStep / questions.length) * 100);
  fill.style.width = pct + '%';
  txt.textContent = onboardingStep + ' / ' + questions.length;
}

function askOnboardingQuestion(step) {
  const questions = ONBOARDING_QUESTIONS[currentLang];
  if (step >= questions.length) { finishOnboarding(); return; }
  const q = questions[step];
  updateOnboardingBar();

  setTimeout(() => {
    const msgs = document.getElementById('chat-messages');
    const input = document.getElementById('chat-input');

    // AI bubble
    addMessage(q.q.replace(/\n/g, '<br>'), 'ai');

    // Option buttons if any
    if (q.options) {
      const wrap = document.createElement('div');
      wrap.className = 'msg msg-ai';
      const inner = document.createElement('div');
      inner.innerHTML = `<div class="msg-avatar ai-av" style="visibility:hidden"></div>
        <div class="chat-options">${q.options.map(o => `<button class="chat-option-btn" onclick="selectOnboardingOption('${o}')">${o}</button>`).join('')}</div>`;
      wrap.appendChild(inner);
      msgs.appendChild(wrap);
      msgs.scrollTop = msgs.scrollHeight;
    } else {
      if (input) {
        input.disabled = false;
        input.placeholder = q.placeholder || '';
        input.focus();
      }
    }
  }, 600);
}

function selectOnboardingOption(value) {
  // remove option buttons
  document.querySelectorAll('.chat-options').forEach(el => el.closest('.msg')?.remove());
  addMessage(value, 'user');
  storeOnboardingAnswer(value);
}

function storeOnboardingAnswer(value) {
  const questions = ONBOARDING_QUESTIONS[currentLang];
  const field = questions[onboardingStep].field;

  if (field === 'skills') {
    userProfile.skills = value.split(',').map(s => s.trim()).filter(Boolean);
  } else {
    userProfile[field] = value;
  }

  // Disable input again between questions
  const input = document.getElementById('chat-input');
  const btn = document.getElementById('chat-send-btn');
  if (input) { input.disabled = true; input.value = ''; input.style.height = 'auto'; }
  if (btn) btn.disabled = true;

  onboardingStep++;
  updateOnboardingBar();

  if (onboardingStep < questions.length) {
    setTimeout(() => askOnboardingQuestion(onboardingStep), 800);
  } else {
    setTimeout(() => finishOnboarding(), 800);
  }
}

function finishOnboarding() {
  onboardingActive = false;
  updateOnboardingBar();

  // compute initials
  const parts = (userProfile.name || '?').trim().split(' ');
  userProfile.initials = parts.map(p => p[0]?.toUpperCase() || '').join('').slice(0, 2) || '?';

  // compute resume score
  let score = 30;
  if (userProfile.skills.length >= 3) score += 25;
  if (userProfile.skills.length >= 6) score += 10;
  if (userProfile.experience && userProfile.experience.length > 5) score += 20;
  if (userProfile.university) score += 10;
  if (userProfile.role) score += 5;
  userProfile.resumeScore = Math.min(99, score);

  userProfile.about = currentLang === 'ru'
    ? `Студент ${userProfile.university}, специализация — ${userProfile.specialization}. Хочу работать ${userProfile.role}. Ключевые навыки: ${userProfile.skills.slice(0, 4).join(', ')}.`
    : `${userProfile.university} студенті, мамандық — ${userProfile.specialization}. ${userProfile.role} болып жұмыс істегім келеді. Негізгі дағдылар: ${userProfile.skills.slice(0, 4).join(', ')}.`;

  // rebuild vacancies with skill matching
  rebuildVacancies();

  // enable chat
  const input = document.getElementById('chat-input');
  const btn = document.getElementById('chat-send-btn');
  if (input) { input.disabled = false; input.placeholder = T[currentLang].chatPlaceholder; }
  if (btn) btn.disabled = false;

  updateSidebarUser();
  updateResumeFromProfile();
  renderVacancies();

  const topV = vacancies[0];
  const topSkill = userProfile.skills[0] || 'React';
  const doneMsg = currentLang === 'ru'
    ? `✅ **Отлично, ${userProfile.name}!** Резюме готово.\n\n🎯 Топ вакансия для тебя: **${topV?.title}** в **${topV?.company}** — **${topV?.chance}%** совпадение.\n\nПерейди в раздел «Поиск вакансий» — там уже всё подобрано под тебя!`
    : `✅ **Тамаша, ${userProfile.name}!** Түйіндеме дайын.\n\n🎯 Сізге арналған үздік бос орын: **${topV?.title}** — **${topV?.chance}%** сәйкестік.\n\nҮздік бос орындарды «Бос орындар» бөлімінен қараңыз!`;

  addMessage(doneMsg, 'ai');

  // update sidebar profile bar
  updateProfileBars();
}

function updateSidebarUser() {
  const nameEl = document.getElementById('sidebar-user-name');
  const roleEl = document.getElementById('sidebar-user-role');
  const avEl = document.getElementById('sidebar-avatar');
  const topAvEl = document.getElementById('topbar-avatar');
  if (nameEl) nameEl.textContent = userProfile.name || (currentLang === 'ru' ? 'Новый пользователь' : 'Жаңа пайдаланушы');
  if (roleEl) roleEl.textContent = userProfile.role || T[currentLang].student;
  if (avEl) avEl.textContent = userProfile.initials || '?';
  if (topAvEl) topAvEl.textContent = userProfile.initials || '?';
}

function updateProfileBars() {
  const score = userProfile.resumeScore;
  const skillScore = Math.min(100, userProfile.skills.length * 14);
  const expScore = userProfile.experience?.length > 5 ? 60 : 20;
  setBar('bar-resume', score);
  setBar('bar-skills', skillScore);
  setBar('bar-exp', expScore);
}

function setBar(id, val) {
  const el = document.getElementById(id);
  if (el) el.style.width = val + '%';
}

function updateResumeFromProfile() {
  const fields = {
    'resume-display-name': userProfile.name || '—',
    'resume-display-role': userProfile.role || '—',
    'resume-display-uni': userProfile.university || '—',
    'resume-display-spec': userProfile.specialization || '—',
    'resume-display-exp': userProfile.experience || '—',
    'resume-display-about': userProfile.about || '—',
    'resume-display-salary': userProfile.salary || '—',
    'resume-score-value': userProfile.resumeScore || 0,
  };
  Object.entries(fields).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Skills chips
  const sc = document.getElementById('resume-skills-chips');
  if (sc && userProfile.skills.length) {
    const colors = ['', 'chip-gold', 'chip-green', '', 'chip-gold', 'chip-green'];
    sc.innerHTML = userProfile.skills.map((s, i) => `<span class="chip ${colors[i % colors.length]}">${s}</span>`).join('');
  }

  // Update SVG gauge
  const circle = document.getElementById('score-ring');
  if (circle) {
    const offset = 314 - (314 * (userProfile.resumeScore / 100));
    circle.setAttribute('stroke-dashoffset', offset);
  }

  // top matched vacancies
  const topList = document.getElementById('top-match-list');
  if (topList && vacancies.length) {
    topList.innerHTML = vacancies.slice(0, 3).map(v => `
      <div style="display:flex;align-items:center;gap:10px;font-size:13px">
        <span>${v.emoji}</span>
        <span style="flex:1">${v.title}</span>
        <span style="${v.chance >= 65 ? 'color:var(--green)' : v.chance >= 40 ? 'color:var(--yellow)' : 'color:var(--red)'};font-weight:700">${v.chance}%</span>
      </div>`).join('');
  }
}

/* ══════════════════════════════════════════
   ROUTER
══════════════════════════════════════════ */

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');
  currentPage = page;
  updateTopbarTitle();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTopbarTitle() {
  const t = T[currentLang];
  const map = {
    home: t.home, resume: t.resume, vacancies: t.vacancies,
    courses: t.courses, world: t.world, seeker: t.seeker, employer: t.employer
  };
  const el = document.getElementById('topbar-title');
  if (el) el.textContent = map[currentPage] || '';
}

/* ══════════════════════════════════════════
   LANGUAGE
══════════════════════════════════════════ */

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
  renderVacancies();
  renderCourses();
  renderWorldChart();
  updateTopbarTitle();
  updateSidebarUser();
}

function applyTranslations() {
  const t = T[currentLang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const val = el.dataset.t.split('.').reduce((o, k) => o?.[k], t);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-tp]').forEach(el => {
    const val = el.dataset.tp.split('.').reduce((o, k) => o?.[k], t);
    if (val !== undefined && !el.disabled) el.placeholder = val;
  });
}

/* ══════════════════════════════════════════
   AI CHAT
══════════════════════════════════════════ */

function getTime() { return new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }); }

function addMessage(content, role) {
  const msgs = document.getElementById('chat-messages');
  const isUser = role === 'user';
  const div = document.createElement('div');
  div.className = `msg msg-${isUser ? 'user' : 'ai'}`;
  div.innerHTML = `
    <div class="msg-avatar ${isUser ? 'usr-av' : 'ai-av'}">${isUser ? (userProfile.initials || '?') : '🤖'}</div>
    <div>
      <div class="msg-bubble">${formatMsg(content)}</div>
      <div class="msg-time">${getTime()}</div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function formatMsg(t) {
  return String(t).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg msg-ai'; div.id = 'typing-indicator';
  div.innerHTML = `<div class="msg-avatar ai-av">🤖</div>
    <div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
}
function hideTyping() { document.getElementById('typing-indicator')?.remove(); }

function sendMessage() {
  if (onboardingActive) { handleOnboardingInput(); return; }
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = ''; input.style.height = 'auto';
  showTyping();
  const replies = aiReplies[currentLang];
  const raw = replies[Math.floor(Math.random() * replies.length)];
  const topJob = vacancies[0]?.title || 'Frontend Developer';
  const topSkill = userProfile.skills[0] || 'JavaScript';
  const reply = raw.replace('{topJob}', topJob).replace('{topSkill}', topSkill)
    .replace('{score}', userProfile.resumeScore || 72)
    .replace('{salary}', userProfile.salary || 'от 300 000 ₸');
  setTimeout(() => { hideTyping(); addMessage(reply, 'ai'); }, 1600 + Math.random() * 900);
}

function handleOnboardingInput() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = ''; input.style.height = 'auto';
  storeOnboardingAnswer(text);
}

function sendPrompt(text) {
  if (onboardingActive) return;
  document.getElementById('chat-input').value = text;
  sendMessage();
}

/* ══════════════════════════════════════════
   VACANCIES
══════════════════════════════════════════ */

function chanceClass(p) { return p >= 65 ? 'high' : p >= 40 ? 'mid' : 'low'; }
function chanceBadgeClass(p) { return p >= 65 ? 'chance-high' : p >= 40 ? 'chance-mid' : 'chance-low'; }
function pctClass(p) { return p >= 65 ? 'pct-high' : p >= 40 ? 'pct-mid' : 'pct-low'; }

function setRiskMode(mode) {
  riskMode = mode;
  document.getElementById('safe-btn').classList.toggle('safe-active', mode === 'safe');
  document.getElementById('risk-btn').classList.toggle('risk-active', mode === 'risk');
  renderVacancies();
}

function renderVacancies() {
  const t = T[currentLang];
  const searchVal = (document.getElementById('vacancy-search')?.value || '').toLowerCase();
  const container = document.getElementById('vacancies-grid');
  if (!container) return;

  const filtered = vacancies.filter(v => {
    const ms = !searchVal || v.title.toLowerCase().includes(searchVal) || v.company.toLowerCase().includes(searchVal);
    const mr = riskMode === 'risk' || !v.risky;
    return ms && mr;
  });

  const typeMap = { fulltime: t.fullTime, parttime: t.partTime, remote: t.remote, hybrid: t.hybrid };

  container.innerHTML = filtered.map(v => {
    const cc = chanceClass(v.chance);
    return `<div class="vacancy-card ${v.risky ? 'risky' : 'safe'}">
      <div class="vacancy-top">
        <div class="company-logo">${v.emoji}</div>
        <div class="vacancy-info">
          <div class="vacancy-title">${v.title}</div>
          <div class="vacancy-company">${v.company}</div>
        </div>
        <div class="vacancy-salary">${v.salary}</div>
      </div>
      <div class="chips-row">
        <span class="chip">${v.location}</span>
        <span class="chip ${v.risky ? 'chip-red' : 'chip-green'}">${typeMap[v.type] || v.type}</span>
        ${v.risky ? '<span class="chip chip-red">🔥 Риск</span>' : '<span class="chip chip-green">🛡️ Надёжно</span>'}
      </div>
      <div class="chance-meter">
        <div class="chance-row">
          <span class="chance-label">${t.chanceLabel}</span>
          <span class="chance-pct ${pctClass(v.chance)}">${v.chance}%</span>
        </div>
        <div class="chance-bar-wrap">
          <div class="chance-fill ${cc}" style="width:0%" data-pct="${v.chance}"></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
          <span class="chance-badge ${chanceBadgeClass(v.chance)}">🎯 ${v.chance}%</span>
          <button class="btn btn-primary btn-sm" onclick="handleApply(${v.id})">${t.applyBtn}</button>
        </div>
      </div>
    </div>`;
  }).join('');

  setTimeout(() => {
    document.querySelectorAll('.chance-fill[data-pct]').forEach(el => { el.style.width = el.dataset.pct + '%'; });
  }, 50);
}

function handleApply(id) {
  const v = vacancies.find(x => x.id === id);
  if (!v) return;
  showToast(currentLang === 'ru'
    ? `✅ Отклик отправлен в ${v.company}!`
    : `✅ ${v.company} компаниясына өтінім жіберілді!`);
}

/* ══════════════════════════════════════════
   COURSES
══════════════════════════════════════════ */

function renderCourses() {
  const t = T[currentLang];
  const c = document.getElementById('courses-grid');
  if (!c) return;
  c.innerHTML = courses.map(co => {
    const enrolled = enrolledCourses.has(co.id);
    return `<div class="course-card">
      <div class="course-banner" style="background:${co.gradient}">${co.emoji}</div>
      <div class="course-body">
        <div class="course-title">${co.title}</div>
        <div class="chips-row"><span class="chip">${co.level}</span><span class="chip chip-gold">${co.price}</span></div>
        <div class="course-meta"><span>⏱ ${co.duration}</span></div>
        <div class="course-relevance">
          <div class="progress-label"><span>${t.relevanceLabel}</span><span class="${pctClass(co.relevance)}">${co.relevance}%</span></div>
          <div class="progress-bar"><div class="progress-fill fill-violet" style="width:${co.relevance}%"></div></div>
        </div>
        <div style="margin-top:14px">
          <button class="btn ${enrolled ? 'btn-ghost' : 'btn-primary'} btn-sm" onclick="toggleEnroll(${co.id})">
            ${enrolled ? (t.enrolled || '✓ Записан') : t.enroll}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleEnroll(id) {
  enrolledCourses.has(id) ? enrolledCourses.delete(id) : enrolledCourses.add(id);
  if (enrolledCourses.has(id)) {
    const co = courses.find(c => c.id === id);
    showToast(currentLang === 'ru' ? `🎉 Вы записались на «${co.title}»!` : `🎉 «${co.title}» курсына тіркелдіңіз!`);
  }
  renderCourses();
}

/* ══════════════════════════════════════════
   WORLD CHART
══════════════════════════════════════════ */

function renderWorldChart() {
  const t = T[currentLang];
  const wc = document.getElementById('world-chart');
  if (wc) {
    wc.innerHTML = worldData.map(r => `
      <div class="chart-row">
        <div class="chart-label">${r.label}</div>
        <div class="chart-bar-wrap">
          <div class="chart-bar-fill" style="width:0%;background:${r.color}" data-w="${r.pct}%">${r.label}</div>
        </div>
        <div class="chart-count">${r.count}</div>
      </div>`).join('');
  }

  const wm = document.getElementById('world-map');
  if (wm) {
    wm.innerHTML = countries.map(c => `
      <div class="map-card">
        <div class="map-flag">${c.flag}</div>
        <div class="map-country">${c.name}</div>
        <div class="map-jobs">${c.jobs} ${t.jobs}</div>
        <div class="map-growth">${c.growth} ${t.growth}</div>
      </div>`).join('');
  }

  setTimeout(() => {
    document.querySelectorAll('.chart-bar-fill[data-w]').forEach(el => { el.style.width = el.dataset.w; });
  }, 50);
}

/* ══════════════════════════════════════════
   CABINET PAGES
══════════════════════════════════════════ */

function renderSeekerCabinet() {
  const t = T[currentLang];
  const c = document.getElementById('applied-list');
  if (!c) return;
  const statusClass = { pending: 'status-pending', viewed: 'status-viewed', rejected: 'status-rejected', accepted: 'status-accepted' };
  const statusText = { pending: t.statusPending, viewed: t.statusViewed, rejected: t.statusRejected, accepted: t.statusAccepted };
  c.innerHTML = appliedJobs.map(j => {
    const chance = vacancies.find(v => v.title === j.title)?.chance || Math.floor(40 + Math.random() * 50);
    return `<div class="applied-row">
      <div class="applied-company-icon">${j.emoji}</div>
      <div class="applied-info"><div class="applied-title">${j.title}</div><div class="applied-company">${j.company} · ${j.date}</div></div>
      <div class="chance-badge ${chanceBadgeClass(chance)}">${chance}%</div>
      <span class="status-badge ${statusClass[j.status]}">${statusText[j.status]}</span>
    </div>`;
  }).join('');
}

function renderEmployerCabinet() {
  const t = T[currentLang];
  const c = document.getElementById('employer-vacancies');
  if (!c) return;
  c.innerHTML = employerVacancies.map(v => `
    <div class="emp-vacancy-row">
      <div style="font-size:24px">${v.emoji}</div>
      <div class="emp-vacancy-title">${v.title}</div>
      <div class="emp-applicant-count">👥 ${v.applicants} ${t.applicants}</div>
      <div class="emp-applicant-count">👁 ${v.views}</div>
      <span class="chip ${v.status === 'active' ? 'chip-green' : 'chip-red'}">${v.status === 'active' ? '🟢 Активно' : '⏸ Пауза'}</span>
      <button class="btn btn-ghost btn-sm">${t.viewCandidates}</button>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   MISC
══════════════════════════════════════════ */

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div'); t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:28px;right:28px;z-index:9999;background:rgba(124,58,237,0.95);backdrop-filter:blur(20px);color:white;padding:14px 22px;border-radius:12px;font-size:14px;font-weight:500;max-width:360px;border:1px solid rgba(168,85,247,0.5);box-shadow:0 8px 32px rgba(124,58,237,0.3);transform:translateY(100px);opacity:0;transition:all 0.35s cubic-bezier(0.4,0,0.2,1);font-family:Inter,sans-serif;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.transform = 'translateY(0)'; t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.transform = 'translateY(100px)'; t.style.opacity = '0'; }, 3500);
}

function setTab(page, tab) {
  document.querySelectorAll(`#page-${page} .tab-btn`).forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll(`#page-${page} .tab-content`).forEach(tc => tc.classList.toggle('hidden', tc.dataset.tab !== tab));
}

function animateCount(el, target) {
  let v = 0; const step = target / 60;
  const f = () => { v = Math.min(v + step, target); el.textContent = Math.floor(v).toLocaleString(); if (v < target) requestAnimationFrame(f); };
  requestAnimationFrame(f);
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Nav
  document.querySelectorAll('.nav-item').forEach(i => i.addEventListener('click', () => navigateTo(i.dataset.page)));
  // Lang
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  // Risk toggle
  document.getElementById('safe-btn')?.addEventListener('click', () => setRiskMode('safe'));
  document.getElementById('risk-btn')?.addEventListener('click', () => setRiskMode('risk'));
  // Search
  document.getElementById('vacancy-search')?.addEventListener('input', renderVacancies);
  // Chat
  document.getElementById('chat-send-btn')?.addEventListener('click', sendMessage);
  document.getElementById('chat-input')?.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
  document.getElementById('chat-input')?.addEventListener('input', function () { this.style.height = 'auto'; this.style.height = Math.min(this.scrollHeight, 120) + 'px'; });
  // Quick prompts
  document.querySelectorAll('.prompt-chip').forEach(c => c.addEventListener('click', () => sendPrompt(c.textContent.trim())));

  // Init renders
  rebuildVacancies();
  renderVacancies();
  renderCourses();
  renderWorldChart();
  renderSeekerCabinet();
  renderEmployerCabinet();
  applyTranslations();

  // Counters
  [['stat-vacancies', 12480], ['stat-employers', 930], ['stat-students', 45600], ['stat-responses', 8210]].forEach(([id, v]) => {
    const el = document.getElementById(id); if (el) animateCount(el, v);
  });

  // Show welcome overlay
  showWelcome();
});
