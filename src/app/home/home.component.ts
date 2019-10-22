import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any = [];

  constructor( private homeService: HomeService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.homeService.fetchAllProducts().subscribe(
      res=>{
         console.log("res ---------------- ", res);
         if(res.res) this.productList = res.res.products;
      },
      err=>{
        console.log("error --------- ", err);
      }
    );
  }

}
