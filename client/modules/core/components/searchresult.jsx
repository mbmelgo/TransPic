import React from 'react';

class Searchresult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const {searchItem,searchLanguage,wordSelected, LocalState} = this.props;
    LocalState.set({
      wordSelected,
      searchItem,
      searchLanguage
    });
  }

  render() {
    const {LocalState,results} = this.props;
    console.log(results);
    return (
      <div id="searchBox">
        <div className="panel panel-success" id="searchPopOut">
          <div className="panel-heading">
            <h3 className="panel-title">{LocalState.get('searchItem') ? "Search Results" : "Search for a word or category"}</h3>
          </div>
            <div className="panel-body">


            </div>
        </div>
      </div>
    );
  }
}

export default Searchresult;
