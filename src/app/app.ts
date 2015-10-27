import {Component, bootstrap} from 'angular2/angular2';

class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'
})
class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}



bootstrap(AppComponent);