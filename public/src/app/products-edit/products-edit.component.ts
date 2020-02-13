import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

    //page variables
    Product: any;
    Errors = [];


  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log('these are the params',params)
      this._http.getproduct(params['id']).subscribe(data => {
        this.Product = data['foundProduct']
      })
    })
  }


  Reset(){
    this._route.params.subscribe(params => {
      console.log('these are the params',params)
      this._http.getproduct(params['id']).subscribe(data => {
        this.Product = data['foundProduct']
      })
    })
  }



  navHome(){
    this._router.navigate(['products'])
  }

  EditProduct(){
    console.log(this.Product)
    this._http.updateProduct(this._route.params['id'], this.Product).subscribe(data => {
      console.log(data)
      this.Errors = []
      if(!data['status']){
        // console.log(data.err.errors)
        for(let key in data['err']['errors']){
          console.log(data['err']['errors'][key].message)
          this.Errors.push(data['err']['errors'][key].message)
        }
      }
      if(this.Errors.length<1){
        this._router.navigate(['products'])
        console.log('created restaurant')
      }
    })
  }
}
