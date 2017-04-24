import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Adminhome from '../components/adminhome.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState,Collections} = context();
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
  var searchItem = "";
  var searchLanguage = "afrikaans";
  var wordSelected = LocalState.get('wordSelected');
  var modal = LocalState.get('modal');
  var getAll = LocalState.get('getAll');
  var limit =  LocalState.get('limit');
  if(getAll == null){
    getAll = false;
  }
  if(limit == null){
    limit = 8;
  }
  LocalState.get("searchLanguage") ? searchLanguage = LocalState.get('searchLanguage') : searchLanguage = "afrikaans";
  LocalState.get("searchItem") ? searchItem = LocalState.get('searchItem') : searchItem = "";
  if (LocalState.get("catId")){
    if (Meteor.subscribe("getAllTranslationWithinThisCategory",LocalState.get("catId"),limit).ready()) {
      const results = Collections.Translation.find({categoryId: {$elemMatch: { $eq: LocalState.get("catId") }}}, {limit:limit}).fetch();
      onData(null, {results,wordSelected,searchItem,searchLanguage,translationLanguages,modal,limit});
    }
  } else {
    if (!getAll && Meteor.subscribe("searchCategory", searchItem,searchLanguage,limit).ready() &&
        Meteor.subscribe("searchTranslation", searchItem,searchLanguage,limit).ready()) {
        var results = [];
        var query = {};
        var l = searchLanguage + ".word";
        query[l] = {$regex:searchItem,$options:"i"};
        if (searchItem.length > 0) {
          wordSelected ?
            results = Collections.Translation.find(query,{limit:limit}).fetch() :
            results = Collections.Category.find(query,{limit:limit}).fetch()
        }
        onData(null, {results,wordSelected,searchItem,searchLanguage,translationLanguages,modal,limit});
    } else if (getAll && Meteor.subscribe("getAllCategory", searchLanguage,limit).ready() &&
        Meteor.subscribe("getAllTranslation", searchLanguage,limit).ready()) {
        var results = [];
        const selector = {};
        var l = searchLanguage + ".word";
        var s = {};
        s[l] = 1;
        selector["sort"] = s;
        selector["limit"] = limit;
        wordSelected ?
          results = Collections.Translation.find({},selector).fetch() :
          results = Collections.Category.find({},selector).fetch()
        onData(null, {results,wordSelected,searchItem,searchLanguage,translationLanguages,modal,limit});
    }
  }
};

export const depsMapper = (context, actions) => ({
  signoutUser: actions.core.signoutUser,
  toggleWordCategorySelection: actions.core.toggleWordCategorySelection,
  setSearch: actions.core.setSearch,
  showModal: actions.core.showModal,
  goToAddTranslation: actions.core.goToAddTranslation,
  goToAddCategory: actions.core.goToAddCategory,
  getAll: actions.core.getAll,
  setLimit: actions.core.setLimit,
  changeLanguageSelected: actions.core.changeLanguageSelected,
  clearSearchErrors: actions.core.clearSearchErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Adminhome);
