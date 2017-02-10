import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Category from '../components/category.jsx';

export const composer = ({context,categoryDetails,selectedLanguage}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {categoryDetails,selectedLanguage});
};

export const depsMapper = (context, actions) => ({
  clearDeleteCategoryErrors: actions.core.clearDeleteCategoryErrors,
  deleteCategory: actions.core.deleteCategory,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Category);
