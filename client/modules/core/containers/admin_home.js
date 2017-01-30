import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AdminHome from '../components/admin_home.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  if (Meteor.subscribe("getUser", Meteor.userId()).ready()) {
    const user = Meteor.users.find({}).fetch();
    onData(null, {user});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AdminHome);
