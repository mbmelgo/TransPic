import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Translation from '../components/translation.jsx';

export const composer = ({context,translationDetails,selectedLanguage}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {translationDetails,selectedLanguage});
};

export const depsMapper = (context, actions) => ({
  clearDeleteTranslationErrors: actions.core.clearDeleteTranslationErrors,
  deleteTranslation: actions.core.deleteTranslation,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Translation);
