import type { Lang } from './locales';

export const business = {
  legalNameUa: 'ФОП Хромець Ніна Борисівна',
  legalNameLatin: 'FOP Khromets Nina Borysivna',
  country: 'Ukraine',
  registeredAddressUa: 'Україна, 02232, м. Київ, бульвар Висоцького Володимира, будинок 8, корпус А, квартира 114',
  registeredAddressEn: '8A Volodymyra Vysotskoho Blvd, Apt. 114, Kyiv, 02232, Ukraine',
  taxId: '2133516683',
  phone: '+380 98 158 77 88',
  phoneHref: 'tel:+380981587788',
  email: 'domenicayogaua@gmail.com',
  emailHref: 'mailto:domenicayogaua@gmail.com',
  website: 'https://domenicayoga.com',
};

export type LegalDocKey = 'legal' | 'privacy' | 'terms';

type Section = { title: string; paragraphs?: string[]; bullets?: string[] };
type LegalDoc = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  updated: string;
  sections: Section[];
};

const commonUpdated = '14 September 2026';

export const legalDocs: Record<Lang, Record<LegalDocKey, LegalDoc>> = {
  ua: {
    legal: {
      title: 'Юридична інформація — Domenica Yoga',
      description: 'Інформація про виконавця послуг Domenica Yoga, контактні та реєстраційні дані.',
      eyebrow: 'Domenica Yoga · юридична інформація',
      heading: 'Юридична інформація',
      intro: 'Ця сторінка містить основні відомості про виконавця послуг, доступних через domenicayoga.com.',
      updated: commonUpdated,
      sections: [
        {
          title: 'Виконавець послуг',
          bullets: [
            `Фізична особа-підприємець: ${business.legalNameUa.replace('ФОП ', '')}`,
            `Країна реєстрації: Україна`,
            `Адреса реєстрації: ${business.registeredAddressUa}`,
            `РНОКПП: ${business.taxId}`,
            `Email: ${business.email}`,
            `Телефон: ${business.phone}`,
            `Вебсайт: domenicayoga.com`,
          ],
        },
        {
          title: 'Послуги та ціни',
          paragraphs: [
            'На сайті представлені онлайн-заняття йогою та рухом, індивідуальні сесії та цифровий курс. Конкретна ціна, тривалість, формат і склад послуги зазначаються на відповідній продуктовій сторінці та/або підтверджуються перед оплатою.',
            'Ціна, погоджена перед оплатою, є ціною послуги для клієнта. Окремі банківські або платіжні комісії можуть стягуватися платіжним провайдером і показуються або повідомляються до оплати, коли це застосовно.',
          ],
        },
        {
          title: 'Характер послуг',
          paragraphs: [
            'Domenica Yoga надає освітні та оздоровчі практики руху. Послуги не є медичною діагностикою, лікуванням, фізіотерапією або заміною консультації лікаря. За наявності гострих симптомів, травми або медичних протипоказань клієнт повинен звернутися до кваліфікованого медичного фахівця.',
          ],
        },
        {
          title: 'Право та обов’язкові права споживача',
          paragraphs: [
            'До відносин із виконавцем застосовується законодавство України. Якщо імперативні норми країни проживання клієнта надають йому додаткові права, які не можуть бути договірно виключені, такі права зберігаються.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Політика конфіденційності — Domenica Yoga',
      description: 'Як Domenica Yoga отримує, використовує та захищає персональні дані відвідувачів і клієнтів.',
      eyebrow: 'Domenica Yoga · privacy',
      heading: 'Політика конфіденційності',
      intro: 'Ми збираємо лише ті дані, які потрібні для відповіді на ваш запит, бронювання, оплати та надання послуг.',
      updated: commonUpdated,
      sections: [
        {
          title: 'Хто є володільцем даних',
          paragraphs: [
            `${business.legalNameUa} є володільцем персональних даних, які обробляються у зв’язку з використанням цього сайту та замовленням послуг. Для питань щодо приватності: ${business.email}, ${business.phone}.`,
          ],
        },
        {
          title: 'Які дані ми можемо отримувати',
          bullets: [
            'ім’я, нікнейм або інший ідентифікатор, який ви використовуєте для зв’язку;',
            'номер телефону, email, Telegram / WhatsApp / Instagram контакт;',
            'повідомлення, запити, інформацію про бронювання та обрану послугу;',
            'дані, необхідні для оплати та бухгалтерського обліку; реквізити банківської картки обробляє платіжний провайдер, а не цей сайт;',
            'технічні дані, необхідні для безпеки та роботи сайту, наприклад IP-адреса та базові журнали запитів у хостинг-провайдера;',
            'інформацію про стан тіла, біль, обмеження або попередній досвід — лише якщо ви добровільно повідомляєте її для адаптації практики.',
          ],
        },
        {
          title: 'Для чого використовуються дані',
          bullets: [
            'щоб відповісти на звернення та допомогти обрати формат;',
            'щоб забронювати і провести групові або індивідуальні заняття та надати доступ до курсу;',
            'щоб прийняти оплату, вести облік і виконувати законні фінансові обов’язки;',
            'щоб підтримувати безпеку сайту та запобігати зловживанням;',
            'щоб адаптувати практику під клієнта, коли він сам надає відповідну інформацію.',
          ],
        },
        {
          title: 'Чутлива інформація про здоров’я',
          paragraphs: [
            'Для 1:1 або адаптації практики ви можете добровільно повідомити інформацію про біль, травми, обмеження чи інші аспекти здоров’я. Просимо повідомляти лише те, що необхідно. Надаючи таку інформацію добровільно, ви погоджуєтеся на її використання виключно для адаптації практики та безпеки. Ви можете відкликати цю згоду, написавши нам.',
          ],
        },
        {
          title: 'Правові підстави',
          paragraphs: [
            'Дані обробляються для вчинення дій до укладення договору, виконання договору, виконання вимог закону, на підставі згоди там, де вона потрібна, та для законного інтересу в забезпеченні безпеки сервісу. Для користувачів ЄС/ЄЕЗ ці самі принципи застосовуються відповідно до GDPR у тій мірі, в якій він поширюється на конкретну обробку.',
          ],
        },
        {
          title: 'Сторонні сервіси',
          paragraphs: [
            'Для роботи сайту та комунікації можуть використовуватися Cloudflare, Google Meet, Telegram, WhatsApp та Instagram/Meta, а також платіжний сервіс, обраний для конкретної оплати. Такі компанії можуть обробляти технічні або контактні дані відповідно до власних політик конфіденційності та умов.',
          ],
        },
        {
          title: 'Cookies та аналітика',
          paragraphs: [
            'На момент останнього оновлення сайт не використовує рекламні або маркетингові cookies і не встановлює окрему систему поведінкової аналітики. Технічні провайдери можуть використовувати суворо необхідні механізми для безпеки та доставки сайту. Якщо ми додамо необов’язкову аналітику або маркетингові інструменти, ця політика буде оновлена, а згода буде запитана там, де це вимагається законом.',
          ],
        },
        {
          title: 'Строк зберігання',
          paragraphs: [
            'Ми зберігаємо дані не довше, ніж це необхідно для надання послуг, ведення обліку, вирішення спорів та виконання вимог закону. Після закінчення відповідної мети дані видаляються або знеособлюються, якщо закон не вимагає їх подальшого зберігання.',
          ],
        },
        {
          title: 'Ваші права',
          paragraphs: [
            `Ви можете звернутися на ${business.email}, щоб отримати інформацію про свої дані, уточнити або виправити їх, заперечити проти певної обробки, попросити про видалення там, де це можливо, або відкликати згоду. Для користувачів ЄС/ЄЕЗ додатково застосовуються права, передбачені GDPR, якщо він поширюється на відповідну обробку.`,
          ],
        },
      ],
    },
    terms: {
      title: 'Умови надання послуг — Domenica Yoga',
      description: 'Умови оплати, бронювання, доступу, скасування та повернення коштів для послуг Domenica Yoga.',
      eyebrow: 'Domenica Yoga · terms',
      heading: 'Умови надання послуг',
      intro: 'Оплачуючи або підтверджуючи замовлення, клієнт погоджується з цими умовами та конкретними параметрами обраної послуги.',
      updated: commonUpdated,
      sections: [
        {
          title: '1. Загальні положення',
          paragraphs: [
            `${business.legalNameUa} є виконавцем послуг, представлених на domenicayoga.com. Актуальна ціна, розклад, тривалість, строк доступу та інші істотні параметри вказуються на сторінці конкретного продукту та/або письмово підтверджуються клієнту до оплати.`,
            'Послуги мають освітній та оздоровчий характер і не є медичною послугою або лікуванням.',
          ],
        },
        {
          title: '2. Замовлення та оплата',
          paragraphs: [
            'Запис здійснюється через зазначені на сайті канали зв’язку. Замовлення вважається погодженим після підтвердження формату, ціни та, коли застосовно, часу заняття або умов доступу.',
            'Клієнт сплачує суму, погоджену до оплати. Платіжний провайдер або банк може окремо стягувати власну комісію.',
          ],
        },
        {
          title: '3. Групові онлайн-тренування',
          paragraphs: [
            'Груповий формат надається за чинним розкладом, опублікованим на сайті або підтвердженим клієнту. Оплата здійснюється за відповідний місячний період. Пропущене клієнтом заняття саме по собі не створює права на пропорційне повернення оплати, якщо інше не погоджено окремо або не вимагається законом.',
          ],
        },
        {
          title: '4. Індивідуальні сесії 1:1',
          paragraphs: [
            'Тривалість однієї сесії становить 75 хвилин, якщо інше не погоджено окремо. Пакет із 10 тренувань має бути використаний протягом 3 місяців від дати першої сесії, якщо інше письмово не погоджено сторонами.',
            'Перенесення часу здійснюється за взаємною домовленістю. Якщо виконавець скасовує сесію та не може запропонувати прийнятну альтернативу, оплата за ненадану сесію повертається або зараховується на іншу дату за вибором клієнта.',
          ],
        },
        {
          title: '5. Цифровий курс',
          paragraphs: [
            'Курс надається у цифровому форматі. Строк доступу та склад матеріалів зазначаються на сторінці курсу. Якщо на сторінці вказано 3 місяці доступу, цей строк відраховується від активації доступу, якщо інше не погоджено до покупки.',
            'Матеріали курсу призначені лише для особистого використання клієнтом. Заборонено передавати доступ третім особам, копіювати, перепродавати або публічно розповсюджувати матеріали без письмового дозволу правовласника.',
          ],
        },
        {
          title: '6. Повернення коштів до початку послуги',
          paragraphs: [
            'Якщо клієнт звертається з проханням про скасування до початку оплаченої послуги, виконавець повертає 100% суми, фактично отриманої за цю послугу, за вирахуванням лише тієї комісії банку або платіжного сервісу, яка була фактично утримана та не повертається виконавцю, — у тій мірі, в якій це дозволено застосовним законодавством.',
          ],
          bullets: [
            'для групового формату — до початку першого заняття оплачуваного періоду;',
            'для 1:1 — до початку першої оплаченої індивідуальної сесії;',
            'для цифрового курсу — до активації/відкриття доступу до матеріалів.',
          ],
        },
        {
          title: '7. Повернення після початку',
          paragraphs: [
            'Після початку послуги або після відкриття доступу до цифрового курсу добровільне повернення коштів не передбачається, крім випадків, прямо встановлених обов’язковими нормами закону, або якщо сторони окремо домовилися про інше.',
            'Якщо послуга не може бути надана з вини виконавця, клієнту повертається оплата за ненадану частину послуги або пропонується рівноцінна заміна — за вибором клієнта та з урахуванням вимог застосовного законодавства.',
          ],
        },
        {
          title: '8. Відповідальність клієнта за безпечну практику',
          paragraphs: [
            'Клієнт самостійно відповідає за те, щоб місце для практики було безпечним, а також за повідомлення про відомі йому обмеження, травми або протипоказання, які можуть мати значення для практики. У разі гострого болю, травми, вагітності з ускладненнями або медичних станів, що потребують оцінки, клієнту слід отримати пораду кваліфікованого медичного фахівця.',
          ],
        },
        {
          title: '9. Інтелектуальна власність',
          paragraphs: [
            'Тексти, відео, навчальні матеріали, структура курсу, фото та інший авторський контент Domenica Yoga охороняються законодавством про інтелектуальну власність. Оплата послуги не передає клієнту майнових прав на матеріали.',
          ],
        },
        {
          title: '10. Застосовне право та спори',
          paragraphs: [
            'До договору застосовується право України. Спір спочатку бажано врегулювати шляхом прямого звернення на email або інший офіційний канал зв’язку. Обов’язкові права споживача, які за застосовним правом не можуть бути виключені договором, залишаються чинними.',
          ],
        },
        {
          title: '11. Контакти',
          paragraphs: [
            `${business.legalNameUa} · ${business.email} · ${business.phone} · domenicayoga.com`,
          ],
        },
      ],
    },
  },
  en: {
    legal: {
      title: 'Legal Information — Domenica Yoga',
      description: 'Legal and contact information for the provider of Domenica Yoga services.',
      eyebrow: 'Domenica Yoga · legal',
      heading: 'Legal Information',
      intro: 'This page identifies the Ukrainian sole proprietor providing the services presented on domenicayoga.com.',
      updated: commonUpdated,
      sections: [
        { title: 'Service provider', bullets: [
          `Sole proprietor: Khromets Nina Borysivna`,
          'Country of registration: Ukraine',
          `Registered address: ${business.registeredAddressEn}`,
          `Ukrainian taxpayer number: ${business.taxId}`,
          `Email: ${business.email}`,
          `Phone: ${business.phone}`,
          'Website: domenicayoga.com',
        ]},
        { title: 'Services and pricing', paragraphs: [
          'The website presents online yoga and movement classes, individual sessions and a digital course. The price, duration, format and content of each service are shown on the relevant product page and/or confirmed before payment.',
          'The price agreed before payment is the service price payable to the provider. A bank or payment processor may charge its own fee where applicable.',
        ]},
        { title: 'Nature of the services', paragraphs: [
          'Domenica Yoga provides educational and wellbeing-oriented movement practices. The services are not medical diagnosis, treatment or physiotherapy and do not replace advice from a qualified healthcare professional.',
        ]},
        { title: 'Applicable law and mandatory consumer rights', paragraphs: [
          'Ukrainian law governs the relationship with the provider. Mandatory consumer rights under the law applicable to a client that cannot legally be waived remain unaffected.',
        ]},
      ],
    },
    privacy: {
      title: 'Privacy Policy — Domenica Yoga',
      description: 'How Domenica Yoga collects, uses and protects personal data of visitors and clients.',
      eyebrow: 'Domenica Yoga · privacy',
      heading: 'Privacy Policy',
      intro: 'We collect only the information reasonably needed to answer your request, arrange a booking, process payment and provide the service.',
      updated: commonUpdated,
      sections: [
        { title: 'Data controller', paragraphs: [`${business.legalNameLatin}, a sole proprietor registered in Ukraine, controls personal data processed in connection with this website and the services. Privacy contact: ${business.email}, ${business.phone}.`] },
        { title: 'Data we may receive', bullets: [
          'your name, username or other identifier you use to contact us;',
          'phone number, email, Telegram / WhatsApp / Instagram contact;',
          'messages, requests, booking information and the service you choose;',
          'information needed for payment and accounting; card details are processed by the payment provider, not by this website;',
          'technical data needed for website delivery and security, such as IP address and basic request logs held by infrastructure providers;',
          'information about pain, limitations, previous injuries or movement history only when you voluntarily provide it so the practice can be adapted.',
        ]},
        { title: 'Why we use data', bullets: [
          'to reply to enquiries and help you choose a format;',
          'to arrange and deliver group or 1:1 sessions and course access;',
          'to process payments, accounting and legal obligations;',
          'to protect the website and prevent abuse;',
          'to adapt movement practice when you voluntarily provide relevant information.',
        ]},
        { title: 'Health-related information', paragraphs: ['For 1:1 work or practice adaptation, you may voluntarily share information about pain, injuries, limitations or other health-related matters. Please share only what is necessary. By voluntarily providing such information, you explicitly agree that it may be used solely to adapt the practice and support safety. You may withdraw that consent by contacting us.'] },
        { title: 'Legal bases', paragraphs: ['We process data to take steps before a contract, perform a contract, comply with law, based on consent where required, and for legitimate security interests. For people in the EU/EEA, GDPR principles and rights apply to processing where the GDPR is applicable.'] },
        { title: 'Third-party services', paragraphs: ['The website and services may use Cloudflare, Google Meet, Telegram, WhatsApp and Instagram/Meta, and the payment provider used for a specific payment. These providers may process technical or contact data under their own terms and privacy policies.'] },
        { title: 'Cookies and analytics', paragraphs: ['As of the last update, this website does not use advertising or marketing cookies and does not run a separate behavioural analytics system. Infrastructure providers may use strictly necessary security and delivery mechanisms. If optional analytics or marketing tools are added, this policy will be updated and consent will be requested where legally required.'] },
        { title: 'Retention', paragraphs: ['We keep personal data only for as long as reasonably necessary to provide services, keep required financial records, resolve disputes and comply with law. Data is then deleted or anonymised unless further retention is legally required.'] },
        { title: 'Your rights', paragraphs: [`Contact ${business.email} to ask about your data, request correction, object to certain processing, request deletion where available, or withdraw consent. People in the EU/EEA may also exercise the rights available under GDPR where it applies.`] },
      ],
    },
    terms: {
      title: 'Terms of Service — Domenica Yoga',
      description: 'Terms for booking, payment, access, cancellations and refunds for Domenica Yoga services.',
      eyebrow: 'Domenica Yoga · terms',
      heading: 'Terms of Service',
      intro: 'By paying for or confirming an order, you agree to these terms and to the specific details of the service you selected.',
      updated: commonUpdated,
      sections: [
        { title: '1. General', paragraphs: [`${business.legalNameLatin} is the provider of the services presented on domenicayoga.com. Current price, schedule, duration, access period and other material details are stated on the relevant product page and/or confirmed to you before payment.`, 'The services are educational and wellbeing-oriented and are not medical treatment or healthcare.'] },
        { title: '2. Orders and payment', paragraphs: ['Bookings are made through the contact channels shown on the website. An order is confirmed once the format, price and, where applicable, session time or access terms have been agreed.', 'You pay the amount agreed before payment. A bank or payment processor may charge its own fee.'] },
        { title: '3. Live group training', paragraphs: ['Group training is delivered according to the current schedule published on the website or confirmed to you. Payment covers the relevant monthly period. A class missed by the client does not by itself create a right to a proportional refund unless otherwise agreed or required by law.'] },
        { title: '4. 1:1 sessions', paragraphs: ['A standard session lasts 75 minutes unless otherwise agreed. A 10-session package must be used within 3 months from the first session unless agreed otherwise in writing.', 'Rescheduling is by mutual agreement. If the provider cancels and cannot offer a reasonable alternative, the undelivered session is refunded or moved to another date at the client’s choice.'] },
        { title: '5. Digital course', paragraphs: ['The course is supplied digitally. The access period and included materials are stated on the course page. Where the page states 3 months of access, that period starts when access is activated unless agreed otherwise before purchase.', 'Course materials are for the client’s personal use only. Sharing access, copying, reselling or publicly distributing the materials without written permission is prohibited.'] },
        { title: '6. Refund before the service starts', paragraphs: ['If you request cancellation before the paid service starts, the provider refunds 100% of the amount actually received for that service, less only a bank or payment-service fee that was actually withheld and is non-refundable to the provider, to the extent this is permitted by applicable law.'], bullets: [
          'group training: before the first class of the paid period starts;',
          '1:1: before the first paid individual session starts;',
          'digital course: before access to the course materials is activated/opened.',
        ]},
        { title: '7. Refund after the service starts', paragraphs: ['Once the service has started or digital course access has been opened, voluntary refunds are not offered unless mandatory law requires otherwise or the parties agree otherwise.', 'If a service cannot be delivered due to the provider, the undelivered part is refunded or replaced with an equivalent service, at the client’s choice and subject to applicable law.'] },
        { title: '8. Safe participation', paragraphs: ['You are responsible for choosing a safe space to practise and for telling us about known limitations, injuries or contraindications relevant to the practice. If you have acute pain, a recent injury or a condition requiring medical assessment, seek advice from a qualified healthcare professional.'] },
        { title: '9. Intellectual property', paragraphs: ['Texts, videos, course structure, teaching materials, photographs and other original Domenica Yoga content are protected by intellectual-property law. Paying for a service does not transfer ownership of those rights.'] },
        { title: '10. Governing law and disputes', paragraphs: ['Ukrainian law governs the contract. Please first contact us directly to resolve any issue. Any mandatory consumer rights that cannot legally be waived remain unaffected.'] },
        { title: '11. Contact', paragraphs: [`${business.legalNameLatin} · ${business.email} · ${business.phone} · domenicayoga.com`] },
      ],
    },
  },
  fr: {
    legal: {
      title: 'Informations légales — Domenica Yoga',
      description: 'Informations légales et coordonnées du prestataire des services Domenica Yoga.',
      eyebrow: 'Domenica Yoga · informations légales',
      heading: 'Informations légales',
      intro: 'Cette page identifie l’entrepreneure individuelle ukrainienne qui fournit les services présentés sur domenicayoga.com.',
      updated: commonUpdated,
      sections: [
        { title: 'Prestataire', bullets: [
          'Entrepreneure individuelle : Khromets Nina Borysivna',
          'Pays d’enregistrement : Ukraine',
          `Adresse d’enregistrement : ${business.registeredAddressEn}`,
          `Numéro fiscal ukrainien : ${business.taxId}`,
          `Email : ${business.email}`,
          `Téléphone : ${business.phone}`,
          'Site : domenicayoga.com',
        ]},
        { title: 'Services et prix', paragraphs: ['Le site présente des cours de yoga et de mouvement en ligne, des séances individuelles et un programme numérique. Le prix, la durée, le format et le contenu de chaque service sont indiqués sur la page correspondante et/ou confirmés avant paiement.', 'Le prix convenu avant paiement est le prix du service dû au prestataire. Une banque ou un prestataire de paiement peut appliquer ses propres frais, le cas échéant.'] },
        { title: 'Nature des services', paragraphs: ['Domenica Yoga fournit des pratiques éducatives et de bien-être liées au mouvement. Les services ne constituent ni un diagnostic médical, ni un traitement, ni de la kinésithérapie et ne remplacent pas l’avis d’un professionnel de santé qualifié.'] },
        { title: 'Droit applicable et droits impératifs du consommateur', paragraphs: ['Le droit ukrainien régit la relation avec le prestataire. Les droits impératifs du consommateur qui, selon le droit applicable au client, ne peuvent pas être écartés par contrat restent pleinement applicables.'] },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité — Domenica Yoga',
      description: 'Comment Domenica Yoga collecte, utilise et protège les données personnelles des visiteurs et clients.',
      eyebrow: 'Domenica Yoga · confidentialité',
      heading: 'Politique de confidentialité',
      intro: 'Nous collectons uniquement les informations raisonnablement nécessaires pour répondre à votre demande, organiser une réservation, traiter le paiement et fournir le service.',
      updated: commonUpdated,
      sections: [
        { title: 'Responsable du traitement', paragraphs: [`${business.legalNameLatin}, entrepreneure individuelle enregistrée en Ukraine, est responsable des données personnelles traitées dans le cadre de ce site et des services. Contact confidentialité : ${business.email}, ${business.phone}.`] },
        { title: 'Données susceptibles d’être reçues', bullets: ['nom, pseudo ou autre identifiant utilisé pour nous contacter ;', 'numéro de téléphone, email, contact Telegram / WhatsApp / Instagram ;', 'messages, demandes, informations de réservation et service choisi ;', 'informations nécessaires au paiement et à la comptabilité ; les données de carte sont traitées par le prestataire de paiement et non par ce site ;', 'données techniques nécessaires à la diffusion et à la sécurité du site, par exemple l’adresse IP et les journaux techniques de base des prestataires d’infrastructure ;', 'informations sur la douleur, les limitations, les blessures antérieures ou l’historique de mouvement uniquement si vous les communiquez volontairement afin d’adapter la pratique.'] },
        { title: 'Finalités', bullets: ['répondre aux demandes et vous aider à choisir un format ;', 'organiser et fournir les cours collectifs, séances 1:1 et accès au programme ;', 'traiter les paiements, la comptabilité et les obligations légales ;', 'protéger le site et prévenir les abus ;', 'adapter la pratique lorsque vous fournissez volontairement des informations pertinentes.'] },
        { title: 'Informations relatives à la santé', paragraphs: ['Pour le travail 1:1 ou l’adaptation de la pratique, vous pouvez communiquer volontairement des informations concernant douleur, blessures, limitations ou autres éléments de santé. Merci de ne partager que ce qui est nécessaire. En transmettant volontairement ces informations, vous consentez explicitement à leur utilisation uniquement pour adapter la pratique et soutenir la sécurité. Vous pouvez retirer ce consentement en nous contactant.'] },
        { title: 'Bases juridiques', paragraphs: ['Nous traitons les données pour prendre des mesures précontractuelles, exécuter un contrat, respecter la loi, sur la base du consentement lorsque cela est nécessaire et pour nos intérêts légitimes de sécurité. Pour les personnes dans l’UE/EEE, les principes et droits du RGPD s’appliquent aux traitements lorsqu’il est applicable.'] },
        { title: 'Services tiers', paragraphs: ['Le site et les services peuvent utiliser Cloudflare, Google Meet, Telegram, WhatsApp et Instagram/Meta, ainsi que le prestataire de paiement utilisé pour une transaction donnée. Ces prestataires peuvent traiter des données techniques ou de contact selon leurs propres conditions et politiques.'] },
        { title: 'Cookies et mesure d’audience', paragraphs: ['À la date de la dernière mise à jour, ce site n’utilise pas de cookies publicitaires ou marketing et ne met pas en place de système distinct d’analyse comportementale. Les prestataires d’infrastructure peuvent utiliser des mécanismes strictement nécessaires à la sécurité et à la diffusion du site. Si des outils d’analyse ou de marketing facultatifs sont ajoutés, cette politique sera mise à jour et le consentement sera demandé lorsque la loi l’exige.'] },
        { title: 'Conservation', paragraphs: ['Nous conservons les données uniquement pendant la durée raisonnablement nécessaire pour fournir les services, conserver les documents financiers requis, résoudre les litiges et respecter la loi. Elles sont ensuite supprimées ou anonymisées, sauf obligation légale de conservation.'] },
        { title: 'Vos droits', paragraphs: [`Écrivez à ${business.email} pour demander l’accès à vos données, leur rectification, vous opposer à certains traitements, demander leur suppression lorsque cela est possible ou retirer votre consentement. Les personnes dans l’UE/EEE peuvent également exercer les droits prévus par le RGPD lorsqu’il s’applique.`] },
      ],
    },
    terms: {
      title: 'Conditions de service — Domenica Yoga',
      description: 'Conditions de réservation, paiement, accès, annulation et remboursement des services Domenica Yoga.',
      eyebrow: 'Domenica Yoga · conditions',
      heading: 'Conditions de service',
      intro: 'En payant ou en confirmant une commande, vous acceptez ces conditions ainsi que les caractéristiques spécifiques du service choisi.',
      updated: commonUpdated,
      sections: [
        { title: '1. Généralités', paragraphs: [`${business.legalNameLatin} est le prestataire des services présentés sur domenicayoga.com. Le prix, le planning, la durée, la période d’accès et les autres caractéristiques essentielles sont indiqués sur la page du produit concerné et/ou confirmés avant le paiement.`, 'Les services ont une finalité éducative et de bien-être et ne constituent pas un traitement médical.'] },
        { title: '2. Commande et paiement', paragraphs: ['Les réservations sont effectuées via les canaux de contact indiqués sur le site. Une commande est confirmée lorsque le format, le prix et, le cas échéant, l’horaire de séance ou les conditions d’accès ont été convenus.', 'Vous payez le montant convenu avant le paiement. Une banque ou un prestataire de paiement peut appliquer ses propres frais.'] },
        { title: '3. Cours collectifs en ligne', paragraphs: ['Les cours collectifs sont fournis selon le planning en vigueur publié sur le site ou confirmé au client. Le paiement couvre la période mensuelle concernée. Un cours manqué par le client n’ouvre pas, à lui seul, droit à un remboursement proportionnel, sauf accord contraire ou obligation légale.'] },
        { title: '4. Séances 1:1', paragraphs: ['Une séance standard dure 75 minutes sauf accord contraire. Un forfait de 10 séances doit être utilisé dans les 3 mois suivant la première séance, sauf accord écrit différent.', 'Le report se fait d’un commun accord. Si la prestataire annule et ne peut pas proposer d’alternative raisonnable, la séance non fournie est remboursée ou déplacée à une autre date au choix du client.'] },
        { title: '5. Programme numérique', paragraphs: ['Le programme est fourni sous forme numérique. La durée d’accès et les contenus inclus figurent sur la page du programme. Lorsque la page prévoit 3 mois d’accès, cette période commence à l’activation de l’accès, sauf accord différent avant l’achat.', 'Les contenus sont réservés à l’usage personnel du client. Il est interdit de partager l’accès, copier, revendre ou diffuser publiquement les contenus sans autorisation écrite.'] },
        { title: '6. Remboursement avant le début du service', paragraphs: ['Si vous demandez l’annulation avant le début du service payé, la prestataire rembourse 100 % du montant effectivement reçu pour ce service, déduction faite uniquement des frais bancaires ou de paiement effectivement retenus et non remboursés à la prestataire, dans la mesure permise par le droit applicable.'], bullets: ['cours collectifs : avant le premier cours de la période payée ;', '1:1 : avant la première séance individuelle payée ;', 'programme numérique : avant l’activation / l’ouverture de l’accès aux contenus.'] },
        { title: '7. Remboursement après le début', paragraphs: ['Une fois le service commencé ou l’accès au programme numérique ouvert, aucun remboursement volontaire n’est prévu, sauf si une règle impérative applicable l’exige ou si les parties conviennent expressément du contraire.', 'Si le service ne peut pas être fourni du fait de la prestataire, la partie non fournie est remboursée ou remplacée par un service équivalent, au choix du client et sous réserve du droit applicable.'] },
        { title: '8. Participation en sécurité', paragraphs: ['Vous êtes responsable du choix d’un espace de pratique sûr et de la communication des limitations, blessures ou contre-indications connues qui peuvent être pertinentes. En cas de douleur aiguë, blessure récente ou situation nécessitant une évaluation médicale, demandez l’avis d’un professionnel de santé qualifié.'] },
        { title: '9. Propriété intellectuelle', paragraphs: ['Les textes, vidéos, structures de programme, supports pédagogiques, photographies et autres contenus originaux Domenica Yoga sont protégés par le droit de la propriété intellectuelle. Le paiement d’un service ne transfère aucun droit de propriété sur ces contenus.'] },
        { title: '10. Droit applicable et litiges', paragraphs: ['Le droit ukrainien régit le contrat. Merci de nous contacter d’abord directement pour tenter de résoudre tout problème. Les droits impératifs du consommateur qui ne peuvent légalement être écartés restent applicables.'] },
        { title: '11. Contact', paragraphs: [`${business.legalNameLatin} · ${business.email} · ${business.phone} · domenicayoga.com`] },
      ],
    },
  },
};
