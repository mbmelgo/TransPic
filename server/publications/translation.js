import {Translation} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('searchTranslation', function (searchItem,searchLanguage) {
    var query = {};
    var l = searchLanguage + ".word";
    query[l] = {$regex:searchItem,$options:"i"}
    return Translation.find(query);
  });

  Meteor.publish('getAllTranslation', function (selectedLanguage) {
    const selector = {};
    selector[selectedLanguage] = 1;
    return Translation.find({},selector);
  });

  Meteor.publish('getAllTranslationWithinThisCategory', function (categoryId) {
    return Translation.find({},{$elemMatch: { categoryId: categoryId }});
  });

  Meteor.publish('getSpecificTranslation', function (translationId) {
    return Translation.find({_id:translationId});
  });
}
