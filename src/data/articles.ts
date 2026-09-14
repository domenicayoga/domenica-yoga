import type { Lang } from './locales';

export type ArticleKey = 'updog' | 'neck' | 'mobility';

export const articlePaths: Record<ArticleKey, Record<Lang, string>> = {
  updog: {
    en: '/en/resources/lower-back-pain-upward-facing-dog/',
    fr: '/fr/ressources/douleur-lombaire-chien-tete-en-haut/',
    ua: '/ua/materialy/bil-u-popereku-upward-facing-dog/'
  },
  neck: {
    en: '/en/resources/neck-pain-after-computer-work/',
    fr: '/fr/ressources/douleur-nuque-travail-ordinateur/',
    ua: '/ua/materialy/bil-u-shyi-pislya-kompyutera/'
  },
  mobility: {
    en: '/en/resources/mobility-vs-flexibility/',
    fr: '/fr/ressources/mobilite-vs-souplesse/',
    ua: '/ua/materialy/mobilnist-vs-gnuchkist/'
  }
};

export const articlePath = (key: ArticleKey, lang: Lang) => articlePaths[key][lang];
export const articleAlternates = (key: ArticleKey) => ({
  en: articlePaths[key].en,
  fr: articlePaths[key].fr,
  ua: articlePaths[key].ua
});

