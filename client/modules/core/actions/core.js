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
    if(!formData.profile.email)return LocalState.set('ACCOUNT_ERROR','Email is Required');

    Meteor.call("addUser",formData, function (err){
      if(err) return LocalState.set('ACCOUNT_ERROR',err);
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
    if (formData.categoryId.length <= 0) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 category of the word is required');
    if (!hasOneTranslation && formData.afrikaans.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.albanian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.amharic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.arabic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aramaniac.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.armenian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.assamese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aymara.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.azerbaijani.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.balochi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bamanankan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bashkort.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.basque.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.belarusan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bengali.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bhojpuri.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bislama.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bosnian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.brahui.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bulgarian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.burmese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cantonese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.catalan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cebuano.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.chechen.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cherokee.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.croatian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.czech.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dakota.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.danish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dari.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dholuo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dutch.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.english.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.esperanto.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.estonian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ewe.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.finnish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.french.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.georgian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.german.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gikuyu.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.greek.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.guarani.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gujarati.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.haitianCreole.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hausa.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiianCreole.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hebrew.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hiligaynon.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hindi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hungarian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.icelandic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.igbo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ilocano.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.indonesian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.inuit.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.irishGaelic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.italian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kiche.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kabyle.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kannada.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kashmiri.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kazakh.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kmer.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.khoekhoe.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.korean.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kurdish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kyrgyz.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lao.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latin.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latvian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lingala.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lithuanian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.macedonian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.maithili.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malagasy.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malay.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malayalam.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mandarin.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.marathi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mende.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mongolian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nahuatl.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.navajo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nepali.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.norwegian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ojibwa.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oriya.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oromo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.pashto.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.persian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.polish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.portuguese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.punjabi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.quechua.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romani.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romanian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.russian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.rwanda.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.samoan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sanskrit.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.serbian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.shona.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sindhi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sinhala.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovak.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovene.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.somali.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.spanish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swahili.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swedish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tachelhit.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tagalog.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tajiki.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tamil.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tatar.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.telugu.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.thai.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tibetic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tigrigna.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tokPisin.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkmen.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ukrainian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.urdu.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uyghur.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uzbek.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.vietnamese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.warlpiri.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.welsh.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.wolof.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.xhosa.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yakut.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yiddish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yoruba.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yucatec.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zapotec.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zulu.word) hasOneTranslation = true;
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
    if (!hasOneTranslation && formData.afrikaans.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.albanian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.amharic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.arabic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aramaniac.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.armenian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.assamese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.aymara.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.azerbaijani.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.balochi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bamanankan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bashkort.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.basque.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.belarusan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bengali.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bhojpuri.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bislama.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bosnian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.brahui.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.bulgarian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.burmese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cantonese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.catalan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cebuano.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.chechen.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.cherokee.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.croatian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.czech.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dakota.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.danish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dari.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dholuo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.dutch.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.english.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.esperanto.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.estonian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ewe.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.finnish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.french.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.georgian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.german.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gikuyu.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.greek.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.guarani.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.gujarati.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.haitianCreole.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hausa.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hawaiianCreole.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hebrew.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hiligaynon.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hindi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.hungarian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.icelandic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.igbo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ilocano.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.indonesian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.inuit.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.irishGaelic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.italian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kiche.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kabyle.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kannada.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kashmiri.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kazakh.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kmer.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.khoekhoe.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.korean.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kurdish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.kyrgyz.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lao.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latin.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.latvian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lingala.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.lithuanian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.macedonian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.maithili.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malagasy.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malay.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.malayalam.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mandarin.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.marathi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mende.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.mongolian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nahuatl.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.navajo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.nepali.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.norwegian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ojibwa.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oriya.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.oromo.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.pashto.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.persian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.polish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.portuguese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.punjabi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.quechua.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romani.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.romanian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.russian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.rwanda.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.samoan.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sanskrit.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.serbian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.shona.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sindhi.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.sinhala.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovak.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.slovene.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.somali.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.spanish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swahili.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.swedish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tachelhit.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tagalog.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tajiki.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tamil.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tatar.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.telugu.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.thai.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tibetic.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tigrigna.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.tokPisin.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.turkmen.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.ukrainian.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.urdu.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uyghur.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.uzbek.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.vietnamese.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.warlpiri.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.welsh.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.wolof.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.xhosa.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yakut.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yiddish.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yoruba.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.yucatec.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zapotec.word) hasOneTranslation = true;
    if (!hasOneTranslation && formData.zulu.word) hasOneTranslation = true;
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

  setLanguageSelected({LocalState},selectLanguage){
    return LocalState.set({
      languageSelected: selectLanguage,
    });
  },

  setLanguageSelectedView({LocalState},params){
    return LocalState.set({
      languageSelected: params.selectLanguage,
      contributor: params.contributor
    });
  },

  showModal({LocalState},modal){
    return LocalState.set({
      modal: modal
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
      "image": null,
      "languageSelected": "afrikaans"
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
