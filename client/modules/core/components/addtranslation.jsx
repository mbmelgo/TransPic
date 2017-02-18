import React from 'react';

class Addtranslation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearAddTranslationErrors} = this.props;
    clearAddTranslationErrors();
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  goBackHome(){
    const {goBackHome} = this.props;
    goBackHome();
  }

  addTranslation(){
    const {addTranslation,image,allCategory,translationLanguages} = this.props;
    const self = this;
    var categoryId = [];
    allCategory.map(function(category){
      var tmp = document.getElementById(category._id).checked;
      if (tmp) {
        categoryId.push(category._id);
      }
    })
    const formData = {
      image: image,
      categoryId:categoryId,
    }
    translationLanguages.map(function(language){
      return formData[language._id] = {
        word:self.refs[language._id].value,
        contributor: self.refs[language._id].value ? [Meteor.userId()] : []
      }
    });
    addTranslation(formData);

  }

  addImage(e){
    e.preventDefault();
    const {addImage} = this.props;
    const {image} = this.refs;
    addImage(image.files[0]);
  }

  removeImage(e){
    e.preventDefault();
    const {removeImage} = this.props;
    const {image} = this.refs;
    image.value = '';
    removeImage();
  }

  changeLanguage(e){
    e.preventDefault();
    const {setLangaugeSelected} = this.props;
    const {selectLangauge} = this.refs;
    setLangaugeSelected(selectLangauge.value);
  }

  render() {
    const {allCategory,error,translationLanguages,image, selectLangauge} = this.props;
    return (
      <div id="outer">
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="/images/logo.png" id="brandLogo"/>
              </a>
              <button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn' onClick={this.signout.bind(this)}>LOGOUT</button>
              </div>
          </div>
        </nav>
        <div id="addBox">
          { allCategory.length <= 0 ?
            <div className="panel panel-danger" id="addPopOut">
              <div className="panel-heading">
                <h3 className="panel-title" id="errorLabelLeft">No Category Available!</h3>
              </div>
              <div className="panel-body" id="errorPanelBody">
                <h1 id="errorLabelCenter"> Add a category first!</h1>
                <button type="button" className="btn btn-danger navbar-btn pull-right" id='btn' onClick={this.goBackHome.bind(this)}>Cancel</button>
              </div>
            </div>
          :
            <div className="panel panel-success" id="addPopOut">
              <div className="panel-heading">
                <h3 className="panel-title">Add New Translation</h3>
              </div>
              <div className="panel-body">
                {error ? Bert.alert( error, 'danger', 'fixed-top', 'fa-frown-o' ):""}
                <div className='form-group col-md-4' id="verticalLine">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      {image ? <a className='pull-right' onClick={this.removeImage.bind(this)}><span className="glyphicon glyphicon-remove-sign" aria-hidden="true" id='closebtn'></span></a>
                      : <a className='pull-right'></a>}
                      <div className="thumbnail" id="imageThmbnail">
                        {image ?
                        <img className="img-rounded" src={image} alt="..." id='imageT'/>
                        :<img className="img-rounded" src="/images/no_image.jpg" alt="..." id='imageT'/>
                        }
                      </div>
                      <label type="button" className="btn btn-info btn-file" id='addImageT' >Add Image<input type="file" ref='image' onChange={this.addImage.bind(this)}/></label>
                    </div>
                  </div>
                </div>
                <div className='form-group col-md-4' id="verticalLine">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <h5>Please check atleast 1 category below:</h5>
                      <div className="col-md-12" id="topbar">
                        <select id='selectLangauge' ref='selectLangauge' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)}>
                         {translationLanguages.map(function(language){
                           return <option value={language._id} key={language._id}>{language.name}</option>
                         })}
                        </select>
                      </div>
                      <form className="form-group col-lg-12">
                       <fieldset className="row form-group" id="addTranslationFormGroup2">
                         <div className="form-check">
                            {allCategory.map(function(category){
                              return (
                                <label className="form-check-label" id='labelCategoryCheckBoxes' key={category._id}>
                                  <input type="checkbox" className="form-check-input" name="categoryCheckBoxes" id={category._id} value={category._id}  />
                                  {category[selectLangauge].word ? "  "+category[selectLangauge].word: "No Translation Avaliable"}
                                </label>
                              )})}
                         </div>
                       </fieldset>
                     </form>
                    </div>
                  </div>
                </div>
                <div className='form-group col-md-4' id="third">
                  <div className="row" >
                    <div className="col-sm-12 col-md-12" >
                      <h5>Please enter atleast 1 translation below:</h5>
                      <form className='form-group col-md-12' >
                        <fieldset id="addTranslationFormGroup">
                            {translationLanguages.map(function(language){
                              return (
                                <div className="form-group" key={language._id}>
                                  <label className='col-sm-3 control-label' htmlFor='english' id='labelAddTranslation' >{language.name}:</label>
                                  <div className='col-sm-8' id="inputAddTranslation">
                                    <input ref={language._id} name={language._id} type='text' placeholder='' className='form-control' id='form-control'/>
                                  </div><br/><br/>
                                </div>
                              )
                            })}
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.addTranslation.bind(this)}>Save</button>
                <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.goBackHome.bind(this)}>Cancel</button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Addtranslation;
