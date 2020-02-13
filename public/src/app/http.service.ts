import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts(){
    console.log('made it to get Products')
    return this._http.get('/api-products')
  }
  getproduct(id){
    console.log('getting resteraunt with id '+id)
    return this._http.get(`/api-products/${id}`)
  }
  createProduct(data){
    return this._http.post('/api-products', data)
  }
  updateProduct(id,data){
    console.log(data)
    console.log(id)
    return this._http.put(`/api-products/edit/${id}`, data)
  }
  deleteProduct(id){
    return this._http.delete(`/api-products/delete/${id}`)
  }





}
