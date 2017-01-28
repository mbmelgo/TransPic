import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

var title = 'TPT';
DocHead.setTitle(title);

// Loading Javascript
var gaScript = '/bootstrap-3.3.7/js/bootstrap.min.js';
DocHead.loadScript(gaScript);

// Loadintg CSS
var cssLink = {rel: "stylesheet", href: '/bootstrap-3.3.7/css/bootstrap.min.css'};
var customFont = {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Slabo+27px"};
var customStuff = { rel: "stylesheet", href: "http://dreamtemplate.com/dreamcodes/divider/css/tsc_divider.css"};
DocHead.addLink(cssLink);
DocHead.addLink(customFont);
DocHead.addLink(customStuff);

// Loading Meta tag
var metaInfo = {name: "description", content: "TPT App"};
DocHead.addMeta(metaInfo);

var metaViewPort = {name: "viewport", content: "width=device-width, initial-scale=1"};
DocHead.addMeta(metaViewPort);
