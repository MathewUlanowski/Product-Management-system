import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'public';

  constructor(private _http: HttpService, private _router: Router) {

  }
  ngOnInit(){
    this._router.navigate(['products'])
  }


}
