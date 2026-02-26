'use strict';

/* ══════════════════════════════════════════
   FINDJOB — MBTI PLATFORM  |  app.js
══════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const T = {
  ru: {
    navHome: 'Главная', navResume: 'Резюме', navCourses: 'Курсы', navWorld: 'Мировая арена', navQuiz: '🧠 Анкета',
    heroTag: '🇰🇿 Платформа для граждан Казахстана',
    heroTitle: 'Работа под\nтвою личность',
    heroSub: 'Пройди тест личности MBTI и получи список вакансий, где именно ты — идеальный кандидат.',
    heroCta1: 'Пройти тест', heroCta2: 'Создать резюме',
    hstat1: 'типов личности', hstat2: 'вакансий', hstat3: 'точность матча',
    howLabel: 'КАК ЭТО РАБОТАЕТ', howTitle: 'Три шага до идеальной работы',
    step1t: 'Тест личности', step1d: 'Проходишь 16 вопросов MBTI — узнаёшь свой тип.',
    step2t: 'Матч с вакансиями', step2d: 'Алгоритм находит вакансии с наибольшим совпадением.',
    step3t: 'Откликнуться', step3d: 'Отправляешь резюме и получаешь приглашения.',
    typesLabel: '16 ТИПОВ ЛИЧНОСТИ', typesTitle: 'Найди себя',
    empBannerTitle: 'Найди сотрудника\nс нужным характером',
    empBannerDesc: 'Укажи желаемые черты личности — система подберёт кандидатов с максимальным совпадением.',
    empBannerCta: 'Найти кандидатов',
    footerTag: 'Работа под твою личность · Казахстан 2025',
    resumeHeroTitle: 'Резюме под твой тип', resumeHeroSub: 'AI-помощник создаёт резюме с акцентом на твои сильные стороны по MBTI',
    resumePersonal: '👤 Личные данные', resumeEdu: '🎓 Образование', resumeSkills: '⚡ Навыки', resumeAbout: '📝 О себе',
    rfName: 'Имя и фамилия', rfRole: 'Желаемая должность', rfPhone: 'Телефон', rfCity: 'Город',
    rfUni: 'Университет', rfSpec: 'Специальность', rfYear: 'Год окончания',
    rfSkillsHint: 'Через запятую',
    coursesHeroTitle: 'Прокачай себя', coursesHeroSub: 'Бесплатные, платные и государственные курсы',
    coursesAll: 'Все', coursesFree: '🆓 Бесплатные', coursesPaid: '💰 Платные', coursesState: '🏛️ Государственные',
    worldHeroTitle: 'Работай на международном уровне', worldHeroSub: 'Стратегия сотрудничества с иностранными компаниями для граждан РК',
    stratLabel: 'СТРАТЕГИЯ', stratTitle: 'Как выйти на международный рынок',
    strat1t: 'Определи тип личности', strat1d: 'Пройди MBTI — иностранные HR активно используют его при найме.',
    strat2t: 'Подтверди квалификацию', strat2d: 'Международные сертификаты (AWS, Google, CFA) открывают двери в 50+ стран.',
    strat3t: 'Оформи визу / релокацию', strat3d: 'Казахстан имеет соглашения о безвизовом въезде с 70+ странами.',
    strat4t: 'Откликнись через FindJob', strat4d: 'Твой MBTI-профиль и резюме уже готовы — просто нажми "Откликнуться".',
    quizHeroTitle: 'Кто ты?', quizHeroSub: 'Выбери режим и получи персональный подбор вакансий',
    modeWorker: 'Я ищу работу', modeWorkerDesc: 'Пройди тест MBTI → узнай свой тип → получи вакансии',
    modeWorkerBtn: 'Начать тест', modeEmployer: 'Я ищу сотрудника',
    modeEmployerDesc: 'Укажи желаемые черты → получи список подходящих кандидатов',
    modeEmployerBtn: 'Подобрать',
    empPickTitle: 'Какой характер нужен сотруднику?',
    findCandidates: '🎯 Найти кандидатов',
    matchedVac: 'ПОДХОДЯЩИЕ ВАКАНСИИ', matchedCand: 'ПОДХОДЯЩИЕ КАНДИДАТЫ',
    retakeBtn: 'Пройти заново',
    applyBtn: 'Откликнуться',
  },
  kz: {
    navHome: 'Басты бет', navResume: 'Түйіндеме', navCourses: 'Курстар', navWorld: 'Әлемдік арена', navQuiz: '🧠 Анкета',
    heroTag: '🇰🇿 Қазақстан азаматтары үшін платформа',
    heroTitle: 'Жұмысты тұлғаңа\nсай тап',
    heroSub: 'MBTI тестінен өт және сенің идеал кандидат болатын вакансиялар тізімін ал.',
    heroCta1: 'Тест тапсыру', heroCta2: 'Түйіндеме жасау',
    hstat1: 'тұлға типі', hstat2: 'вакансия', hstat3: 'сәйкестік дәлдігі',
    howLabel: 'ҚАЛАЙ ЖҰМЫС ІСТЕЙДІ', howTitle: 'Тамаша жұмысқа 3 қадам',
    step1t: 'Тұлға тесті', step1d: '16 MBTI сұрақтан өт — типіңді біл.',
    step2t: 'Вакансияларға сәйкестік', step2d: 'Алгоритм ең жоғары сәйкестікті табады.',
    step3t: 'Өтінім жіберу', step3d: 'Түйіндеме жібер — шақыру ал.',
    typesLabel: '16 ТҰЛҒА ТИПІ', typesTitle: 'Өзіңді тап',
    empBannerTitle: 'Керек мінезді\nқызметкер тап',
    empBannerDesc: 'Қажетті тұлға белгілерін көрсет — жүйе ең жоғары сәйкес кандидаттарды ұсынады.',
    empBannerCta: 'Кандидаттар табу',
    footerTag: 'Жұмысты тұлғаңа сай тап · Қазақстан 2025',
    resumeHeroTitle: 'Типіңе сай түйіндеме', resumeHeroSub: 'AI-көмекші MBTI негізінде күшті жақтарыңды ерекшелейді',
    resumePersonal: '👤 Жеке деректер', resumeEdu: '🎓 Білім', resumeSkills: '⚡ Дағдылар', resumeAbout: '📝 Өзім туралы',
    rfName: 'Аты-жөні', rfRole: 'Қалаған лауазым', rfPhone: 'Телефон', rfCity: 'Қала',
    rfUni: 'Университет', rfSpec: 'Мамандық', rfYear: 'Бітіру жылы', rfSkillsHint: 'Үтірмен бөліп',
    coursesHeroTitle: 'Өзіңді дамыт', coursesHeroSub: 'Тегін, ақылы және мемлекеттік курстар',
    coursesAll: 'Барлығы', coursesFree: '🆓 Тегін', coursesPaid: '💰 Ақылы', coursesState: '🏛️ Мемлекеттік',
    worldHeroTitle: 'Халықаралық деңгейде жұмысша', worldHeroSub: 'ҚР азаматтары үшін шетел компанияларымен ынтымақтастық стратегиясы',
    stratLabel: 'СТРАТЕГИЯ', stratTitle: 'Халықаралық нарыққа қалай шығуға болады',
    strat1t: 'Тұлға типін анықта', strat1d: 'MBTI тест тапсыр — шетелдік HR белсенді қолданады.',
    strat2t: 'Квалификацияны растат', strat2d: 'Халықаралық сертификаттар 50+ елдің есігін ашады.',
    strat3t: 'Виза / релокация рәсімде', strat3d: 'Қазақстанның 70+ елмен визасыз режим келісімі бар.',
    strat4t: 'FindJob арқылы өтінім жібер', strat4d: 'MBTI-профилің және түйіндемең дайын.',
    quizHeroTitle: 'Сен кімсің?', quizHeroSub: 'Режимді таңда және жеке вакансия таңдауын ал',
    modeWorker: 'Мен жұмыс іздеймін', modeWorkerDesc: 'MBTI тест → типіңді біл → сәйкес вакансиялар',
    modeWorkerBtn: 'Тест бастау', modeEmployer: 'Мен қызметкер іздеймін',
    modeEmployerDesc: 'Қажетті белгілерді көрсет → сәйкес кандидаттар тізімін ал',
    modeEmployerBtn: 'Таңдау',
    empPickTitle: 'Қызметкерден қандай мінез керек?',
    findCandidates: '🎯 Кандидаттар табу',
    matchedVac: 'СӘЙКЕС ВАКАНСИЯЛАР', matchedCand: 'СӘЙКЕС КАНДИДАТТАР',
    retakeBtn: 'Қайта тапсыру', applyBtn: 'Өтінім жіберу',
  },
};

/* ── STATE ── */
let lang = 'ru';
let currentPage = 'home';
let quizMode = 'worker';
let quizAnswers = [];
let quizCurrentQ = 0;
let mbtiResult = null;

