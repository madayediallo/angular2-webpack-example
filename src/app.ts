
/// <reference path="../typings/lodash.d.ts" />
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

const _ = require('lodash');
require('./app.less');

@Component({
    selector: 'app',
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'view/app.html'
})
export class App {
    searchStr: string;
    repos: Array<any> = [];
    showProgressBar: boolean = false;
    searchInput: any = _.debounce(this.searchRepos, 500);

    constructor(public http: Http) {
        this.searchStr = '';
    }

    searchRepos():void {

        this.showProgressBar = true;

        const url = `https://api.github.com/search/repositories?q=${this.searchStr}`;
        const JSON_HEADERS = new Headers();

        JSON_HEADERS.append('Accept', 'application/json');
        JSON_HEADERS.append('Content-Type', 'application/json');

        this.http
            .get(url, {
                headers: JSON_HEADERS
            })
            .map(res => res.json())
            .subscribe(
                data => {
                    this.repos = data.items;
                },
                err  => console.error(err),
                ()   => this.showProgressBar = false
            );

    }

}