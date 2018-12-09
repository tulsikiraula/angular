import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appstats:boolean = true;
  title = ' tk';
  appList : any []= [

    {"id":"1", "name":"tulsi"},

    {"id":"2", "name":"amit"}
  ]
}
