import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  signupUser(e){
    e.preventDefault();
    const {signupUser} = this.props;
    const {username, password, profileFirstName, profileLastName, profileOrganization, profileOccupation} = this.refs;
    const profile = {
      firstName: profileFirstName.value,
      lastName: profileLastName.value,
      occupation: profileOccupation.value,
      organization: profileOrganization.value,
    };
    const formData = {
      username: username.value,
      password: password.value,
      profile: profile
    }
    signupUser(formData);
  }

  clear(e){
    e.preventDefault();
    const {username, password, profileFirstName, profileLastName, profileOrganization, profileOccupation} = this.refs;
    username.value = '';
    password.value = '';
    profileFirstName.value = '';
    profileLastName.value = '';
    profileOrganization.value = '';
    profileOccupation.value = '';
    const {clearAccountErrors} = this.props;
    clearAccountErrors();
  }

  render() {
    const {error} = this.props;
    return (
      <div id="outer">
        <nav className="navbar navbar-default" id='popOut'>
          <div className="container-fluid">
            <div className="navbar-header" id="header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="https://s10.postimg.org/b9n3rh4rt/Logo_Makr.png" id="brandLogo"/>
              </a>
              <a href="/signin" id="nav-out"><button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>LOGIN</button></a>
              <a href="/translate" id="nav-out"><button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>TRANSLATE</button></a>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Signup;
