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
