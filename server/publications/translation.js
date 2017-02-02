import {Translation} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('searchTranslation', function (searchItem,searchLanguage) {
    var query = {};
    query[searchLanguage] = searchItem;
    return Translation.find(query);
  });
}
