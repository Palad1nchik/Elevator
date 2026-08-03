// Central content store for the site. Keeping copy here makes it easy to
// later move to a CMS or fetch from the Go backend without touching components.

export const COMPANY = {
  name: 'EURASIA LIFT',
  tagline: 'KZ',
  region: 'KZ',
  phone: '+7 702 230-22-38',
  phoneHref: 'tel:+77022302238',
  email: 'eurasia.lift.kz@gmail.com',
  emailHref: 'mailto:eurasia.lift.kz@gmail.com',
  whatsapp: 'https://wa.me/77022302238',
  instagram: 'https://instagram.com/eurasia.lift',
  address: 'г. Астана, ул. Аманжол Болекпаева, дом-12, ЖК "Юпитер", офис-9',
  contactPerson: {
    role: 'Заместитель директора',
    name: 'Спичкин Владимир Владимирович',
    phone: '+7 702 230-22-38',
  },
  year: 2026,
}

// Coordinates for "ул. Аманжол Болекпаева, 12, ЖК Юпитер" (Astana) from
// OpenStreetMap Nominatim — used to center the map on the Contact page.
export const MAP = {
  lat: 51.122499,
  lon: 71.499538,
  bbox: '71.485,51.1125,71.515,51.1325',
  openLink: 'https://www.openstreetmap.org/?mlat=51.122499&mlon=71.499538#map=16/51.122499/71.499538',
  twoGisLink: `https://2gis.kz/astana/search/${encodeURIComponent(COMPANY.address)}`,
}

export const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/dlya-kogo', label: 'Для кого' },
  { to: '/obyekty', label: 'Объекты' },
  { to: '/servis', label: 'Сервис' },
  { to: '/kontakty', label: 'Контакты' },
]

export const STATS = [
  { num: '200+', label: 'объектов' },
  { num: '500+', label: 'лифтов' },
  { num: '100%', label: 'без замечаний сдаём объект' },
]

export const AUDIENCES = [
  {
    idx: '01',
    title: 'Жилые комплексы',
    text: 'Сдача дома без задержек из-за лифтов.',
  },
  {
    idx: '02',
    title: 'Бизнес-центры / ТРЦ',
    text: 'Стабильная работа без простоев.',
  },
  {
    idx: '03',
    title: 'Девелоперы',
    text: 'Закрываем лифтовую часть проекта полностью.',
  },
]

export const PROBLEMS = [
  'Срыв сроков монтажа',
  'Лифты не проходят приёмку',
  'Постоянные доработки',
  'Подрядчик пропадает',
]

export const STEPS = [
  { n: 1, title: 'Подбор и поставка', text: 'Изготавливаем оборудование под Ваш проект и поставляем уже готовое оборудование на ваш объект.' },
  { n: 2, title: 'Монтаж на объекте', text: 'Монтируем по графику объекта.' },
  { n: 3, title: 'Настройка и запуск', text: 'Пусконаладка и проверка.' },
  { n: 4, title: 'Подготовка к приёмке', text: 'Готовим лифты к сдаче без доработок.' },
  { n: 5, title: 'Сопровождение', text: 'Остаёмся после монтажа на обслуживание лифтов.' },
]

// Curated set for the homepage slider (10 objects with real client photos).
// The full "Объекты" page keeps showing the complete OBJECTS list below.
export const HOME_OBJECTS = [
  { name: 'ЖК "Мадиленд"', img: '/photos/home-madiland.jpg' },
  { name: 'Бизнес-центр "Time"', img: '/photos/home-time-business-center.jpg' },
  { name: 'Бизнес-центр "Park Line"', img: '/photos/home-park-line.jpg' },
  { name: 'ЖК "Prime Park"', img: '/photos/home-prime-park.jpg' },
  { name: 'Hotel Burabay Golf Club', img: '/photos/home-burabay-golf-club.jpg' },
  { name: 'ЖК "Korkem Tower"', img: '/photos/home-korkem-tower.jpg' },
  { name: 'ЖК "Triumph Avenue"', img: '/photos/home-triumph-avenue.jpg' },
  { name: 'ЖК "Otbasy", г. Шымкент', img: '/photos/home-otbasy-shymkent.jpg' },
  { name: 'Городская станция скорой медицинской помощи, г. Астана', img: '/photos/home-ambulance-astana.jpg' },
  { name: 'ЖК "Сказка"', img: '/photos/home-hokkaido.jpg' },
]

