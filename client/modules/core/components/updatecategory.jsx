import React from 'react';

class Updatecategory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){

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

  render() {
    const {category,translationLanguages,selectLanguage,contributor} = this.props;
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
              <h3 className="panel-title">Update Category</h3>
            </div>
            <div className="panel-body">

              <div className='form-group col-md-6' id="verticalLine">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="thumbnail" id="imageThmbnail">
                      <img className="img-rounded" src={category.image} alt="..." id='image'/>
                    </div>
                    {category[selectLanguage].word ? "":
                      <label type="button" className="btn btn-info btn-file" id='addImage' >Change<input type="file" ref='image'/></label>
                    }
                  </div>
                </div>
              </div>
              <div className='form-group col-md-6' id="third">
                <h4 id="labelView">Select Language of Category</h4>
                <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)}>
                 {translationLanguages.map(function(language){
                   return <option value={language._id} key={language._id}>{language.name}</option>
                 })}
                </select>
                <h3 id="labelView">{category[selectLanguage].word ? "Translation: "+category[selectLanguage].word : "Language not yet supported!"}</h3>
                <h4 id="labelContributed">{contributor.length > 0 ? "Contributed by: "+ contributor[0].profile.firstName +" "+ contributor[0].profile.lastName : "Be the one to Translate!"}</h4>
                {
                  contributor[0] ?
                  <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Feedback&body=Message`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>
                  :
                  <input ref={selectLanguage} name={selectLanguage} type='text' placeholder='Enter translation and press save!' className='form-control' id='form-control'/>
                }
              </div>
              <br/><br/>
              {category[selectLanguage].word ? "":
                <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' >Save</button>
              }
              <button type="button" className="btn btn-primary navbar-btn pull-right" id='btn' onClick={this.goBackHome.bind(this)}>Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Updatecategory;
