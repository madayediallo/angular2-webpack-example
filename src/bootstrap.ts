/*
 * Providers provided by Angular
 */

/// <reference path="../typings/custom.d.ts" />

import {bootstrap, FORM_PROVIDERS} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(App, [
    // These are dependencies of our App
    FORM_PROVIDERS,
    HTTP_PROVIDERS
]);