// Real completed objects, sourced from the company's own project deck.
export const OBJECTS = [
  { name: 'Бизнес-центр "Park Line"', img: '/photos/obj-akmeshit-3.jpg' },
  { name: 'ЖК "Санат"', img: '/photos/obj-sanat.jpg' },
  { name: 'ЖК "Kurmet"', img: '/photos/obj-kurmet.jpg' },
  { name: 'ЖК "Triumph Avenue"', img: '/photos/obj-triumph-avenue.jpg' },
  { name: 'ЖК "Тан"', img: '/photos/obj-tan.jpg' },
  { name: 'ЖК "Madi"', img: '/photos/obj-madi.jpg' },
  { name: 'ЖК "Басқару - 5"', img: '/photos/obj-baskaru-5.jpg' },
  { name: 'ЖК "Korkem Tower"', img: '/photos/obj-korkem-tower.jpg' },
  { name: 'ЖК "Айнакөл"', img: '/photos/obj-ainakol.jpg' },
  { name: 'ЖК "Hokkaido"', img: '/photos/obj-hokkaido.jpg' },
  { name: 'ЖК "Medina Tower"', img: '/photos/obj-medina.jpg' },
  { name: 'ЖК "Город 72"', img: '/photos/obj-gorod-72.jpg' },
  { name: 'ЖК "Биік Шаңырақ"', img: '/photos/obj-biik-shanyrak.jpg' },
  { name: 'БЦ "Avenue"', img: '/photos/obj-momyshuly-2-11.jpg' },
  { name: 'Городская станция скорой медицинской помощи, г. Астана', img: '/photos/obj-ryskulova-8-1.jpg' },
  { name: 'ЖК "Шығыс"', img: '/photos/obj-syganak-16.jpg' },
  { name: 'ЖК "Созак"', img: '/photos/obj-sozak.jpg' },
  { name: 'ЖК "Торонто"', img: '/photos/obj-toronto.jpg' },
  { name: 'ЖК "Феникс"', img: '/photos/obj-fenix.jpg' },
  { name: 'ЖК "Юпитер"', img: '/photos/obj-yupiter.jpg' },
  { name: 'ЖК "Венера"', img: '/photos/obj-venera.jpg' },
  { name: 'ЖК "Меркурий"', img: '/photos/obj-merkuriy.jpg' },
  { name: 'ЖК "Запад"', img: '/photos/obj-zapad.jpg' },
  { name: 'ЖК "Восток"', img: '/photos/obj-vostok.jpg' },
  { name: 'ЖК "Сатурн"', img: '/photos/obj-saturn.jpg' },
  { name: 'ЖК "Спутник"', img: '/photos/obj-sputnik.jpg' },
  { name: 'ЖК "Smart City"', img: '/photos/obj-smart-city.jpg' },
  { name: 'ЖК "Сырдария"', img: '/photos/obj-syrdariya.jpg' },
  { name: 'ЖК "Сказка"', img: '/photos/obj-skazka.jpg' },
  { name: 'ЖК "Dream Town"', img: '/photos/obj-dream-town.jpg' },
  { name: 'ЖК "Медиаполь"', img: '/photos/obj-mediapol.jpg' },
  { name: 'ЖК "Отау"', img: '/photos/obj-otau.jpg' },
  { name: 'ЖК "Мадиленд"', img: '/photos/obj-kyz-zhibek-38.jpg' },
  { name: 'Бизнес-центр "Time"', img: '/photos/obj-kazanat-1-1.jpg' },
  { name: 'ЖК "Prime Park"', img: '/photos/obj-korey-zhanibek-30.jpg' },
]

export const PRODUCTION_POINTS = [
  'Международное производство',
  'Реальные объекты в Казахстане',
  'Стабильная работа оборудования',
  'Энергоэффективность до 40%',
]

