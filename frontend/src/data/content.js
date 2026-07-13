// Central content store for the site. Keeping copy here makes it easy to
// later move to a CMS or fetch from the Go backend without touching components.

export const COMPANY = {
  name: 'KASPER',
  tagline: 'LIFT SOLUTIONS',
  region: 'KZ',
  phone: '+7 702 230-22-38',
  phoneHref: 'tel:+77022302238',
  email: 'eurasia.lift.kz@gmail.com',
  emailHref: 'mailto:eurasia.lift.kz@gmail.com',
  whatsapp: 'https://wa.me/77022302238',
  instagram: 'https://instagram.com/eurasia.lift',
  address: 'г. Астана, район Есиль, шоссе Коргалжын, 25А',
  contactPerson: {
    role: 'Заместитель директора',
    name: 'Спичкин Владимир Владимирович',
    phone: '+7 702 230-22-38',
  },
  year: 2026,
}

// Coordinates for "Шоссе Коргалжын, 25" (Yesil district, Astana) from 2GIS —
// used to center the map on the Contact page. 25А is the same block.
export const MAP = {
  lat: 51.147815,
  lon: 71.366995,
  bbox: '71.35,51.14,71.38,51.16',
  openLink: 'https://www.openstreetmap.org/?mlat=51.147815&mlon=71.366995#map=16/51.147815/71.366995',
}

export const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/dlya-kogo', label: 'Для кого' },
  { to: '/obyekty', label: 'Объекты' },
  { to: '/servis', label: 'Сервис' },
  { to: '/kontakty', label: 'Контакты' },
]

export const STATS = [
  { num: '100+', label: 'объектов' },
  { num: '300+', label: 'лифтов' },
  { num: '80', label: 'лет технологий' },
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
  { n: 1, title: 'Подбор и поставка', text: 'Подбираем оборудование и поставляем со склада в РК.' },
  { n: 2, title: 'Монтаж на объекте', text: 'Монтируем по графику объекта.' },
  { n: 3, title: 'Настройка и запуск', text: 'Пусконаладка и проверка.' },
  { n: 4, title: 'Подготовка к приёмке', text: 'Готовим лифты к сдаче без доработок.' },
  { n: 5, title: 'Сопровождение', text: 'Остаёмся на связи после запуска.' },
]

// Real completed objects, sourced from the company's own project deck.
export const OBJECTS = [
  { name: 'Акмешит - 3', img: '/photos/obj-akmeshit-3.jpg' },
  { name: 'ЖК Кыз Жибек - 38', img: '/photos/obj-kyz-zhibek-38.jpg' },
  { name: 'Казанат 1/1', img: '/photos/obj-kazanat-1-1.jpg' },
  { name: 'Керей, Жанибек хан 30', img: '/photos/obj-korey-zhanibek-30.jpg' },
  { name: 'ЖК "Санат"', img: '/photos/obj-sanat.jpg' },
  { name: 'ЖК "Kurmet"', img: '/photos/obj-kurmet.jpg' },
  { name: 'ЖК "Triumph Avenue"', img: '/photos/obj-triumph-avenue.jpg' },
  { name: 'ЖК "Тан"', img: '/photos/obj-tan.jpg' },
  { name: 'ЖК "Madi"', img: '/photos/obj-madi.jpg' },
  { name: 'ЖК "Басқару - 5"', img: '/photos/obj-baskaru-5.jpg' },
  { name: 'ЖК "Korkem Tower"', img: '/photos/obj-korkem-tower.jpg' },
  { name: 'ЖК "Айнакөл"', img: '/photos/obj-ainakol.jpg' },
  { name: 'ЖК "Hokkaido"', img: '/photos/obj-hokkaido.jpg' },
  { name: 'ЖК "Медина"', img: '/photos/obj-medina.jpg' },
  { name: 'ЖК "Город 72"', img: '/photos/obj-gorod-72.jpg' },
  { name: 'ЖК "Биік Шаңырақ"', img: '/photos/obj-biik-shanyrak.jpg' },
  { name: 'Б.Момышулы 2/11', img: '/photos/obj-momyshuly-2-11.jpg' },
  { name: 'Т.Рыскулова 8/1', img: '/photos/obj-ryskulova-8-1.jpg' },
  { name: 'Сыганак 16', img: '/photos/obj-syganak-16.jpg' },
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
  { name: 'ЖК "Медиаполь"', img: '/photos/obj-mediapol.jpg' },
  { name: 'ЖК "Отау"', img: '/photos/obj-otau.jpg' },
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
  { idx: '03', title: 'Полный цикл под ключ', text: 'Поставка, монтаж, запуск и сервис — в одной зоне ответственности.' },
  { idx: '04', title: 'Контроль сроков', text: 'Фиксируем сроки и выстраиваем процесс под график объекта.' },
  { idx: '05', title: 'Безопасность и соответствие', text: 'Контролируем монтаж и подготовку к приёмке — без доработок.' },
  { idx: '06', title: 'Сервис после запуска', text: 'Остаёмся после сдачи и берём лифты на обслуживание.' },
]

export const PILLARS = [
  {
    idx: '01',
    title: 'Поставка',
    text: 'Поставляем лифты и комплектующие KASPER со своего склада в Казахстане — без ожидания зарубежных партий.',
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

export const ABOUT = {
  tag: 'О компании',
  title: 'Официальный представитель KASPER в Казахстане',
  text: 'Работаем с заводом KASPER, у которого 80-летняя история производства лифтового оборудования, напрямую — без посредников. Держим собственный склад запчастей в Казахстане, поэтому не зависим от сроков зарубежных поставок и закрываем лифтовую часть объекта под ключ: от поставки до сервиса после запуска.',
}

export const OBJECT_TYPES = [
  'Жилой комплекс (ЖК)',
  'Бизнес-центр',
  'ТРЦ',
  'Девелоперский проект',
  'Другое',
]
