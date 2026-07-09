export const locales = [ 'en', 'ru', 'be', 'la' ];
export const localeNames = [ 'English', 'Русский', 'Беларуская', 'Latina' ];
const translations: {[label: string]: {[lang: string]: string}} = {
  'BSULi': {
    'ru': 'БГУLi',
    'be': 'БДУLi',
    'la': 'UPBLi',
  },
  'A real website for an imaginary university': {
    'ru': 'Настоящий сайт для вымышленного университета',
    'be': 'Сапраўдны сайт для выдуманага ўніверсітэта',
    'la': 'Situs verus pro universitate ficticia',
  },
  'Courses': {
    'ru': 'Курсы',
    'be': 'Курсы',
    'la': 'Cursus',
  },
  'BSULi Courses': {
    'ru': 'Курсы БГУLi',
    'be': 'Курсы БДУLi',
    'la': 'Cursus UPBLi',
  },
  'Courses we offer': {
    'ru': 'Курсы, которые мы предлагаем',
    'be': 'Курсы, якія мы прапануем',
    'la': 'Cursus quos offerimus',
  },
  'See course': {
    'ru': 'Посмотреть курс',
    'be': 'Паглядзець курс',
    'la': 'Vide cursum',
  },
};

export function routes() {
  return locales.map(lang => ({ params: { lang } }));
}

export function lnk(url: string) {
  return `/${process.env.lang}${url}`;
}

export function pickTranslation<T>(map: {[lang: string]: T}, lang?: string): T | null {
  lang = lang || process.env.lang || 'en';
  if (lang in map) return map[lang];
  else if ('en' in map) return map['en'];
  else return null;
}

export function trinl<T>(map: {[lang: string]: T}, lang?: string): T {
  return pickTranslation(map, lang) || Object.values(map)[0];
}

export function tr(raw: [string], lang?: string): string {
  const label = raw[0];
  if (label in translations)
    return trinl(translations[label], lang) || label;
  return label;
}

export function translateCollection<T extends { id: string }>(collection: T[], lang?: string): T[] {
  let by_id: {[id: string]: {[lang: string]: T}} = {}
  for (const entry of collection) {
    const sep = entry.id.indexOf('/');
    const lang = entry.id.slice(0, sep);
    const id = entry.id.slice(sep + 1);
    by_id[id] = by_id[id] || {};
    by_id[id][lang] = { ...entry, id };
  }

  let translated = [];
  for (const entry of Object.values(by_id)) {
    translated.push(trinl(entry, lang));
  }

  return translated;
}