export const SERVICE_POINTS = [
  'Собственный склад запчастей в Казахстане',
  'Быстрый выезд и устранение вопросов',
  'Обслуживание после сдачи объекта',
  'Не зависим от поставок',
]

export const ADVANTAGES = [
  { idx: '01', title: 'Эксклюзивный представитель KASPER', text: 'Работаем напрямую с заводом.' },
  { idx: '02', title: 'Собственный склад в Казахстане', text: 'Оборудование уже в стране. Не срываем сроки из-за логистики.' },
  { idx: '03', title: 'Полный цикл под ключ', text: 'Поставка, монтаж, запуск и сервис - в одной зоне ответственности.' },
  { idx: '04', title: 'Контроль сроков', text: 'Фиксируем сроки и выстраиваем процесс под график объекта.' },
  { idx: '05', title: 'Безопасность и соответствие', text: 'Контролируем монтаж и подготовку к приёмке - без доработок.' },
  { idx: '06', title: 'Сервис после запуска', text: 'Остаёмся после сдачи и берём лифты на обслуживание.' },
]

export const PILLARS = [
  {
    idx: '01',
    title: 'Поставка',
    text: 'Поставляем лифты и комплектующие KASPER со своего склада в Казахстане - без ожидания зарубежных партий.',
  },
  {
    idx: '02',
    title: 'Монтаж',
    text: 'Монтируем по графику объекта и готовим лифты к приёмке без доработок.',
  },
  {
    idx: '03',
    title: 'Сервис',
    text: 'Остаёмся на связи после сдачи: берём лифты на обслуживание и обеспечиваем быстрый выезд.',
  },
]

// Official industrial-safety attestations (Committee for Industrial Safety,
// Ministry of Emergency Situations of the Republic of Kazakhstan). PDFs live
// in `public/documents/`.
export const CERTIFICATES = [
  {
    title: 'Сертификат дилерства',
    issuer: 'Kasper Elevator Co., LTD',
    issued: '01.01.2016',
    image: '/documents/sertifikat-dilerstva-kasper.jpg',
  },
  {
    title: 'Аттестат на право монтажа лифтов и эскалаторов',
    number: 'KZ82VEK00018462',
    issued: '22.01.2026',
    validity: 'действителен 5 лет',
    image: '/documents/attestat-montazh-liftov-eskalatorov.png',
    file: '/documents/attestat-montazh-liftov-eskalatorov.pdf',
  },
  {
    title: 'Аттестат на право технического обслуживания лифтов, эскалаторов и траволаторов',
    number: 'KZ20VEK00018802',
    issued: '27.04.2026',
    validity: 'действителен 5 лет',
    image: '/documents/attestat-obsluzhivanie-liftov.png',
    file: '/documents/attestat-obsluzhivanie-liftov.pdf',
  },
]

export const TESTIMONIALS = [
  {
    role: 'Застройщик',
    text: 'Работаем с компанией уже на третьем объекте. Для нас как застройщика ключевое - сроки, и здесь ни разу не подвели. Всегда на связи, вопросы закрывают быстро и без лишней нервотрёпки. Профессиональный подход, приятно иметь дело.',
  },
  {
    role: 'Бизнес-центр',
    text: 'Искали подрядчика в бизнес-центр, где важны и качество, и соблюдение сроков. Всё выполнили чётко, арендаторы довольны, наши задачи закрыты. Отдельно отмечу человеческий подход и оперативность.',
  },
  {
    role: 'Девелопер',
    text: 'Заходили в сложный проект - помогли грамотно адаптировать решения под наш бюджет. Всё сдали вовремя, без сдвигов дедлайнов и сюрпризов. Сильные специалисты, продолжим сотрудничество.',
  },
  {
    role: 'Управляющая компания',
    text: 'Управляем несколькими коммерческими объектами, поэтому есть с чем сравнивать. Работа под ключ, без лишней бюрократии и бесконечных согласований. При возникновении рабочих моментов подключаются моментально. Надёжный партнёр.',
  },
]

export const OBJECT_TYPES = [
  'Жилой комплекс (ЖК)',
  'Бизнес-центр',
  'ТРЦ',
  'Девелоперский проект',
  'Другое',
]
