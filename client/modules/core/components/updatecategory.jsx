import React from 'react';

class Updatecategory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearUpdateCategoryErrors} = this.props;
    clearUpdateCategoryErrors();
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  goBackHome(){
    const {goBackHome} = this.props;
    goBackHome();
  }

  changeLanguage(e){
    e.preventDefault();
    const {setLanguageSelectedView,category} = this.props;
    const {selectLanguage} = this.refs;
    const contributor = category[selectLanguage.value].contributor[0];
    const params = {
      contributor: contributor,
      selectLanguage: selectLanguage.value
    }
    setLanguageSelectedView(params);
  }

  changeImage(e){
    e.preventDefault();
    const {changeImage,category} = this.props;
    const {image} = this.refs;
    changeImage(image.files[0],category._id);
  }

  updateCategory(e){
    e.preventDefault();
    const {updateCategory,category,cur,selectedLanguage,translationLanguages} = this.props;
    const {selectLanguage} = this.refs;
    const word = this.refs[selectedLanguage].value;
    const formData = {
      contributor: [cur],
      language: selectedLanguage,
      word: word,
    };
    updateCategory(formData,category,translationLanguages);
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
    const {category,translationLanguages,selectedLanguage,contributor, cur,image,error,success} = this.props;
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
              <h3 className="col-md-7 panel-title" id="labelUpdate">Update Category</h3>
            </div>
            <div className="panel-body">
              {error ? Bert.alert( error, 'danger', 'fixed-top', 'fa-frown-o' ):success ? Bert.alert( success, 'success', 'fixed-top', 'fa-smile-o' ):""}
              <div className='form-group col-md-6' id="verticalLineUpdate">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="thumbnail" id="imageThmbnailUpdate">
                      {
                        image ? <img className="img-rounded" src={image} alt="..." id='imageUpdate'/>:
                        <img className="img-rounded" src={category.image} alt="..." id='imageUpdate'/>
                      }
                    </div>
                    <label type="button" className="btn btn-info btn-file" id='addImageUp' >Change<input type="file" ref='image' onChange={this.changeImage.bind(this)}/></label>
                  </div>
                </div>
              </div>
              <div className='form-group col-md-6' id="third">
                <h4 id="labelView">Select Language of Category</h4>
                <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)} value={selectedLanguage}>
                 {translationLanguages.map(function(language){
                   return <option value={language._id} key={language._id}>{language.name}</option>
                 })}
                </select>
                <h3 id="labelView">{category[selectedLanguage].word ? "Translation: "+category[selectedLanguage].word : "Language not yet supported!"}</h3>
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
                        <input ref={selectedLanguage} name={selectedLanguage} type='text' placeholder={category[selectedLanguage].word} className='col-md-9 form-control' id='inputUpdate'/>
                      </div>
                      :
                      <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Transpic%20Translation%20Feedback&body=Hi%20${contributor[0].profile.firstName}%20${contributor[0].profile.lastName}%0D%0AI%20would%20like%20to%20inform%20you%20that%20the%20translation%20of%20the%20word%20"${category[selectedLanguage].word}"%20is%20%3Cinsert%20feedback%20here%3E!`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>)
                  :
                  <input ref={selectedLanguage} name={selectedLanguage} type='text' placeholder='Enter translation and press save!' className='col-md-9 form-control' id='inputUpdate'/>
                }
                {category[selectedLanguage].word ?
                  ((contributor[0] && contributor[0]._id == cur) ?
                    <button type="button" className="col-md-3 btn btn-primary navbar-btn pull-right" id='btn' onClick={this.updateCategory.bind(this)}>Save</button>:"")
                  :
                  <button type="button" className="col-md-3 btn btn-primary navbar-btn pull-right" id='btn' onClick={this.updateCategory.bind(this)}>Save</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updatecategory;
