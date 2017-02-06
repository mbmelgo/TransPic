import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Signup from './containers/signup.js';
import Signin from './containers/signin.js';
import AdminHome from './containers/adminhome.js';
import AddTranslation from './containers/addtranslation.js';
import AddCategory from './containers/addcategory.js';

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

  FlowRouter.route('/add_translation', {
    name: 'add_translation',
    triggersEnter: [authenticate],
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddTranslation />)
      });
    }
  });

  FlowRouter.route('/add_category', {
    name: 'add_category',
    triggersEnter: [authenticate],
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AddCategory />)
      });
    }
  });

  function authenticate(){
    if(!Meteor.userId()){
      console.log("NOT AUTHENTICATED");
      FlowRouter.go('/signin')
    }
  }
}
