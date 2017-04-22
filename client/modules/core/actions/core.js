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
      if(err) return LocalState.set('ACCOUNT_ERROR',err.message);
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

  changeImage({LocalState,Meteor}, imageFile,categoryId){
    var reader = new FileReader();
    reader.onload = function (e) {
      const image = e.target.result;
      Meteor.call('updateImageCategory',categoryId, image, function (err) {
        if (err) {
          return LocalState.set({
            'UPDATE_CATEGORY_ERROR': err.message,
            'UPDATE_CATEGORY_SUCCESS': null
          });
        }
        else {
          return LocalState.set({
            'UPDATE_CATEGORY_SUCCESS': "Category Image Updated",
            'imageUpdate': image
          });
        }
      })
    }
    reader.readAsDataURL(imageFile);
  },

  changeImageTrans({LocalState,Meteor}, imageFile,translationId){
    var reader = new FileReader();
    reader.onload = function (e) {
      const image = e.target.result;
      Meteor.call('updateImageTranslation',translationId, image, function (err) {
        if (err) {
          return LocalState.set({
            'UPDATE_TRANSLATION_ERROR': err.message,
            'UPDATE_TRANSLATION_SUCCESS': null
          });
        }
        else {
          return LocalState.set({
            'UPDATE_TRANSLATION_SUCCESS': "Translation Image Updated",
            'UPDATE_TRANSLATION_ERROR': null,
            'imageUpdate': image
          });
        }
      })
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

  addTranslation({Meteor, LocalState, FlowRouter, Collections}, formData,translationLanguages){
    var hasOneTranslation = false;

    if(!formData.image ) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 image of the word is required');
    if (formData.categoryId.length <= 0) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 category of the word is required');
    translationLanguages.map(function(language){
      if (!hasOneTranslation && formData[language._id].word) hasOneTranslation = true;
      return hasOneTranslation;
    });
    if (!hasOneTranslation) return LocalState.set('ADD_TRANSLATION_ERROR','Atleast 1 translation of the word is required');
    const image = formData.image;
    formData.image = [image];
    Meteor.call("addTranslation",formData, function (err){
      if(err) return LocalState.set('ADD_TRANSLATION_ERROR', err.message);
      else { FlowRouter.go('/admin_home');}
    });
  },

  addCategory({Meteor, LocalState, FlowRouter, Collections}, formData,translationLanguages){
    var hasOneTranslation = false;
    if(!formData.image) return LocalState.set('ADD_CATEGORY_ERROR','Atleast 1 image of the new category is required');
    translationLanguages.map(function(language){
      if (!hasOneTranslation && formData[language._id].word) hasOneTranslation = true;
      return hasOneTranslation;
    });
    if (!hasOneTranslation) return LocalState.set('ADD_CATEGORY_ERROR','Atleast 1 translation of the word is required');
    const image = formData.image;
    formData.image = [image];
    Meteor.call("addCategory",formData, function (err){
      if(err) return LocalState.set('ADD_CATEGORY_ERROR', err.message);
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

  updateCategory({Meteor, LocalState, Collections}, formData, category,translationLanguages){
    var del = false;
    if(!formData.word && category[formData.language].word) {
      var canBeDeleted = false;
      translationLanguages.map(function(language){
        if (category[language._id].word && language._id != formData.language) {
          canBeDeleted = true;
        }
      });
      if (!canBeDeleted) {
        return LocalState.set('UPDATE_CATEGORY_ERROR',"This is the last translation of the word! Can't remove translation!");
      } else {
        del = true;
      }
    }

    if(!formData.word && !category[formData.language].word) {
        return LocalState.set('UPDATE_CATEGORY_ERROR',"Input the translation!");
    }

    if(!formData.contributor) return LocalState.set('UPDATE_CATEGORY_ERROR','Contributor is required');
    if(!formData.language) return LocalState.set('UPDATE_CATEGORY_ERROR','Language is required');
    if(!category._id) return LocalState.set('UPDATE_CATEGORY_ERROR','ID is required');
    if (del) {
      formData.contributor = [];
    }
    Meteor.call("updateCategory",category._id,formData, function (err){
      if(err) return LocalState.set({
        'UPDATE_CATEGORY_SUCCESS': null,
        'UPDATE_CATEGORY_ERROR': err.message,
        });
      else { return LocalState.set({
        'UPDATE_CATEGORY_SUCCESS': "Category Updated",
        'UPDATE_CATEGORY_ERROR': null,
        "contributor": formData.contributor[0]
        });
      }
    });

  },

  updateTranslation({Meteor, LocalState, Collections}, formData, translation,translationLanguages){
    var del = false;
    if(!formData.word && translation[formData.language].word) {
      var canBeDeleted = false;
      translationLanguages.map(function(language){
        if (translation[language._id].word && language._id != formData.language) {
          canBeDeleted = true;
        }
      });
      if (!canBeDeleted) {
        return LocalState.set('UPDATE_TRANSLATION_ERROR',"This is the last translation of the word! Can't remove translation!");
      } else {
        del = true;
      }
    }

    if(!formData.word && !translation[formData.language].word) {
        return LocalState.set('UPDATE_TRANSLATION_ERROR',"Input the translation!");
    }

    if(!formData.contributor) return LocalState.set('UPDATE_TRANSLATION_ERROR','Contributor is required');
    if(!formData.language) return LocalState.set('UPDATE_TRANSLATION_ERROR','Language is required');
    if(!translation._id) return LocalState.set('UPDATE_TRANSLATION_ERROR','ID is required');
    if (del) {
      formData.contributor = [];
    }
    Meteor.call("updateTranslation",translation._id,formData, function (err){
      if(err) return LocalState.set({
        'UPDATE_TRANSLATION_SUCCESS': null,
        'UPDATE_TRANSLATION_ERROR': err.message,
        });
      else { return LocalState.set({
        'UPDATE_TRANSLATION_SUCCESS': "Translation Updated",
        'UPDATE_TRANSLATION_ERROR': null,
        "contributor": formData.contributor[0]
        });
      }
    });

  },

  updateCategoryTranslation({Meteor, LocalState, Collections}, categoryIds, translationId){
    if (categoryIds.length <= 0) return LocalState.set('UPDATE_TRANSLATION_ERROR','Atleast 1 category of the word is required');
    if (!translationId) return LocalState.set('UPDATE_TRANSLATION_ERROR','Translation ID is required');

    Meteor.call("updateCategoryTranslation",translationId, categoryIds, function (err){
      if(err) return LocalState.set({
        'UPDATE_TRANSLATION_SUCCESS': null,
        'UPDATE_TRANSLATION_ERROR': err.message,
        });
      else { return LocalState.set({
        'UPDATE_TRANSLATION_SUCCESS': "Translation Categories Updated",
        'UPDATE_TRANSLATION_ERROR': null,
        });
      }
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
      wordSelected: parameters.wordSelected,
      getAll: false,
      limit: 8
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
      contributor: params.contributor,
      'UPDATE_CATEGORY_SUCCESS': null,
      'UPDATE_CATEGORY_ERROR': null,
      'UPDATE_TRANSLATION_SUCCESS': null,
      'UPDATE_TRANSLATION_ERROR': null,
    });
  },

  showModal({LocalState},modal){
    return LocalState.set({
      modal: modal
    });
  },

  getAll({LocalState},searchLanguage){
    return LocalState.set({
      getAll: true,
      limit: 8
    });
  },

  setLimit({LocalState},limit){
    return LocalState.set({
      limit: limit
    });
  },

  changeLanguageSelected({LocalState},languageSelected){
    return LocalState.set({
      searchLanguage: languageSelected
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

  clearUpdateCategoryErrors({LocalState}){
    return LocalState.set({
      "UPDATE_CATEGORY_ERROR": null,
      "contributor": null,
      "languageSelected": null,
      "imageUpdate": null,
      "UPDATE_CATEGORY_SUCCESS": null
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

  clearUpdateTranslationErrors({LocalState}){
    return LocalState.set({
      "UPDATE_TRANSLATION_ERROR": null,
      "contributor": null,
      "languageSelected": null,
      "imageUpdate": null,
      "UPDATE_TRANSLATION_SUCCESS": null
    });
  },

  clearSearchErrors({LocalState}){
    return LocalState.set({
      searchLanguage: null,
      searchItem: null,
      wordSelected: null,
      getAll: false,
      limit: 8
    });
  },

  clearModal({LocalState}){
    return LocalState.set({
      contributor: null,
      languageSelected: null
    });
  },

  clearAccountErrors({LocalState}){
    return LocalState.set({"ACCOUNT_ERROR": null});
  },
}
