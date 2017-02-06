import React from 'react';

class Adminhome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearSearchErrors} = this.props;
    clearSearchErrors();
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  selectWordOption() {
    const {toggleWordCategorySelection} = this.props;
    toggleWordCategorySelection(true);
  }

  selectCategoryOption() {
    const {toggleWordCategorySelection} = this.props;
    toggleWordCategorySelection(false);
  }

  searchItem(){
    const {wordSelected,setSearch} = this.props;
    const {selectLangauge,searchItem} = this.refs;
    var tmp = true;
    if (!wordSelected) {
      tmp = false;
    }
    const parameters = {
      searchLanguage: selectLangauge.value,
      searchItem: searchItem.value,
      wordSelected: tmp
    }
    setSearch(parameters);
  }

  goToAddTranslation(){
    const {goToAddTranslation} = this.props;
    goToAddTranslation();
  }


  goToAddCategory(){
    const {goToAddCategory} = this.props;
    goToAddCategory();
  }

  render() {
    const {results, wordSelected,searchItem,searchLanguage,translationLanguages} = this.props;
    return (
      <div id="outer">
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="https://s10.postimg.org/b9n3rh4rt/Logo_Makr.png" id="brandLogo"/>
              </a>
              <button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn' onClick={this.signout.bind(this)}>LOGOUT</button>
              </div>
          </div>
        </nav>
        <div id="innerSignup">
          <div className="col-lg-4" id="topbar">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." ref="searchItem"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.searchItem.bind(this)}>
                  <span className="glyphicon glyphicon-search" aria-hidden="true"> Search</span>
                </button>
              </span>
            </div>
          </div>
          <form className="form-group col-lg-2" id="searchOpt" ref="chckboxform">
           <fieldset className="row form-group">
             <div className="form-check">
              <label className="radio-inline form-check-label" id='labelCategory'>
                <input type="radio" className="form-check-input" name="searchOptions" id="categoryOption" value="category"  onClick={this.selectCategoryOption.bind(this)} defaultChecked/>
                Category
              </label>
             <label className="radio-inline form-check-label" id='labelCategory'>
               <input type="radio" className="form-check-input" name="searchOptions" id="wordOption" value="word" onClick={this.selectWordOption.bind(this)}/>
               Word
             </label>
           </div>
           </fieldset>
         </form>
        <div className="col-lg-4" id="topbar">
          <select id='selectLangauge' ref='selectLangauge' className='selectpicker form-control' id='form-control'>
           {translationLanguages.map(function(language){
             return <option value={language._id} key={language._id}>{language.name}</option>
           })}
          </select>
        </div>
        { wordSelected ?
          <button onClick={this.goToAddTranslation.bind(this)} type="button" className="btn btn-primary navbar-btn pull-right col-lg-2" id='optbtn' >Add New Translation</button>
        : <button onClick={this.goToAddCategory.bind(this)} type="button" className="btn btn-primary navbar-btn pull-right col-lg-2" id='optbtn' >Add New Category</button>
        }
        </div>
        <div id="searchBox">
          <div className="panel panel-success" id="searchPopOut">
            <div className="panel-heading">
              <h3 className="panel-title">{searchItem ? "Search Results" : "Search for a word or category"}</h3>
            </div>
              <div className="panel-body">


              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminhome;
