import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Adminhome from '../components/adminhome.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState} = context();
  if (Meteor.subscribe("getUser", Meteor.userId()).ready()) {
    const user = Meteor.users.find({}).fetch();
    onData(null, {user,LocalState});
  }
};

export const depsMapper = (context, actions) => ({
  signoutUser: actions.core.signoutUser,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Adminhome);
