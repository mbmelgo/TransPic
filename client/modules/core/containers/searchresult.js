import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Searchresult from '../components/searchresult.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  var searchItem = "";
  var searchLanguage = "english";
  var wordSelected = LocalState.get('wordSelected');
  LocalState.get("searchLanguage") ? searchLanguage = LocalState.get('searchLanguage') : searchLanguage = "english";
  LocalState.get("searchItem") ? searchItem = LocalState.get('searchItem') : searchItem = "";
  if (Meteor.subscribe("searchCategory", searchItem,searchLanguage).ready() &&
      Meteor.subscribe("searchTranslation", searchItem,searchLanguage).ready()) {
      var results;
      var query = {};
      query[searchLanguage] = searchItem;
      wordSelected ?
        results = Collections.Translation.find(query).fetch() :
        results = Collections.Category.find(query).fetch()
      onData(null, {results,LocalState});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Searchresult);