/* ── MBTI QUESTIONS ── */
const MBTI_QUESTIONS = [
  // E/I (0-3)
  { dim: 'EI', text: 'На вечеринке ты обычно…', a: 'Знакомишься с новыми людьми и наслаждаешься общением', b: 'Предпочитаешь общаться с теми, кого уже знаешь' },
  { dim: 'EI', text: 'После напряжённого дня тебе хочется…', a: 'Встретиться с друзьями, чтобы расслабиться', b: 'Побыть в одиночестве и восстановить силы' },
  { dim: 'EI', text: 'На работе тебе комфортнее…', a: 'Работать в команде и обсуждать идеи вслух', b: 'Работать самостоятельно и думать в тишине' },
  { dim: 'EI', text: 'Ты принимаешь решения лучше, когда…', a: 'Проговариваешь их вслух с кем-то', b: 'Обдумываешь их наедине с собой' },
  // S/N (4-7)
  { dim: 'SN', text: 'При изучении нового ты предпочитаешь…', a: 'Конкретные факты и практические примеры', b: 'Общие концепции и теоретические идеи' },
  { dim: 'SN', text: 'Тебя больше интересует…', a: 'То, что реально существует и уже проверено', b: 'То, что могло бы быть и что ещё возможно' },
  { dim: 'SN', text: 'В работе ты больше ориентируешься на…', a: 'Детали и точность исполнения', b: 'Общую картину и будущее видение' },
  { dim: 'SN', text: 'Ты доверяешь больше…', a: 'Своему опыту и наблюдениям', b: 'Своей интуиции и предчувствиям' },
  // T/F (8-11)
  { dim: 'TF', text: 'Принимая важное решение, ты опираешься на…', a: 'Логику и объективный анализ плюсов и минусов', b: 'Ценности и то, как это затронет людей' },
  { dim: 'TF', text: 'Когда друг приходит с проблемой, ты…', a: 'Сразу ищешь решение и даёшь совет', b: 'Сначала выслушиваешь и проявляешь сочувствие' },
  { dim: 'TF', text: 'Критику тебе легче принять, когда она…', a: 'Справедлива и аргументирована логически', b: 'Подана мягко и с уважением к твоим чувствам' },
  { dim: 'TF', text: 'В конфликте ты чаще…', a: 'Ищешь объективно правильное решение', b: 'Стараешься сохранить гармонию и отношения' },
  // J/P (12-15)
  { dim: 'JP', text: 'Свой день ты предпочитаешь…', a: 'Планировать заранее и придерживаться плана', b: 'Оставлять открытым и реагировать по ситуации' },
  { dim: 'JP', text: 'Дедлайны для тебя…', a: 'Чёткий ориентир, который помогает организоваться', b: 'Что-то, что часто подталкивает к работе в последний момент' },
  { dim: 'JP', text: 'Незавершённые дела тебя…', a: 'Беспокоят — хочется закрыть все хвосты', b: 'Не особо нервируют — всё придёт в своё время' },
  { dim: 'JP', text: 'Ты чувствуешь себя лучше, когда…', a: 'Всё решено и определено заранее', b: 'Есть свобода выбора и простор для манёвра' },
];

