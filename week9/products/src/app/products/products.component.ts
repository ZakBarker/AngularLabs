import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit() {
    let productObj = {"request": "List Please"};
    await this.http.post<any>(BACKEND_URL + "/api/read", productObj).subscribe((data)=>{
      console.log(data);
      this.products = data;
    });
  }

  goUpdate(id){
    this.router.navigateByUrl('/update/' + id);
  }

  goAdd(){
    this.router.navigateByUrl('/add');
  }

  delete(id){
    let productObj = {"_id": id};
    this.http.post<any>(BACKEND_URL + "/api/remove", productObj).subscribe((data)=>{
      console.log(data);
      this.products = data;
    });
  }

}
