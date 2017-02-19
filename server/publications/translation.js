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

  Meteor.publish('getAllTranslation', function () {
    return Translation.find({},{ english: 1 });
  });

  Meteor.publish('getAllTranslationWithinThisCategory', function (categoryId) {
    return Translation.find({},{$elemMatch: { categoryId: categoryId }});
  });
}
