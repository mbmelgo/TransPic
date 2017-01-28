import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Signup from '../components/signup.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('ACCOUNT_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  signupUser: actions.core.signupUser,
  clearAccountErrors: actions.core.clearAccountErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signup);
