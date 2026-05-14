export const CLIENT_DATA = {
  COMPANY_NAME: "[CLIENT_DATA: COMPANY_NAME]",
  ORG_TYPE: "[CLIENT_DATA: ORG_TYPE]", // "ООО" или "ИП"
  INN: "[CLIENT_DATA: INN]",
  OGRN: "[CLIENT_DATA: OGRN]",
  OGRN_LABEL: "[CLIENT_DATA: OGRN_LABEL]", // "ОГРН" или "ОГРНИП"
  LEGAL_ADDRESS: "[CLIENT_DATA: LEGAL_ADDRESS]",
  SERVICE_ADDRESS: "[CLIENT_DATA: SERVICE_ADDRESS]",
  EMAIL: "[CLIENT_DATA: EMAIL]",
  PHONE: "[CLIENT_DATA: PHONE]",
  WORK_HOURS: "[CLIENT_DATA: WORK_HOURS]",
  PROMO_DATE: "[CLIENT_DATA: PROMO_DATE]",
  DOMAIN: "https://tseh.example.com", // [CLIENT_DATA: DOMAIN]
};

export const LEGAL_TEXT_REQUIRED = {
  COOKIE_POLICY_VERSION: "[LEGAL_TEXT_REQUIRED: COOKIE_POLICY_VERSION]",
  CONSENT_LOG_ENDPOINT: "[LEGAL_TEXT_REQUIRED: CONSENT_LOG_ENDPOINT]",
  ANALYTICS_CODE: "<!-- [LEGAL_TEXT_REQUIRED: ANALYTICS_CODE] -->",
  PRIVACY_POLICY: "[LEGAL_TEXT_REQUIRED: PRIVACY_POLICY]",
  PD_CONSENT: "[LEGAL_TEXT_REQUIRED: PD_CONSENT]",
  OFFER_TEXT: "[LEGAL_TEXT_REQUIRED: OFFER_TEXT]",
  COOKIE_TEXT: "[LEGAL_TEXT_REQUIRED: COOKIE_TEXT]",
};

export const SITE_DATA = {
  // Контент скопирован из старого HTML (не юридика)
  phoneMain: "+7 (964) 860-15-01",
  phoneExtra: "+7 (8362) 50-15-01",
  addressShort: "ул. Строителей, 98, Йошкар-Ола",
  addressExt: "(этаж 1, общий заезд с JetAvto)",
  email: "ceh.detail@yandex.com",
  socials: {
    vk: "https://vk.com/tseh_yo",
    tg: "https://t.me/tseh_yo",
  },
  services: [
    { id: "s1", title: "КОМПЛЕКСНАЯ ДЕТЕЙЛИНГ МОЙКА", price: "ОТ 2600 ₽" },
    { id: "s2", title: "ХИМЧИСТКА САЛОНА АВТОМОБИЛЯ", price: "ОТ 800 ₽" },
    { id: "s3", title: "ПОЛИРОВКА КУЗОВА", price: "ОТ 12000 ₽" },
    { id: "s4", title: "КЕРАМИКА КУЗОВА (2 СЛОЯ)", price: "ОТ 15000 ₽" },
    { id: "s5", title: "ДЕТЕЙЛИНГ МОТОРНОГО ОТСЕКА", price: "3500 ₽" },
    { id: "s6", title: "ОЗОНИРОВАНИЕ САЛОНА", price: "1000 ₽" },
    { id: "s7", title: "ПОЛИРОВКА ФАР", price: "2000 ₽" },
    { id: "s8", title: "РАЗВАЛ-СХОЖДЕНИЕ", price: "1450 ₽" },
    { id: "s9", title: "КОМПЬЮТЕРНАЯ ДИАГНОСТИКА", price: "ОТ 540 ₽" },
  ],
  reviews: [
    {
      id: "r1",
      text: "«Отличный персонал, встречают и провожают с улыбкой. Чувствуешь себя как у своих.»",
      source: "2GIS",
      date: "Апрель 2026",
    },
    {
      id: "r2",
      text: "«Высокий уровень обслуживания и внимания к мелочам. Машина после детейлинга выглядит как новая.»",
      source: "Яндекс",
      date: "Апрель 2026",
    },
    {
      id: "r3",
      text: "«Ехал проездом, что-то застучало. Быстро помогли, взяли вне очереди. Вот так сервис!»",
      source: "Яндекс",
      date: "Март 2026",
    },
    {
      id: "r4",
      text: "«Качественный детейлинг и мойка. Чисто, комфортно, приятная атмосфера. Рекомендую от души!»",
      source: "2GIS",
      date: "Февраль 2026",
    },
  ],
  cases: [
    {
      id: "c1",
      title: "TOYOTA CAMRY — ДЕТЕЙЛИНГ",
      before: "Потускневший лак, царапины от автоматической мойки, помутневшие фары.",
      action: "Трёхстадийная полировка кузова, восстановление фар, нанесение защитного воска.",
      result: "Лак блестит как новый, царапины устранены, фары прозрачные. Клиент в восторге."
    },
    {
      id: "c2",
      title: "HYUNDAI TUCSON — БРОНЕПЛЁНКА",
      before: "Свежее авто после салона — владелец хотел сохранить первозданный вид кузова.",
      action: "Оклейка бамперов, порогов, зон риска бронеплёнкой. Нанесение керамики на кузов.",
      result: "Кузов надёжно защищён от сколов, камней и царапин. Гарантия на плёнку."
    },
    {
      id: "c3",
      title: "KIA RIO — РЕМОНТ ХОДОВОЙ",
      before: "Стук при повороте руля, увод в сторону при движении по ровной дороге.",
      action: "Компьютерная диагностика, замена шаровых опор, сайлентблоков, регулировка развала-схождения.",
      result: "Стук устранён, авто идёт ровно. Все работы — за один визит."
    }
  ]
};