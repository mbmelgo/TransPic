import React from 'react';

class Updatetranslation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearUpdateTranslationErrors} = this.props;
    clearUpdateTranslationErrors();
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  goBackHome(){
    const {goBackHome} = this.props;
    goBackHome();
  }

  changeImage(e){
    e.preventDefault();
    const {changeImageTrans,translation} = this.props;
    const {image} = this.refs;
    changeImageTrans(image.files[0],translation._id);
  }

  changeLanguage(e){
    e.preventDefault();
    const {setLanguageSelectedView,translation} = this.props;
    const {selectLanguage} = this.refs;
    const contributor = translation[selectLanguage.value].contributor[0];
    const params = {
      contributor: contributor,
      selectLanguage: selectLanguage.value
    }
    setLanguageSelectedView(params);
  }

  updateTranslation(e){
    e.preventDefault();
    const {updateTranslation,translation,cur,selectedLanguage,translationLanguages} = this.props;
    const {selectLanguage} = this.refs;
    const word = this.refs[selectedLanguage].value;
    const formData = {
      contributor: [cur],
      language: selectedLanguage,
      word: word,
    };
    updateTranslation(formData,translation,translationLanguages);
  }

  updateCategoryTranslation(e){
    e.preventDefault();
    const {updateCategoryTranslation,translation,allCategory} = this.props;
    var categoryIds = [];
    allCategory.map(function(category){
      var tmp = document.getElementById(category._id).checked;
      if (tmp) {
        categoryIds.push(category._id);
      }
    })
    updateCategoryTranslation(categoryIds,translation._id)
  }

  render(){
    const {loading} = this.props;
    if (loading) {
      return this.renderLoading()
    } else {
      return this.renderMain();
    }
  }

  renderLoading(){
    return (
      <div id="loading">
        <div className="sk-wave sk-fade-in sk-spinner">
          <div className="sk-rect1" ></div>
          <div className="sk-rect2" ></div>
          <div className="sk-rect3" ></div>
          <div className="sk-rect4" ></div>
          <div className="sk-rect5" ></div>
          <div className="sk-rect6" ></div>
          <div className="sk-rect7" ></div>
          <div className="sk-rect8" ></div>
          <div className="sk-rect9" ></div>
          <div className="sk-rect10" ></div>
        </div>
      </div>
    );
  }

  renderMain() {
    const {translation,translationLanguages,selectedLanguage,contributor, cur,image,error,success,allCategory} = this.props;
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
        <div id="addBox">
          <div className="panel panel-success" id="updatePopOut">
            <div className="panel-heading" id="updateHeading">
              <a className="col-md-5" onClick={this.goBackHome.bind(this)}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true" id="back"/></a>
              <h3 className="col-md-7 panel-title" id="labelUpdate">Update Translation</h3>
            </div>

            <div className="panel-body">
              {error ? Bert.alert( error, 'danger', 'fixed-top', 'fa-frown-o' ):success ? Bert.alert( success, 'success', 'fixed-top', 'fa-smile-o' ):""}
              <div className='col-md-12' id="selector">
                <h4 id="labelView">Select Language of Translation</h4>
                <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)} value={selectedLanguage}>
                 {translationLanguages.map(function(language){
                   return <option value={language._id} key={language._id}>{language.name}</option>
                 })}
                </select>
              </div>
              <div className='form-group col-md-4' id="verticalLineUpdate">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="thumbnail" id="imageThmbnailUpdate">
                      {
                        image ? <img className="img-rounded" src={image} alt="..." id='imageUpdate'/>:
                        <img className="img-rounded" src={translation.image} alt="..." id='imageUpdate'/>
                      }
                    </div>
                    <label type="button" className="btn btn-info btn-file" id='addImageUp' >Change<input type="file" ref='image' onChange={this.changeImage.bind(this)}/></label>
                  </div>
                </div>
              </div>
              <div className="col-md-4" id="verticalLineUpdate">
                  <h4 id="labelView">Select Category/s of Translation</h4>
                  <form className="form-group col-lg-12">
                   <fieldset className="row form-group" id="addTranslationFormGroup2">
                     <div className="form-check">
                        {allCategory.map(function(category){
                          return (
                            <label className="col-md-12 form-check-label" id='labelCategoryCheckBoxes' key={category._id}>
                              {
                                translation.categoryId.includes(category._id) ?
                                <input type="checkbox" className="form-check-input" name="categoryCheckBoxes" id={category._id} value={category._id} defaultChecked />:
                                <input type="checkbox" className="form-check-input" name="categoryCheckBoxes" id={category._id} value={category._id} />
                              }
                              {category[selectedLanguage].word ? "  "+category[selectedLanguage].word: "Language not yet supported!"}
                            </label>
                          )})}
                     </div>
                   </fieldset>
                 </form>
                 <button type="button" className="btn btn-primary" id='addImageUp' onClick={this.updateCategoryTranslation.bind(this)}>Save</button>
              </div>
              <div className='form-group col-md-4' id="third">
                <h3 id="labelView">{translation[selectedLanguage].word ? "Translation: "+translation[selectedLanguage].word : "Language not yet supported!"}</h3>
                <h4 id="labelContributed">{
                  contributor.length > 0 ?
                    (contributor[0] && contributor[0]._id == cur) ? "Contributed by: You "
                    :"Contributed by: "+ contributor[0].profile.firstName +" "+ contributor[0].profile.lastName
                  : "Be the one to Translate!"
                }</h4>
                {
                  contributor[0] ?
                    ((contributor[0] && contributor[0]._id == cur) ?
                      <div>
                        <h5 id="labelContributed">Edit Translation?</h5>
                        <input ref={selectedLanguage} name={selectedLanguage} type='text' placeholder={translation[selectedLanguage].word} className='col-md-9 form-control' id='inputUpdate'/>
                      </div>
                      :
                      <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Transpic%20Translation%20Feedback&body=Hi%20${contributor[0].profile.firstName}%20${contributor[0].profile.lastName}%0D%0AI%20would%20like%20to%20inform%20you%20that%20the%20translation%20of%20the%20word%20"${translation[selectedLanguage].word}"%20is%20%3Cinsert%20feedback%20here%3E!`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>)
                  :
                  <input ref={selectedLanguage} name={selectedLanguage} type='text' placeholder='Enter translation and press save!' className='col-md-9 form-control' id='inputUpdate'/>
                }
                {translation[selectedLanguage].word ?
                  ((contributor[0] && contributor[0]._id == cur) ?
                    <button type="button" className="col-md-3 btn btn-primary navbar-btn pull-right" id='btn' onClick={this.updateTranslation.bind(this)}>Save</button>:"")
                  :
                  <button type="button" className="col-md-3 btn btn-primary navbar-btn pull-right" id='btn' onClick={this.updateTranslation.bind(this)}>Save</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updatetranslation;
