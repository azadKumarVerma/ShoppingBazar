import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
  }

  navigateToCreateProduct(){
    this.router.navigate(['app/category/create-category']);
  }


}