export type ArticleContent = {
  metaTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  intro: string;
  readTime: string;
  image: string;
  ogImage: string;
  alt: string;
  keyPoint: string;
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
  references: { title: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const articles: Record<Lang, Record<ArticleKey, ArticleContent>> = {
  en: {
    updog: {
      metaTitle: 'Lower Back Pain in Upward Facing Dog: What to Change | Domenica Yoga',
      description: 'Why your lower back may feel overloaded in Upward Facing Dog and how breathing, abdominal control and pelvic position can make the transition more comfortable.',
      eyebrow: 'Yoga technique',
      title: 'Lower back pain in Upward Facing Dog: what to change',
      intro: 'Upward Facing Dog should not feel like all the movement is being compressed into your lower back. When discomfort appears specifically in this pose, the first technical thing I look at is trunk and pelvic control.',
      readTime: '4 min read',
      image: '/assets/resource1-v04.webp',
      ogImage: '/assets/og-updog-v08.jpg',
      alt: 'Domenica practicing a controlled yoga transition by the Atlantic Ocean',
      keyPoint: 'Think: exhale → engage the abdomen → control the pelvis → create length through the lower back instead of chasing a deeper backbend.',
      sections: [
        {
          heading: 'The main technical idea',
          paragraphs: [
            'In my practice, the most common issue is losing active abdominal support and allowing the pelvis to tip so the lumbar spine takes most of the extension.',
            'The goal is not simply to lift the chest higher. During the transition, exhale, strongly engage the lower abdominal wall and the whole trunk, and keep the pelvis under control. I want you to feel as if you are lengthening the lower back while moving into extension — not collapsing into it.'
          ]
        },
        {
          heading: 'Make the transition easier',
          bullets: [
            'Reduce the range of the backbend.',
            'Use a simplified transition instead of forcing the full version.',
            'Lower to the knees and use forearm-supported variations when you need more control.',
            'Return to the full pose only when you can keep the abdomen active and breathing calm.'
          ]
        },
        {
          heading: 'If you are experienced',
          paragraphs: [
            'You may not need a different pose at all. Often the useful change is simply better timing: exhale during the transition, brace the trunk, control the pelvis and stop trying to gain extra depth from the lumbar spine.'
          ]
        },
        {
          heading: 'What the research supports',
          paragraphs: [
            'EMG research on yoga poses shows that core-muscle recruitment changes with trunk and pelvic position, including in Upward Facing Dog. Separate biomechanical work also shows that abdominal stabilisation strategies can reduce lumbar extension and anterior pelvic tilt during an extension task. These studies do not prove one universal cause of pain, but they support the practical importance of active lumbopelvic control.'
          ]
        },
        {
          paragraphs: ['If pain is sharp, radiates into the leg, is associated with numbness or weakness, or persists outside practice, stop treating it as a technique problem and seek an individual clinical assessment.']
        }
      ],
      references: [
        { title: 'Ni M et al. Core muscle function during specific yoga poses. PMID 24731894', href: 'https://pubmed.ncbi.nlm.nih.gov/24731894/' },
        { title: 'Suehiro T et al. Abdominal stabilisation and lumbopelvic motion during prone hip extension. PMID 25042326', href: 'https://pubmed.ncbi.nlm.nih.gov/25042326/' }
      ],
      ctaTitle: 'Want help with the way you move?',
      ctaText: 'We can work on technique, strength and useful mobility in a small online group or 1:1.',
      ctaPrimary: 'See group training',
      ctaSecondary: 'See 1:1 sessions'
    },
    neck: {
      metaTitle: 'Neck and Upper Trapezius Pain After Computer Work: What Helps | Domenica Yoga',
      description: 'Why your neck and upper trapezius may feel tired after computer work, and how changing position, moving the shoulder blades and simple wall exercises can help.',
      eyebrow: 'Workday movement',
      title: 'Why your neck and upper trapezius hurt after a workday',
      intro: 'Often the problem is less dramatic than it feels: the body has simply spent too long in one position, while stress quietly keeps the neck and shoulder muscles working.',
      readTime: '4 min read',
      image: '/assets/article-neck-work-v08.webp',
      ogImage: '/assets/og-neck-work-v08.jpg',
      alt: 'Domenica sitting at a desk with her head supported by one hand',
      keyPoint: 'The simplest first step is not a special tool. Change the position, move the shoulder blades, breathe and give the muscles a different job.',
      sections: [
        {
          heading: 'Why it happens',
          paragraphs: [
            'Look at a typical work position: rounded back, chin resting on one hand, head slightly forward and very little movement through the shoulders and shoulder blades. The muscles are not necessarily “damaged” — they are often simply tired from staying in the same pattern for too long.',
            'Stress adds another layer. Emails, messages, deadlines and concentration can make us lift the shoulders and keep the upper trapezius and neck muscles active without noticing it. Research on computer work supports the link between workplace stressors and increased neck-shoulder muscle activity.'
          ]
        },
        {
          heading: 'A simple wall exercise I like',
          bullets: [
            'Place your forearm against a wall or door frame.',
            'Gently push the wall away from you.',
            'Let the shoulder blade move instead of pinning it in place.',
            'Guide the shoulder down without clamping the neck.',
            'Keep the abdomen lightly active and breathe normally.'
          ]
        },
        {
          heading: 'The goal is variety, not one perfect exercise',
          paragraphs: [
            'After hours in one position, almost any comfortable movement that changes the pattern can be useful: move the shoulders, shoulder blades, thoracic spine, arms and neck. The muscles get a new task instead of repeating the same low-level effort.',
            'Massage balls and a roller can feel good, but they are optional. You can do a lot simply by standing up and moving without equipment.'
          ]
        },
        {
          heading: 'What the research supports',
          paragraphs: [
            'A systematic review and meta-analysis found that simulated workplace stressors produced a moderate increase in neck-shoulder and forearm muscle activity. Research comparing computer users with and without neck-shoulder pain also found longer uninterrupted periods of trapezius activation in the pain group.'
          ]
        },
        {
          paragraphs: ['If pain is persistent, severe, radiates into the arm, or comes with numbness or weakness, it deserves individual assessment rather than another generic stretch.']
        }
      ],
      references: [
        { title: 'Eijckelhof BHW et al. Workplace stressors and neck-shoulder muscle activity: systematic review and meta-analysis. PMID 23584278', href: 'https://pubmed.ncbi.nlm.nih.gov/23584278/' },
        { title: 'Kelson DM et al. Trapezius muscle activity variation during computer work. PMID 31422258', href: 'https://pubmed.ncbi.nlm.nih.gov/31422258/' }
      ],
      ctaTitle: 'Your body does not need another hour in the same position.',
      ctaText: 'If you want regular movement that builds strength and mobility without overcomplicating it, choose a format that fits your life.',
      ctaPrimary: 'See group training',
      ctaSecondary: 'See 1:1 sessions'
    },
    mobility: {
      metaTitle: 'Mobility vs Flexibility: Why Being Flexible Is Not Enough | Domenica Yoga',
      description: 'Flexibility gives you range. Mobility adds active control, strength and endurance so you can actually use that range in everyday movement.',
      eyebrow: 'Strength + mobility',
      title: 'Mobility vs flexibility: why being flexible is not enough',
      intro: 'You can sit in a split and still struggle to stay in a deep squat with your child — or to stand up without using your hands. Range alone is not the same as useful movement.',
      readTime: '4 min read',
      image: '/assets/group-detail-v04.webp',
      ogImage: '/assets/og-mobility-v08.jpg',
      alt: 'Domenica holding a wide seated position with active control',
      keyPoint: 'Flexibility gives you range. In my teaching, mobility means being able to actively control that range with enough strength and endurance to use it.',
      sections: [
        {
          heading: 'What I see in practice',
          paragraphs: [
            'I have worked with very flexible women, including people with a rhythmic-gymnastics background. They could reach impressive ranges easily. But ask them to hold a strength-demanding yoga position for longer than a moment and the limitation often appeared: plenty of flexibility, not enough strength in that range.',
            'That is why I care more about mobility than maximum flexibility.'
          ]
        },
        {
          heading: 'Flexibility and mobility are not the same thing',
          paragraphs: [
            'Flexibility describes how much range is available. In my method, mobility is the range you can actively enter, control, hold and leave.',
            'So when I say mobility, I mean range of motion + strength + control + endurance.'
          ]
        },
        {
          heading: 'A split is a good example',
          paragraphs: [
            'Being able to reach a split does not automatically mean you have enough strength around the hips to control that end range. The same is true in everyday life: you may have a large passive range but still find a deep squat uncomfortable, tire quickly or need your hands to get back up.',
            'For me, the useful question is not “How far can you stretch?” It is “What can you do inside the range you already have?”'
          ]
        },
        {
          heading: 'Why strength belongs in the conversation',
          paragraphs: [
            'Research in people with generalised joint hypermobility has found associations with lower muscle strength, while rehabilitation literature emphasises strength, proprioception and motor control for joint stability. More recent work on functional movement also supports looking at range of motion and strength together rather than treating range alone as the goal.'
          ]
        },
        {
          heading: 'The goal',
          paragraphs: [
            'I am not trying to make you maximally flexible. I want the range you have to become strong and useful — so you can squat to the floor, get up, reach, turn, balance, carry a child and trust your body in ordinary life.'
          ]
        }
      ],
      references: [
        { title: 'Scheper M et al. Generalized joint hypermobility, muscle strength and physical function. PMID 25599680', href: 'https://pubmed.ncbi.nlm.nih.gov/25599680/' },
        { title: 'Keer R, Simmonds J. Joint protection and physical rehabilitation of the adult with hypermobility syndrome. PMID 21252682', href: 'https://pubmed.ncbi.nlm.nih.gov/21252682/' },
        { title: 'Özkan M et al. Predicting functional movement capacity: range of motion and isometric strength. PMID 38956714', href: 'https://pubmed.ncbi.nlm.nih.gov/38956714/' }
      ],
      ctaTitle: 'Build range you can actually use.',
      ctaText: 'My classes combine strength, mobility and body awareness rather than chasing flexibility for its own sake.',
      ctaPrimary: 'See group training',
      ctaSecondary: 'See 1:1 sessions'
    }
  },
  fr: {
    updog: {
      metaTitle: 'Douleur lombaire en Chien tête en haut : quoi changer | Domenica Yoga',
      description: 'Pourquoi le bas du dos peut sembler surchargé en Chien tête en haut et comment la respiration, le contrôle abdominal et le bassin peuvent rendre la transition plus confortable.',
      eyebrow: 'Technique de yoga',
      title: 'Douleur lombaire en Chien tête en haut : quoi changer',
      intro: 'Le Chien tête en haut ne devrait pas donner l’impression que tout le mouvement se concentre dans les lombaires. Si l’inconfort apparaît surtout dans cette posture, la première chose technique que je regarde est le contrôle du tronc et du bassin.',
      readTime: '4 min de lecture', image: '/assets/resource1-v04.webp', ogImage: '/assets/og-updog-v08.jpg', alt: 'Domenica pratique un mouvement de yoga contrôlé au bord de l’Atlantique',
      keyPoint: 'Pensez : expirer → engager les abdominaux → contrôler le bassin → créer de la longueur dans le bas du dos plutôt que chercher une flexion arrière plus profonde.',
      sections: [
        { heading: 'L’idée technique principale', paragraphs: ['Dans ma pratique, le problème le plus fréquent est la perte du soutien abdominal actif : le bassin bascule et la colonne lombaire prend l’essentiel de l’extension.','Le but n’est pas simplement de monter la poitrine plus haut. Pendant la transition, expirez, engagez fortement le bas de l’abdomen et l’ensemble du tronc, puis gardez le bassin sous contrôle. Cherchez la sensation d’allonger les lombaires en allant vers l’extension, plutôt que de vous y écraser.'] },
        { heading: 'Simplifier la transition', bullets: ['Réduisez l’amplitude de l’extension.','Choisissez une transition simplifiée au lieu de forcer la version complète.','Passez par les genoux et utilisez une variante avec appui sur les avant-bras si vous avez besoin de plus de contrôle.','Revenez à la posture complète lorsque vous pouvez garder le tronc actif et respirer calmement.'] },
        { heading: 'Si vous êtes déjà expérimentée', paragraphs: ['Vous n’avez pas forcément besoin d’une autre posture. Le changement utile est souvent le timing : expirez dans la transition, engagez le tronc, contrôlez le bassin et cessez de chercher de la profondeur supplémentaire uniquement dans les lombaires.'] },
        { heading: 'Ce que soutient la recherche', paragraphs: ['Des travaux EMG sur différentes postures de yoga montrent que le recrutement des muscles du tronc varie selon la position du tronc et du bassin, y compris en Chien tête en haut. D’autres travaux biomécaniques montrent que des stratégies de stabilisation abdominale peuvent réduire l’extension lombaire et l’antéversion du bassin lors d’un mouvement d’extension. Cela ne prouve pas une cause universelle de douleur, mais soutient l’importance pratique du contrôle lombo-pelvien actif.'] },
        { paragraphs: ['Si la douleur est vive, descend dans la jambe, s’accompagne d’engourdissement ou de faiblesse, ou persiste en dehors de la pratique, ne la traitez plus comme un simple problème technique et demandez une évaluation individuelle.'] }
      ],
      references: [
        { title: 'Ni M et al. Core muscle function during specific yoga poses. PMID 24731894', href: 'https://pubmed.ncbi.nlm.nih.gov/24731894/' },
        { title: 'Suehiro T et al. Stabilisation abdominale et mouvement lombo-pelvien. PMID 25042326', href: 'https://pubmed.ncbi.nlm.nih.gov/25042326/' }
      ],
      ctaTitle: 'Vous voulez mieux comprendre votre mouvement ?', ctaText: 'Nous pouvons travailler la technique, la force et une mobilité utile en petit groupe en ligne ou en 1:1.', ctaPrimary: 'Voir les cours en groupe', ctaSecondary: 'Voir les séances 1:1'
    },
    neck: {
      metaTitle: 'Douleur de nuque après l’ordinateur : ce qui aide | Domenica Yoga',
      description: 'Pourquoi la nuque et le haut du trapèze fatiguent après le travail sur ordinateur, et comment changer de position et faire bouger les omoplates peut aider.',
      eyebrow: 'Mouvement au travail', title: 'Pourquoi la nuque et le haut du trapèze font mal après une journée de travail',
      intro: 'Souvent, le problème est plus simple qu’il n’en a l’air : le corps est resté trop longtemps dans la même position, tandis que le stress maintient discrètement les muscles du cou et des épaules en activité.',
      readTime: '4 min de lecture', image: '/assets/article-neck-work-v08.webp', ogImage: '/assets/og-neck-work-v08.jpg', alt: 'Domenica assise à son bureau, la tête appuyée sur une main',
      keyPoint: 'Le premier geste n’a pas besoin d’un accessoire spécial : changez de position, faites bouger les omoplates, respirez et donnez aux muscles une autre tâche.',
      sections: [
        { heading: 'Pourquoi cela arrive', paragraphs: ['Regardez une posture de travail typique : dos arrondi, menton posé sur une main, tête légèrement avancée, presque aucun mouvement des épaules et des omoplates. Les muscles ne sont pas forcément « abîmés » : ils sont souvent simplement fatigués de rester trop longtemps dans le même schéma.','Le stress ajoute une couche. Emails, messages, délais et concentration peuvent nous faire remonter les épaules et maintenir le haut du trapèze et les muscles du cou actifs sans que nous nous en rendions compte. Les recherches sur le travail informatique soutiennent le lien entre certains facteurs de stress au travail et une augmentation de l’activité musculaire cou-épaules.'] },
        { heading: 'Un exercice simple au mur que j’aime', bullets: ['Placez l’avant-bras contre un mur ou un encadrement de porte.','Repoussez doucement le mur.','Laissez l’omoplate bouger au lieu de la bloquer.','Dirigez l’épaule vers le bas sans serrer la nuque.','Gardez le tronc légèrement actif et respirez normalement.'] },
        { heading: 'Le but est la variété, pas l’exercice parfait', paragraphs: ['Après plusieurs heures dans une seule position, presque tout mouvement confortable qui change le schéma peut être utile : faites bouger les épaules, les omoplates, le haut du dos, les bras et la nuque.','Une balle de massage ou un rouleau peuvent être agréables, mais ils ne sont pas indispensables. Se lever et bouger sans matériel est déjà beaucoup.'] },
        { heading: 'Ce que soutient la recherche', paragraphs: ['Une revue systématique avec méta-analyse a montré que des facteurs de stress professionnels simulés augmentaient modérément l’activité musculaire de la région cou-épaules et des avant-bras. Une étude comparant des utilisateurs d’ordinateur avec et sans douleur cou-épaules a également observé des périodes ininterrompues plus longues d’activation du trapèze dans le groupe douloureux.'] },
        { paragraphs: ['Si la douleur est persistante, importante, descend dans le bras ou s’accompagne d’engourdissement ou de faiblesse, elle mérite une évaluation individuelle plutôt qu’un nouvel étirement générique.'] }
      ],
      references: [
        { title: 'Eijckelhof BHW et al. Workplace stressors and neck-shoulder muscle activity. PMID 23584278', href: 'https://pubmed.ncbi.nlm.nih.gov/23584278/' },
        { title: 'Kelson DM et al. Trapezius muscle activity variation during computer work. PMID 31422258', href: 'https://pubmed.ncbi.nlm.nih.gov/31422258/' }
      ],
      ctaTitle: 'Votre corps n’a pas besoin d’une heure de plus dans la même position.', ctaText: 'Si vous voulez bouger régulièrement et développer force et mobilité sans compliquer les choses, choisissez un format adapté à votre vie.', ctaPrimary: 'Voir les cours en groupe', ctaSecondary: 'Voir les séances 1:1'
    },
    mobility: {
      metaTitle: 'Mobilité vs souplesse : être souple ne suffit pas | Domenica Yoga',
      description: 'La souplesse donne de l’amplitude. La mobilité ajoute contrôle actif, force et endurance pour utiliser réellement cette amplitude au quotidien.',
      eyebrow: 'Force + mobilité', title: 'Mobilité vs souplesse : être souple ne suffit pas',
      intro: 'On peut faire un grand écart et pourtant avoir du mal à rester accroupie avec son enfant — ou à se relever sans les mains. L’amplitude seule n’est pas encore un mouvement utile.',
      readTime: '4 min de lecture', image: '/assets/group-detail-v04.webp', ogImage: '/assets/og-mobility-v08.jpg', alt: 'Domenica tient une grande amplitude en position assise avec contrôle actif',
      keyPoint: 'La souplesse donne de l’amplitude. Dans mon enseignement, la mobilité signifie pouvoir contrôler activement cette amplitude avec assez de force et d’endurance pour l’utiliser.',
      sections: [
        { heading: 'Ce que j’observe en pratique', paragraphs: ['J’ai travaillé avec des femmes très souples, notamment avec un passé en gymnastique rythmique. Elles entraient facilement dans de grandes amplitudes. Mais dès qu’il fallait tenir un peu plus longtemps une posture de yoga exigeante en force, la limite apparaissait souvent : beaucoup de souplesse, pas assez de force dans cette amplitude.','C’est pour cela que la mobilité m’intéresse davantage que la souplesse maximale.'] },
        { heading: 'Souplesse et mobilité ne sont pas synonymes', paragraphs: ['La souplesse décrit l’amplitude disponible. Dans ma méthode, la mobilité est l’amplitude dans laquelle vous pouvez entrer activement, rester stable et ressortir.','Quand je parle de mobilité, je parle donc d’amplitude + force + contrôle + endurance.'] },
        { heading: 'Le grand écart est un bon exemple', paragraphs: ['Pouvoir atteindre un grand écart ne signifie pas automatiquement que les muscles autour des hanches sont assez forts pour contrôler cette fin d’amplitude. Dans la vie quotidienne, on peut aussi avoir beaucoup d’amplitude passive mais trouver un squat profond inconfortable, fatiguer rapidement ou devoir s’aider des mains pour se relever.','La question utile n’est donc pas seulement « Jusqu’où pouvez-vous vous étirer ? », mais « Que pouvez-vous faire dans l’amplitude que vous avez déjà ? »'] },
        { heading: 'Pourquoi la force fait partie de la mobilité', paragraphs: ['Des études chez des personnes présentant une hypermobilité articulaire généralisée ont trouvé des associations avec une force musculaire plus faible. La littérature de rééducation insiste également sur la force, la proprioception et le contrôle moteur pour la stabilité articulaire. Des travaux plus récents sur le mouvement fonctionnel soutiennent aussi l’idée d’évaluer ensemble amplitude et force.'] },
        { heading: 'Le but', paragraphs: ['Je ne cherche pas à vous rendre aussi souple que possible. Je veux que l’amplitude disponible devienne forte et utile : s’accroupir, se relever du sol, atteindre, tourner, garder l’équilibre, porter un enfant et faire confiance à son corps dans la vie réelle.'] }
      ],
      references: [
        { title: 'Scheper M et al. Generalized joint hypermobility, muscle strength and physical function. PMID 25599680', href: 'https://pubmed.ncbi.nlm.nih.gov/25599680/' },
        { title: 'Keer R, Simmonds J. Joint protection and physical rehabilitation of the adult with hypermobility syndrome. PMID 21252682', href: 'https://pubmed.ncbi.nlm.nih.gov/21252682/' },
        { title: 'Özkan M et al. Functional movement capacity: range of motion and isometric strength. PMID 38956714', href: 'https://pubmed.ncbi.nlm.nih.gov/38956714/' }
      ],
      ctaTitle: 'Construisez une amplitude que vous pouvez vraiment utiliser.', ctaText: 'Mes séances associent force, mobilité et conscience corporelle plutôt que de poursuivre la souplesse pour elle-même.', ctaPrimary: 'Voir les cours en groupe', ctaSecondary: 'Voir les séances 1:1'
    }
  },
  ua: {
    updog: {
      metaTitle: 'Біль у попереку в Upward Facing Dog: що змінити | Domenica Yoga',
      description: 'Чому поперек може перевантажуватися в Upward Facing Dog і як видих, активний прес та контроль таза допомагають зробити перехід комфортнішим.',
      eyebrow: 'Техніка йоги', title: 'Біль у попереку в Upward Facing Dog: що змінити',
      intro: 'Upward Facing Dog не повинен відчуватися так, ніби весь рух збирається в попереку. Якщо дискомфорт виникає саме в цій позі, перше, що я перевіряю в техніці, — активність корпусу й контроль таза.',
      readTime: '4 хв читання', image: '/assets/resource1-v04.webp', ogImage: '/assets/og-updog-v08.jpg', alt: 'Доменіка виконує контрольований рух у практиці йоги біля Атлантичного океану',
      keyPoint: 'Схема проста: видих → активний прес → контроль таза → відчуття довгого попереку замість спроби прогнутися ще глибше.',
      sections: [
        { heading: 'Головна технічна ідея', paragraphs: ['У моїй практиці найчастіше проблема з’являється тоді, коли губиться активна підтримка м’язів живота, таз іде в неконтрольований нахил, а більша частина розгинання концентрується в поперековому відділі.','Завдання — не просто підняти грудну клітку вище. Під час переходу зробіть видих, сильно включіть нижню частину живота й увесь корпус та контролюйте положення таза. Думайте не про більший прогин, а ніби намагаєтеся подовжити поперек у момент розгинання.'] },
        { heading: 'Як спростити перехід', bullets: ['Зменшити амплітуду розгинання.','Не форсувати повну версію переходу.','Опускатися через коліна й використовувати варіації з опорою на передпліччя, якщо так легше зберігати контроль.','Повертатися до повної пози тоді, коли вдається тримати прес активним і дихати спокійно.'] },
        { heading: 'Якщо ви досвідчений практик', paragraphs: ['Іноді змінювати асану взагалі не треба. Достатньо правильно поєднати видих із напруженням корпусу, підконтролити таз і перестати добирати амплітуду лише за рахунок попереку.'] },
        { heading: 'Що підтримують дослідження', paragraphs: ['EMG-дослідження асан показують, що робота м’язів корпусу змінюється залежно від положення тулуба й таза, зокрема в Upward Facing Dog. Окремі біомеханічні дослідження також показують, що абдомінальна стабілізація може зменшувати небажане розгинання попереку та передній нахил таза під час руху в розгинання. Це не доводить одну універсальну причину будь-якого болю, але добре підтримує практичну важливість активного контролю попереково-тазової зони.'] },
        { paragraphs: ['Якщо біль гострий, віддає в ногу, супроводжується онімінням або слабкістю чи залишається поза практикою, не варто сприймати його лише як помилку техніки — потрібна індивідуальна клінічна оцінка.'] }
      ],
      references: [
        { title: 'Ni M et al. Core muscle function during specific yoga poses. PMID 24731894', href: 'https://pubmed.ncbi.nlm.nih.gov/24731894/' },
        { title: 'Suehiro T et al. Abdominal stabilisation and lumbopelvic motion. PMID 25042326', href: 'https://pubmed.ncbi.nlm.nih.gov/25042326/' }
      ],
      ctaTitle: 'Хочеш краще зрозуміти свою техніку?', ctaText: 'Можемо працювати над силою, технікою та корисною мобільністю в невеликій онлайн-групі або 1:1.', ctaPrimary: 'Групові тренування', ctaSecondary: 'Індивідуальні тренування'
    },
    neck: {
      metaTitle: 'Чому болить шия після роботи за комп’ютером: що робити | Domenica Yoga',
      description: 'Чому після робочого дня втомлюються шия і верх трапеції та як зміна пози, рух лопаток і проста вправа біля стіни можуть допомогти.',
      eyebrow: 'Рух протягом робочого дня', title: 'Чому після робочого дня болить шия і верх трапеції',
      intro: 'Часто причина простіша, ніж здається: тіло занадто довго залишається в одному положенні, а стрес непомітно підтримує напруження м’язів шиї та плечового поясу.',
      readTime: '4 хв читання', image: '/assets/article-neck-work-v08.webp', ogImage: '/assets/og-neck-work-v08.jpg', alt: 'Доменіка сидить за робочим столом, спираючи голову на руку',
      keyPoint: 'Перший крок не потребує інвентарю: змініть положення, дайте лопаткам порухатися, подихайте й дайте м’язам інше завдання.',
      sections: [
        { heading: 'Чому це відбувається', paragraphs: ['Типова робоча поза: округлена спина, підборіддя на руці, голова трохи висунута вперед, плечі й лопатки майже не рухаються. М’язи не обов’язково «пошкоджені» — часто вони просто втомилися годинами утримувати один і той самий патерн.','До цього додається стрес. Емейли, повідомлення, дедлайни й концентрація можуть непомітно піднімати плечі й утримувати верхню частину трапецієподібного м’яза та м’язи шиї активними. Дослідження комп’ютерної роботи підтримують зв’язок між робочими стресорами та підвищенням активності м’язів шиї й плечового поясу.'] },
        { heading: 'Проста вправа біля стіни, яку я люблю', bullets: ['Поставте передпліччя на стіну або дверний отвір.','М’яко відштовхуйте стіну від себе.','Дозвольте лопатці рухатися, а не фіксуйте її.','Направляйте плече вниз без затискання шиї.','Легко підключіть корпус і спокійно дихайте.'] },
        { heading: 'Мета — різноманітність руху, а не одна «ідеальна» вправа', paragraphs: ['Після кількох годин в одному положенні корисним може бути майже будь-який комфортний рух, який змінює звичний патерн: порухайте плечима, лопатками, грудним відділом, руками й шиєю. М’язи отримають інше завдання замість повторення тієї самої низькорівневої напруги.','Масажний м’яч або рол можуть бути приємним доповненням, але вони не обов’язкові. Для початку достатньо просто встати й порухатися.'] },
        { heading: 'Що підтримують дослідження', paragraphs: ['Систематичний огляд і метааналіз показали, що змодельовані робочі стресори помірно підвищують активність м’язів шиї-плечей і передпліч. Інше дослідження комп’ютерних користувачів показало, що в людей із болем у шиї та плечах були довші безперервні періоди активації трапецієподібного м’яза.'] },
        { paragraphs: ['Якщо біль постійний, сильний, віддає в руку або супроводжується онімінням чи слабкістю, це вже привід для індивідуальної оцінки, а не для ще однієї універсальної розтяжки.'] }
      ],
      references: [
        { title: 'Eijckelhof BHW et al. Workplace stressors and neck-shoulder muscle activity. PMID 23584278', href: 'https://pubmed.ncbi.nlm.nih.gov/23584278/' },
        { title: 'Kelson DM et al. Trapezius muscle activity variation during computer work. PMID 31422258', href: 'https://pubmed.ncbi.nlm.nih.gov/31422258/' }
      ],
      ctaTitle: 'Тілу не потрібна ще одна година в тому самому положенні.', ctaText: 'Якщо хочеш регулярно рухатися й розвивати силу та мобільність без зайвого ускладнення, обери формат, який підходить твоєму життю.', ctaPrimary: 'Групові тренування', ctaSecondary: 'Індивідуальні тренування'
    },
    mobility: {
      metaTitle: 'Mobility vs flexibility: чому самої гнучкості недостатньо | Domenica Yoga',
      description: 'Гнучкість дає амплітуду. Мобільність додає активний контроль, силу й витривалість, щоб цією амплітудою можна було користуватися в житті.',
      eyebrow: 'Сила + мобільність', title: 'Mobility vs flexibility: чому самої гнучкості недостатньо',
      intro: 'Можна легко сісти на шпагат — і при цьому не мати достатньо сили, щоб комфортно посидіти в глибокому присіданні з дитиною та піднятися без допомоги рук.',
      readTime: '4 хв читання', image: '/assets/group-detail-v04.webp', ogImage: '/assets/og-mobility-v08.jpg', alt: 'Доменіка утримує широку амплітуду сидячи з активним контролем',
      keyPoint: 'Гнучкість дає амплітуду. У моєму підході mobility — це здатність активно керувати цією амплітудою завдяки силі, контролю та витривалості.',
      sections: [
        { heading: 'Що я бачу на практиці', paragraphs: ['До мене приходили дуже гнучкі дівчата, зокрема з досвідом художньої гімнастики. Вони легко входили у великі амплітуди. Але варто було трохи довше утримати силову асану — і ставало видно обмеження: гнучкості багато, а сили в цій амплітуді недостатньо.','Саме тому мені важливіша мобільність, а не максимальна гнучкість.'] },
        { heading: 'Flexibility і mobility — не одне й те саме', paragraphs: ['Flexibility описує доступну амплітуду. У моєму методі mobility — це амплітуда, в яку ви можете активно зайти, стабільно її утримати й самостійно з неї вийти.','Тому mobility для мене — це рухливість + сила + контроль + витривалість.'] },
        { heading: 'Шпагат — хороший приклад', paragraphs: ['Можливість сісти на шпагат не означає автоматично, що м’язи довкола кульшових суглобів достатньо сильні, щоб контролювати цю кінцеву амплітуду. Те саме видно в побуті: можна мати велику пасивну амплітуду, але швидко втомлюватися в глибокому присіданні, відчувати дискомфорт у колінах або підійматися лише з допомогою рук.','Для мене корисне питання не «Наскільки далеко я можу розтягнутися?», а «Що я можу зробити в тій амплітуді, яка вже є?»'] },
        { heading: 'Чому сила є частиною мобільності', paragraphs: ['Дослідження людей із генералізованою гіпермобільністю суглобів виявляли зв’язок із нижчою м’язовою силою, а реабілітаційна література окремо підкреслює важливість сили, пропріоцепції та моторного контролю для стабільності суглобів. Новіші роботи про функціональний рух також підтримують ідею оцінювати амплітуду й силу разом, а не робити саму амплітуду кінцевою метою.'] },
        { heading: 'Мета', paragraphs: ['Я не хочу зробити вас максимально гнучкими. Я хочу, щоб доступна амплітуда стала сильною та корисною: щоб можна було присісти до дитини, піднятися з підлоги, дотягнутися, повернутися, втримати рівновагу, щось перенести й довіряти своєму тілу в реальному житті.'] }
      ],
      references: [
        { title: 'Scheper M et al. Generalized joint hypermobility, muscle strength and physical function. PMID 25599680', href: 'https://pubmed.ncbi.nlm.nih.gov/25599680/' },
        { title: 'Keer R, Simmonds J. Joint protection and physical rehabilitation of the adult with hypermobility syndrome. PMID 21252682', href: 'https://pubmed.ncbi.nlm.nih.gov/21252682/' },
        { title: 'Özkan M et al. Functional movement capacity: range of motion and isometric strength. PMID 38956714', href: 'https://pubmed.ncbi.nlm.nih.gov/38956714/' }
      ],
      ctaTitle: 'Будуй амплітуду, якою реально можеш користуватися.', ctaText: 'У моїх практиках сила, мобільність і відчуття тіла працюють разом — без гонитви за гнучкістю заради гнучкості.', ctaPrimary: 'Групові тренування', ctaSecondary: 'Індивідуальні тренування'
    }
  }
};
