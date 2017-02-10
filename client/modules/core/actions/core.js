export default {

  registerUser({FlowRouter}){
    FlowRouter.go('/signup')
  },

  signupUser({Meteor, LocalState, FlowRouter, Collections}, formData){
    if(!formData.username)return LocalState.set('ACCOUNT_ERROR','Username is Required');
    if(!formData.password)return LocalState.set('ACCOUNT_ERROR','Password is Required');
    if(!formData.profile.firstName)return LocalState.set('ACCOUNT_ERROR','First Name is Required');
    if(!formData.profile.lastName)return LocalState.set('ACCOUNT_ERROR','Last Name is Required');
    if(!formData.profile.organization)return LocalState.set('ACCOUNT_ERROR','Organization is Required');
    if(!formData.profile.occupation)return LocalState.set('ACCOUNT_ERROR','Occupation is Required');

    Meteor.call("addUser",formData, function (err){
      if(err) return LocalState.set('ACCOUNT_ERROR',"Server Error: Account can't be created");
      else { FlowRouter.go('/admin_home');}
    });
  },

  signinUser({Meteor, LocalState, FlowRouter}, formData){
    if(!formData.username)return LocalState.set('ACCOUNT_ERROR','Username is Required');
    if(!formData.password)return LocalState.set('ACCOUNT_ERROR','Password is Required');

    LocalState.set('ACCOUNT_ERROR', null);

    Meteor.loginWithPassword(formData.username,formData.password, (err) => {
      if (err) {return LocalState.set('ACCOUNT_ERROR',err.message);}
      FlowRouter.go('/admin_home');
    })
  },

  signoutUser({Meteor, FlowRouter}){
    Meteor.logout();
    FlowRouter.go('/signin');
  },

  addImage({LocalState}, imageFile){
    var reader = new FileReader();
    reader.onload = function (e) {
      return LocalState.set({
        'image': e.target.result,
        "ADD_CATEGORY_ERROR": null,
        "ADD_TRANSLATION_ERROR": null
      });
    }
    reader.readAsDataURL(imageFile);
  },

  removeImage({LocalState}){
    return LocalState.set({
      'image': null,
      "ADD_CATEGORY_ERROR": null,
      "ADD_TRANSLATION_ERROR": null
    });
  },

  goToAddTranslation({FlowRouter}){
    FlowRouter.go('/add_translation');
  },

  goToAddCategory({FlowRouter}){
    FlowRouter.go('/add_category');
  },

  addTranslation({Meteor, LocalState, FlowRouter, Collections}, formData){
    var hasOneTranslation = false;

    if(!formData.image ) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 image of the word is required');
    if (!formData.categoryId) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 category of the word is required');
    if (!hasOneTranslation && formData.afrikaans) hasOneTranslation = true;
    if (!hasOneTranslation && formData.albanian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.amharic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.arabic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aramaniac) hasOneTranslation = true;
    if (!hasOneTranslation && formData.armenian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.assamese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aymara) hasOneTranslation = true;
    if (!hasOneTranslation && formData.azerbaijani) hasOneTranslation = true;
    if (!hasOneTranslation && formData.balochi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bamanankan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bashkort) hasOneTranslation = true;
    if (!hasOneTranslation && formData.basque) hasOneTranslation = true;
    if (!hasOneTranslation && formData.belarusan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bengali) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bhojpuri) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bislama) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bosnian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.brahui) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bulgarian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.burmese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cantonese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.catalan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cebuano) hasOneTranslation = true;
    if (!hasOneTranslation && formData.chechen) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cherokee) hasOneTranslation = true;
    if (!hasOneTranslation && formData.croatian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.czech) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dakota) hasOneTranslation = true;
    if (!hasOneTranslation && formData.danish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dari) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dholuo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dutch) hasOneTranslation = true;
    if (!hasOneTranslation && formData.english) hasOneTranslation = true;
    if (!hasOneTranslation && formData.esperanto) hasOneTranslation = true;
    if (!hasOneTranslation && formData.estonian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ewe) hasOneTranslation = true;
    if (!hasOneTranslation && formData.finnish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.french) hasOneTranslation = true;
    if (!hasOneTranslation && formData.georgian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.german) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gikuyu) hasOneTranslation = true;
    if (!hasOneTranslation && formData.greek) hasOneTranslation = true;
    if (!hasOneTranslation && formData.guarani) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gujarati) hasOneTranslation = true;
    if (!hasOneTranslation && formData.haitianCreole) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hausa) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiianCreole) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hebrew) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hiligaynon) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hindi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hungarian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.icelandic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.igbo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ilocano) hasOneTranslation = true;
    if (!hasOneTranslation && formData.indonesian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.inuit) hasOneTranslation = true;
    if (!hasOneTranslation && formData.irishGaelic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.italian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kiche) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kabyle) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kannada) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kashmiri) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kazakh) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kmer) hasOneTranslation = true;
    if (!hasOneTranslation && formData.khoekhoe) hasOneTranslation = true;
    if (!hasOneTranslation && formData.korean) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kurdish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kyrgyz) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lao) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latin) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latvian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lingala) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lithuanian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.macedonian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.maithili) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malagasy) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malay) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malayalam) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mandarin) hasOneTranslation = true;
    if (!hasOneTranslation && formData.marathi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mende) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mongolian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nahuatl) hasOneTranslation = true;
    if (!hasOneTranslation && formData.navajo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nepali) hasOneTranslation = true;
    if (!hasOneTranslation && formData.norwegian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ojibwa) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oriya) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oromo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.pashto) hasOneTranslation = true;
    if (!hasOneTranslation && formData.persian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.polish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.portuguese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.punjabi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.quechua) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romani) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romanian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.russian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.rwanda) hasOneTranslation = true;
    if (!hasOneTranslation && formData.samoan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sanskrit) hasOneTranslation = true;
    if (!hasOneTranslation && formData.serbian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.shona) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sindhi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sinhala) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovak) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovene) hasOneTranslation = true;
    if (!hasOneTranslation && formData.somali) hasOneTranslation = true;
    if (!hasOneTranslation && formData.spanish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swahili) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swedish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tachelhit) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tagalog) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tajiki) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tamil) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tatar) hasOneTranslation = true;
    if (!hasOneTranslation && formData.telugu) hasOneTranslation = true;
    if (!hasOneTranslation && formData.thai) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tibetic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tigrigna) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tokPisin) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkmen) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ukrainian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.urdu) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uyghur) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uzbek) hasOneTranslation = true;
    if (!hasOneTranslation && formData.vietnamese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.warlpiri) hasOneTranslation = true;
    if (!hasOneTranslation && formData.welsh) hasOneTranslation = true;
    if (!hasOneTranslation && formData.wolof) hasOneTranslation = true;
    if (!hasOneTranslation && formData.xhosa) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yakut) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yiddish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yoruba) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yucatec) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zapotec) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zulu) hasOneTranslation = true;
    if (!hasOneTranslation) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 translation of the word is required');
    const image = formData.image;
    formData.image = [image];
    Meteor.call("addTranslation",formData, function (err){
      if(err) return LocalState.set('ADD_TRANSLATION_ERROR',"Server Error: New translation can't be created");
      else { FlowRouter.go('/admin_home');}
    });
  },

  addCategory({Meteor, LocalState, FlowRouter, Collections}, formData){
    var hasOneTranslation = false;

    if(!formData.image) return LocalState.set('ADD_CATEGORY_ERROR','Atleast 1 image of the new category is required');
    if (!hasOneTranslation && formData.afrikaans) hasOneTranslation = true;
    if (!hasOneTranslation && formData.albanian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.amharic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.arabic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aramaniac) hasOneTranslation = true;
    if (!hasOneTranslation && formData.armenian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.assamese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aymara) hasOneTranslation = true;
    if (!hasOneTranslation && formData.azerbaijani) hasOneTranslation = true;
    if (!hasOneTranslation && formData.balochi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bamanankan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bashkort) hasOneTranslation = true;
    if (!hasOneTranslation && formData.basque) hasOneTranslation = true;
    if (!hasOneTranslation && formData.belarusan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bengali) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bhojpuri) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bislama) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bosnian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.brahui) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bulgarian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.burmese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cantonese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.catalan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cebuano) hasOneTranslation = true;
    if (!hasOneTranslation && formData.chechen) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cherokee) hasOneTranslation = true;
    if (!hasOneTranslation && formData.croatian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.czech) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dakota) hasOneTranslation = true;
    if (!hasOneTranslation && formData.danish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dari) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dholuo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dutch) hasOneTranslation = true;
    if (!hasOneTranslation && formData.english) hasOneTranslation = true;
    if (!hasOneTranslation && formData.esperanto) hasOneTranslation = true;
    if (!hasOneTranslation && formData.estonian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ewe) hasOneTranslation = true;
    if (!hasOneTranslation && formData.finnish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.french) hasOneTranslation = true;
    if (!hasOneTranslation && formData.georgian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.german) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gikuyu) hasOneTranslation = true;
    if (!hasOneTranslation && formData.greek) hasOneTranslation = true;
    if (!hasOneTranslation && formData.guarani) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gujarati) hasOneTranslation = true;
    if (!hasOneTranslation && formData.haitianCreole) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hausa) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiianCreole) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hebrew) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hiligaynon) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hindi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hungarian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.icelandic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.igbo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ilocano) hasOneTranslation = true;
    if (!hasOneTranslation && formData.indonesian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.inuit) hasOneTranslation = true;
    if (!hasOneTranslation && formData.irishGaelic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.italian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kiche) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kabyle) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kannada) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kashmiri) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kazakh) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kmer) hasOneTranslation = true;
    if (!hasOneTranslation && formData.khoekhoe) hasOneTranslation = true;
    if (!hasOneTranslation && formData.korean) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kurdish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kyrgyz) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lao) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latin) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latvian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lingala) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lithuanian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.macedonian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.maithili) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malagasy) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malay) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malayalam) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mandarin) hasOneTranslation = true;
    if (!hasOneTranslation && formData.marathi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mende) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mongolian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nahuatl) hasOneTranslation = true;
    if (!hasOneTranslation && formData.navajo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nepali) hasOneTranslation = true;
    if (!hasOneTranslation && formData.norwegian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ojibwa) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oriya) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oromo) hasOneTranslation = true;
    if (!hasOneTranslation && formData.pashto) hasOneTranslation = true;
    if (!hasOneTranslation && formData.persian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.polish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.portuguese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.punjabi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.quechua) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romani) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romanian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.russian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.rwanda) hasOneTranslation = true;
    if (!hasOneTranslation && formData.samoan) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sanskrit) hasOneTranslation = true;
    if (!hasOneTranslation && formData.serbian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.shona) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sindhi) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sinhala) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovak) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovene) hasOneTranslation = true;
    if (!hasOneTranslation && formData.somali) hasOneTranslation = true;
    if (!hasOneTranslation && formData.spanish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swahili) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swedish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tachelhit) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tagalog) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tajiki) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tamil) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tatar) hasOneTranslation = true;
    if (!hasOneTranslation && formData.telugu) hasOneTranslation = true;
    if (!hasOneTranslation && formData.thai) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tibetic) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tigrigna) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tokPisin) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkmen) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ukrainian) hasOneTranslation = true;
    if (!hasOneTranslation && formData.urdu) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uyghur) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uzbek) hasOneTranslation = true;
    if (!hasOneTranslation && formData.vietnamese) hasOneTranslation = true;
    if (!hasOneTranslation && formData.warlpiri) hasOneTranslation = true;
    if (!hasOneTranslation && formData.welsh) hasOneTranslation = true;
    if (!hasOneTranslation && formData.wolof) hasOneTranslation = true;
    if (!hasOneTranslation && formData.xhosa) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yakut) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yiddish) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yoruba) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yucatec) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zapotec) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zulu) hasOneTranslation = true;
    if (!hasOneTranslation) return LocalState.set('ADD_CATEGORY_ERROR','Atleast 1 translation of the word is required');
    const image = formData.image;
    formData.image = [image];
    Meteor.call("addCategory",formData, function (err){
      if(err) return LocalState.set('ADD_CATEGORY_ERROR',"Server Error: New category can't be created");
      else { FlowRouter.go('/admin_home');}
    });
  },

  deleteCategory({Meteor, LocalState, FlowRouter, Collections}, categoryId){
    if(!categoryId) return LocalState.set('DELETE_CATEGORY_ERROR','Category not Found!');
    Meteor.call('deleteCategory', categoryId, (err) => {
      if(err){return LocalState.set('DELETE_CATEGORY_ERROR', err.message);}
    });
  },

  deleteTranslation({Meteor, LocalState, FlowRouter, Collections}, translationId){
    if(!translationId) return LocalState.set('DELETE_TRANSLATION_ERROR','Translation not Found!');
    Meteor.call('deleteTranslation', translationId, (err) => {
      if(err){return LocalState.set('DELETE_TRANSLATION_ERROR', err.message);}
    });
  },

  goBackHome({FlowRouter}){
    FlowRouter.go('/admin_home');
  },

  toggleWordCategorySelection({LocalState},wordSelected){
    if (wordSelected) {
      return LocalState.set({wordSelected:true});
    } else {
      return LocalState.set({wordSelected:false});
    }
  },

  setSearch({LocalState},parameters){
    return LocalState.set({
      searchLanguage: parameters.searchLanguage,
      searchItem: parameters.searchItem,
      wordSelected: parameters.wordSelected
    });
  },

  clearAddCategoryErrors({LocalState}){
    return LocalState.set({
      "ADD_CATEGORY_ERROR": null,
      "image": null,
    });
  },

  clearDeleteCategoryErrors({LocalState}){
    return LocalState.set({
      "DELETE_CATEGORY_ERROR": null,
    });
  },

  clearAddTranslationErrors({LocalState}){
    return LocalState.set({
      "ADD_TRANSLATION_ERROR": null,
      "image": null
    });
  },

  clearDeleteTranslationErrors({LocalState}){
    return LocalState.set({
      "DELETE_TRANSLATION_ERROR": null,
    });
  },

  clearSearchErrors({LocalState}){
    return LocalState.set({
      searchLanguage: null,
      searchItem: null,
      wordSelected: null
    });
  },

  clearAccountErrors({LocalState}){
    return LocalState.set({"ACCOUNT_ERROR": null});
  },
}
