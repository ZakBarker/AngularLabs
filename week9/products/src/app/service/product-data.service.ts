import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';
const BACKEND_URL = "http://localhost:3000"


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  add(product:Products){
    return this.http.post<any>(BACKEND_URL + "/api/add", product);
  }

  getlist(){
    return this.http.post<any>(BACKEND_URL + "/api/read", "hi");
  }

  updateitem(product:Products){
    return this.http.post<any>(BACKEND_URL + "/api/update", product);
  }

  deleteitem(productID){
    return this.http.post<any>(BACKEND_URL + "/api/delete", {"productid": productID});
  }
}
