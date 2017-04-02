import React from 'react';

class Forbidden extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div id="innerForbidden">
         <div className="panel panel-danger" id="forbiddenPanel">
           <div className="panel-heading">
             <h3 className="panel-title">Error 404: Page not found!</h3>
           </div>
           <div className="panel-body">
               Return to <a href="/admin_home" id="errorLabel">home page</a>.
           </div>
         </div>
       </div>

   );
  }
}

export default Forbidden;