/* ── 16 MBTI TYPES ── */
const MBTI_TYPES = {
  INTJ: { name: 'Стратег', color: '#6366F1', traits: ['Стратег', 'Перфекционист', 'Независимый'], desc: 'Архитектор планов. Видишь мир как систему, которую можно улучшить. Редкий тип — умный, решительный, требовательный к себе.' },
  INTP: { name: 'Учёный', color: '#8B5CF6', traits: ['Аналитик', 'Изобретатель', 'Логик'], desc: 'Мастер теорий. Любишь решать сложные задачи и искать закономерности. Логика — твой главный инструмент.' },
  ENTJ: { name: 'Командир', color: '#7C3AED', traits: ['Лидер', 'Решительный', 'Амбициозный'], desc: 'Прирождённый лидер. Берёшь на себя ответственность и ведёшь других к цели. Неэффективность тебя раздражает.' },
  ENTP: { name: 'Полемист', color: '#A855F7', traits: ['Новатор', 'Спорщик', 'Творческий'], desc: 'Дьявол адвокат. Любишь идеи, дебаты и нестандартные решения. Скучные процедуры — не для тебя.' },
  INFJ: { name: 'Активист', color: '#EC4899', traits: ['Идеалист', 'Эмпатичный', 'Дальновидный'], desc: 'Редкий мечтатель с принципами. Видишь глубину в людях и стремишься сделать мир лучше.' },
  INFP: { name: 'Посредник', color: '#F43F5E', traits: ['Добрый', 'Творческий', 'Идеалист'], desc: 'Романтик с ценностями. Ищешь смысл во всём. Верен своим убеждениям и хочешь помогать другим.' },
  ENFJ: { name: 'Тренер', color: '#EF4444', traits: ['Харизматичный', 'Лидер', 'Вдохновитель'], desc: 'Вдохновляющий лидер. Умеешь видеть потенциал в людях и помогать им раскрыться.' },
  ENFP: { name: 'Борец', color: '#F59E0B', traits: ['Энтузиаст', 'Творческий', 'Общительный'], desc: 'Вечный оптимист. Энергичный, творческий и полный идей. Плохо переносишь рутину.' },
  ISTJ: { name: 'Администратор', color: '#10B981', traits: ['Надёжный', 'Ответственный', 'Точный'], desc: 'Столп общества. Честный, обязательный, методичный. На тебя всегда можно положиться.' },
  ISFJ: { name: 'Защитник', color: '#06B6D4', traits: ['Заботливый', 'Преданный', 'Терпеливый'], desc: 'Тихий страж. Добросовестный и внимательный к нуждам других. Цени близких людей.' },
  ESTJ: { name: 'Менеджер', color: '#0EA5E9', traits: ['Организатор', 'Прямой', 'Дисциплинированный'], desc: 'Администратор от природы. Умеешь организовать людей и процессы. Правила и порядок важны.' },
  ESFJ: { name: 'Консул', color: '#14B8A6', traits: ['Дружелюбный', 'Заботливый', 'Общительный'], desc: 'Народный человек. Умеешь создавать гармонию вокруг себя. Нуждается в признании.' },
  ISTP: { name: 'Виртуоз', color: '#84CC16', traits: ['Практичный', 'Спокойный', 'Мастер'], desc: 'Мастер инструментов. Любишь разбираться как всё работает. Кризисные ситуации — твоя стихия.' },
  ISFP: { name: 'Артист', color: '#22C55E', traits: ['Чувствительный', 'Добрый', 'Художник'], desc: 'Тихий экспериментатор. Живёт настоящим моментом. Ценишь красоту и свободу.' },
  ESTP: { name: 'Делец', color: '#EAB308', traits: ['Смелый', 'Прагматик', 'Энергичный'], desc: 'Живёт здесь и сейчас. Деятельный, харизматичный и умеющий рисковать.' },
  ESFP: { name: 'Развлекатель', color: '#F97316', traits: ['Весёлый', 'Спонтанный', 'Дружелюбный'], desc: 'Жизнь — вечеринка. Любишь людей, веселье и яркие моменты. Прирождённый шоумен.' },
};

