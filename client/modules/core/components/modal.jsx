import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {clearModal} = this.props;
    clearModal();
  }

  render() {
    const {modal} =  this.props;
    if (modal.isCategory) {
      return this.renderCategory();
    } else {
      return this.renderTranslation();
    }
  }

  showTranslations(){
    const {modal,updateResults} = this.props;
    updateResults(modal.content._id);
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

  deleteCategory(e){
    e.preventDefault();
    const {deleteCategory,modal,translations} = this.props;
    if (translations.length <= 0 ) {
      deleteCategory(modal.content._id);
    } else {
      Bert.alert( "Deletion failed due to category is being used by "+translations.length+" translation/s.", 'danger', 'fixed-top', 'fa-frown-o' )
    }
  }

  deleteTranslation(e){
    e.preventDefault();
    const {deleteTranslation,modal} = this.props;
    const {content} = modal;
    const {_id} = content;
    deleteTranslation(_id);
  }

  closeModalCategory(){
    const {modal} =  this.props;
    const {content} = modal;
    window.location = `/update_category/${content._id}`;
  }

  closeModaTranslation(){
    const {modal} =  this.props;
    const {content} = modal;
    window.location = `/update_translation/${content._id}`;
  }

  renderCategory(){
    const {modal, contributor,translationLanguages,selectLanguage,cur} =  this.props;
    const {content} = modal;
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-md-12">
                <a href="#" className="dropdown-toggle pull-right" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                 <span className="caret"></span>
                </a>
                <ul className="dropdown-menu pull-right">
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton">Close</a></li>
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton" onClick={this.showTranslations.bind(this)}>View All Words</a></li>
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton" onClick={this.closeModalCategory.bind(this)}>Update</a></li>
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton" onClick={this.deleteCategory.bind(this)}>Delete</a></li>
                </ul>
              </div>
              <div className="col-md-6" id="modalDivider">
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
                <h4 id="labelContributed">{contributor.length > 0 ?
                  contributor[0]._id == cur ? "Contributed by: You":
                  "Contributed by: "+ contributor[0].profile.firstName +" "+ contributor[0].profile.lastName : "Be the one to Translate!"}</h4>
                {
                  contributor[0] ?
                    contributor[0]._id == cur ? "":
                   <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Transpic%20Translation%20Feedback&body=Hi%20${contributor[0].profile.firstName}%20${contributor[0].profile.lastName}%0D%0AI%20would%20like%20to%20inform%20you%20that%20the%20translation%20of%20the%20word%20"${content[selectLanguage].word}"%20is%20%3Cinsert%20feedback%20here%3E!`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>:""
                }
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTranslation(){
    const {modal, contributor,categories,translationLanguages,selectLanguage,cur} =  this.props;
    const {content} = modal;
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-md-12">
                <a href="#" className="dropdown-toggle pull-right" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                 <span className="caret"></span>
                </a>
                <ul className="dropdown-menu pull-right">
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton">Close</a></li>
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton" onClick={this.closeModaTranslation.bind(this)}>Update</a></li>
                  <li><a href="#" className="close" data-dismiss="modal" id="modalButton" onClick={this.deleteTranslation.bind(this)}>Delete</a></li>
                </ul>
              </div>
              <div className="col-md-6" id="modalDivider">
                <img className="img-thumbnail" src= {content.image} id='modalImage'/>
              </div>
              <div className="col-md-6" id="modalContent">
                <h4 id="labelView">Select Language of the Word</h4>
                <select id='selectLanguage' ref='selectLanguage' className='selectpicker form-control' id='form-control' onChange={this.changeLanguage.bind(this)}>
                 {translationLanguages.map(function(language){
                   return <option value={language._id} key={language._id}>{language.name}</option>
                 })}
                </select>
                <h3 id="labelView">{content[selectLanguage].word ? "Translation: "+content[selectLanguage].word : "Language not yet supported!"}</h3>
                <h4 id="labelContributed">{contributor.length > 0 ?
                  contributor[0]._id == cur ? "Contributed by: You":
                  "Contributed by: "+ contributor[0].profile.firstName +" "+ contributor[0].profile.lastName : "Be the one to Translate!"}</h4>
                {
                  contributor[0] ?
                  contributor[0]._id == cur ? "":
                  <h6 id="labelContact"><a href={`mailto:${contributor[0].profile.email}?subject=Transpic%20Translation%20Feedback&body=Hi%20${contributor[0].profile.firstName}%20${contributor[0].profile.lastName}%0D%0AI%20would%20like%20to%20inform%20you%20that%20the%20translation%20of%20the%20word%20"${content[selectLanguage].word}"%20is%20%3Cinsert%20feedback%20here%3E!`}> {contributor.length > 0 ? "Contact Contributor" : ""}</a></h6>:""
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
