import {User} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user', function (userId) {
    return User.find(userId);
  });
}
