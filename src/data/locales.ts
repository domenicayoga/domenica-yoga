export type Lang = 'en' | 'fr' | 'ua';

export const localeMeta = {
  en: { code: 'en', label: 'EN', ogLocale: 'en_US' },
  fr: { code: 'fr', label: 'FR', ogLocale: 'fr_FR' },
  ua: { code: 'uk', label: 'UA', ogLocale: 'uk_UA' },
} as const;

export const content = {
  en: {
    title: 'Domenica Yoga — Safe, intelligent yoga & movement',
    description: 'Safe, intelligent yoga and movement practices to build strength, mobility and confidence in your body.',
    nav: { about: 'About', training: 'Training', course: 'Course', resources: 'Resources', contact: 'Contact' },
    hero: {
      eyebrow: 'Yoga · movement · rehabilitation approach',
      title: 'Move without pain. Build a body you can trust.',
      text: 'Safe, intelligent yoga and movement practices designed to help you feel stronger, freer and more confident in your body.',
      primary: 'Start training', secondary: 'Find the right format',
      micro: 'Yoga · movement · strength · mobility'
    },
    philosophy: {
      title: 'Yoga should increase your possibilities — not your pain.',
      pillars: [
        ['Safe','Practice adapted to your real body, not an Instagram pose.'],
        ['Functional','Mobility, strength and control that transfer into everyday life.'],
        ['Individual','Your limitations, history and goals matter.']
      ]
    },
    problem: {
      title: 'Maybe you’re here because…',
      items: [
        'Your back or neck keeps reminding you about itself.',
        'You feel stiff even though you exercise.',
        'You’re afraid of making an old injury worse.',
        'Standard yoga classes feel too fast or too generic.',
        'You want to be strong and mobile — not just flexible.'
      ],
      line: 'You don’t need to force your body. You need to understand it.'
    },
    services: {
      eyebrow:'Ways to practice', title:'Choose how you want to work with your body.',
      items:[
        ['Online Group Training','Regular practice for strength, mobility and consistency — with adaptations and feedback.','Learn more →'],
        ['1:1 Sessions','Individual work around your specific needs, limitations, movement history and goals.','Book a session →'],
        ['8-Week Course','A structured recorded program you can follow at your own pace, step by step.','Join the waitlist →']
      ]
    },
    about: {
      eyebrow:'About', title:'Yoga teacher. Rehabilitation specialist. Movement nerd.',
      p1:'I don’t teach people to chase perfect poses. I look at how your body moves, what it needs now, and how we can gradually build more strength, control and freedom without unnecessary fear or force.',
      p2:'My goal is simple: your body should become an ally, not a problem you constantly have to manage.',
      button:'Meet Domenica'
    },
    method:{eyebrow:'How it works',title:'Understand. Practice. Build capacity.',items:[
      ['Understand your body','We look at your needs, history and limitations.'],
      ['Practice intelligently','You get an adapted practice, not a generic sequence.'],
      ['Build capacity','We gradually add strength, control, mobility and complexity.']
    ]},
    testimonials:{eyebrow:'Results',title:'Real people. Real progress.',items:[
      '“After six weeks I stopped being afraid to bend because of my lower back pain.”',
      '“I finally understood why standard yoga used to cause pain in my back.”',
      '“Now I can train regularly without flare-ups and I feel much stronger.”'
    ]},
    resources:{eyebrow:'Resources',title:'Understand your body better.',text:'Practical insights, examples and tips for a stronger, healthier you.',all:'Go to all articles →',items:[
      'Why your lower back hurts in Upward Facing Dog',
      'Neck pain after a day at work: what can actually help',
      'Mobility vs flexibility: why you need both'
    ]},
    final:{title:'Your body doesn’t need to be perfect to start.',text:'Let’s find the practice that works for you.',button:'Find my practice'},
    footer:{tag:'Online yoga & intelligent movement.',legal:'Privacy Policy',terms:'Terms'}
  },
  fr: {
    title: 'Domenica Yoga — Yoga sûr, mouvement intelligent',
    description: 'Des pratiques de yoga et de mouvement sûres et intelligentes pour développer force, mobilité et confiance dans votre corps.',
    nav: { about: 'À propos', training: 'Pratiques', course: 'Programme', resources: 'Ressources', contact: 'Contact' },
    hero: {
      eyebrow: 'Yoga · mouvement · approche de réadaptation',
      title: 'Bougez sans douleur. Construisez un corps auquel vous pouvez faire confiance.',
      text: 'Des pratiques de yoga et de mouvement sûres et intelligentes pour vous aider à vous sentir plus forte, plus libre et plus confiante dans votre corps.',
      primary: 'Commencer à pratiquer', secondary: 'Trouver le bon format',
      micro: 'Yoga · mouvement · force · mobilité'
    },
    philosophy: {
      title: 'Le yoga doit élargir vos possibilités — pas augmenter vos douleurs.',
      pillars: [
        ['Sûr','Une pratique adaptée à votre vrai corps, pas à une posture Instagram.'],
        ['Fonctionnel','Mobilité, force et contrôle utiles dans la vie quotidienne.'],
        ['Individuel','Vos limites, votre histoire et vos objectifs comptent.']
      ]
    },
    problem: {
      title: 'Peut-être êtes-vous ici parce que…',
      items: [
        'Votre dos ou votre nuque vous rappellent régulièrement leur présence.',
        'Vous vous sentez raide même si vous faites du sport.',
        'Vous avez peur d’aggraver une ancienne blessure.',
        'Les cours de yoga classiques vous semblent trop rapides ou trop génériques.',
        'Vous voulez être forte et mobile — pas seulement souple.'
      ],
      line: 'Vous n’avez pas besoin de forcer votre corps. Vous avez besoin de le comprendre.'
    },
    services: {
      eyebrow:'Pratiquer avec moi', title:'Choisissez la façon dont vous voulez travailler avec votre corps.',
      items:[
        ['Cours collectifs en ligne','Une pratique régulière pour la force, la mobilité et la constance — avec adaptations et retours.','En savoir plus →'],
        ['Séances individuelles 1:1','Un travail individuel autour de vos besoins, limites, antécédents de mouvement et objectifs.','Réserver une séance →'],
        ['Programme de 8 semaines','Un programme structuré en vidéo, à suivre à votre rythme, étape par étape.','Rejoindre la liste d’attente →']
      ]
    },
    about: {
      eyebrow:'À propos', title:'Professeure de yoga. Spécialiste du mouvement et de la réadaptation.',
      p1:'Je n’enseigne pas à poursuivre la posture parfaite. J’observe comment votre corps bouge, ce dont il a besoin aujourd’hui et comment développer progressivement plus de force, de contrôle et de liberté sans peur inutile ni contrainte.',
      p2:'Mon objectif est simple : que votre corps devienne un allié, et non un problème que vous devez constamment gérer.',
      button:'Découvrir Domenica'
    },
    method:{eyebrow:'Comment ça marche',title:'Comprendre. Pratiquer. Développer ses capacités.',items:[
      ['Comprendre votre corps','Nous regardons vos besoins, votre histoire et vos limites.'],
      ['Pratiquer intelligemment','Vous recevez une pratique adaptée, pas une séquence générique.'],
      ['Développer vos capacités','Nous ajoutons progressivement force, contrôle, mobilité et complexité.']
    ]},
    testimonials:{eyebrow:'Résultats',title:'De vraies personnes. De vrais progrès.',items:[
      '« Après six semaines, j’ai cessé d’avoir peur de me pencher à cause de mon bas du dos. »',
      '« J’ai enfin compris pourquoi les cours de yoga classiques provoquaient des douleurs dans mon dos. »',
      '« Maintenant, je peux m’entraîner régulièrement et je me sens beaucoup plus forte. »'
    ]},
    resources:{eyebrow:'Ressources',title:'Mieux comprendre votre corps.',text:'Des explications, exemples et conseils pratiques pour un corps plus fort et plus mobile.',all:'Voir tous les articles →',items:[
      'Pourquoi le bas du dos peut faire mal en Chien tête en haut',
      'Douleur à la nuque après une journée de travail : ce qui peut vraiment aider',
      'Mobilité ou souplesse : pourquoi vous avez besoin des deux'
    ]},
    final:{title:'Votre corps n’a pas besoin d’être parfait pour commencer.',text:'Trouvons la pratique qui vous convient.',button:'Trouver ma pratique'},
    footer:{tag:'Yoga en ligne & mouvement intelligent.',legal:'Politique de confidentialité',terms:'Mentions légales'}
  },
  ua: {
    title: 'Domenica Yoga — Безпечна йога та розумний рух',
    description: 'Безпечні та розумні практики йоги й руху для сили, мобільності та впевненості у своєму тілі.',
    nav: { about: 'Про мене', training: 'Тренування', course: 'Курс', resources: 'Матеріали', contact: 'Контакти' },
    hero: {
      eyebrow: 'Йога · рух · реабілітаційний підхід',
      title: 'Рухайся без болю. Побудуй тіло, якому довіряєш.',
      text: 'Безпечні, розумні практики йоги та руху, що допомагають стати сильнішою, вільнішою та впевненішою у своєму тілі.',
      primary: 'Почати тренування', secondary: 'Знайти свій формат',
      micro: 'Йога · рух · сила · мобільність'
    },
    philosophy: {
      title: 'Йога має розширювати твої можливості — а не посилювати біль.',
      pillars: [
        ['Безпечно','Практика адаптована до твого реального тіла, а не до картинки з Instagram.'],
        ['Функціонально','Мобільність, сила й контроль, які працюють у повсякденному житті.'],
        ['Індивідуально','Твої обмеження, історія та цілі мають значення.']
      ]
    },
    problem: {
      title: 'Можливо, ти тут, тому що…',
      items: [
        'Спина або шия постійно нагадують про себе.',
        'Ти відчуваєш скутість, навіть якщо тренуєшся.',
        'Ти боїшся погіршити стару травму.',
        'Звичайні заняття йогою здаються надто швидкими або універсальними.',
        'Ти хочеш бути сильною та мобільною — а не просто гнучкою.'
      ],
      line: 'Тобі не потрібно змушувати своє тіло. Тобі потрібно його зрозуміти.'
    },
    services: {
      eyebrow:'Формати роботи', title:'Обери, як ти хочеш працювати зі своїм тілом.',
      items:[
        ['Групові онлайн-тренування','Регулярна практика для сили, мобільності та системності — з адаптаціями й зворотним зв’язком.','Детальніше →'],
        ['Індивідуальні заняття 1:1','Індивідуальна робота з урахуванням твоїх потреб, обмежень, історії руху та цілей.','Записатися →'],
        ['8-тижневий курс','Структурована програма в записі, яку можна проходити у власному темпі, крок за кроком.','До списку очікування →']
      ]
    },
    about: {
      eyebrow:'Про мене', title:'Інструкторка йоги. Реабілітолог. Людина, закохана в рух.',
      p1:'Я не вчу людей гнатися за ідеальними асанами. Я дивлюся, як рухається твоє тіло, що йому потрібно зараз і як поступово побудувати більше сили, контролю та свободи без зайвого страху й насилля над собою.',
      p2:'Моя ціль проста: твоє тіло має стати союзником, а не проблемою, яку потрібно постійно контролювати.',
      button:'Познайомитися ближче'
    },
    method:{eyebrow:'Як це працює',title:'Зрозуміти. Практикувати. Розширювати можливості.',items:[
      ['Зрозумій своє тіло','Ми дивимося на твої потреби, історію та обмеження.'],
      ['Практикуй розумно','Ти отримуєш адаптовану практику, а не універсальний комплекс.'],
      ['Розширюй можливості','Ми поступово додаємо силу, контроль, мобільність і складність.']
    ]},
    testimonials:{eyebrow:'Результати',title:'Реальні люди. Реальний прогрес.',items:[
      '«Через шість тижнів я перестала боятися нахилятися через біль у попереку.»',
      '«Я нарешті зрозуміла, чому після стандартної йоги в мене боліла спина.»',
      '«Тепер я можу тренуватися регулярно без загострень і відчуваю себе значно сильнішою.»'
    ]},
    resources:{eyebrow:'Матеріали',title:'Розумій своє тіло краще.',text:'Практичні пояснення, приклади та поради для сильнішого й здоровішого тіла.',all:'Усі статті →',items:[
      'Чому може боліти поперек у Upward Facing Dog',
      'Біль у шиї після робочого дня: що справді може допомогти',
      'Мобільність чи гнучкість: чому потрібні обидві'
    ]},
    final:{title:'Твоє тіло не має бути ідеальним, щоб почати.',text:'Давай знайдемо практику, яка працюватиме саме для тебе.',button:'Знайти свій формат'},
    footer:{tag:'Онлайн-йога та розумний рух.',legal:'Політика конфіденційності',terms:'Умови'}
  }
} as const;
