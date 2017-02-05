import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'node-simple-schema';

const Category = new Mongo.Collection('category');

export const CategorySchema = new SimpleSchema({
  _id: {
    type: String,
    min: 17,
    max: 17,
    optional: true
  },

  image: {
    type: [String],
    label: "image",
    optional: true,
  },

  afrikaans: {
    type: String,
    label: "Afrikaans",
    optional: true,
  },

  albanian: {
    type: String,
    label: "Albanian",
    optional: true,
  },

  amharic: {
    type: String,
    label: "Amharic",
    optional: true,
  },

  arabic: {
    type: String,
    label: "Arabic",
    optional: true,
  },

  aramaniac: {
    type: String,
    label: "Aramaniac",
    optional: true,
  },

  armenian: {
    type: String,
    label: "Armenian",
    optional: true,
  },

  assamese: {
    type: String,
    label: "Assamese",
    optional: true,
  },

  aymara: {
    type: String,
    label: "Aymara",
    optional: true,
  },

  azerbaijani: {
    type: String,
    label: "Azerbaijani",
    optional: true,
  },

  balochi: {
    type: String,
    label: "Balochi",
    optional: true,
  },

  bamanankan: {
    type: String,
    label: "Bamanankan",
    optional: true,
  },

  bashkort: {
    type: String,
    label: "Bashkort",
    optional: true,
  },

  basque: {
    type: String,
    label: "Basque",
    optional: true,
  },

  belarusan: {
    type: String,
    label: "Belarusan",
    optional: true,
  },

  bengali: {
    type: String,
    label: "Bengali",
    optional: true,
  },

  bhojpuri: {
    type: String,
    label: "Bhojpuri",
    optional: true,
  },

  bislama: {
    type: String,
    label: "Bislama",
    optional: true,
  },

  bosnian: {
    type: String,
    label: "Bosnian",
    optional: true,
  },

  brahui: {
    type: String,
    label: "Brahui",
    optional: true,
  },

  bulgarian: {
    type: String,
    label: "Bulgarian",
    optional: true,
  },

  burmese: {
    type: String,
    label: "Burmese",
    optional: true,
  },

  cantonese: {
    type: String,
    label: "Cantonese",
    optional: true,
  },

  catalan: {
    type: String,
    label: "Catalan",
    optional: true,
  },

  cebuano: {
    type: String,
    label: "Cebuano",
    optional: true,
  },

  chechen: {
    type: String,
    label: "Chechen",
    optional: true,
  },

  cherokee: {
    type: String,
    label: "Cherokee",
    optional: true,
  },

  croatian: {
    type: String,
    label: "Croatian",
    optional: true,
  },

  czech: {
    type: String,
    label: "Czech",
    optional: true,
  },

  dakota: {
    type: String,
    label: "Dakota",
    optional: true,
  },

  danish: {
    type: String,
    label: "Danish",
    optional: true,
  },

  dari: {
    type: String,
    label: "Dari",
    optional: true,
  },

  dholuo: {
    type: String,
    label: "Dholuo",
    optional: true,
  },

  dutch: {
    type: String,
    label: "Dutch",
    optional: true,
  },

  english: {
    type: String,
    label: "English",
    optional: true,
  },

  esperanto: {
    type: String,
    label: "Esperanto",
    optional: true,
  },

  estonian: {
    type: String,
    label: "Estonian",
    optional: true,
  },

  ewe: {
    type: String,
    label: "Éwé",
    optional: true,
  },

  finnish: {
    type: String,
    label: "Finnish",
    optional: true,
  },

  french: {
    type: String,
    label: "French",
    optional: true,
  },

  georgian: {
    type: String,
    label: "Georgian",
    optional: true,
  },

  german: {
    type: String,
    label: "German",
    optional: true,
  },

  gikuyu: {
    type: String,
    label: "Gikuyu",
    optional: true,
  },

  greek: {
    type: String,
    label: "Greek",
    optional: true,
  },

  guarani: {
    type: String,
    label: "Guarani",
    optional: true,
  },

  gujarati: {
    type: String,
    label: "Gujarati",
    optional: true,
  },

  haitianCreole: {
    type: String,
    label: "Haitian Creole",
    optional: true,
  },

  hausa: {
    type: String,
    label: "Hausa",
    optional: true,
  },

  hawaiian: {
    type: String,
    label: "Hawaiian",
    optional: true,
  },

  hawaiianCreole: {
    type: String,
    label: "Hawaiian Creole",
    optional: true,
  },

  hebrew: {
    type: String,
    label: "Hebrew",
    optional: true,
  },

  hiligaynon: {
    type: String,
    label: "Hiligaynon",
    optional: true,
  },

  hindi: {
    type: String,
    label: "Hindi",
    optional: true,
  },

  hungarian: {
    type: String,
    label: "Hungarian",
    optional: true,
  },

  icelandic: {
    type: String,
    label: "Icelandic",
    optional: true,
  },

  igbo: {
    type: String,
    label: "Igbo",
    optional: true,
  },

  ilocano: {
    type: String,
    label: "Ilocano",
    optional: true,
  },

  indonesian: {
    type: String,
    label: "Indonesian",
    optional: true,
  },

  inuit: {
    type: String,
    label: "Inuit",
    optional: true,
  },

  irishGaelic: {
    type: String,
    label: "Irish Gaelic",
    optional: true,
  },

  italian: {
    type: String,
    label: "Italian",
    optional: true,
  },

  kiche: {
    type: String,
    label: "K'iche'",
    optional: true,
  },

  kabyle: {
    type: String,
    label: "Kabyle",
    optional: true,
  },

  kannada: {
    type: String,
    label: "Kannada",
    optional: true,
  },

  kashmiri: {
    type: String,
    label: "Kashmiri",
    optional: true,
  },

  kazakh: {
    type: String,
    label: "Kazakh",
    optional: true,
  },

  kmer: {
    type: String,
    label: "Kmer",
    optional: true,
  },

  khoekhoe: {
    type: String,
    label: "Khoekhoe",
    optional: true,
  },

  korean: {
    type: String,
    label: "Korean",
    optional: true,
  },

  kurdish: {
    type: String,
    label: "Kurdish",
    optional: true,
  },

  kyrgyz: {
    type: String,
    label: "Kyrgyz",
    optional: true,
  },

  lao: {
    type: String,
    label: "Lao",
    optional: true,
  },

  latin: {
    type: String,
    label: "Latin",
    optional: true,
  },

  latvian: {
    type: String,
    label: "Latvian",
    optional: true,
  },

  lingala: {
    type: String,
    label: "Lingala",
    optional: true,
  },

  lithuanian: {
    type: String,
    label: "Lithuanian",
    optional: true,
  },

  macedonian: {
    type: String,
    label: "Macedonian",
    optional: true,
  },

  maithili: {
    type: String,
    label: "Maithili",
    optional: true,
  },

  malagasy: {
    type: String,
    label: "Malagasy",
    optional: true,
  },

  malay: {
    type: String,
    label: "Malay",
    optional: true,
  },

  malayalam: {
    type: String,
    label: "Malayalam",
    optional: true,
  },

  mandarin: {
    type: String,
    label: "Mandarin",
    optional: true,
  },

  marathi: {
    type: String,
    label: "Marathi",
    optional: true,
  },

  mende: {
    type: String,
    label: "Mende",
    optional: true,
  },

  mongolian: {
    type: String,
    label: "Mongolian",
    optional: true,
  },

  nahuatl: {
    type: String,
    label: "Nahuatl",
    optional: true,
  },

  navajo: {
    type: String,
    label: "Navajo",
    optional: true,
  },

  nepali: {
    type: String,
    label: "Nepali",
    optional: true,
  },

  norwegian: {
    type: String,
    label: "Norwegian",
    optional: true,
  },

  ojibwa: {
    type: String,
    label: "Ojibwa",
    optional: true,
  },

  oriya: {
    type: String,
    label: "Oriya",
    optional: true,
  },

  oromo: {
    type: String,
    label: "Oromo",
    optional: true,
  },

  pashto: {
    type: String,
    label: "Pashto",
    optional: true,
  },

  persian: {
    type: String,
    label: "Persian",
    optional: true,
  },

  polish: {
    type: String,
    label: "Polish",
    optional: true,
  },

  portuguese: {
    type: String,
    label: "Portuguese",
    optional: true,
  },

  punjabi: {
    type: String,
    label: "Punjabi",
    optional: true,
  },

  quechua: {
    type: String,
    label: "Quechua",
    optional: true,
  },

  romani: {
    type: String,
    label: "Romani",
    optional: true,
  },

  romanian: {
    type: String,
    label: "Romanian",
    optional: true,
  },

  russian: {
    type: String,
    label: "Russian",
    optional: true,
  },

  rwanda: {
    type: String,
    label: "Rwanda",
    optional: true,
  },

  samoan: {
    type: String,
    label: "Samoan",
    optional: true,
  },

  sanskrit: {
    type: String,
    label: "Sanskrit",
    optional: true,
  },

  serbian: {
    type: String,
    label: "Serbian",
    optional: true,
  },

  shona: {
    type: String,
    label: "Shona",
    optional: true,
  },

  sindhi: {
    type: String,
    label: "Sindhi",
    optional: true,
  },

  sinhala: {
    type: String,
    label: "Sinhala",
    optional: true,
  },

  slovak: {
    type: String,
    label: "Slovak",
    optional: true,
  },

  slovene: {
    type: String,
    label: "Slovene",
    optional: true,
  },

  somali: {
    type: String,
    label: "Somali",
    optional: true,
  },

  spanish: {
    type: String,
    label: "Spanish",
    optional: true,
  },

  swahili: {
    type: String,
    label: "Swahili",
    optional: true,
  },

  swedish: {
    type: String,
    label: "Swedish",
    optional: true,
  },

  tachelhit: {
    type: String,
    label: "Tachelhit",
    optional: true,
  },

  tagalog: {
    type: String,
    label: "Tagalog",
    optional: true,
  },

  tajiki: {
    type: String,
    label: "Tajiki",
    optional: true,
  },

  tamil: {
    type: String,
    label: "Tamil",
    optional: true,
  },

  tatar: {
    type: String,
    label: "Tatar",
    optional: true,
  },

  telugu: {
    type: String,
    label: "Telugu",
    optional: true,
  },

  thai: {
    type: String,
    label: "Thai",
    optional: true,
  },

  tibetic: {
    type: String,
    label: "Tibetic",
    optional: true,
  },

  tigrigna: {
    type: String,
    label: "Tigrigna",
    optional: true,
  },

  tokPisin: {
    type: String,
    label: "Tok Pisin",
    optional: true,
  },

  turkish: {
    type: String,
    label: "Turkish",
    optional: true,
  },

  turkmen: {
    type: String,
    label: "Turkmen",
    optional: true,
  },

  ukrainian: {
    type: String,
    label: "Ukrainian",
    optional: true,
  },

  urdu: {
    type: String,
    label: "Urdu",
    optional: true,
  },

  uyghur: {
    type: String,
    label: "Uyghur",
    optional: true,
  },

  uzbek: {
    type: String,
    label: "Uzbek",
    optional: true,
  },

  vietnamese: {
    type: String,
    label: "Vietnamese",
    optional: true,
  },

  warlpiri: {
    type: String,
    label: "Warlpiri",
    optional: true,
  },

  welsh: {
    type: String,
    label: "Welsh",
    optional: true,
  },

  wolof: {
    type: String,
    label: "Wolof",
    optional: true,
  },

  xhosa: {
    type: String,
    label: "Xhosa",
    optional: true,
  },

  yakut: {
    type: String,
    label: "Yakut",
    optional: true,
  },

  yiddish: {
    type: String,
    label: "Yiddish",
    optional: true,
  },

  yoruba: {
    type: String,
    label: "Yoruba",
    optional: true,
  },

  yucatec: {
    type: String,
    label: "Yucatec",
    optional: true,
  },

  zapotec: {
    type: String,
    label: "Zapotec",
    optional: true,
  },

  zulu: {
    type: String,
    label: "Zulu",
    optional: true,
  },

});

export default Category;
