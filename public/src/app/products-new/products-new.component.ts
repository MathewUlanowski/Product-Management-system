import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {

  constructor(
    private _http:HttpService,
    private _router: Router,
  ) { }
  Product: any;
  Errors = []
  ngOnInit() {
    this.Product = {}
  }


  Reset(){
    this.Product = {}
  }
  
  CreateProduct(){
    console.log('creating restaurant')
    console.log(this.Product)

    this._http.createProduct(this.Product).subscribe(data => {
      console.log(data)
      console.log(this.Errors)
      this.Errors = []
      if(!data['status']){
        // console.log(data.err.errors)
        for(let key in data['err']['errors']){
          console.log(data['err']['errors'][key].message)
          this.Errors.push(data['err']['errors'][key].message)
        }
      }
      if(this.Errors.length<1){
        this.Product.push
        this._router.navigate(['products'])
        console.log('created restaurant')
      }
    })
    
  }

}
