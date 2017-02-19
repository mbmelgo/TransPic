import React from 'react';

class Translation extends React.Component {
    constructor(props) {
      super(props);
    }


    deleteTranslation(e){
      e.preventDefault();
      const {deleteTranslation,translationDetails} = this.props;
      const {_id} = translationDetails;
      deleteTranslation(_id);
    }

    showModal(e){
      e.preventDefault();
      const {showModal,translationDetails} = this.props;
      const modal = {
        isCategory: false,
        content: translationDetails
      };
      showModal(modal);
    }

    render() {
      const {translationDetails,selectedLanguage} = this.props;
      if(translationDetails) {
        return (
          <div className="col-xs-6 col-md-3" >
            <div className='thumbnail' id="indi">
               <div className='dropdown col-md-offset-11'>
                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="caret"></span>
                 </a>
                 <ul className="dropdown-menu">
                   <li><a href="#" data-toggle="modal" data-target="#myModal" onClick={this.showModal.bind(this)}>View</a></li>
                   <li><a href={`/update_translation/${translationDetails._id}`} >Update</a></li>
                   <li><a href="#" onClick={this.deleteTranslation.bind(this)}>Delete</a></li>
                 </ul>
               </div>
              <img className='img-rounded'  id="searchResultsImage" src={translationDetails.image}/>
              <div className='caption' id='labelView' >
                {translationDetails[selectedLanguage].word}
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

export default Translation;
