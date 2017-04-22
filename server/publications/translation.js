import {Translation} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('searchTranslation', function (searchItem,searchLanguage,limit) {
    var query = {};
    var l = searchLanguage + ".word";
    query[l] = {$regex:searchItem,$options:"i"}
    return Translation.find(query,{limit:limit});
  });

  Meteor.publish('getAllTranslation', function (searchLanguage,limit) {
    const selector = {};
    var l = searchLanguage + ".word";
    selector[l] = 1;
    selector["limit"] = limit;
    return Translation.find({},selector);
  });

  Meteor.publish('getAllTranslationWithinThisCategory', function (categoryId) {
    return Translation.find({},{$elemMatch: { categoryId: categoryId }});
  });

  Meteor.publish('getSpecificTranslation', function (translationId) {
    return Translation.find({_id:translationId});
  });
}
