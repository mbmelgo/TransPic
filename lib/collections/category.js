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
    type: Object,
    label: "Afrikaans",
    optional: true,
  },

  "afrikaans.word": {
    type: String,
    label : "Word",
  },

  "afrikaans.contributor": {
    type: [String],
    label : "Contributor",
  },

  albanian: {
    type: Object,
    label: "Albanian",
    optional: true,
  },

  "albanian.word": {
    type: String,
    label : "Word",
  },

  "albanian.contributor": {
    type: [String],
    label : "Contributor",
  },

  amharic: {
    type: Object,
    label: "Amharic",
    optional: true,
  },

  "amharic.word": {
    type: String,
    label : "Word",
  },

  "amharic.contributor": {
    type: [String],
    label : "Contributor",
  },

  arabic: {
    type: Object,
    label: "Arabic",
    optional: true,
  },

  "arabic.word": {
    type: String,
    label : "Word",
  },

  "arabic.contributor": {
    type: [String],
    label : "Contributor",
  },

  aramaniac: {
    type: Object,
    label: "Aramaniac",
    optional: true,
  },

  "aramaniac.word": {
    type: String,
    label : "Word",
  },

  "aramaniac.contributor": {
    type: [String],
    label : "Contributor",
  },

  armenian: {
    type: Object,
    label: "Armenian",
    optional: true,
  },

  "armenian.word": {
    type: String,
    label : "Word",
  },

  "armenian.contributor": {
    type: [String],
    label : "Contributor",
  },

  assamese: {
    type: Object,
    label: "Assamese",
    optional: true,
  },

  "assamese.word": {
    type: String,
    label : "Word",
  },

  "assamese.contributor": {
    type: [String],
    label : "Contributor",
  },

  aymara: {
    type: Object,
    label: "Aymara",
    optional: true,
  },

  "aymara.word": {
    type: String,
    label : "Word",
  },

  "aymara.contributor": {
    type: [String],
    label : "Contributor",
  },

  azerbaijani: {
    type: Object,
    label: "Azerbaijani",
    optional: true,
  },

  "azerbaijani.word": {
    type: String,
    label : "Word",
  },

  "azerbaijani.contributor": {
    type: [String],
    label : "Contributor",
  },

  balochi: {
    type: Object,
    label: "Balochi",
    optional: true,
  },

  "balochi.word": {
    type: String,
    label : "Word",
  },

  "balochi.contributor": {
    type: [String],
    label : "Contributor",
  },

  bamanankan: {
    type: Object,
    label: "Bamanankan",
    optional: true,
  },

  "bamanankan.word": {
    type: String,
    label : "Word",
  },

  "bamanankan.contributor": {
    type: [String],
    label : "Contributor",
  },

  bashkort: {
    type: Object,
    label: "Bashkort",
    optional: true,
  },

  "bashkort.word": {
    type: String,
    label : "Word",
  },

  "bashkort.contributor": {
    type: [String],
    label : "Contributor",
  },

  basque: {
    type: Object,
    label: "Basque",
    optional: true,
  },

  "basque.word": {
    type: String,
    label : "Word",
  },

  "basque.contributor": {
    type: [String],
    label : "Contributor",
  },

  belarusan: {
    type: Object,
    label: "Belarusan",
    optional: true,
  },

  "belarusan.word": {
    type: String,
    label : "Word",
  },

  "belarusan.contributor": {
    type: [String],
    label : "Contributor",
  },

  bengali: {
    type: Object,
    label: "Bengali",
    optional: true,
  },

  "bengali.word": {
    type: String,
    label : "Word",
  },

  "bengali.contributor": {
    type: [String],
    label : "Contributor",
  },

  bhojpuri: {
    type: Object,
    label: "Bhojpuri",
    optional: true,
  },

  "bhojpuri.word": {
    type: String,
    label : "Word",
  },

  "bhojpuri.contributor": {
    type: [String],
    label : "Contributor",
  },

  bislama: {
    type: Object,
    label: "Bislama",
    optional: true,
  },

  "bislama.word": {
    type: String,
    label : "Word",
  },

  "bislama.contributor": {
    type: [String],
    label : "Contributor",
  },

  bosnian: {
    type: Object,
    label: "Bosnian",
    optional: true,
  },

  "bosnian.word": {
    type: String,
    label : "Word",
  },

  "bosnian.contributor": {
    type: [String],
    label : "Contributor",
  },

  brahui: {
    type: Object,
    label: "Brahui",
    optional: true,
  },

  "brahui.word": {
    type: String,
    label : "Word",
  },

  "brahui.contributor": {
    type: [String],
    label : "Contributor",
  },

  bulgarian: {
    type: Object,
    label: "Bulgarian",
    optional: true,
  },

  "bulgarian.word": {
    type: String,
    label : "Word",
  },

  "bulgarian.contributor": {
    type: [String],
    label : "Contributor",
  },

  burmese: {
    type: Object,
    label: "Burmese",
    optional: true,
  },

  "burmese.word": {
    type: String,
    label : "Word",
  },

  "burmese.contributor": {
    type: [String],
    label : "Contributor",
  },

  cantonese: {
    type: Object,
    label: "Cantonese",
    optional: true,
  },

  "cantonese.word": {
    type: String,
    label : "Word",
  },

  "cantonese.contributor": {
    type: [String],
    label : "Contributor",
  },

  catalan: {
    type: Object,
    label: "Catalan",
    optional: true,
  },

  "catalan.word": {
    type: String,
    label : "Word",
  },

  "catalan.contributor": {
    type: [String],
    label : "Contributor",
  },

  cebuano: {
    type: Object,
    label: "Cebuano",
    optional: true,
  },

  "cebuano.word": {
    type: String,
    label : "Word",
  },

  "cebuano.contributor": {
    type: [String],
    label : "Contributor",
  },

  chechen: {
    type: Object,
    label: "Chechen",
    optional: true,
  },

  "chechen.word": {
    type: String,
    label : "Word",
  },

  "chechen.contributor": {
    type: [String],
    label : "Contributor",
  },

  cherokee: {
    type: Object,
    label: "Cherokee",
    optional: true,
  },

  "cherokee.word": {
    type: String,
    label : "Word",
  },

  "cherokee.contributor": {
    type: [String],
    label : "Contributor",
  },

  croatian: {
    type: Object,
    label: "Croatian",
    optional: true,
  },

  "croatian.word": {
    type: String,
    label : "Word",
  },

  "croatian.contributor": {
    type: [String],
    label : "Contributor",
  },

  czech: {
    type: Object,
    label: "Czech",
    optional: true,
  },

  "czech.word": {
    type: String,
    label : "Word",
  },

  "czech.contributor": {
    type: [String],
    label : "Contributor",
  },

  dakota: {
    type: Object,
    label: "Dakota",
    optional: true,
  },

  "dakota.word": {
    type: String,
    label : "Word",
  },

  "dakota.contributor": {
    type: [String],
    label : "Contributor",
  },

  danish: {
    type: Object,
    label: "Danish",
    optional: true,
  },

  "danish.word": {
    type: String,
    label : "Word",
  },

  "danish.contributor": {
    type: [String],
    label : "Contributor",
  },

  dari: {
    type: Object,
    label: "Dari",
    optional: true,
  },

  "dari.word": {
    type: String,
    label : "Word",
  },

  "dari.contributor": {
    type: [String],
    label : "Contributor",
  },

  dholuo: {
    type: Object,
    label: "Dholuo",
    optional: true,
  },

  "dholuo.word": {
    type: String,
    label : "Word",
  },

  "dholuo.contributor": {
    type: [String],
    label : "Contributor",
  },

  dutch: {
    type: Object,
    label: "Dutch",
    optional: true,
  },

  "dutch.word": {
    type: String,
    label : "Word",
  },

  "dutch.contributor": {
    type: [String],
    label : "Contributor",
  },

  english: {
    type: Object,
    label: "English",
    optional: true,
  },

  "english.word": {
    type: String,
    label : "Word",
  },

  "english.contributor": {
    type: [String],
    label : "Contributor",
  },

  esperanto: {
    type: Object,
    label: "Esperanto",
    optional: true,
  },

  "esperanto.word": {
    type: String,
    label : "Word",
  },

  "esperanto.contributor": {
    type: [String],
    label : "Contributor",
  },

  estonian: {
    type: Object,
    label: "Estonian",
    optional: true,
  },

  "estonian.word": {
    type: String,
    label : "Word",
  },

  "estonian.contributor": {
    type: [String],
    label : "Contributor",
  },

  ewe: {
    type: Object,
    label: "Éwé",
    optional: true,
  },

  "ewe.word": {
    type: String,
    label : "Word",
  },

  "ewe.contributor": {
    type: [String],
    label : "Contributor",
  },

  finnish: {
    type: Object,
    label: "Finnish",
    optional: true,
  },

  "finnish.word": {
    type: String,
    label : "Word",
  },

  "finnish.contributor": {
    type: [String],
    label : "Contributor",
  },

  french: {
    type: Object,
    label: "French",
    optional: true,
  },

  "french.word": {
    type: String,
    label : "Word",
  },

  "french.contributor": {
    type: [String],
    label : "Contributor",
  },

  georgian: {
    type: Object,
    label: "Georgian",
    optional: true,
  },

  "georgian.word": {
    type: String,
    label : "Word",
  },

  "georgian.contributor": {
    type: [String],
    label : "Contributor",
  },

  german: {
    type: Object,
    label: "German",
    optional: true,
  },

  "german.word": {
    type: String,
    label : "Word",
  },

  "german.contributor": {
    type: [String],
    label : "Contributor",
  },

  gikuyu: {
    type: Object,
    label: "Gikuyu",
    optional: true,
  },

  "gikuyu.word": {
    type: String,
    label : "Word",
  },

  "gikuyu.contributor": {
    type: [String],
    label : "Contributor",
  },

  greek: {
    type: Object,
    label: "Greek",
    optional: true,
  },

  "greek.word": {
    type: String,
    label : "Word",
  },

  "greek.contributor": {
    type: [String],
    label : "Contributor",
  },

  guarani: {
    type: Object,
    label: "Guarani",
    optional: true,
  },

  "guarani.word": {
    type: String,
    label : "Word",
  },

  "guarani.contributor": {
    type: [String],
    label : "Contributor",
  },

  gujarati: {
    type: Object,
    label: "Gujarati",
    optional: true,
  },

  "gujarati.word": {
    type: String,
    label : "Word",
  },

  "gujarati.contributor": {
    type: [String],
    label : "Contributor",
  },

  haitianCreole: {
    type: Object,
    label: "Haitian Creole",
    optional: true,
  },

  "haitianCreole.word": {
    type: String,
    label : "Word",
  },

  "haitianCreole.contributor": {
    type: [String],
    label : "Contributor",
  },

  hausa: {
    type: Object,
    label: "Hausa",
    optional: true,
  },

  "hausa.word": {
    type: String,
    label : "Word",
  },

  "hausa.contributor": {
    type: [String],
    label : "Contributor",
  },

  hawaiian: {
    type: Object,
    label: "Hawaiian",
    optional: true,
  },

  "hawaiian.word": {
    type: String,
    label : "Word",
  },

  "hawaiian.contributor": {
    type: [String],
    label : "Contributor",
  },

  hawaiianCreole: {
    type: Object,
    label: "Hawaiian Creole",
    optional: true,
  },

  "hawaiianCreole.word": {
    type: String,
    label : "Word",
  },

  "hawaiianCreole.contributor": {
    type: [String],
    label : "Contributor",
  },

  hebrew: {
    type: Object,
    label: "Hebrew",
    optional: true,
  },

  "hebrew.word": {
    type: String,
    label : "Word",
  },

  "hebrew.contributor": {
    type: [String],
    label : "Contributor",
  },

  hiligaynon: {
    type: Object,
    label: "Hiligaynon",
    optional: true,
  },

  "hiligaynon.word": {
    type: String,
    label : "Word",
  },

  "hiligaynon.contributor": {
    type: [String],
    label : "Contributor",
  },

  hindi: {
    type: Object,
    label: "Hindi",
    optional: true,
  },

  "hindi.word": {
    type: String,
    label : "Word",
  },

  "hindi.contributor": {
    type: [String],
    label : "Contributor",
  },

  hungarian: {
    type: Object,
    label: "Hungarian",
    optional: true,
  },

  "hungarian.word": {
    type: String,
    label : "Word",
  },

  "hungarian.contributor": {
    type: [String],
    label : "Contributor",
  },

  icelandic: {
    type: Object,
    label: "Icelandic",
    optional: true,
  },

  "icelandic.word": {
    type: String,
    label : "Word",
  },

  "icelandic.contributor": {
    type: [String],
    label : "Contributor",
  },

  igbo: {
    type: Object,
    label: "Igbo",
    optional: true,
  },

  "igbo.word": {
    type: String,
    label : "Word",
  },

  "igbo.contributor": {
    type: [String],
    label : "Contributor",
  },

  ilocano: {
    type: Object,
    label: "Ilocano",
    optional: true,
  },

  "ilocano.word": {
    type: String,
    label : "Word",
  },

  "ilocano.contributor": {
    type: [String],
    label : "Contributor",
  },

  indonesian: {
    type: Object,
    label: "Indonesian",
    optional: true,
  },

  "indonesian.word": {
    type: String,
    label : "Word",
  },

  "indonesian.contributor": {
    type: [String],
    label : "Contributor",
  },

  inuit: {
    type: Object,
    label: "Inuit",
    optional: true,
  },

  "inuit.word": {
    type: String,
    label : "Word",
  },

  "inuit.contributor": {
    type: [String],
    label : "Contributor",
  },

  irishGaelic: {
    type: Object,
    label: "Irish Gaelic",
    optional: true,
  },

  "irishGaelic.word": {
    type: String,
    label : "Word",
  },

  "irishGaelic.contributor": {
    type: [String],
    label : "Contributor",
  },

  italian: {
    type: Object,
    label: "Italian",
    optional: true,
  },

  "italian.word": {
    type: String,
    label : "Word",
  },

  "italian.contributor": {
    type: [String],
    label : "Contributor",
  },

  japanese: {
    type: Object,
    label: "Japanese",
    optional: true,
  },

  "japanese.word": {
    type: String,
    label : "Word",
  },

  "japanese.contributor": {
    type: [String],
    label : "Contributor",
  },

  kiche: {
    type: Object,
    label: "K'iche'",
    optional: true,
  },

  "kiche.word": {
    type: String,
    label : "Word",
  },

  "kiche.contributor": {
    type: [String],
    label : "Contributor",
  },

  kabyle: {
    type: Object,
    label: "Kabyle",
    optional: true,
  },

  "kabyle.word": {
    type: String,
    label : "Word",
  },

  "kabyle.contributor": {
    type: [String],
    label : "Contributor",
  },

  kannada: {
    type: Object,
    label: "Kannada",
    optional: true,
  },

  "kannada.word": {
    type: String,
    label : "Word",
  },

  "kannada.contributor": {
    type: [String],
    label : "Contributor",
  },

  kashmiri: {
    type: Object,
    label: "Kashmiri",
    optional: true,
  },

  "kashmiri.word": {
    type: String,
    label : "Word",
  },

  "kashmiri.contributor": {
    type: [String],
    label : "Contributor",
  },

  kazakh: {
    type: Object,
    label: "Kazakh",
    optional: true,
  },

  "kazakh.word": {
    type: String,
    label : "Word",
  },

  "kazakh.contributor": {
    type: [String],
    label : "Contributor",
  },

  kmer: {
    type: Object,
    label: "Kmer",
    optional: true,
  },

  "kmer.word": {
    type: String,
    label : "Word",
  },

  "kmer.contributor": {
    type: [String],
    label : "Contributor",
  },

  khoekhoe: {
    type: Object,
    label: "Khoekhoe",
    optional: true,
  },

  "khoekhoe.word": {
    type: String,
    label : "Word",
  },

  "khoekhoe.contributor": {
    type: [String],
    label : "Contributor",
  },

  korean: {
    type: Object,
    label: "Korean",
    optional: true,
  },

  "korean.word": {
    type: String,
    label : "Word",
  },

  "korean.contributor": {
    type: [String],
    label : "Contributor",
  },

  kurdish: {
    type: Object,
    label: "Kurdish",
    optional: true,
  },

  "kurdish.word": {
    type: String,
    label : "Word",
  },

  "kurdish.contributor": {
    type: [String],
    label : "Contributor",
  },

  kyrgyz: {
    type: Object,
    label: "Kyrgyz",
    optional: true,
  },

  "kyrgyz.word": {
    type: String,
    label : "Word",
  },

  "kyrgyz.contributor": {
    type: [String],
    label : "Contributor",
  },

  lao: {
    type: Object,
    label: "Lao",
    optional: true,
  },

  "lao.word": {
    type: String,
    label : "Word",
  },

  "lao.contributor": {
    type: [String],
    label : "Contributor",
  },

  latin: {
    type: Object,
    label: "Latin",
    optional: true,
  },

  "latin.word": {
    type: String,
    label : "Word",
  },

  "latin.contributor": {
    type: [String],
    label : "Contributor",
  },

  latvian: {
    type: Object,
    label: "Latvian",
    optional: true,
  },

  "latvian.word": {
    type: String,
    label : "Word",
  },

  "latvian.contributor": {
    type: [String],
    label : "Contributor",
  },

  lingala: {
    type: Object,
    label: "Lingala",
    optional: true,
  },

  "lingala.word": {
    type: String,
    label : "Word",
  },

  "lingala.contributor": {
    type: [String],
    label : "Contributor",
  },

  lithuanian: {
    type: Object,
    label: "Lithuanian",
    optional: true,
  },

  "lithuanian.word": {
    type: String,
    label : "Word",
  },

  "lithuanian.contributor": {
    type: [String],
    label : "Contributor",
  },

  macedonian: {
    type: Object,
    label: "Macedonian",
    optional: true,
  },

  "macedonian.word": {
    type: String,
    label : "Word",
  },

  "macedonian.contributor": {
    type: [String],
    label : "Contributor",
  },

  maithili: {
    type: Object,
    label: "Maithili",
    optional: true,
  },

  "maithili.word": {
    type: String,
    label : "Word",
  },

  "maithili.contributor": {
    type: [String],
    label : "Contributor",
  },

  malagasy: {
    type: Object,
    label: "Malagasy",
    optional: true,
  },

  "malagasy.word": {
    type: String,
    label : "Word",
  },

  "malagasy.contributor": {
    type: [String],
    label : "Contributor",
  },

  malay: {
    type: Object,
    label: "Malay",
    optional: true,
  },

  "malay.word": {
    type: String,
    label : "Word",
  },

  "malay.contributor": {
    type: [String],
    label : "Contributor",
  },

  malayalam: {
    type: Object,
    label: "Malayalam",
    optional: true,
  },

  "malayalam.word": {
    type: String,
    label : "Word",
  },

  "malayalam.contributor": {
    type: [String],
    label : "Contributor",
  },

  mandarin: {
    type: Object,
    label: "Mandarin",
    optional: true,
  },

  "mandarin.word": {
    type: String,
    label : "Word",
  },

  "mandarin.contributor": {
    type: [String],
    label : "Contributor",
  },

  marathi: {
    type: Object,
    label: "Marathi",
    optional: true,
  },

  "marathi.word": {
    type: String,
    label : "Word",
  },

  "marathi.contributor": {
    type: [String],
    label : "Contributor",
  },

  mende: {
    type: Object,
    label: "Mende",
    optional: true,
  },

  "mende.word": {
    type: String,
    label : "Word",
  },

  "mende.contributor": {
    type: [String],
    label : "Contributor",
  },

  mongolian: {
    type: Object,
    label: "Mongolian",
    optional: true,
  },

  "mongolian.word": {
    type: String,
    label : "Word",
  },

  "mongolian.contributor": {
    type: [String],
    label : "Contributor",
  },

  nahuatl: {
    type: Object,
    label: "Nahuatl",
    optional: true,
  },

  "nahuatl.word": {
    type: String,
    label : "Word",
  },

  "nahuatl.contributor": {
    type: [String],
    label : "Contributor",
  },

  navajo: {
    type: Object,
    label: "Navajo",
    optional: true,
  },

  "navajo.word": {
    type: String,
    label : "Word",
  },

  "navajo.contributor": {
    type: [String],
    label : "Contributor",
  },

  nepali: {
    type: Object,
    label: "Nepali",
    optional: true,
  },

  "nepali.word": {
    type: String,
    label : "Word",
  },

  "nepali.contributor": {
    type: [String],
    label : "Contributor",
  },

  norwegian: {
    type: Object,
    label: "Norwegian",
    optional: true,
  },

  "norwegian.word": {
    type: String,
    label : "Word",
  },

  "norwegian.contributor": {
    type: [String],
    label : "Contributor",
  },

  ojibwa: {
    type: Object,
    label: "Ojibwa",
    optional: true,
  },

  "ojibwa.word": {
    type: String,
    label : "Word",
  },

  "ojibwa.contributor": {
    type: [String],
    label : "Contributor",
  },

  oriya: {
    type: Object,
    label: "Oriya",
    optional: true,
  },

  "oriya.word": {
    type: String,
    label : "Word",
  },

  "oriya.contributor": {
    type: [String],
    label : "Contributor",
  },

  oromo: {
    type: Object,
    label: "Oromo",
    optional: true,
  },

  "oromo.word": {
    type: String,
    label : "Word",
  },

  "oromo.contributor": {
    type: [String],
    label : "Contributor",
  },

  pashto: {
    type: Object,
    label: "Pashto",
    optional: true,
  },

  "pashto.word": {
    type: String,
    label : "Word",
  },

  "pashto.contributor": {
    type: [String],
    label : "Contributor",
  },

  persian: {
    type: Object,
    label: "Persian",
    optional: true,
  },

  "persian.word": {
    type: String,
    label : "Word",
  },

  "persian.contributor": {
    type: [String],
    label : "Contributor",
  },

  polish: {
    type: Object,
    label: "Polish",
    optional: true,
  },

  "polish.word": {
    type: String,
    label : "Word",
  },

  "polish.contributor": {
    type: [String],
    label : "Contributor",
  },

  portuguese: {
    type: Object,
    label: "Portuguese",
    optional: true,
  },

  "portuguese.word": {
    type: String,
    label : "Word",
  },

  "portuguese.contributor": {
    type: [String],
    label : "Contributor",
  },

  punjabi: {
    type: Object,
    label: "Punjabi",
    optional: true,
  },

  "punjabi.word": {
    type: String,
    label : "Word",
  },

  "punjabi.contributor": {
    type: [String],
    label : "Contributor",
  },

  quechua: {
    type: Object,
    label: "Quechua",
    optional: true,
  },

  "quechua.word": {
    type: String,
    label : "Word",
  },

  "quechua.contributor": {
    type: [String],
    label : "Contributor",
  },

  romani: {
    type: Object,
    label: "Romani",
    optional: true,
  },

  "romani.word": {
    type: String,
    label : "Word",
  },

  "romani.contributor": {
    type: [String],
    label : "Contributor",
  },

  romanian: {
    type: Object,
    label: "Romanian",
    optional: true,
  },

  "romanian.word": {
    type: String,
    label : "Word",
  },

  "romanian.contributor": {
    type: [String],
    label : "Contributor",
  },

  russian: {
    type: Object,
    label: "Russian",
    optional: true,
  },

  "russian.word": {
    type: String,
    label : "Word",
  },

  "russian.contributor": {
    type: [String],
    label : "Contributor",
  },

  rwanda: {
    type: Object,
    label: "Rwanda",
    optional: true,
  },

  "rwanda.word": {
    type: String,
    label : "Word",
  },

  "rwanda.contributor": {
    type: [String],
    label : "Contributor",
  },

  samoan: {
    type: Object,
    label: "Samoan",
    optional: true,
  },

  "samoan.word": {
    type: String,
    label : "Word",
  },

  "samoan.contributor": {
    type: [String],
    label : "Contributor",
  },

  sanskrit: {
    type: Object,
    label: "Sanskrit",
    optional: true,
  },

  "sanskrit.word": {
    type: String,
    label : "Word",
  },

  "sanskrit.contributor": {
    type: [String],
    label : "Contributor",
  },

  serbian: {
    type: Object,
    label: "Serbian",
    optional: true,
  },

  "serbian.word": {
    type: String,
    label : "Word",
  },

  "serbian.contributor": {
    type: [String],
    label : "Contributor",
  },

  shona: {
    type: Object,
    label: "Shona",
    optional: true,
  },

  "shona.word": {
    type: String,
    label : "Word",
  },

  "shona.contributor": {
    type: [String],
    label : "Contributor",
  },

  sindhi: {
    type: Object,
    label: "Sindhi",
    optional: true,
  },

  "sindhi.word": {
    type: String,
    label : "Word",
  },

  "sindhi.contributor": {
    type: [String],
    label : "Contributor",
  },

  sinhala: {
    type: Object,
    label: "Sinhala",
    optional: true,
  },

  "sinhala.word": {
    type: String,
    label : "Word",
  },

  "sinhala.contributor": {
    type: [String],
    label : "Contributor",
  },

  slovak: {
    type: Object,
    label: "Slovak",
    optional: true,
  },

  "slovak.word": {
    type: String,
    label : "Word",
  },

  "slovak.contributor": {
    type: [String],
    label : "Contributor",
  },

  slovene: {
    type: Object,
    label: "Slovene",
    optional: true,
  },

  "slovene.word": {
    type: String,
    label : "Word",
  },

  "slovene.contributor": {
    type: [String],
    label : "Contributor",
  },

  somali: {
    type: Object,
    label: "Somali",
    optional: true,
  },

  "somali.word": {
    type: String,
    label : "Word",
  },

  "somali.contributor": {
    type: [String],
    label : "Contributor",
  },

  spanish: {
    type: Object,
    label: "Spanish",
    optional: true,
  },

  "spanish.word": {
    type: String,
    label : "Word",
  },

  "spanish.contributor": {
    type: [String],
    label : "Contributor",
  },

  swahili: {
    type: Object,
    label: "Swahili",
    optional: true,
  },

  "swahili.word": {
    type: String,
    label : "Word",
  },

  "swahili.contributor": {
    type: [String],
    label : "Contributor",
  },

  swedish: {
    type: Object,
    label: "Swedish",
    optional: true,
  },

  "swedish.word": {
    type: String,
    label : "Word",
  },

  "swedish.contributor": {
    type: [String],
    label : "Contributor",
  },

  tachelhit: {
    type: Object,
    label: "Tachelhit",
    optional: true,
  },

  "tachelhit.word": {
    type: String,
    label : "Word",
  },

  "tachelhit.contributor": {
    type: [String],
    label : "Contributor",
  },

  tagalog: {
    type: Object,
    label: "Tagalog",
    optional: true,
  },

  "tagalog.word": {
    type: String,
    label : "Word",
  },

  "tagalog.contributor": {
    type: [String],
    label : "Contributor",
  },

  tajiki: {
    type: Object,
    label: "Tajiki",
    optional: true,
  },

  "tajiki.word": {
    type: String,
    label : "Word",
  },

  "tajiki.contributor": {
    type: [String],
    label : "Contributor",
  },

  tamil: {
    type: Object,
    label: "Tamil",
    optional: true,
  },

  "tamil.word": {
    type: String,
    label : "Word",
  },

  "tamil.contributor": {
    type: [String],
    label : "Contributor",
  },

  tatar: {
    type: Object,
    label: "Tatar",
    optional: true,
  },

  "tatar.word": {
    type: String,
    label : "Word",
  },

  "tatar.contributor": {
    type: [String],
    label : "Contributor",
  },

  telugu: {
    type: Object,
    label: "Telugu",
    optional: true,
  },

  "telugu.word": {
    type: String,
    label : "Word",
  },

  "telugu.contributor": {
    type: [String],
    label : "Contributor",
  },

  thai: {
    type: Object,
    label: "Thai",
    optional: true,
  },

  "thai.word": {
    type: String,
    label : "Word",
  },

  "thai.contributor": {
    type: [String],
    label : "Contributor",
  },

  tibetic: {
    type: Object,
    label: "Tibetic",
    optional: true,
  },

  "tibetic.word": {
    type: String,
    label : "Word",
  },

  "tibetic.contributor": {
    type: [String],
    label : "Contributor",
  },

  tigrigna: {
    type: Object,
    label: "Tigrigna",
    optional: true,
  },

  "tigrigna.word": {
    type: String,
    label : "Word",
  },

  "tigrigna.contributor": {
    type: [String],
    label : "Contributor",
  },

  tokPisin: {
    type: Object,
    label: "Tok Pisin",
    optional: true,
  },

  "tokPisin.word": {
    type: String,
    label : "Word",
  },

  "tokPisin.contributor": {
    type: [String],
    label : "Contributor",
  },

  turkish: {
    type: Object,
    label: "Turkish",
    optional: true,
  },

  "turkish.word": {
    type: String,
    label : "Word",
  },

  "turkish.contributor": {
    type: [String],
    label : "Contributor",
  },

  turkmen: {
    type: Object,
    label: "Turkmen",
    optional: true,
  },

  "turkmen.word": {
    type: String,
    label : "Word",
  },

  "turkmen.contributor": {
    type: [String],
    label : "Contributor",
  },

  ukrainian: {
    type: Object,
    label: "Ukrainian",
    optional: true,
  },

  "ukrainian.word": {
    type: String,
    label : "Word",
  },

  "ukrainian.contributor": {
    type: [String],
    label : "Contributor",
  },

  urdu: {
    type: Object,
    label: "Urdu",
    optional: true,
  },

  "urdu.word": {
    type: String,
    label : "Word",
  },

  "urdu.contributor": {
    type: [String],
    label : "Contributor",
  },

  uyghur: {
    type: Object,
    label: "Uyghur",
    optional: true,
  },

  "uyghur.word": {
    type: String,
    label : "Word",
  },

  "uyghur.contributor": {
    type: [String],
    label : "Contributor",
  },

  uzbek: {
    type: Object,
    label: "Uzbek",
    optional: true,
  },

  "uzbek.word": {
    type: String,
    label : "Word",
  },

  "uzbek.contributor": {
    type: [String],
    label : "Contributor",
  },

  vietnamese: {
    type: Object,
    label: "Vietnamese",
    optional: true,
  },

  "vietnamese.word": {
    type: String,
    label : "Word",
  },

  "vietnamese.contributor": {
    type: [String],
    label : "Contributor",
  },

  warlpiri: {
    type: Object,
    label: "Warlpiri",
    optional: true,
  },

  "warlpiri.word": {
    type: String,
    label : "Word",
  },

  "warlpiri.contributor": {
    type: [String],
    label : "Contributor",
  },

  welsh: {
    type: Object,
    label: "Welsh",
    optional: true,
  },

  "welsh.word": {
    type: String,
    label : "Word",
  },

  "welsh.contributor": {
    type: [String],
    label : "Contributor",
  },

  wolof: {
    type: Object,
    label: "Wolof",
    optional: true,
  },

  "wolof.word": {
    type: String,
    label : "Word",
  },

  "wolof.contributor": {
    type: [String],
    label : "Contributor",
  },

  xhosa: {
    type: Object,
    label: "Xhosa",
    optional: true,
  },

  "xhosa.word": {
    type: String,
    label : "Word",
  },

  "xhosa.contributor": {
    type: [String],
    label : "Contributor",
  },

  yakut: {
    type: Object,
    label: "Yakut",
    optional: true,
  },

  "yakut.word": {
    type: String,
    label : "Word",
  },

  "yakut.contributor": {
    type: [String],
    label : "Contributor",
  },

  yiddish: {
    type: Object,
    label: "Yiddish",
    optional: true,
  },

  "yiddish.word": {
    type: String,
    label : "Word",
  },

  "yiddish.contributor": {
    type: [String],
    label : "Contributor",
  },

  yoruba: {
    type: Object,
    label: "Yoruba",
    optional: true,
  },

  "yoruba.word": {
    type: String,
    label : "Word",
  },

  "yoruba.contributor": {
    type: [String],
    label : "Contributor",
  },

  yucatec: {
    type: Object,
    label: "Yucatec",
    optional: true,
  },

  "yucatec.word": {
    type: String,
    label : "Word",
  },

  "yucatec.contributor": {
    type: [String],
    label : "Contributor",
  },

  zapotec: {
    type: Object,
    label: "Zapotec",
    optional: true,
  },

  "zapotec.word": {
    type: String,
    label : "Word",
  },

  "zapotec.contributor": {
    type: [String],
    label : "Contributor",
  },

  zulu: {
    type: Object,
    label: "Zulu",
    optional: true,
  },

  "zulu.word": {
    type: String,
    label : "Word",
  },

  "zulu.contributor": {
    type: [String],
    label : "Contributor",
  },

});

export default Category;
