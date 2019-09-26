import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id = 0;
  name = "";
  price = 0;
  description = "";
  units = "";
  objId = "";

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.objId = this.route.snapshot.params.id;
    let productObj = {"id": this.objId};
    this.http.post<any>(BACKEND_URL + "/api/item", productObj).subscribe((data)=>{
      console.log(data);
      this.id = data[0].id;
      this.name = data[0].name;
      this.units = data[0].units;
      this.price = data[0].price;
      this.description = data[0].description;
    });
  }

  updateProduct(){
    let productObj = {
      "id": this.id,
      "name": this.name,
      "price": this.price,
      "description": this.description,
      "units": this.units,
      "_id": this.objId
    }
    this.http.post<any>(BACKEND_URL + "/api/update", productObj).subscribe((data)=>{
      console.log(data);
    });
    this.goList();
  }

  goList(){
    this.router.navigateByUrl('');
  }

}
