import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Signin from '../components/signin.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('ACCOUNT_ERROR');
  onData(null, {error,LocalState});
};

export const depsMapper = (context, actions) => ({
  signinUser: actions.core.signinUser,
  clearAccountErrors: actions.core.clearAccountErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Signin);
