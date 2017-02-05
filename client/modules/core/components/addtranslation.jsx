import React from 'react';

class Addtranslation extends React.Component {
  constructor(props) {
    super(props);
  }

  signout() {
    const {signoutUser} = this.props;
    signoutUser();
  }

  add(){

  }

  render() {
    const {allCategory,LocalState,translationLanguages} = this.props;
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
        <div id="addBox">
          <div className="panel panel-success" id="addPopOut">
            <div className="panel-heading">
              <h3 className="panel-title">Add New Translation</h3>
            </div>
            <div className="panel-body">
              {LocalState.get("ADD_TRANSLATION_ERROR") ? <h4>{LocalState.get("ADD_TRANSLATION_ERROR")}</h4>:""}
              <div className='form-group col-md-4' id="verticalLine">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <a className='pull-right'><span className="glyphicon glyphicon-remove-sign" aria-hidden="true" id='closebtn'></span></a>
                    <div className="thumbnail">
                      <img className="img-rounded" src="https://s27.postimg.org/8ohcupxnn/oie_56_N3_A2a_Aeoma.jpg" alt="..."/>
                    </div>
                    <button type="button" className="btn btn-success navbar-btn" id='addbtn' >Add Image</button>
                  </div>
                </div>
              </div>
              <div className='form-group col-md-4' id="verticalLine">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <h5>Please check atleast 1 category below:</h5>
                    <form className="form-group col-lg-12">
                     <fieldset className="row form-group" id="addTranslationFormGroup">
                       <div className="form-check">
                          {allCategory.map(function(category){
                            return (
                              <label className="checkbox form-check-label" id='labelCategoryCheckBoxes'>
                                <input type="checkbox" className="form-check-input" name="categoryCheckBoxes" id="categoryCheckBoxes" value={category._id}  />
                                {category.english}
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
              <button type="button" className="btn btn-primary navbar-btn" id='addsavebtn' >Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addtranslation;
