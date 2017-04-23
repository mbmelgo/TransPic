import {Category} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('searchCategory', function (searchItem,searchLanguage,limit) {
    var query = {};
    var l = searchLanguage + ".word";
    query[l] = {$regex:searchItem,$options:"i"}
    return Category.find(query,{limit:limit});
  });

  Meteor.publish('getAllCategory', function (searchLanguage,limit) {
    const selector = {};
    var l = searchLanguage + ".word";
    var s = {};
    s[l] = 1;
    selector["sort"] = s;
    selector["limit"] = limit;
    return Category.find({},selector);
  });

  Meteor.publish('getAllCategories', function (searchLanguage) {
    const selector = {};
    var l = searchLanguage + ".word";
    var s = {};
    s[l] = 1;
    selector["sort"] = s;
    return Category.find({},selector);
  });

  Meteor.publish('getCategories', function (categoryIds) {
    return Category.find({ _id: { $in: categoryIds } });
  });

  Meteor.publish('getSpecificCategory', function (categoryId) {
    return Category.find({_id:categoryId});
  });
}
