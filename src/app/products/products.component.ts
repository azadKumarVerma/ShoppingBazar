import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
  }

  navigateToProduct(){
    this.router.navigate(['app/products/create-product']);
  }

}
