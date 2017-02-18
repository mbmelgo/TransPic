import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCategory(e){
    e.preventDefault();
    const {deleteCategory,categoryDetails} = this.props;
    const {_id} = categoryDetails;
    deleteCategory(_id);
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
                 <li><a href="#" >View</a></li>
                 <li><a href="#" >Update</a></li>
                 <li><a href="#" onClick={this.deleteCategory.bind(this)}>Delete</a></li>
               </ul>
             </div>
            <img className='img-rounded'  id="searchResultsImage" src={categoryDetails.image}/>
            <div className='caption' id='labelView' >
              {categoryDetails[selectedLanguage].word}
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
