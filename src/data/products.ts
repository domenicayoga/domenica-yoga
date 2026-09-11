import type { Lang } from './locales';
export type ProductKey = 'group' | 'individual' | 'course';

type Product = {
  title: string;
  description: string;
  eyebrow: string;
  hero: string;
  lead: string;
  badge?: string;
  price: string;
  priceNote: string;
  heroImage: string;
  detailImage: string;
  facts: [string,string][];
  forYouTitle: string;
  forYou: string[];
  includesTitle: string;
  includes: string[];
  scheduleTitle?: string;
  schedule?: [string,string][];
  processTitle: string;
  process: [string,string][];
  pricingTitle: string;
  plans: { name:string; price:string; note:string }[];
  faqTitle: string;
  faq: [string,string][];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  note: string;
};

export const products: Record<Lang, Record<ProductKey, Product>> = {
  en: {
    group: {
      title: 'Online Group Yoga — Domenica Yoga',
      description: 'Three live 60-minute online yoga and movement sessions each week with Domenica. Small group, adaptations and feedback. €50/month.',
      eyebrow: 'Online group training',
      hero: 'Three live practices a week. Enough structure to build consistency — enough flexibility to stay human.',
      lead: 'A small online group for people who want regular yoga, strength and mobility without being pushed into one universal version of a pose.',
      price: '€50 / month',
      priceNote: 'Payment on the 1st of each month',
      heroImage: '/assets/group-hero-v04.webp',
      detailImage: '/assets/group-detail-v04.webp',
      facts: [['Frequency','3 sessions / week'],['Duration','60 minutes'],['Platform','Google Meet'],['Group size','Up to 15 people']],
      forYouTitle: 'This format may fit you if…',
      forYou: ['You want a regular schedule and external structure.','You want strength and mobility together, not flexibility at any cost.','You need options when a movement does not suit your body.','You like training with other people but still want individual attention.'],
      includesTitle: 'What is included',
      includes: ['3 live sessions every week','Adaptations during practice','Feedback and corrections when useful','A small group of up to 15 people','Direct contact with Domenica if you need to clarify whether the group fits you'],
      scheduleTitle: 'Weekly schedule — Paris time (CET/CEST)',
      schedule: [['Tuesday','12:00'],['Friday','12:00'],['Sunday','08:00']],
      processTitle: 'How joining works',
      process: [['Write to me','Send a message on WhatsApp.'],['Check the fit','We make sure the schedule and format work for you.'],['Join the group','You receive the Google Meet details and start with the group.']],
      pricingTitle: 'Simple monthly membership',
      plans: [{name:'Online Group',price:'€50 / month',note:'3 live classes every week · billed on the 1st'}],
      faqTitle: 'Questions before you join',
      faq: [['Is there a trial class?','No. If you are unsure, write to me before joining and we can discuss whether the group format is right for you.'],['Do I need to be flexible?','No. The practice is built around usable range, control and strength, not around “achieving” deep poses.'],['What if I have a history of pain or injury?','Tell me before joining. I can adapt many movements, but group classes are not a substitute for medical diagnosis or physiotherapy when those are needed.']],
      ctaTitle: 'Want a regular practice you can actually stay with?',
      ctaText: 'Write to me directly and I’ll tell you how to join the next group session.',
      ctaPrimary: 'Write on WhatsApp',
      ctaSecondary: 'Telegram',
      note: 'Movement education and yoga practice do not replace medical care, diagnosis or physiotherapy.'
    },
    individual: {
      title: '1:1 Yoga & Movement Sessions — Domenica Yoga',
      description: '75-minute individual yoga and movement sessions with Domenica. Assessment, goals, movement testing and personalized practice. €40/session or €350 for 10.',
      eyebrow: '1:1 sessions',
      hero: 'Your body, your history, your goals — one session built around you.',
      lead: 'Individual work gives us room to look closely at how you move, what you want to change and which tools are actually useful for you.',
      price: '€40 / session',
      priceNote: '10 sessions: €350 · use within 3 months',
      heroImage: '/assets/individual-hero-v04.webp',
      detailImage: '/assets/individual-detail-v04.webp',
      facts: [['Session','75 minutes'],['Recommended','2–3× / week'],['Single session','€40'],['10-session pack','€350']],
      forYouTitle: '1:1 can be useful when…',
      forYou: ['You want a practice built around a specific goal or limitation.','You are returning to movement after a long break and want more guidance.','Group classes feel too generic.','You want to understand technique and basic asanas more clearly.'],
      includesTitle: 'What happens in the work',
      includes: ['First-session assessment of your current state and goals','Simple movement tests','Teaching and refining foundational asanas','A personalized training focus','Optional home practice or plan between sessions — only if you want it'],
      processTitle: 'The first session',
      process: [['Talk','We clarify your goals, movement history and what currently feels difficult.'],['Assess','We use simple movement tests and basic asanas to understand your starting point.'],['Practice','We train immediately and decide what your next step should be.']],
      pricingTitle: 'Choose single sessions or a pack',
      plans: [{name:'Single session',price:'€40',note:'75 minutes'}, {name:'10-session pack',price:'€350',note:'Use within 3 months'}],
      faqTitle: 'Common questions',
      faq: [['How often should we meet?','For faster skill-building, 2–3 sessions per week can work well. The actual rhythm depends on your schedule and goals.'],['Will I get homework?','Only if you want it. Some people like a short plan between sessions; others prefer to work only during our meetings.'],['Can you diagnose an injury?','No. These sessions are movement and yoga coaching. If symptoms need medical assessment, diagnosis or physiotherapy, I will not replace that role.']],
      ctaTitle: 'Want to work on something specific?',
      ctaText: 'Write to me on WhatsApp and tell me briefly what you want to improve.',
      ctaPrimary: 'Book on WhatsApp',
      ctaSecondary: 'Telegram',
      note: '1:1 sessions are movement coaching and yoga practice, not medical diagnosis or treatment.'
    },
    course: {
      title: '8-Week Yoga & Movement Course — Domenica Yoga',
      description: 'Coming soon: an 8-week self-paced yoga and movement course with around 40 practices, 30 minutes each, 3 months access and individual feedback on request. €49.',
      eyebrow: '8-week course',
      hero: 'A structured way to rebuild your relationship with movement — one short practice at a time.',
      lead: 'A self-paced recorded course for people who want a clear progression without needing to be online at a fixed time.',
      badge: 'Coming soon',
      price: '€49',
      priceNote: 'Around 40 practices · 3 months access',
      heroImage: '/assets/course-hero-v04.webp',
      detailImage: '/assets/course-detail-v04.webp',
      facts: [['Length','8 weeks'],['Practices','~40 videos'],['Average practice','~30 minutes'],['Access','3 months']],
      forYouTitle: 'This course is for you if…',
      forYou: ['You want to practice on your own schedule.','You prefer shorter sessions that are easier to fit into real life.','You want a progressive structure instead of random videos.','You want to improve body awareness and move with more comfort and confidence.'],
      includesTitle: 'What you will get',
      includes: ['Around 40 recorded practices','Average session length of about 30 minutes','A clear 8-week progression','Three months of access','Individual feedback from Domenica when you ask for it','Direct one-to-one chat rather than a large group chat'],
      processTitle: 'How it will work',
      process: [['Start when it suits you','Once the course opens, you can begin whenever you want.'],['Follow the progression','Move through the practices in order, at a pace your schedule allows.'],['Ask when you need help','Send me a question directly and I can give individual feedback.']],
      pricingTitle: 'One course, one price',
      plans: [{name:'8-Week Course',price:'€49',note:'~40 practices · 3 months access · feedback on request'}],
      faqTitle: 'Before the course opens',
      faq: [['When can I start?','The course is coming soon. Once it is open, you will be able to start at any time.'],['What is the goal after 8 weeks?','More comfortable movement, better body awareness and an easier relationship with everyday activity. For people with lower-back discomfort, the aim is to make walking and movement feel more manageable — without promising a medical cure.'],['Is feedback included?','Yes. If you have a question, you can contact me directly and ask for feedback.']],
      ctaTitle: 'Want me to tell you when the course opens?',
      ctaText: 'Send me a short message and I’ll keep the conversation simple — no form, no mailing-list maze.',
      ctaPrimary: 'Message on WhatsApp',
      ctaSecondary: 'Telegram',
      note: 'The course is educational movement practice and does not replace medical care when medical assessment is needed.'
    }
  },
  fr: {
    group: {
      title: 'Cours collectifs de yoga en ligne — Domenica Yoga',
      description: 'Trois cours en ligne de 60 minutes par semaine avec Domenica. Petit groupe, adaptations et retours. 50 €/mois.',
      eyebrow: 'Cours collectifs en ligne',
      hero: 'Trois pratiques en direct par semaine. Assez de structure pour progresser, assez de souplesse pour rester réaliste.',
      lead: 'Un petit groupe en ligne pour pratiquer régulièrement le yoga, la force et la mobilité sans être forcée dans une seule version “correcte” d’une posture.',
      price: '50 € / mois',
      priceNote: 'Paiement le 1er de chaque mois',
      heroImage: '/assets/group-hero-v04.webp', detailImage: '/assets/group-detail-v04.webp',
      facts: [['Fréquence','3 séances / semaine'],['Durée','60 minutes'],['Plateforme','Google Meet'],['Taille du groupe','Jusqu’à 15 personnes']],
      forYouTitle: 'Ce format peut vous convenir si…',
      forYou: ['Vous voulez un rythme régulier et une structure extérieure.','Vous voulez développer force et mobilité ensemble.','Vous avez besoin d’options lorsqu’un mouvement ne vous convient pas.','Vous aimez l’énergie d’un groupe tout en gardant une attention individuelle.'],
      includesTitle: 'Ce qui est inclus',
      includes: ['3 séances en direct chaque semaine','Adaptations pendant la pratique','Retours et corrections lorsque c’est utile','Petit groupe jusqu’à 15 personnes','Contact direct avec Domenica si vous hésitez sur le format'],
      scheduleTitle: 'Horaires hebdomadaires — heure de Paris (CET/CEST)',
      schedule: [['Mardi','12:00'],['Vendredi','12:00'],['Dimanche','08:00']],
      processTitle: 'Comment rejoindre le groupe',
      process: [['Écrivez-moi','Envoyez-moi un message sur WhatsApp.'],['Vérifions le format','Nous confirmons que l’horaire et le groupe vous conviennent.'],['Rejoignez la pratique','Vous recevez les informations Google Meet et vous commencez avec le groupe.']],
      pricingTitle: 'Un abonnement mensuel simple',
      plans: [{name:'Cours collectifs en ligne',price:'50 € / mois',note:'3 cours en direct chaque semaine · paiement le 1er'}],
      faqTitle: 'Questions avant de commencer',
      faq: [['Y a-t-il un cours d’essai ?','Non. Si vous hésitez, écrivez-moi avant de vous inscrire et nous verrons si le format vous convient.'],['Dois-je être souple ?','Non. La pratique développe une amplitude utile, du contrôle et de la force — pas la profondeur d’une posture à tout prix.'],['Et si j’ai déjà eu des douleurs ou une blessure ?','Dites-le-moi avant de rejoindre le groupe. Beaucoup de mouvements peuvent être adaptés, mais un cours collectif ne remplace pas un diagnostic médical ni la kinésithérapie lorsqu’ils sont nécessaires.']],
      ctaTitle: 'Envie d’une pratique régulière que vous pouvez vraiment tenir ?',
      ctaText: 'Écrivez-moi directement et je vous explique comment rejoindre le groupe.',
      ctaPrimary: 'Écrire sur WhatsApp', ctaSecondary: 'Telegram',
      note: 'La pratique du yoga et l’éducation au mouvement ne remplacent pas un suivi médical, un diagnostic ou la kinésithérapie.'
    },
    individual: {
      title: 'Séances individuelles yoga & mouvement — Domenica Yoga',
      description: 'Séances individuelles de 75 minutes : bilan de départ, objectifs, tests de mouvement et pratique personnalisée. 40 €/séance ou 350 € les 10.',
      eyebrow: 'Séances individuelles 1:1',
      hero: 'Votre corps, votre histoire, vos objectifs — une séance construite autour de vous.',
      lead: 'Le travail individuel nous permet de regarder de près votre manière de bouger, ce que vous voulez changer et les outils réellement utiles pour vous.',
      price: '40 € / séance', priceNote: '10 séances : 350 € · à utiliser sous 3 mois',
      heroImage: '/assets/individual-hero-v04.webp', detailImage: '/assets/individual-detail-v04.webp',
      facts: [['Séance','75 minutes'],['Rythme conseillé','2–3× / semaine'],['Séance unique','40 €'],['Forfait 10 séances','350 €']],
      forYouTitle: 'Le 1:1 peut être utile si…',
      forYou: ['Vous avez un objectif ou une limitation précise.','Vous reprenez le mouvement après une longue pause.','Les cours collectifs vous semblent trop génériques.','Vous voulez mieux comprendre la technique et les asanas de base.'],
      includesTitle: 'Ce que nous faisons ensemble',
      includes: ['Bilan de l’état actuel et des objectifs lors de la première séance','Tests simples de mouvement','Apprentissage et ajustement des asanas de base','Objectif de travail personnalisé','Exercices ou plan entre les séances uniquement si vous le souhaitez'],
      processTitle: 'La première séance',
      process: [['Échanger','Nous clarifions vos objectifs et votre histoire de mouvement.'],['Observer','Nous utilisons quelques tests simples et des asanas de base.'],['Pratiquer','Nous commençons tout de suite et définissons la prochaine étape.']],
      pricingTitle: 'Séance unique ou forfait',
      plans: [{name:'Séance unique',price:'40 €',note:'75 minutes'},{name:'Forfait 10 séances',price:'350 €',note:'À utiliser sous 3 mois'}],
      faqTitle: 'Questions fréquentes',
      faq: [['À quelle fréquence se voir ?','Pour apprendre plus vite, 2 à 3 séances par semaine peuvent être intéressantes. Le rythme réel dépend de votre emploi du temps et de vos objectifs.'],['Y aura-t-il des exercices à faire seule ?','Seulement si vous le souhaitez. Certaines personnes aiment un petit plan entre les séances, d’autres préfèrent travailler uniquement ensemble.'],['Pouvez-vous diagnostiquer une blessure ?','Non. Il s’agit d’accompagnement en yoga et mouvement. Si vos symptômes nécessitent un diagnostic médical ou de la kinésithérapie, je ne remplace pas ces professionnels.']],
      ctaTitle: 'Vous voulez travailler sur quelque chose de précis ?',
      ctaText: 'Écrivez-moi sur WhatsApp et dites-moi en quelques mots ce que vous souhaitez améliorer.',
      ctaPrimary: 'Réserver sur WhatsApp', ctaSecondary: 'Telegram',
      note: 'Les séances 1:1 sont un accompagnement en mouvement et yoga, pas un diagnostic ni un traitement médical.'
    },
    course: {
      title: 'Programme yoga & mouvement de 8 semaines — Domenica Yoga',
      description: 'Bientôt disponible : programme autonome de 8 semaines, environ 40 pratiques de 30 minutes, accès 3 mois et retours individuels sur demande. 49 €.',
      eyebrow: 'Programme de 8 semaines',
      hero: 'Une structure claire pour reconstruire votre relation au mouvement — une pratique courte à la fois.',
      lead: 'Un programme enregistré à suivre à votre rythme, pour progresser sans devoir être disponible à une heure fixe.',
      badge: 'Bientôt disponible', price: '49 €', priceNote: 'Environ 40 pratiques · accès 3 mois',
      heroImage: '/assets/course-hero-v04.webp', detailImage: '/assets/course-detail-v04.webp',
      facts: [['Durée','8 semaines'],['Pratiques','~40 vidéos'],['Durée moyenne','~30 minutes'],['Accès','3 mois']],
      forYouTitle: 'Ce programme est pour vous si…',
      forYou: ['Vous voulez pratiquer quand cela vous convient.','Vous préférez des séances plus courtes, faciles à intégrer à votre journée.','Vous voulez une progression structurée plutôt qu’une collection de vidéos aléatoires.','Vous voulez mieux sentir votre corps et bouger avec plus de confort et de confiance.'],
      includesTitle: 'Ce que vous aurez',
      includes: ['Environ 40 pratiques enregistrées','Séances d’environ 30 minutes','Progression structurée sur 8 semaines','Accès pendant 3 mois','Retour individuel de Domenica sur demande','Échanges directs en individuel plutôt qu’un grand groupe Telegram'],
      processTitle: 'Comment cela fonctionnera',
      process: [['Commencez quand vous voulez','Une fois le programme ouvert, vous pourrez démarrer à tout moment.'],['Suivez la progression','Avancez dans l’ordre, au rythme permis par votre emploi du temps.'],['Posez vos questions','Écrivez-moi directement si vous souhaitez un retour individuel.']],
      pricingTitle: 'Un programme, un prix',
      plans: [{name:'Programme 8 semaines',price:'49 €',note:'~40 pratiques · accès 3 mois · retours sur demande'}],
      faqTitle: 'Avant l’ouverture',
      faq: [['Quand pourrai-je commencer ?','Le programme arrive bientôt. Une fois ouvert, vous pourrez commencer à tout moment.'],['Quel résultat viser après 8 semaines ?','Un mouvement plus confortable, une meilleure perception du corps et une relation plus simple avec l’activité quotidienne. Pour les personnes ayant un inconfort lombaire, l’objectif est notamment de rendre la marche et le mouvement plus faciles — sans promettre une guérison médicale.'],['Les retours sont-ils inclus ?','Oui. Si vous avez une question, vous pouvez m’écrire directement et demander un retour.']],
      ctaTitle: 'Vous voulez être prévenue à l’ouverture ?',
      ctaText: 'Envoyez-moi simplement un message. Pas de formulaire ni de parcours compliqué.',
      ctaPrimary: 'Écrire sur WhatsApp', ctaSecondary: 'Telegram',
      note: 'Le programme est une pratique éducative du mouvement et ne remplace pas un suivi médical lorsque celui-ci est nécessaire.'
    }
  },
  ua: {
    group: {
      title: 'Групові онлайн-тренування — Domenica Yoga',
      description: 'Три живі онлайн-тренування по 60 хв щотижня з Доменікою. До 15 людей, адаптації та зворотний зв’язок. 1500 грн/місяць.',
      eyebrow: 'Групові онлайн-тренування',
      hero: 'Три живі практики на тиждень. Достатньо структури для регулярності — і достатньо гнучкості для реального життя.',
      lead: 'Невелика онлайн-група для тих, хто хоче регулярно працювати із силою, мобільністю та йогою без примусу до одного “правильного” варіанту пози.',
      price: '1500 грн / місяць', priceNote: 'Оплата кожного 1 числа',
      heroImage: '/assets/group-hero-v04.webp', detailImage: '/assets/group-detail-v04.webp',
      facts: [['Частота','3 заняття / тиждень'],['Тривалість','60 хвилин'],['Платформа','Google Meet'],['Група','До 15 людей']],
      forYouTitle: 'Цей формат може підійти, якщо…',
      forYou: ['Тобі потрібен регулярний графік і зовнішня структура.','Хочеться розвивати силу та мобільність разом.','Потрібні варіанти, коли конкретний рух не підходить тілу.','Подобається енергія групи, але важливий персональний зворотний зв’язок.'],
      includesTitle: 'Що входить',
      includes: ['3 живі тренування щотижня','Адаптації рухів під час практики','Зворотний зв’язок і корекції, коли це доречно','Група до 15 людей','Прямий контакт із Доменікою, якщо треба зрозуміти, чи підходить формат'],
      scheduleTitle: 'Розклад — за паризьким часом (CET/CEST)',
      schedule: [['Вівторок','12:00'],['П’ятниця','12:00'],['Неділя','08:00']],
      processTitle: 'Як приєднатися',
      process: [['Напиши мені','Напиши в Telegram.'],['Перевіримо формат','Переконаємося, що графік і формат тобі підходять.'],['Приєднуйся','Отримаєш посилання Google Meet і стартуєш разом із групою.']],
      pricingTitle: 'Проста щомісячна оплата',
      plans: [{name:'Групові онлайн-тренування',price:'1500 грн / місяць',note:'3 живі заняття щотижня · оплата 1 числа'}],
      faqTitle: 'Перед стартом',
      faq: [['Чи є пробне заняття?','Ні. Якщо сумніваєшся, напиши мені перед оплатою — обговоримо, чи підходить тобі формат групи.'],['Треба бути гнучкою?','Ні. Ми працюємо з корисною амплітудою, контролем і силою, а не з “глибиною” пози будь-якою ціною.'],['А якщо в мене була травма або часто болить спина?','Розкажи про це до старту. Багато рухів можна адаптувати, але групове заняття не замінює медичну діагностику чи фізичну терапію, якщо вони потрібні.']],
      ctaTitle: 'Хочеш регулярну практику, яку реально не кинути через два тижні?',
      ctaText: 'Напиши мені в Telegram — розповім, як приєднатися до найближчого заняття.',
      ctaPrimary: 'Написати в Telegram', ctaSecondary: 'Instagram',
      note: 'Практика йоги та руху не замінює медичну допомогу, діагностику чи фізичну терапію.'
    },
    individual: {
      title: 'Індивідуальні тренування 1:1 — Domenica Yoga',
      description: 'Індивідуальні заняття по 75 хв: оцінка стану, цілі, рухові тести та персональна практика. 40 € за заняття або 350 € за 10.',
      eyebrow: 'Індивідуальні 1:1',
      hero: 'Твоє тіло, твоя історія, твої цілі — одне тренування, побудоване навколо тебе.',
      lead: 'Індивідуальна робота дає час уважно подивитися, як ти рухаєшся, що хочеш змінити і які інструменти справді будуть корисними.',
      price: '40 € / тренування', priceNote: '10 тренувань: 350 € · використати протягом 3 місяців',
      heroImage: '/assets/individual-hero-v04.webp', detailImage: '/assets/individual-detail-v04.webp',
      facts: [['Тривалість','75 хвилин'],['Оптимально','2–3× / тиждень'],['Разове заняття','40 €'],['Пакет 10','350 €']],
      forYouTitle: '1:1 може бути корисним, якщо…',
      forYou: ['Є конкретна ціль або обмеження, з яким хочеться працювати.','Повертаєшся до руху після довгої паузи й хочеться більше супроводу.','Групові заняття здаються надто загальними.','Хочеться краще розібрати техніку та базові асани.'],
      includesTitle: 'Що відбувається в роботі',
      includes: ['На першій зустрічі — оцінка стану та цілей','Прості рухові тести','Навчання й уточнення базових асан','Персональний фокус тренувань','Домашня практика або план між сесіями — тільки за бажанням'],
      processTitle: 'Перша зустріч',
      process: [['Говоримо','Уточнюємо цілі, історію руху та що зараз турбує.'],['Дивимося','Робимо прості тести й базові асани, щоб зрозуміти стартову точку.'],['Практикуємо','Одразу тренуємося й визначаємо наступний крок.']],
      pricingTitle: 'Разово або пакетом',
      plans: [{name:'Одне тренування',price:'40 €',note:'75 хвилин'},{name:'Пакет 10 тренувань',price:'350 €',note:'Використати протягом 3 місяців'}],
      faqTitle: 'Поширені питання',
      faq: [['Як часто краще займатися?','Для швидшого формування навичок добре працює ритм 2–3 рази на тиждень. Реальна частота залежить від твого графіка й цілей.'],['Чи будуть домашні вправи?','Тільки якщо ти цього хочеш. Комусь подобається короткий план між зустрічами, а комусь комфортніше працювати лише під час сесій.'],['Ти діагностуєш травми?','Ні. Це тренування з руху та йоги. Якщо симптоми потребують медичної оцінки, діагностики чи фізичної терапії, я не замінюю цих спеціалістів.']],
      ctaTitle: 'Хочеш попрацювати з конкретною ціллю?',
      ctaText: 'Напиши мені в Telegram і коротко розкажи, що хочеш покращити.',
      ctaPrimary: 'Забронювати в Telegram', ctaSecondary: 'Instagram',
      note: 'Індивідуальні заняття — це тренування з руху та йоги, а не медична діагностика чи лікування.'
    },
    course: {
      title: '8-тижневий курс йоги та руху — Domenica Yoga',
      description: 'Скоро: 8-тижневий курс у записі — близько 40 практик по 30 хв, доступ 3 місяці та індивідуальний зворотний зв’язок за запитом. 49 €.',
      eyebrow: '8-тижневий курс',
      hero: 'Структурований шлях до більш комфортного руху — одна коротка практика за раз.',
      lead: 'Курс у записі для тих, хто хоче зрозумілу прогресію без прив’язки до конкретного часу онлайн.',
      badge: 'Скоро', price: '49 €', priceNote: 'Близько 40 практик · доступ 3 місяці',
      heroImage: '/assets/course-hero-v04.webp', detailImage: '/assets/course-detail-v04.webp',
      facts: [['Тривалість','8 тижнів'],['Практики','~40 відео'],['Середня практика','~30 хв'],['Доступ','3 місяці']],
      forYouTitle: 'Курс підійде, якщо…',
      forYou: ['Хочеш займатися у своєму графіку.','Короткі заняття легше вписати в реальне життя.','Потрібна послідовна прогресія, а не випадковий набір відео.','Хочеться краще відчувати тіло й рухатися комфортніше та впевненіше.'],
      includesTitle: 'Що буде всередині',
      includes: ['Близько 40 записаних практик','Середня тривалість близько 30 хвилин','Зрозуміла прогресія на 8 тижнів','Доступ протягом 3 місяців','Індивідуальний зворотний зв’язок від Доменіки за запитом','Особисте листування зі мною замість великого групового чату'],
      processTitle: 'Як це працюватиме',
      process: [['Стартуй у зручний момент','Після запуску курс можна буде почати будь-коли.'],['Йди за прогресією','Проходь практики по порядку у темпі, який дозволяє твій графік.'],['Питай, коли треба','Напиши мені напряму, якщо потрібен індивідуальний зворотний зв’язок.']],
      pricingTitle: 'Один курс — одна ціна',
      plans: [{name:'8-тижневий курс',price:'49 €',note:'~40 практик · доступ 3 місяці · feedback за запитом'}],
      faqTitle: 'До запуску',
      faq: [['Коли можна починати?','Курс готується до запуску. Після відкриття доступу можна буде почати будь-коли.'],['Який головний результат після 8 тижнів?','Більш комфортний рух, краще відчуття тіла й простіші прогулянки та повсякденна активність. Якщо є дискомфорт у попереку, наша мета — зробити рух керованішим і комфортнішим, без обіцянки медичного “вилікування”.'],['Чи буде зворотний зв’язок?','Так. Якщо виникне питання, можна написати мені напряму й попросити feedback.']],
      ctaTitle: 'Хочеш, щоб я написала, коли курс відкриється?',
      ctaText: 'Просто напиши мені в Telegram. Без форм і зайвих листів.',
      ctaPrimary: 'Написати в Telegram', ctaSecondary: 'Instagram',
      note: 'Курс є освітньою практикою руху й не замінює медичну допомогу, якщо вона потрібна.'
    }
  }
};
