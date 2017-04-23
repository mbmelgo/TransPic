import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCategory(e){
    e.preventDefault();
    const {deleteCategory,categoryDetails,translations} = this.props;
    if (translations.length <= 0 ) {
      const {_id} = categoryDetails;
      deleteCategory(_id);
    } else {
      Bert.alert( "Deletion failed due to category is being used by "+translations.length+" translation/s.", 'danger', 'fixed-top', 'fa-frown-o' )
    }
  }

  showModal(e){
    e.preventDefault();
    const {showModal,categoryDetails} = this.props;
    const modal = {
      isCategory: true,
      content: categoryDetails
    };
    showModal(modal);
  }

  showTranslations(){
    const {translations,updateResults} = this.props;
    updateResults(translations);
  }

  render() {
    const {categoryDetails,selectedLanguage} = this.props;
    if(categoryDetails) {
      return (
        <div className="col-xs-6 col-md-3" >
          <div className='thumbnail' id="indi">
             <div className='dropdown col-md-offset-11'>
               <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="caret"></span>
               </a>
               <ul className="dropdown-menu">
                 <li><a href="#" data-toggle="modal" data-target="#myModal" onClick={this.showModal.bind(this)}>View</a></li>
                 <li><a href="#" onClick={this.showTranslations.bind(this)}>View All Words</a></li>
                 <li><a href={`/update_category/${categoryDetails._id}`} >Update</a></li>
                 <li><a href="#" onClick={this.deleteCategory.bind(this)}>Delete</a></li>
               </ul>
             </div>
            <img className='img-rounded'  id="searchResultsImage" src={categoryDetails.image}/>
            <div className='caption' id='labelView' >
              {categoryDetails[selectedLanguage].word ? categoryDetails[selectedLanguage].word : "Language not yet Supported"}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div></div>
    )
  }
}

export default Category;
