import {Category} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('searchCategory', function (searchItem,searchLanguage) {
    var query = {};
    var l = searchLanguage + ".word";
    query[l] = {$regex:searchItem,$options:"i"}
    return Category.find(query);
  });

  Meteor.publish('getAllCategory', function () {
    return Category.find({},{ english: 1 });
  });

  Meteor.publish('getCategories', function (categoryIds) {
    return Category.find({ _id: { $all: categoryIds } });
  });

  Meteor.publish('getSpecificCategory', function (categoryId) {
    return Category.find({_id:categoryId});
  });
}