/* ── MBTI → PROFESSIONS MAPPING ── */
const TYPE_VACANCIES = {
  INTJ: ['Backend Developer', 'Data Scientist', 'Системный архитектор', 'Стратегический аналитик', 'Инженер DevOps', 'Продуктовый менеджер', 'Консультант по стратегии'],
  INTP: ['Data Scientist', 'Machine Learning инженер', 'Научный сотрудник', 'Backend Developer', 'Аналитик данных', 'Программист', 'Технический писатель'],
  ENTJ: ['CEO / Директор', 'Менеджер проекта', 'Руководитель отдела', 'Бизнес-аналитик', 'Консультант по управлению', 'Продуктовый менеджер'],
  ENTP: ['Продуктовый менеджер', 'Предприниматель', 'Консультант', 'Frontend Developer', 'UX-исследователь', 'Маркетолог', 'Стартап-основатель'],
  INFJ: ['Психолог', 'HR-менеджер', 'UX-дизайнер', 'Педагог', 'Контент-стратег', 'Социальный работник', 'Коуч'],
  INFP: ['UX/UI дизайнер', 'Копирайтер', 'Педагог', 'Графический дизайнер', 'Психолог', 'Иллюстратор', 'Контент-менеджер'],
  ENFJ: ['HR-менеджер', 'Тренер / Коуч', 'PR-менеджер', 'Педагог', 'Event-менеджер', 'Руководитель команды'],
  ENFP: ['SMM-менеджер', 'Маркетолог', 'Копирайтер', 'PR-специалист', 'UX-исследователь', 'Журналист', 'Рекрутер'],
  ISTJ: ['Бухгалтер', 'Аудитор', 'Юрист', 'IT-администратор', 'Аналитик данных', 'Госслужащий', 'Офицер безопасности'],
  ISFJ: ['Медсестра/медбрат', 'Социальный работник', 'Офис-менеджер', 'Педагог начальных классов', 'HR-ассистент', 'Администратор'],
  ESTJ: ['Менеджер по продажам', 'HR-директор', 'Администратор', 'Операционный директор', 'Руководитель проекта', 'Юрист'],
  ESFJ: ['Менеджер по работе с клиентами', 'Медик', 'Педагог', 'Официант/хостес', 'Event-менеджер', 'Рекрутер'],
  ISTP: ['Инженер-механик', 'Программист', 'DevOps-инженер', 'Автомеханик', 'Аналитик безопасности', 'Пилот', 'Техник'],
  ISFP: ['Графический дизайнер', 'Фотограф', 'Флорист', 'Дизайнер интерьера', 'Повар', 'Ветеринар', 'Арт-директор'],
  ESTP: ['Менеджер продаж', 'Предприниматель', 'Брокер', 'Детектив', 'Пожарный', 'Военный', 'Event-менеджер'],
  ESFP: ['Актёр', 'Event-менеджер', 'Турагент', 'Фотограф', 'Стилист', 'Бариста', 'SMM-специалист'],
};

/* ── COURSES DATA ── */
const COURSES = [
  { type: 'free', name: 'Python для начинающих', platform: 'Stepik', dur: '40 часов', cat: 'IT', url: 'https://stepik.org' },
  { type: 'free', name: 'Web-разработка с нуля', platform: 'freeCodeCamp', dur: '300 часов', cat: 'IT', url: 'https://freecodecamp.org' },
  { type: 'free', name: 'SQL для аналитиков', platform: 'Khan Academy', dur: '20 часов', cat: 'Данные', url: 'https://khanacademy.org' },
  { type: 'free', name: 'Google Data Analytics', platform: 'Coursera (аудит)', dur: '6 мес.', cat: 'Данные', url: 'https://coursera.org' },
  { type: 'free', name: 'Figma UI/UX Design', platform: 'YouTube (официал.)', dur: '10 часов', cat: 'Дизайн', url: 'https://youtube.com' },
  { type: 'free', name: 'Казахский язык онлайн', platform: 'Soyle.kz', dur: 'Свободно', cat: 'Язык', url: 'https://soyle.kz' },
  { type: 'paid', name: 'AWS Solutions Architect', platform: 'A Cloud Guru', dur: '40 часов', cat: 'Cloud', url: 'https://acloudguru.com' },
  { type: 'paid', name: 'React & Next.js Pro', platform: 'Udemy', dur: '52 часа', cat: 'IT', url: 'https://udemy.com' },
  { type: 'paid', name: 'CFA Level 1 Prep', platform: 'Kaplan Schweser', dur: '6 мес.', cat: 'Финансы', url: 'https://schweser.com' },
  { type: 'paid', name: 'IELTS Academic 7.0+', platform: 'British Council KZ', dur: '3 мес.', cat: 'Язык', url: 'https://britishcouncil.kz' },
  { type: 'paid', name: 'Product Management', platform: 'ProductStar', dur: '4 мес.', cat: 'Продукт', url: 'https://productstar.ru' },
  { type: 'paid', name: 'Digital Marketing Pro', platform: 'TexTerra Академия', dur: '3 мес.', cat: 'Маркетинг', url: 'https://texterra.ru' },
  { type: 'state', name: 'IT-специалист (МЦРО)', platform: 'МЦРО / Fintech Hub', dur: '3 мес.', cat: 'IT', url: 'https://fintekhub.kz' },
  { type: 'state', name: 'Цифровые навыки (Болашак)', platform: 'Болашак', dur: '6 нед.', cat: 'Digital', url: 'https://bolashak.gov.kz' },
  { type: 'state', name: 'Бесплатные курсы ЦЗН', platform: 'Центры занятости', dur: 'До 3 мес.', cat: 'Разное', url: 'https://enbek.kz' },
  { type: 'state', name: 'Английский (eGov)', platform: 'eGov.kz / Dualingo', dur: 'Свободно', cat: 'Язык', url: 'https://egov.kz' },
  { type: 'state', name: 'Бухгалтерский учёт (ЦЗН)', platform: 'Центр занятости', dur: '2 мес.', cat: 'Финансы', url: 'https://enbek.kz' },
  { type: 'state', name: 'STEM-лагерь (НИШ)', platform: 'НИШ Казахстан', dur: '2 нед.', cat: 'Наука', url: 'https://nis.edu.kz' },
];

