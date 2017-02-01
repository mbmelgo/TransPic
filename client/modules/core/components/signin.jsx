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
    return (
      <div id="outer">
        <nav className="navbar navbar-default" >
          <div className="container-fluid">
            <div className="navbar-header" id="nav-header">
              <a className="navbar-brand" href="#" id="nav-out">
                <img alt="Brand" src="https://s10.postimg.org/b9n3rh4rt/Logo_Makr.png" id="brandLogo"/>
              </a>
              <a href="/signin" id="nav-out"><button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>LOGIN</button></a>
              <a href="/translate" id="nav-out"><button type="button" className="btn btn-success navbar-btn pull-right" id='lgbtn'>TRANSLATE</button></a>
              </div>
          </div>
        </nav>
        <div id="innerSignup">
          <div className="panel panel-success" id="popOut">
            <div className="panel-heading">
              <h3 className="panel-title">ADMIN LOG-IN</h3>
            </div>
              <div className="panel-body">
                <form className='form-group col-md-12'>
                  {error
                    ? <h4 id="errorLabel">{error}</h4>:<br />
                  }
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