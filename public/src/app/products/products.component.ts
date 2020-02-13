import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _router: Router
  ) {}

  //page variables
  Products: any;

  ngOnInit() {
    console.log("made it to the home page")
    this._http.getProducts().subscribe(
      data => {
        if (data['status'] == false) {
          console.log('data')
          console.log(data['errors']);
        }
        else {
          console.log(data)
          this.Products = data['allProducts'];
        }
      }
    )
  }
  //end init
  navNew(){
    this._router.navigate(['products/new'])
  }
  navEdit(id){
    this._router.navigate([`products/${id}/edit`])
  }
  detailNav(id){
    this._router.navigate([`products/${id}`])
  }




}
