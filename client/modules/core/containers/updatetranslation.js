import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Updatetranslation from '../components/updatetranslation.jsx';

export const composer = ({context, id}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const translationLanguages = [
    {_id:"afrikaans",name: "Afrikaans"},
    {_id:"albanian",name: "Albanian"},
    {_id:"amharic",name: "Amharic"},
    {_id:"arabic",name: "Arabic"},
    {_id:"aramaniac",name: "Aramaniac"},
    {_id:"armenian",name: "Armenian"},
    {_id:"assamese",name: "Assamese"},
    {_id:"aymara",name: "Aymara"},
    {_id:"azerbaijani",name: "Azerbaijani"},
    {_id:"balochi",name: "Balochi"},
    {_id:"bamanankan",name: "Bamanankan"},
    {_id:"bashkort",name: "Bashkort"},
    {_id:"basque",name: "Basque"},
    {_id:"belarusan",name: "Belarusan"},
    {_id:"bengali",name: "Bengali"},
    {_id:"bhojpuri",name: "Bhojpuri"},
    {_id:"bislama",name: "Bislama"},
    {_id:"bosnian",name: "Bosnian"},
    {_id:"brahui",name: "Brahui"},
    {_id:"bulgarian",name: "Bulgarian"},
    {_id:"burmese",name: "Burmese"},
    {_id:"cantonese",name: "Cantonese"},
    {_id:"catalan",name: "Catalan"},
    {_id:"cebuano",name: "Cebuano"},
    {_id:"chechen",name: "Chechen"},
    {_id:"cherokee",name: "Cherokee"},
    {_id:"croatian",name: "Croatian"},
    {_id:"czech",name: "Czech"},
    {_id:"dakota",name: "Dakota"},
    {_id:"danish",name: "Danish"},
    {_id:"dari",name: "Dari"},
    {_id:"dholuo",name: "Dholuo"},
    {_id:"dutch",name: "Dutch"},
    {_id:"english",name: "English"},
    {_id:"esperanto",name: "Esperanto"},
    {_id:"estonian",name: "Estonian"},
    {_id:"ewe",name: "Éwé"},
    {_id:"finnish",name: "Finnish"},
    {_id:"french",name: "French"},
    {_id:"georgian",name: "Georgian"},
    {_id:"german",name: "German"},
    {_id:"gikuyu",name: "Gikuyu"},
    {_id:"greek",name: "Greek"},
    {_id:"guarani",name: "Guarani"},
    {_id:"gujarati",name: "Gujarati"},
    {_id:"haitianCreole",name: "Haitian Creole"},
    {_id:"hausa",name: "Hausa"},
    {_id:"hawaiian",name: "Hawaiian"},
    {_id:"hawaiianCreole",name: "Hawaiian Creole"},
    {_id:"hebrew",name: "Hebrew"},
    {_id:"hiligaynon",name: "Hiligaynon"},
    {_id:"hindi",name: "Hindi"},
    {_id:"hungarian",name: "Hungarian"},
    {_id:"icelandic",name: "Icelandic"},
    {_id:"igbo",name: "Igbo"},
    {_id:"ilocano",name: "Ilocano"},
    {_id:"indonesian",name: "Indonesian"},
    {_id:"inuit",name: "Inuit"},
    {_id:"irishGaelic",name: "Irish Gaelic"},
    {_id:"italian",name: "Italian"},
    {_id:"japanese",name: "Japanese"},
    {_id:"kiche",name: "K'iche'"},
    {_id:"kabyle",name: "Kabyle"},
    {_id:"kannada",name: "Kannada"},
    {_id:"kashmiri",name: "Kashmiri"},
    {_id:"kazakh",name: "Kazakh"},
    {_id:"kmer",name: "Kmer"},
    {_id:"khoekhoe",name: "Khoekhoe"},
    {_id:"korean",name: "Korean"},
    {_id:"kurdish",name: "Kurdish"},
    {_id:"kyrgyz",name: "Kyrgyz"},
    {_id:"lao",name: "Lao"},
    {_id:"latin",name: "Latin"},
    {_id:"latvian",name: "Latvian"},
    {_id:"lingala",name: "Lingala"},
    {_id:"lithuanian",name: "Lithuanian"},
    {_id:"macedonian",name: "Macedonian"},
    {_id:"maithili",name: "Maithili"},
    {_id:"malagasy",name: "Malagasy"},
    {_id:"malay",name: "Malay"},
    {_id:"malayalam",name: "Malayalam"},
    {_id:"mandarin",name: "Mandarin"},
    {_id:"marathi",name: "Marathi"},
    {_id:"mende",name: "Mende"},
    {_id:"mongolian",name: "Mongolian"},
    {_id:"nahuatl",name: "Nahuatl"},
    {_id:"navajo",name: "Navajo"},
    {_id:"nepali",name: "Nepali"},
    {_id:"norwegian",name: "Norwegian"},
    {_id:"ojibwa",name: "Ojibwa"},
    {_id:"oriya",name: "Oriya"},
    {_id:"oromo",name: "Oromo"},
    {_id:"pashto",name: "Pashto"},
    {_id:"persian",name: "Persian"},
    {_id:"polish",name: "Polish"},
    {_id:"portuguese",name: "Portuguese"},
    {_id:"punjabi",name: "Punjabi"},
    {_id:"quechua",name: "Quechua"},
    {_id:"romani",name: "Romani"},
    {_id:"romanian",name: "Romanian"},
    {_id:"russian",name: "Russian"},
    {_id:"rwanda",name: "Rwanda"},
    {_id:"samoan",name: "Samoan"},
    {_id:"sanskrit",name: "Sanskrit"},
    {_id:"serbian",name: "Serbian"},
    {_id:"shona",name: "Shona"},
    {_id:"sindhi",name: "Sindhi"},
    {_id:"sinhala",name: "Sinhala"},
    {_id:"slovak",name: "Slovak"},
    {_id:"slovene",name: "Slovene"},
    {_id:"somali",name: "Somali"},
    {_id:"spanish",name: "Spanish"},
    {_id:"swahili",name: "Swahili"},
    {_id:"swedish",name: "Swedish"},
    {_id:"tachelhit",name: "Tachelhit"},
    {_id:"tagalog",name: "Tagalog"},
    {_id:"tajiki",name: "Tajiki"},
    {_id:"tamil",name: "Tamil"},
    {_id:"tatar",name: "Tatar"},
    {_id:"telugu",name: "Telugu"},
    {_id:"thai",name: "Thai"},
    {_id:"tibetic",name: "Tibetic"},
    {_id:"tigrigna",name: "Tigrigna"},
    {_id:"tokPisin",name: "Tok Pisin"},
    {_id:"turkish",name: "Turkish"},
    {_id:"turkmen",name: "Turkmen"},
    {_id:"ukrainian",name: "Ukrainian"},
    {_id:"urdu",name: "Urdu"},
    {_id:"uyghur",name: "Uyghur"},
    {_id:"uzbek",name: "Uzbek"},
    {_id:"vietnamese",name: "Vietnamese"},
    {_id:"warlpiri",name: "Warlpiri"},
    {_id:"welsh",name: "Welsh"},
    {_id:"wolof",name: "Wolof"},
    {_id:"xhosa",name: "Xhosa"},
    {_id:"yakut",name: "Yakut"},
    {_id:"yiddish",name: "Yiddish"},
    {_id:"yoruba",name: "Yoruba"},
    {_id:"yucatec",name: "Yucatec"},
    {_id:"zapotec",name: "Zapotec"},
    {_id:"zulu",name: "Zulu"}
  ];
  var contributor_id = LocalState.get('contributor') ? LocalState.get('contributor') : "";
  const selectedLanguage = LocalState.get('languageSelected') ? LocalState.get('languageSelected') : "afrikaans";
  const image = LocalState.get('imageUpdate');
  const error = LocalState.get('UPDATE_TRANSLATION_ERROR');
  const success = LocalState.get('UPDATE_TRANSLATION_SUCCESS');
  if (Meteor.subscribe("getUser",contributor_id).ready() && Meteor.subscribe("getSpecificTranslation",id.id).ready()) {
    const trans = Collections.Translation.find({_id:id.id}).fetch();
    const translation = trans[0];
    if (Meteor.subscribe("getAllCategories",selectedLanguage).ready()) {
      const selector = {};
      var s = {};
      s[l] = 1;
      selector["sort"] = s;
      const allCategory = Collections.Category.find({},selector).fetch();
      if (selectedLanguage == "afrikaans") {
        contributor_id = translation.afrikaans.contributor[0];
      }
      const contributor = Meteor.users.find(contributor_id).fetch();
      const cur = Meteor.userId();
      onData(null, {translation,translationLanguages,contributor,selectedLanguage,cur,image,error,success,allCategory});
    }
  }
};

export const depsMapper = (context, actions) => ({
  signoutUser: actions.core.signoutUser,
  goBackHome: actions.core.goBackHome,
  setLanguageSelectedView: actions.core.setLanguageSelectedView,
  updateTranslation: actions.core.updateTranslation,
  updateCategoryTranslation: actions.core.updateCategoryTranslation,
  changeImageTrans: actions.core.changeImageTrans,
  clearUpdateTranslationErrors: actions.core.clearUpdateTranslationErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Updatetranslation);
