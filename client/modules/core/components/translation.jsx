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
                   <li><a href="#" onClick={this.deleteTranslation.bind(this)}>Delete</a></li>
                   <li><a href="#" >Update</a></li>
                   <li><a href="#" >View</a></li>
                 </ul>
               </div>
              <img className='img-rounded'  id="searchResultsImage" src={translationDetails.image}/>
              <div className='caption' id='labelView' >
                {translationDetails[selectedLanguage]}
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
