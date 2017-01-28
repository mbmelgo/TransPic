import {User} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup( () => {
  Accounts.config({
    forbidClientAccountCreation: true,
  });
});

export default function () {
  Meteor.methods({
    'addUser'(formData) {
        check(formData, Object);
        
        const profile = formData.profile;

        var userDetails = {
          "username" : formData.username,
          "password" : formData.password,
          "profile" : profile
        }

        let Checker = Users.namedContext('myContext');
        let schemaMatched = Checker.validate(userDetails);

        if(!schemaMatched){
          let signUpErrors = Checker.invalidKeys();
          throw new Meteor.Error(Checker.keyErrorMessage(signUpErrors[0].name));
        }

        return Accounts.createUser(userDetails);

    },

  });
}
