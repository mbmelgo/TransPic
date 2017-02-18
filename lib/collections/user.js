import SimpleSchema from 'node-simple-schema';

const Users = new SimpleSchema({
  profile: {
    type: Object,
    label : "Profile",
    optional: true,
  },

  "profile.firstName" : {
    type: String,
    min : 2,
    max: 15,
    label : "Firstname",
  },

  "profile.lastName" : {
    type: String,
    min : 2,
    max: 15,
    label : "Lastname",
  },

  "profile.organization" : {
    type: String,
    min : 2,
    max: 15,
    label : "Organization",
  },

  "profile.occupation" : {
    type: String,
    min : 2,
    max: 15,
    label : "Occupation",
  },

  "profile.email" : {
    type: String,
    regEx: [
      SimpleSchema.RegEx.Email ,
      /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
    ],
    label: "Email"
  },

  username: {
    type: String,
    label:"Username",
    optional: true,
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },

  password: {
    type: String,
    label: "Password",
    min: 6,
    max: 100,
    optional: true,
  },
});

export default Users;