/* ── WORLD DATA ── */
const WORLD_CARDS = [
  { flag: '🇩🇪', country: 'Германия', jobs: '12 500+', growth: '+18%', desc: 'Высокий спрос на IT-специалистов и инженеров. Программа Blue Card для квалифицированных специалистов.', tags: ['Backend', 'Инженер', 'Машиностроение'] },
  { flag: '🇦🇪', country: 'ОАЭ / Дубай', jobs: '8 200+', growth: '+32%', desc: 'Быстрорастущий хаб для финтех, маркетинга и управления. Безналоговый доход.', tags: ['Финтех', 'Маркетинг', 'HR'] },
  { flag: '🇨🇦', country: 'Канада', jobs: '15 000+', growth: '+22%', desc: 'Express Entry и провинциальные программы. Высокий спрос на медиков, IT и строителей.', tags: ['IT', 'Медицина', 'Строитель'] },
  { flag: '🇵🇱', country: 'Польша', jobs: '9 800+', growth: '+15%', desc: 'Ближайший рынок с простой релокацией. IT-доходы сопоставимы с Западной Европой.', tags: ['IT', 'Финансы', 'Логистика'] },
  { flag: '🇳🇱', country: 'Нидерланды', jobs: '6 300+', growth: '+20%', desc: 'Европейская штаб-квартира крупнейших tech-компаний. HSMP-виза для специалистов.', tags: ['Data', 'Product', 'Design'] },
  { flag: '🇰🇷', country: 'Южная Корея', jobs: '4 100+', growth: '+28%', desc: 'Программы K-Move для молодых специалистов. Рост в IT и производстве.', tags: ['IT', 'Производство', 'Анимация'] },
];

/* ── DEMO CANDIDATES (for employer mode) ── */
const DEMO_CANDIDATES = [
  { name: 'Алихан М.', initials: 'АМ', type: 'INTJ', uni: 'КазНТУ', role: 'Backend Dev', scores: { EI: 20, SN: 75, TF: 80, JP: 85 } },
  { name: 'Динара С.', initials: 'ДС', type: 'ENFP', uni: 'МУИТ', role: 'SMM-менеджер', scores: { EI: 85, SN: 70, TF: 35, JP: 30 } },
  { name: 'Нурлан А.', initials: 'НА', type: 'ISTJ', uni: 'КазГЮУ', role: 'Бухгалтер', scores: { EI: 25, SN: 20, TF: 80, JP: 90 } },
  { name: 'Мадина И.', initials: 'МИ', type: 'INFP', uni: 'МУИТ', role: 'UX-дизайнер', scores: { EI: 30, SN: 70, TF: 25, JP: 35 } },
  { name: 'Тимур Ж.', initials: 'ТЖ', type: 'ENTP', uni: 'КазНУ', role: 'Продакт-менеджер', scores: { EI: 80, SN: 75, TF: 65, JP: 25 } },
  { name: 'Зарина Н.', initials: 'ЗН', type: 'ESFJ', uni: 'КИМЭП', role: 'HR-менеджер', scores: { EI: 80, SN: 30, TF: 25, JP: 85 } },
  { name: 'Даурен С.', initials: 'ДС', type: 'ISTP', uni: 'АУЭС', role: 'DevOps-инженер', scores: { EI: 20, SN: 25, TF: 80, JP: 35 } },
  { name: 'Айгерим Б.', initials: 'АБ', type: 'ENFJ', uni: 'НУ', role: 'Тренер/Коуч', scores: { EI: 85, SN: 65, TF: 30, JP: 80 } },
];

/* ══════════════════════════════════════════
   ROUTING
══════════════════════════════════════════ */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById('page-' + page);
  if (sec) sec.classList.add('active');
  const link = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (link) link.classList.add('active');
  currentPage = page;
  window.scrollTo(0, 0);
  document.getElementById('nav-links')?.classList.remove('open');
  if (page === 'courses') renderCourses('all');
  if (page === 'world') renderWorldCards();
  if (page === 'home') renderTypesGrid();
  if (page === 'quiz') showQuizModeSelect();
}

function toggleMenu() {
  document.getElementById('nav-links')?.classList.toggle('open');
}

/* ══════════════════════════════════════════
   LANGUAGE
══════════════════════════════════════════ */
function setLang(l) {
  lang = l;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (T[l][key]) el.textContent = T[l][key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === l.toUpperCase());
  });
}

/* ══════════════════════════════════════════
   HOME — PERSONALITY TYPES GRID
══════════════════════════════════════════ */
function renderTypesGrid() {
  const el = document.getElementById('types-grid');
  if (!el) return;
  el.innerHTML = Object.entries(MBTI_TYPES).map(([code, info]) => `
    <div class="type-card" onclick="showTypeDetail('${code}')" style="border-color:${info.color}22">
      <div class="type-card-code" style="color:${info.color}">${code}</div>
      <div class="type-card-name">${info.name}</div>
    </div>`).join('');
}

function showTypeDetail(code) {
  const t = MBTI_TYPES[code];
  const jobs = (TYPE_VACANCIES[code] || []).slice(0, 4).join(', ');
  showToast(`${code} — ${t.name}: ${jobs}`);
}

/* ══════════════════════════════════════════
   COURSES
══════════════════════════════════════════ */
function filterCourses(type) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event?.currentTarget?.classList.add('active');
  renderCourses(type);
}

