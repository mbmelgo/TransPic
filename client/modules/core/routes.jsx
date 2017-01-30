import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Signup from './containers/signup.js';
import Signin from './containers/signin.js';
import AdminHome from './containers/admin_home.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: '/',
    action() {
      FlowRouter.go('/signin');
    }
  });

  FlowRouter.route('/signup', {
    name: 'signup',
    triggersEnter: [authenticate],
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Signup />)
      });
    }
  });

  FlowRouter.route('/signin', {
    name: 'signin',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Signin />)
      });
    }
  });

  FlowRouter.route('/admin_home', {
    name: 'admin_home',
    triggersEnter: [authenticate],
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AdminHome />)
      });
    }
  });

  function authenticate(){
    if(!Meteor.userId()){
      FlowRouter.go('/')
    }
  }
}
