import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {modal} =  this.props;
    if (modal.isCategory) {
      return this.renderCategory();
    } else {
      return this.renderTranslation();
    }
  }

  changeLanguage(e){
    e.preventDefault();
    const {setLanguageSelectedView,modal} = this.props;
    const {content} = modal;
    const {selectLanguage} = this.refs;
    const contributor = content[selectLanguage.value].contributor[0];
    const params = {
      contributor: contributor,
      selectLanguage: selectLanguage.value
    }
    setLanguageSelectedView(params);
  }

  renderCategory(){
    const {modal, contributor,translationLanguages,selectLanguage} =  this.props;
    const {content} = modal;
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-md-12">
                <button type="button" className="close" data-dismiss="modal" id="modalButton">&times;</button>
              </div>
              <div className="col-md-6">
                <img className="img-thumbnail" src= {content.image} id='modalImage'/>
              </div>
              <div className="col-md-6" id="modalContent">
                <h4 id="labelView">Select Language of Category</h4>
                <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)}>
                 {translationLanguages.map(function(language){
                   return <option value={language._id} key={language._id}>{language.name}</option>
                 })}
                </select>
                <h3 id="labelView">{content[selectLanguage].word ? "Translation: "+content[selectLanguage].word : "Language not yet supported!"}</h3>
                <h4 id="labelContributed">{contributor.length > 0 ? "Contributed by: "+ contributor[0].profile.firstName +" "+ contributor[0].profile.lastName : "Be the one to Translate!"}</h4>
                {
                  contributor[0] ?
                  <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Feedback&body=Message`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>:""
                }
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTranslation(){
    const {modal, contributor,categories,translationLanguages,selectLanguage} =  this.props;
    const {content} = modal;
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-md-12">
                <button type="button" className="close" data-dismiss="modal" id="modalButton">&times;</button>
              </div>
              <div className="col-md-6">
                <img className="img-thumbnail" src= {content.image} id='modalImage'/>
              </div>
              <div className="col-md-6" id="modalContentT">
                <h4 id="labelView">Select Language of the Word</h4>
                <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)}>
                 {translationLanguages.map(function(language){
                   return <option value={language._id} key={language._id}>{language.name}</option>
                 })}
                </select>
                <h3 id="labelView">{content[selectLanguage].word ? "Translation: "+content[selectLanguage].word : "Language not yet supported!"}</h3>
                <h4 id="labelContributed">{contributor.length > 0 ? "Contributed by: "+ contributor[0].profile.firstName +" "+ contributor[0].profile.lastName : "Be the one to Translate!"}</h4>
                {
                  contributor[0] ?
                  <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Feedback&body=Message`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>:""
                }
                {
                  categories.length > 0 ?
                    <h5 id="labelCategories">Categories: {
                      categories.map(function(category){
                       return category[selectLanguage].word ? "<"+category[selectLanguage].word+"> " : "<Language not yet supported> "
                      })
                    }</h5>:""
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
