import React from 'react';

class Addcategory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearAddCategoryErrors} = this.props;
    clearAddCategoryErrors();
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  goBackHome(){
    const {goBackHome} = this.props;
    goBackHome();
  }

  addCategory(){
    const {addCategory,image, translationLanguages, Meteor} = this.props;
    const self = this;
    const formData = {
      image: image
    }
    translationLanguages.map(function(language){
      return formData[language._id] = {
        word:self.refs[language._id].value,
        contributor: self.refs[language._id].value ? [Meteor.userId()] : []
      }
    });
    addCategory(formData);
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

  render() {
    const {error,translationLanguages,image} = this.props;
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
          <div className="panel panel-success" id="addPopOut">
            <div className="panel-heading">
              <h3 className="panel-title">Add New Category</h3>
            </div>
            <div className="panel-body">
              {error ? Bert.alert( error, 'danger', 'fixed-top', 'fa-frown-o' ):""}
              <div className='form-group col-md-6' id="verticalLine">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    {image ? <a className='pull-right' onClick={this.removeImage.bind(this)}><span className="glyphicon glyphicon-remove-sign" aria-hidden="true" id='closebtn'></span></a>
                    : <a className='pull-right'></a>}
                    <div className="thumbnail" id="imageThmbnail">
                      {image ?
                      <img className="img-rounded" src={image} alt="..." id='image'/>
                      :<img className="img-rounded" src="/images/no_image.jpg" alt="..." id='image'/>
                      }
                    </div>
                    <label type="button" className="btn btn-info btn-file" id='addImage' >Add Image<input type="file" ref='image' onChange={this.addImage.bind(this)}/></label>
                  </div>
                </div>
              </div>
              <div className='form-group col-md-6' id="third">
                <div className="row" >
                  <div className="col-sm-12 col-md-12" >
                    <h5>Please enter category name atleast 1 translation below:</h5>
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
              <br/><br/>
              <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.addCategory.bind(this)}>Save</button>
              <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.goBackHome.bind(this)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addcategory;
