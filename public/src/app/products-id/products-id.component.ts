import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css']
})
export class ProductsIdComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  //page varuables
  Product:any


  ngOnInit() {
    console.log("made it to product view page")
    this._route.params.subscribe(
      params => {
        this._http.getproduct(params['id']).subscribe(
          data => {
            this.Product = data['foundProduct']
          }
        )
      }
    )
  }

  navHome(){
    this._router.navigate(['products'])
  }
  delete(id){
    this._http.deleteProduct(id).subscribe(
      data => {
        console.log(data)
        this.navHome()
      }
    )
  }

}
