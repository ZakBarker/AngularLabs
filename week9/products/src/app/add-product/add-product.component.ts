import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id = 0;
  name = "";
  price = 0;
  description = "";
  units = "";
  err = "";
  products = [];

  constructor(private http: HttpClient, private router: Router) { }

  addProduct(){
    let productObj = {
      "id": this.id,
      "name": this.name,
      "price": this.price,
      "description": this.description,
      "units": this.units
    }
    this.http.post<any>(BACKEND_URL + "/api/add", productObj).subscribe((data)=>{
      if(data.err){
        console.log(data);
        this.err = data.err;
        console.log(this.err);
      }else{
        this.resetValues();
        this.goList();
      }
    });
  }

  goList(){
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }



  resetValues(){
    this.id = 0;
    this.name = "";
    this.price = 0;
    this.description = "";
    this.units = "";
    this.err = "";
  }
}

