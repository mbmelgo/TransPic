import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {Bert} from 'meteor/themeteorchef:bert';
import Category from '../components/category.jsx';

export const composer = ({context,categoryDetails,selectedLanguage}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe("getAllTransWithinThisCategory",categoryDetails._id).ready()) {
    const translations = Collections.Translation.find({categoryId: {$elemMatch: { $eq: categoryDetails._id }}}).fetch();
    onData(null, {categoryDetails,selectedLanguage,translations});
  }
};

export const depsMapper = (context, actions) => ({
  clearDeleteCategoryErrors: actions.core.clearDeleteCategoryErrors,
  updateResults: actions.core.updateResults,
  deleteCategory: actions.core.deleteCategory,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Category);