function renderCourses(filter) {
  const c = document.getElementById('courses-container');
  if (!c) return;
  const list = filter === 'all' ? COURSES : COURSES.filter(x => x.type === filter);
  const badgeClass = { free: 'badge-free', paid: 'badge-paid', state: 'badge-state' };
  const badgeLabel = { free: '🆓 Бесплатно', paid: '💰 Платно', state: '🏛️ Гос. программа' };
  c.innerHTML = list.map(co => `
    <div class="course-card">
      <div class="course-badge ${badgeClass[co.type]}">${badgeLabel[co.type]}</div>
      <div class="course-name">${co.name}</div>
      <div class="course-platform">📍 ${co.platform}</div>
      <div class="course-meta"><span>⏱ ${co.dur}</span><span>📁 ${co.cat}</span></div>
      <div class="course-action">
        <a href="${co.url}" target="_blank" class="btn btn-ghost btn-sm" style="text-decoration:none">Перейти →</a>
      </div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   WORLD ARENA
══════════════════════════════════════════ */
function renderWorldCards() {
  const el = document.getElementById('world-grid');
  if (!el) return;
  el.innerHTML = WORLD_CARDS.map(w => `
    <div class="world-card">
      <div class="world-flag">${w.flag}</div>
      <div class="world-country">${w.country}</div>
      <div class="world-jobs-count">🔥 ${w.jobs} вакансий · ${w.growth}</div>
      <div class="world-desc">${w.desc}</div>
      <div class="world-tags">${w.tags.map(t => `<span class="world-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   QUIZ — MODE SELECT
══════════════════════════════════════════ */
function showQuizModeSelect() {
  document.getElementById('quiz-mode-select').classList.remove('hidden');
  document.getElementById('quiz-worker').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-employer').classList.add('hidden');
}

function setQuizMode(mode) {
  quizMode = mode;
  if (mode === 'worker') {
    startWorkerQuiz();
  } else {
    showEmployerMode();
  }
}

/* ══════════════════════════════════════════
   WORKER QUIZ
══════════════════════════════════════════ */
function startWorkerQuiz() {
  quizAnswers = [];
  quizCurrentQ = 0;
  document.getElementById('quiz-mode-select').classList.add('hidden');
  document.getElementById('quiz-worker').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = MBTI_QUESTIONS[quizCurrentQ];
  const pct = (quizCurrentQ / MBTI_QUESTIONS.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
  document.getElementById('quiz-q-num').textContent = `Вопрос ${quizCurrentQ + 1} из ${MBTI_QUESTIONS.length}`;
  const dimLabels = { EI: 'E vs I', SN: 'S vs N', TF: 'T vs F', JP: 'J vs P' };
  document.getElementById('quiz-dim-label').textContent = dimLabels[q.dim];
  document.getElementById('quiz-q-text').textContent = q.text;
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = `
    <button class="test-option" onclick="answerQuestion('a')"><span style="color:var(--purple-l);font-weight:700;margin-right:10px">A</span>${q.a}</button>
    <button class="test-option" onclick="answerQuestion('b')"><span style="color:var(--cyan);font-weight:700;margin-right:10px">B</span>${q.b}</button>`;
  const card = document.getElementById('quiz-question-card');
  card.style.opacity = '0'; card.style.transform = 'translateX(20px)';
  setTimeout(() => { card.style.transition = 'all 0.3s'; card.style.opacity = '1'; card.style.transform = ''; }, 50);
}

function answerQuestion(choice) {
  quizAnswers.push({ dim: MBTI_QUESTIONS[quizCurrentQ].dim, choice });
  quizCurrentQ++;
  if (quizCurrentQ >= MBTI_QUESTIONS.length) {
    showQuizResult();
  } else {
    renderQuestion();
  }
}

/* ── MBTI SCORING ── */
function scoreQuiz() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  quizAnswers.forEach(a => {
    if (a.dim === 'EI') { if (a.choice === 'a') scores.E++; else scores.I++; }
    if (a.dim === 'SN') { if (a.choice === 'a') scores.S++; else scores.N++; }
    if (a.dim === 'TF') { if (a.choice === 'a') scores.T++; else scores.F++; }
    if (a.dim === 'JP') { if (a.choice === 'a') scores.J++; else scores.P++; }
  });
  const type = (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');
  const pcts = {
    EI: Math.round(scores.E / 4 * 100),
    SN: Math.round(scores.S / 4 * 100),
    TF: Math.round(scores.T / 4 * 100),
    JP: Math.round(scores.J / 4 * 100),
  };
  return { type, scores, pcts };
}

function showQuizResult() {
  const { type, pcts } = scoreQuiz();
  mbtiResult = type;
  const info = MBTI_TYPES[type];
  document.getElementById('quiz-worker').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');
  document.getElementById('quiz-progress-fill').style.width = '100%';

  document.getElementById('result-type-badge').textContent = type;
  document.getElementById('result-type-badge').style.color = info.color;
  document.getElementById('result-type-badge').style.borderColor = info.color + '80';
  document.getElementById('result-type-badge').style.background = info.color + '1a';
  document.getElementById('result-type-name').textContent = info.name;
  document.getElementById('result-type-desc').textContent = info.desc;
  document.getElementById('result-traits').innerHTML = info.traits.map(t => `<span class="result-trait">${t}</span>`).join('');

  renderDimBar('dim-ei', 'Экстраверт (E)', 'Интроверт (I)', pcts.EI);
  renderDimBar('dim-sn', 'Сенсорик (S)', 'Интуит (N)', pcts.SN);
  renderDimBar('dim-tf', 'Логик (T)', 'Этик (F)', pcts.TF);
  renderDimBar('dim-jp', 'Рационал (J)', 'Иррационал (P)', pcts.JP);

  renderMatchedVacancies(type);

  document.getElementById('prev-mbti-block')?.classList.remove('hidden');
  const badge = document.getElementById('prev-mbti-type');
  if (badge) { badge.textContent = type + ' — ' + info.name; badge.style.color = info.color; }
}

function renderDimBar(elId, leftLabel, rightLabel, leftPct) {
  const el = document.getElementById(elId);
  if (!el) return;
  const rightPct = 100 - leftPct;
  el.innerHTML = `
    <div class="dim-bar-header"><span>${leftLabel} ${leftPct}%</span><span>${rightPct}% ${rightLabel}</span></div>
    <div class="dim-bar-track">
      <div class="dim-bar-fill-l" style="width:0%"></div>
      <div class="dim-bar-fill-r" style="width:0%"></div>
    </div>`;
  setTimeout(() => {
    el.querySelector('.dim-bar-fill-l').style.width = leftPct + '%';
    el.querySelector('.dim-bar-fill-r').style.width = rightPct + '%';
  }, 100);
}

function renderMatchedVacancies(type) {
  const el = document.getElementById('result-vacancies');
  if (!el) return;
  const jobs = TYPE_VACANCIES[type] || [];
  const t = T[lang];
  el.innerHTML = jobs.map((job, i) => {
    const pct = Math.max(95 - i * 5, 55);
    const cls = pct >= 85 ? 'pct-high' : pct >= 70 ? 'pct-mid' : 'pct-low';
    return `
    <div class="match-vac-card">
      <div class="match-pct ${cls}">${pct}%</div>
      <div class="match-vac-emoji">${getJobEmoji(job)}</div>
      <div class="match-vac-info">
        <div class="match-vac-title">${job}</div>
        <div class="match-vac-meta">🎯 Совпадение по MBTI: ${type}</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="showToast('📩 Отклик отправлен!')">${t.applyBtn}</button>
    </div>`;
  }).join('');
}

function getJobEmoji(job) {
  const map = { 'Backend': '🖥️', 'Data': '📊', 'ML': '🤖', 'Дизайн': '🎨', 'UX': '✏️', 'Маркетолог': '📣', 'SMM': '📲', 'HR': '👥', 'Педагог': '📚', 'Менеджер': '💼', 'Бухгалтер': '💰', 'Юрист': '⚖️', 'Инженер': '🔧', 'DevOps': '☁️', 'Продакт': '🎯', 'Аналитик': '📈', 'Frontend': '💻', 'Психолог': '🧠', 'Копирайтер': '✍️', 'Фотограф': '📸', 'Повар': '🍳', 'Event': '🎉', 'Тренер': '🏋️', 'Медик': '🏥', 'Консул': '🤝', 'Программист': '💻' };
  for (const [k, e] of Object.entries(map)) { if (job.includes(k)) return e; }
  return '💼';
}

function restartQuiz() { showQuizModeSelect(); }

/* ══════════════════════════════════════════
   EMPLOYER MODE
══════════════════════════════════════════ */
function showEmployerMode() {
  document.getElementById('quiz-mode-select').classList.add('hidden');
  document.getElementById('quiz-worker').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-employer').classList.remove('hidden');
  document.getElementById('employer-match-result').classList.add('hidden');
  updateEmpTraits();
}

function updateEmpTraits() {
  const ei = +document.getElementById('emp-ei').value;
  const sn = +document.getElementById('emp-sn').value;
  const tf = +document.getElementById('emp-tf').value;
  const jp = +document.getElementById('emp-jp').value;

  function label(val, a, b) {
    if (val < 35) return `Предпочт. ${a}`;
    if (val > 65) return `Предпочт. ${b}`;
    return 'Нет предпочтений';
  }
  document.getElementById('emp-ei-label').textContent = label(ei, 'E', 'I');
  document.getElementById('emp-sn-label').textContent = label(sn, 'S', 'N');
  document.getElementById('emp-tf-label').textContent = label(tf, 'T', 'F');
  document.getElementById('emp-jp-label').textContent = label(jp, 'J', 'P');

  const matched = matchingTypes(ei, sn, tf, jp);
  document.getElementById('emp-selected-types').innerHTML = matched
    .map(code => `<span class="chip chip-purple" style="color:${MBTI_TYPES[code].color}">${code}</span>`).join('');
}

function matchingTypes(ei, sn, tf, jp) {
  return Object.keys(MBTI_TYPES).filter(code => {
    const e = code[0] === 'E'; const s = code[1] === 'S';
    const t = code[2] === 'T'; const j = code[3] === 'J';
    const eiMatch = ei < 35 ? e : ei > 65 ? !e : true;
    const snMatch = sn < 35 ? s : sn > 65 ? !s : true;
    const tfMatch = tf < 35 ? t : tf > 65 ? !t : true;
    const jpMatch = jp < 35 ? j : jp > 65 ? !j : true;
    return eiMatch && snMatch && tfMatch && jpMatch;
  });
}

function runEmployerMatch() {
  const ei = +document.getElementById('emp-ei').value;
  const sn = +document.getElementById('emp-sn').value;
  const tf = +document.getElementById('emp-tf').value;
  const jp = +document.getElementById('emp-jp').value;

  const result = document.getElementById('employer-match-result');
  result.classList.remove('hidden');

  const scored = DEMO_CANDIDATES.map(c => {
    const eiScore = 100 - Math.abs(c.scores.EI - ei);
    const snScore = 100 - Math.abs(c.scores.SN - sn);
    const tfScore = 100 - Math.abs(c.scores.TF - tf);
    const jpScore = 100 - Math.abs(c.scores.JP - jp);
    const match = Math.round((eiScore + snScore + tfScore + jpScore) / 4);
    return { ...c, match };
  }).sort((a, b) => b.match - a.match);

  document.getElementById('employer-candidates-list').innerHTML = scored.map(c => `
    <div class="emp-cand-row">
      <div class="emp-cand-avatar">${c.initials}</div>
      <div class="emp-cand-info">
        <div class="emp-cand-name">${c.name} <span class="chip chip-purple" style="font-size:11px;padding:2px 8px">${c.type}</span></div>
        <div class="emp-cand-sub">🎓 ${c.uni} · 💼 ${c.role}</div>
      </div>
      <div class="emp-match-bar-wrap">
        <div class="emp-match-bar-track"><div class="emp-match-bar-fill" style="width:${c.match}%"></div></div>
      </div>
      <div class="emp-match-pct">${c.match}%</div>
      <button class="btn btn-primary btn-sm" onclick="showToast('📋 Профиль открыт')">Смотреть</button>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   RESUME — LIVE PREVIEW
══════════════════════════════════════════ */
function initResumeListeners() {
  const fields = ['r-name', 'r-role', 'r-email', 'r-phone', 'r-city', 'r-uni', 'r-spec', 'r-year', 'r-skills', 'r-about'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateResumePreview);
  });
}

function updateResumePreview() {
  const n = document.getElementById('r-name')?.value || 'Ваше имя';
  const r = document.getElementById('r-role')?.value || 'Должность';
  const em = document.getElementById('r-email')?.value || 'email';
  const ph = document.getElementById('r-phone')?.value || 'телефон';
  const ci = document.getElementById('r-city')?.value || 'Алматы';
  const un = document.getElementById('r-uni')?.value || 'Университет';
  const sp = document.getElementById('r-spec')?.value || 'Специальность';
  const yr = document.getElementById('r-year')?.value || 'Год';
  const sk = document.getElementById('r-skills')?.value || '';
  const ab = document.getElementById('r-about')?.value || 'Здесь появится ваш текст о себе';

  const parts = n.trim().split(' ');
  const initials = (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
  document.getElementById('prev-initials').textContent = initials.toUpperCase() || 'АА';
  document.getElementById('prev-name').textContent = n;
  document.getElementById('prev-role').textContent = r;
  document.getElementById('prev-meta').textContent = `📍 ${ci} · 📧 ${em} · 📞 ${ph}`;
  document.getElementById('prev-about').textContent = ab;
  document.getElementById('prev-edu').textContent = `${un} · ${sp} · ${yr}`;

  const skillsEl = document.getElementById('prev-skills');
  skillsEl.innerHTML = sk.split(',').filter(s => s.trim())
    .map(s => `<span class="chip">${s.trim()}</span>`).join('');
}

function exportResumePDF() { showToast('📄 Генерация PDF…'); }
function exportResumeDoc() { showToast('📝 Генерация Word…'); }
function exportResumeExcel() { showToast('📊 Генерация Excel…'); }

/* ══════════════════════════════════════════
   AI CHAT (Resume page)
══════════════════════════════════════════ */
const AI_RESPONSES = [
  'Добавь конкретные достижения в формате "сделал → результат". Например: "Увеличил конверсию сайта на 23%".',
  'Используй ключевые слова из описания вакансии — HR-системы сканируют резюме автоматически.',
  `Твой тип личности ${mbtiResult || 'INTJ'} — акцентируй стратегическое мышление и результаты.`,
  'Раздел "О себе" должен быть 2–3 предложения. Чётко: кто ты, что умеешь, чего хочешь.',
  'Удали лишние слова: "ответственный", "коммуникабельный" — замени конкретными фактами.',
  'Добавь ссылки на GitHub, Behance или LinkedIn — это повышает доверие работодателя.',
];
let aiIdx = 0;

function sendResumeAI() {
  const input = document.getElementById('resume-ai-input');
  const msgs = document.getElementById('resume-ai-msgs');
  const text = input.value.trim();
  if (!text) return;
  msgs.innerHTML += `<div class="ai-msg ai-msg-user">${text}</div>`;
  input.value = '';
  setTimeout(() => {
    const resp = AI_RESPONSES[aiIdx % AI_RESPONSES.length];
    aiIdx++;
    msgs.innerHTML += `<div class="ai-msg ai-msg-bot">✨ ${resp}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 700);
}

function aiImproveResume() {
  const msgs = document.getElementById('resume-ai-msgs');
  msgs.innerHTML += `<div class="ai-msg ai-msg-user">Улучши моё резюме</div>`;
  setTimeout(() => {
    msgs.innerHTML += `<div class="ai-msg ai-msg-bot">✨ ${AI_RESPONSES[aiIdx % AI_RESPONSES.length]}</div>`;
    aiIdx++;
    msgs.scrollTop = msgs.scrollHeight;
  }, 600);
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
    background: 'rgba(20,20,30,0.97)', border: '1px solid rgba(124,58,237,0.4)',
    color: '#fff', padding: '12px 24px', borderRadius: '10px', fontSize: '14px',
    zIndex: '9999', boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    animation: 'fadeUp 0.3s ease', fontFamily: 'Inter,sans-serif',
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
  initResumeListeners();
  setLang('ru');
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
  });
});
