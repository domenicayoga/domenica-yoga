export type Lang = 'en' | 'fr' | 'ua';

export const localeMeta = {
  en: { code: 'en', label: 'EN', ogLocale: 'en_US' },
  fr: { code: 'fr', label: 'FR', ogLocale: 'fr_FR' },
  ua: { code: 'uk', label: 'UA', ogLocale: 'uk_UA' },
} as const;

export const content = {
  en: {
    title: 'Domenica Yoga — Intelligent yoga, strength & mobility',
    description: 'Online yoga and intelligent movement with Domenica: live group classes, 1:1 sessions and an 8-week course for strength, mobility and more confident movement.',
    nav: { about: 'About', training: 'Training', course: 'Course', resources: 'Resources', contact: 'Contact' },
    hero: {
      eyebrow: 'Yoga · strength · mobility · intelligent movement',
      title: 'Move with confidence. Build a body you can trust.',
      text: 'Safe, thoughtful yoga and movement that help you build strength, mobility, body awareness and more comfortable movement in everyday life.',
      primary: 'See training options', secondary: 'Find the right format',
      micro: 'Live online · individual work · self-paced course'
    },
    philosophy: {
      title: 'Yoga should expand what your body can do — not ask you to force it.',
      pillars: [
        ['Adapted','Your current range, history and goals shape the practice.'],
        ['Functional','Strength, mobility and control that support real life.'],
        ['Understandable','You learn why you are doing a movement, not only how it looks.']
      ]
    },
    problem: {
      title: 'You may be here because movement has become complicated.',
      items: [
        'Your lower back, neck or shoulders often feel uncomfortable.',
        'You want to move more, but you are unsure what is safe for you.',
        'Generic classes feel too fast, too rigid or too disconnected from your body.',
        'You want strength and mobility together — not flexibility at any cost.',
        'You want a practice you can actually understand and continue.'
      ],
      line: 'The goal is not to perform a body. It is to build one you can rely on.'
    },
    services: {
      eyebrow:'Ways to practice', title:'Choose the format that fits your life.',
      items:[
        ['Online Group Training','3 live 60-minute classes every week on Google Meet · up to 15 people · €50/month.','Explore group training →','€50 / month'],
        ['1:1 Sessions','75 minutes focused on your body, goals and movement history · €40/session or €350 for 10.','See 1:1 sessions →','€40 / session'],
        ['8-Week Course','Coming soon · around 40 practices of ~30 minutes · 3 months access · individual feedback on request.','See the course →','€49 · coming soon']
      ]
    },
    about: {
      eyebrow:'About', title:'Yoga teacher. Rehabilitation-informed movement specialist. Curious about how bodies learn.',
      p1:'I do not teach people to chase perfect poses. I look at how your body moves, what feels available today and how we can progressively build strength, control and freedom.',
      p2:'My goal is for you to understand your body better and feel more capable inside movement — with less fear, less forcing and more useful options.',
      button:'Meet Domenica'
    },
    method:{eyebrow:'How it works',title:'Understand. Practice. Build capacity.',items:[
      ['Understand your body','We look at your needs, goals, history and current capacity.'],
      ['Practice intelligently','Movements are adapted instead of forcing one universal version.'],
      ['Build capacity','We progressively develop strength, mobility, control and confidence.']
    ]},
    testimonials:{eyebrow:'What we build',title:'Confidence. Strength. Body awareness.',items:[
      'More confidence in everyday movement.',
      'Strength that supports mobility.',
      'Body awareness to know when to adapt.'
    ]},
    resources:{eyebrow:'Resources',title:'Understand your body better.',text:'Practical explanations and movement education — without the yoga mystique.',all:'Articles are coming next',items:[
      'Why the lower back can feel overloaded in Upward Facing Dog',
      'Neck tension after a day at work: what movement can change',
      'Mobility vs flexibility: why control matters'
    ]},
    final:{title:'You do not need to be “ready” to start.',text:'Choose a format and write to me directly. I’ll help you decide what fits.',button:'Contact Domenica'},
    footer:{tag:'Online yoga & intelligent movement.',legal:'Privacy Policy',terms:'Legal notice'}
  },
  fr: {
    title: 'Domenica Yoga — Yoga intelligent, force & mobilité',
    description: 'Yoga en ligne et mouvement intelligent avec Domenica : cours collectifs, séances individuelles et programme de 8 semaines pour développer force, mobilité et confiance.',
    nav: { about: 'À propos', training: 'Pratiques', course: 'Programme', resources: 'Ressources', contact: 'Contact' },
    hero: {
      eyebrow: 'Yoga · force · mobilité · mouvement intelligent',
      title: 'Bougez avec confiance. Construisez un corps auquel vous pouvez faire confiance.',
      text: 'Un yoga réfléchi et un travail du mouvement pour développer force, mobilité, conscience corporelle et plus de confort dans la vie quotidienne.',
      primary: 'Voir les formats', secondary: 'Trouver le bon format',
      micro: 'En direct · individuel · programme autonome'
    },
    philosophy: {
      title: 'Le yoga doit élargir les possibilités de votre corps — pas vous obliger à le forcer.',
      pillars: [
        ['Adapté','Votre amplitude, votre histoire et vos objectifs guident la pratique.'],
        ['Fonctionnel','Force, mobilité et contrôle utiles dans la vraie vie.'],
        ['Compréhensible','Vous apprenez pourquoi vous faites un mouvement, pas seulement sa forme.']
      ]
    },
    problem: {
      title: 'Vous êtes peut-être ici parce que bouger est devenu compliqué.',
      items: [
        'Le bas du dos, la nuque ou les épaules sont régulièrement inconfortables.',
        'Vous voulez bouger davantage mais vous ne savez pas toujours ce qui vous convient.',
        'Les cours génériques vous semblent trop rapides ou trop rigides.',
        'Vous voulez développer force et mobilité ensemble — sans rechercher la souplesse à tout prix.',
        'Vous voulez comprendre votre pratique et pouvoir l’adapter.'
      ],
      line: 'L’objectif n’est pas de montrer un corps. C’est de construire un corps sur lequel vous pouvez compter.'
    },
    services: {
      eyebrow:'Pratiquer avec moi', title:'Choisissez le format qui s’intègre à votre vie.',
      items:[
        ['Cours collectifs en ligne','3 cours en direct de 60 min par semaine sur Google Meet · jusqu’à 15 personnes · 50 €/mois.','Découvrir les cours collectifs →','50 € / mois'],
        ['Séances individuelles 1:1','75 minutes centrées sur votre corps, vos objectifs et votre histoire · 40 €/séance ou 350 € les 10.','Voir les séances 1:1 →','40 € / séance'],
        ['Programme de 8 semaines','Bientôt disponible · environ 40 pratiques de 30 min · accès 3 mois · retours individuels sur demande.','Découvrir le programme →','49 € · bientôt']
      ]
    },
    about: {
      eyebrow:'À propos', title:'Professeure de yoga. Approche du mouvement informée par la réadaptation.',
      p1:'Je ne vous demande pas de poursuivre la posture parfaite. J’observe comment votre corps bouge aujourd’hui et comment développer progressivement force, contrôle et liberté.',
      p2:'Mon objectif est que vous compreniez mieux votre corps et que vous vous sentiez plus capable dans le mouvement — avec moins de peur, moins de force inutile et plus d’options.',
      button:'Découvrir Domenica'
    },
    method:{eyebrow:'Comment ça marche',title:'Comprendre. Pratiquer. Développer ses capacités.',items:[
      ['Comprendre votre corps','Nous regardons vos besoins, objectifs, antécédents et capacités du moment.'],
      ['Pratiquer intelligemment','Les mouvements s’adaptent à vous, pas l’inverse.'],
      ['Développer vos capacités','Nous construisons progressivement force, mobilité, contrôle et confiance.']
    ]},
    testimonials:{eyebrow:'Ce que nous construisons',title:'Confiance. Force. Conscience du corps.',items:[
      'Plus de confiance dans les mouvements du quotidien.',
      'Une force qui soutient la mobilité.',
      'Une conscience corporelle pour savoir quand adapter.'
    ]},
    resources:{eyebrow:'Ressources',title:'Mieux comprendre votre corps.',text:'Des explications pratiques et de l’éducation au mouvement — sans mystique inutile.',all:'Les articles arrivent bientôt',items:[
      'Pourquoi le bas du dos peut être surchargé en Chien tête en haut',
      'Tensions dans la nuque après le travail : ce que le mouvement peut changer',
      'Mobilité ou souplesse : pourquoi le contrôle compte'
    ]},
    final:{title:'Vous n’avez pas besoin d’être “prête” pour commencer.',text:'Choisissez un format et écrivez-moi directement. Je vous aiderai à trouver ce qui vous convient.',button:'Contacter Domenica'},
    footer:{tag:'Yoga en ligne & mouvement intelligent.',legal:'Politique de confidentialité',terms:'Mentions légales'}
  },
  ua: {
    title: 'Domenica Yoga — Розумна йога, сила та мобільність',
    description: 'Онлайн-йога та розумний рух із Доменікою: групові заняття, індивідуальні сесії та 8-тижневий курс для сили, мобільності й упевненого руху.',
    nav: { about: 'Про мене', training: 'Тренування', course: 'Курс', resources: 'Матеріали', contact: 'Контакти' },
    hero: {
      eyebrow: 'Йога · сила · мобільність · розумний рух',
      title: 'Рухайся впевнено. Побудуй тіло, якому довіряєш.',
      text: 'Безпечна й продумана практика йоги та руху, що допомагає розвивати силу, мобільність, відчуття тіла й більше комфорту в повсякденному русі.',
      primary: 'Подивитися формати', secondary: 'Обрати свій формат',
      micro: 'Онлайн наживо · індивідуально · курс у записі'
    },
    philosophy: {
      title: 'Йога має розширювати можливості тіла — а не змушувати його терпіти.',
      pillars: [
        ['Адаптивно','Поточна амплітуда, історія та цілі визначають практику.'],
        ['Функціонально','Сила, мобільність і контроль, які працюють у реальному житті.'],
        ['Зрозуміло','Ти розумієш, навіщо робиш рух, а не лише як він має виглядати.']
      ]
    },
    problem: {
      title: 'Можливо, ти тут, бо рух став складнішим, ніж хотілося б.',
      items: [
        'Поперек, шия або плечі регулярно нагадують про себе дискомфортом.',
        'Хочеться рухатися більше, але не завжди зрозуміло, що тобі підходить.',
        'Стандартні заняття здаються надто швидкими або шаблонними.',
        'Хочеться одночасно сили й мобільності — а не гнучкості будь-якою ціною.',
        'Хочеться розуміти свою практику та вміти її адаптувати.'
      ],
      line: 'Мета — не “показати” тіло. Мета — побудувати тіло, на яке можна покластися.'
    },
    services: {
      eyebrow:'Формати занять', title:'Обери формат, який реально впишеться у твоє життя.',
      items:[
        ['Групові онлайн-тренування','3 живі заняття по 60 хв щотижня в Google Meet · до 15 людей · 1500 грн/місяць.','Детальніше про групу →','1500 грн / місяць'],
        ['Індивідуальні 1:1','75 хвилин роботи під твоє тіло, цілі та історію руху · 40 € за заняття або 350 € за 10.','Детальніше про 1:1 →','40 € / заняття'],
        ['8-тижневий курс','Скоро · близько 40 практик по ~30 хв · доступ 3 місяці · індивідуальний зворотний зв’язок за запитом.','Подивитися курс →','49 € · скоро']
      ]
    },
    about: {
      eyebrow:'Про мене', title:'Інструкторка йоги. Реабілітолог. Людина, якій цікаво, як тіло навчається руху.',
      p1:'Я не вчу гнатися за “ідеальною” асаною. Я дивлюся, як твоє тіло рухається зараз і як поступово додати більше сили, контролю та свободи.',
      p2:'Моя мета — щоб ти краще розуміла своє тіло й почувалася спроможнішою в русі: менше страху, менше примусу, більше корисних варіантів.',
      button:'Познайомитися з Доменікою'
    },
    method:{eyebrow:'Як це працює',title:'Зрозуміти. Практикувати. Нарощувати можливості.',items:[
      ['Зрозуміти тіло','Дивимося на потреби, цілі, історію та поточні можливості.'],
      ['Практикувати розумно','Рух адаптується під тебе, а не ти під один “правильний” варіант.'],
      ['Нарощувати можливості','Поступово додаємо силу, мобільність, контроль та впевненість.']
    ]},
    testimonials:{eyebrow:'Що ми будуємо',title:'Впевненість. Сила. Відчуття тіла.',items:[
      'Більше впевненості у повсякденному русі.',
      'Сила, що підтримує мобільність.',
      'Відчуття тіла, щоб знати, коли адаптувати рух.'
    ]},
    resources:{eyebrow:'Матеріали',title:'Краще розумій своє тіло.',text:'Практичні пояснення та освіта про рух — без зайвої містики.',all:'Статті скоро з’являться',items:[
      'Чому поперек може перевантажуватись у собаці мордою вгору',
      'Напруга в шиї після робочого дня: що може змінити рух',
      'Мобільність чи гнучкість: чому контроль важливий'
    ]},
    final:{title:'Не треба бути “готовою”, щоб почати.',text:'Обери формат і напиши мені напряму. Я допоможу зрозуміти, що підійде.',button:'Написати Доменіці'},
    footer:{tag:'Онлайн-йога та розумний рух.',legal:'Політика конфіденційності',terms:'Правова інформація'}
  }
} as const;
