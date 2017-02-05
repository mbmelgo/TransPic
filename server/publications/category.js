import {Category} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('searchCategory', function (searchItem,searchLanguage) {
    var query = {};
    query[searchLanguage] = searchItem;
    return Category.find(query);
  });

  Meteor.publish('getAllCategory', function () {
    return Category.find({});
  });
}
