import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  signinUser(e){
    e.preventDefault();
    const {signinUser, LocalState} = this.props;
    const {password,username} = this.refs;
    const formData = {
      username: username.value,
      password: password.value
    }
    signinUser(formData);
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set({
      ACCOUNT_ERROR: null,
    });
  }

  render() {
    const {error} = this.props;
    const mail = "mbmelgo1@up.edu.ph; robert.roxas@up.edu.ph";
    return (
      <div id="outer">
        <nav className="navbar" id="navbar">
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                TR<span className="glyphicon glyphicon-picture" aria-hidden="true" id="pic"></span>NSPIC
              </a>
              <a href="/signin" id="nav-out"><button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>LOGIN</button></a>
              <a href="/translate" id="nav-out"><button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>TRANSLATE</button></a>
              </div>
          </div>
        </nav>
        <div id="innerSignup">
          <div className="panel panel-success" id="popOut">
            <div className="panel-heading" id="pHeading">
              <h3 className="panel-title">ADMIN LOG-IN</h3>
            </div>
              <div className="panel-body">
                <form className='form-group col-md-12'>
                  {error ? Bert.alert( error, 'danger', 'fixed-top', 'fa-frown-o' ):""}
                  <fieldset>
                    <legend>Login</legend>
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
                  </fieldset>
                </form>
                <div className='signupButtons'><br/><br/><br/><br/><br/>
                  <label id='contact'>Want to be a contributor? <a href={`mailto:${mail}?subject=Application%20Form&body=First%20Name:%20%0D%0ALast%20Name:%20%0D%0AOrganization:%20%0D%0AOccupation:%20%0D%0AEmail:%20%0D%0A`}>Contact Us!</a></label>
                  <button type="button" className="btn btn-danger pull-right" id='btn' onClick={this.signinUser.bind(this)}>LOGIN</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
