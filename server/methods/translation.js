import Translation, {TranslationSchema} from '/lib/collections/translation.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'addTranslation'(formData) {

      check(formData, {
        image : [String],
        categoryId : [String],
        afrikaans: Object,
        albanian: Object,
        amharic: Object,
        arabic: Object,
        aramaniac: Object,
        armenian: Object,
        assamese: Object,
        aymara: Object,
        azerbaijani: Object,
        balochi: Object,
        bamanankan: Object,
        bashkort: Object,
        basque: Object,
        belarusan: Object,
        bengali: Object,
        bhojpuri: Object,
        bislama: Object,
        bosnian: Object,
        brahui: Object,
        bulgarian: Object,
        burmese: Object,
        cantonese: Object,
        catalan: Object,
        cebuano: Object,
        chechen: Object,
        cherokee: Object,
        croatian: Object,
        czech: Object,
        dakota: Object,
        danish: Object,
        dari: Object,
        dholuo: Object,
        dutch: Object,
        english: Object,
        esperanto: Object,
        estonian: Object,
        ewe: Object,
        finnish: Object,
        french: Object,
        georgian: Object,
        german: Object,
        gikuyu: Object,
        greek: Object,
        guarani: Object,
        gujarati: Object,
        haitianCreole: Object,
        hausa: Object,
        hawaiian: Object,
        hawaiianCreole: Object,
        hebrew: Object,
        hiligaynon: Object,
        hindi: Object,
        hungarian: Object,
        icelandic: Object,
        igbo: Object,
        ilocano: Object,
        indonesian: Object,
        inuit: Object,
        irishGaelic: Object,
        italian: Object,
        kiche: Object,
        kabyle: Object,
        kannada: Object,
        kashmiri: Object,
        kazakh: Object,
        kmer: Object,
        khoekhoe: Object,
        korean: Object,
        kurdish: Object,
        kyrgyz: Object,
        lao: Object,
        latin: Object,
        latvian: Object,
        lingala: Object,
        lithuanian: Object,
        macedonian: Object,
        maithili: Object,
        malagasy: Object,
        malay: Object,
        malayalam: Object,
        mandarin: Object,
        marathi: Object,
        mende: Object,
        mongolian: Object,
        nahuatl: Object,
        navajo: Object,
        nepali: Object,
        norwegian: Object,
        ojibwa: Object,
        oriya: Object,
        oromo: Object,
        pashto: Object,
        persian: Object,
        polish: Object,
        portuguese: Object,
        punjabi: Object,
        quechua: Object,
        romani: Object,
        romanian: Object,
        russian: Object,
        rwanda: Object,
        samoan: Object,
        sanskrit: Object,
        serbian: Object,
        shona: Object,
        sindhi: Object,
        sinhala: Object,
        slovak: Object,
        slovene: Object,
        somali: Object,
        spanish: Object,
        swahili: Object,
        swedish: Object,
        tachelhit: Object,
        tagalog: Object,
        tajiki: Object,
        tamil: Object,
        tatar: Object,
        telugu: Object,
        thai: Object,
        tibetic: Object,
        tigrigna: Object,
        tokPisin: Object,
        turkish: Object,
        turkmen: Object,
        ukrainian: Object,
        urdu: Object,
        uyghur: Object,
        uzbek: Object,
        vietnamese: Object,
        warlpiri: Object,
        welsh: Object,
        wolof: Object,
        xhosa: Object,
        yakut: Object,
        yiddish: Object,
        yoruba: Object,
        yucatec: Object,
        zapotec: Object,
        zulu: Object
      });

      let Checker = TranslationSchema.namedContext('myContext');
      let schemaMatched = Checker.validate(formData);

      if(schemaMatched){
        return Translation.insert(formData);
      }

      let messageError = Checker.invalidKeys();

      _.map(messageError, function(o){
        throw new Meteor.Error(Checker.keyErrorMessage(o.name))
      })
    },

    'deleteTranslation'(translationId) {
      check(translationId, String);
      Translation.remove({_id:translationId});
    },

    'updateTranslation'(translationId, formData) {
      check(translationId, String);
      check(formData , {
        word : String,
        contributor : [String],
        language: String
      });

      const selector = {
        _id : translationId
      };

      const options = {
        $set : {
          [""+formData.language] : {
            word : formData.word,
            contributor : formData.contributor
          }
        }
      };
      Translation.update(selector, options);
    },

    'updateImageTranslation'(translationId, image) {
      check(translationId, String);
      check(image, String);

      const selector = {
        _id : translationId
      };

      const options = {
        $set : {
          image: [image]
        }
      };
      Translation.update(selector, options);
    },

    'updateCategoryTranslation'(translationId, categoryIds) {
      check(translationId, String);
      check(categoryIds, [String]);

      const selector = {
        _id : translationId
      };

      const options = {
        $set : {
          categoryId: categoryIds
        }
      };
      Translation.update(selector, options);
    },
  });
}
