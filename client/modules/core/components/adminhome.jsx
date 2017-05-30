import React from 'react';
import Category from '../containers/category.js';
import Translation from '../containers/translation.js';
import Modal from '../containers/modal.js';

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
    const {selectLanguage,searchItem} = this.refs;
    var tmp = true;
    if (!wordSelected) {
      tmp = false;
    }
    const parameters = {
      searchLanguage: selectLanguage.value,
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

  getAll(){
    const {getAll} = this.props;
    getAll();
  }

  setLimit(){
    const {setLimit,limit} = this.props;
    setLimit(limit + 8);
  }

  changeLanguageSelected(){
    const {changeLanguageSelected} = this.props;
    const {selectLanguage} = this.refs;
    changeLanguageSelected(selectLanguage.value);
  }

  redirect(){
    window.open('http://sclera.be/nl/vzw/home', '_blank');
  }

  render() {
    const {results, wordSelected,searchItem,searchLanguage,translationLanguages, modal, showModal} = this.props;
    return (
      <div id="outer">
        <nav className="navbar" id="navbar">
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                TR<span className="glyphicon glyphicon-picture" aria-hidden="true" id="pic"></span>NSPIC
              </a>
              <button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn' onClick={this.signout.bind(this)}>LOGOUT</button>
              </div>
          </div>
        </nav>
        <div className="col-lg-12 col-md-12" id="innerSearch">
          <div className="col-lg-4" id="topbar">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." ref="searchItem"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.searchItem.bind(this)}>
                  <span className="glyphicon glyphicon-search" aria-hidden="true">Search</span>
                </button>
              </span>
            </div>
          </div>
          <form className="form-group col-lg-2" id="searchOpt" ref="chckboxform">
           <fieldset className="row form-group">
             <div className="form-check">
              <label className="radio-inline form-check-label" id='labelCategory'>
                <input type="radio" className="form-check-input" name="searchOptions" id="categoryOption" value="category"  onChange={this.selectCategoryOption.bind(this)}  checked={wordSelected ? false : true}/>
                Category
              </label>
             <label className="radio-inline form-check-label" id='labelCategory'>
               <input type="radio" className="form-check-input" name="searchOptions" id="wordOption" value="word" onChange={this.selectWordOption.bind(this)}  checked={wordSelected ? true : false}/>
               Word
             </label>
           </div>
           </fieldset>
         </form>
        <div className="col-lg-2" id="topbar">
          <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguageSelected.bind(this)}>
           {translationLanguages.map(function(language){
             return <option value={language._id} key={language._id}>{language.name}</option>
           })}
          </select>
        </div>
        { wordSelected ?
          <button onClick={this.goToAddTranslation.bind(this)} type="button" className="btn btn-primary navbar-btn  col-lg-2" id='optbtn' >Add New Translation</button>
        : <button onClick={this.goToAddCategory.bind(this)} type="button" className="btn btn-primary navbar-btn  col-lg-2" id='optbtn' >Add New Category</button>
        }
        { wordSelected ?
          <button onClick={this.getAll.bind(this)} type="button" className="btn btn-primary navbar-btn col-lg-2" id='optbtn' >Show All Translation</button>
        : <button onClick={this.getAll.bind(this)} type="button" className="btn btn-primary navbar-btn col-lg-2" id='optbtn' >Show All Category</button>
        }
        <div className="col-md-12 col-lg-12"></div>
        {
          wordSelected ?
            (results.length > 0 ?
              results.map(translation => (<Translation key={translation._id} translationDetails={translation} selectedLanguage={searchLanguage} showModal={showModal}/>))
              : searchItem ? <div className="col-md-12 col-lg-12" id="noSearch">No Word Found</div> : <div></div>) :
            (results.length > 0 ?
              results.map(category => (<Category key={category._id} categoryDetails={category} selectedLanguage={searchLanguage} showModal={showModal}/>))
              : searchItem ? <div className="col-md-12 col-lg-12" id="noSearch">No Category Found</div> : <div></div>)
        }
        { results.length == 0 &&  !searchItem ? <div className="col-md-12 col-lg-12" id="noSearch">Search Category/Word</div> : "" }
        { results.length != 0 ?
          <button type="button" className='btn btn-primary container-fluid col-md-12' id="showMoreResults" onClick={this.setLimit.bind(this)}>Show more</button>
          : ""
        }
        <div className="col-md-12 col-lg-12" id="labelUpdate">*Note: Some of the images were retrieved from <a target="_blank" onClick={this.redirect.bind(this)}>sclera</a> website</div>
        </div>
        {modal ? <Modal modal={modal}/>: ""}
      </div>
    );
  }
}

export default Adminhome;
