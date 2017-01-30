import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('getUser', function (userId) {
    return Meteor.users.find(userId);
  });
}
