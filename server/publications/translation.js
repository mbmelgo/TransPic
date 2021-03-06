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
    var s = {};
    s[l] = 1;
    selector["sort"] = s;
    selector["limit"] = limit;
    return Translation.find({},selector);
  });

  Meteor.publish('getAllTranslationWithinThisCategory', function (categoryId,limit) {
    return Translation.find({categoryId: {$elemMatch: { $eq: categoryId }}},{limit:limit});
  });

  Meteor.publish('getAllTransWithinThisCategory', function (categoryId) {
    return Translation.find({categoryId: {$elemMatch: { $eq: categoryId }}});
  });

  Meteor.publish('getSpecificTranslation', function (translationId) {
    return Translation.find({_id:translationId});
  });
}
