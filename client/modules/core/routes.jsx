import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Signup from './containers/signup.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: '/',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Signup />)
      });
    }
  });
}
