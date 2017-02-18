import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  signupUser(e){
    e.preventDefault();
    const {signupUser} = this.props;
    const {username, password, profileFirstName, profileLastName, profileOrganization, profileOccupation, profileEmail} = this.refs;
    const profile = {
      firstName: profileFirstName.value,
      lastName: profileLastName.value,
      occupation: profileOccupation.value,
      organization: profileOrganization.value,
      email: profileEmail.value,
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
    const {username, password, profileFirstName, profileLastName, profileOrganization, profileOccupation, profileEmail} = this.refs;
    username.value = '';
    password.value = '';
    profileFirstName.value = '';
    profileLastName.value = '';
    profileOrganization.value = '';
    profileOccupation.value = '';
    profileEmail.value = '';
    const {clearAccountErrors} = this.props;
    clearAccountErrors();
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set({
      ACCOUNT_ERROR: null,
    });
  }

  render() {
    const {error} = this.props;
    return (
      <div id="outer">
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="/images/logo.png" id="brandLogo"/>
              </a>
              <a href="/admin_home" id="nav-out">
                <button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>
                  <span className="glyphicon glyphicon-home" aria-hidden="true"> Home</span>
                </button>
              </a>
              </div>
          </div>
        </nav>
        <div id="innerSignup">
          <div className="panel panel-success" id="popOut">
            <div className="panel-heading">
              <h3 className="panel-title">Register New Admin</h3>
            </div>
              <div className="panel-body">
                <form className='form-group col-md-12'>
                  {error
                    ? <h4 id="errorLabel">{error}</h4>:<br />
                  }
                  <fieldset>
                    <legend>Login credentials</legend>
                    <div className="form-group">
                      <label className='col-sm-3 control-label' htmlFor='username' id='labelSignUp'>Username:</label>
                      <div className='col-sm-8'>
                        <input id='username' ref='username' name='username' type='text' placeholder='Username' className='form-control' id='form-control'/>
                      </div><br/><br/>
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-3 control-label' htmlFor='password' id='labelSignUp'>Password:</label>
                      <div className='col-sm-8'>
                        <input id='password' ref='password' name='password' type='password' placeholder='Password' className='form-control'id='form-control'/>
                      </div><br/><br/>
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-3 control-label' htmlFor='profile.firstName' id='labelSignUp'>First Name:</label>
                      <div className='col-sm-8'>
                        <input id='profile.firstName' ref='profileFirstName' name='profile.firstName' type='text' placeholder='First Name' className='form-control' id='form-control'/>
                      </div><br/><br/>
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-3 control-label' htmlFor='profile.lastName' id='labelSignUp'>Last Name:</label>
                      <div className='col-sm-8'>
                        <input id='profile.lastName' ref='profileLastName' name='profile.lastName' type='text' placeholder='Last Name' className='form-control' id='form-control'/>
                      </div><br/><br/>
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-3 control-label' htmlFor='profile.email' id='labelSignUp'>Email:</label>
                      <div className='col-sm-8'>
                        <input id='profile.email' ref='profileEmail' name='profile.email' type='text' placeholder='Email' className='form-control' id='form-control'/>
                      </div><br/><br/>
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-3 control-label' htmlFor='profile.occupation' id='labelSignUp'>Occupation:</label>
                      <div className='col-sm-8'>
                        <input id='profile.occupation' ref='profileOccupation' name='profile.occupation' type='text' placeholder='Occupation' className='form-control' id='form-control'/>
                      </div><br/><br/>
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-3 control-label' htmlFor='profile.organization' id='labelSignUp'>Organization:</label>
                      <div className='col-sm-8'>
                        <input id='profile.organization' ref='profileOrganization' name='profile.organization' type='text' placeholder='Organization' className='form-control' id='form-control'/>
                      </div><br/><br/>
                    </div>
                  </fieldset>
                </form>
                <div className='signupButtons'><br/><br/><br/><br/><br/>
                  <button type="button" className="btn btn-success pull-right" id='btn' onClick={this.signupUser.bind(this)}>SUBMIT</button>
                  <button type="button" className="btn btn-danger pull-right" id='btn' onClick={this.clear.bind(this)}>CLEAR</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
