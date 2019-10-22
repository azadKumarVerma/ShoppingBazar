import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormValidations } from "../../shared/services/Validations/FormValidations.service";
import { ProductsService } from "../products.service";

@Component({
    selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit{
    productForm: FormGroup;
    categoryList: any = [];
    constructor(private fb : FormBuilder,
        private formValidator: FormValidations,
        private productService: ProductsService){

    }

    ngOnInit(){
        this.createProductForm();
        this.getAllCategories();
    }

    getAllCategories(){
        this.productService.fetchCategories().subscribe(res=>{
            console.log("response -----------",res);
            if(res.res) this.categoryList = res.res;
            
        },
        err=>{
            console.log("err => ",err);
        })
    }

    createProductForm(){
        this.productForm = this.fb.group({
            title : ['', Validators.required],
            category: [null, Validators.required],
            price: ['',Validators.required],
            image: ['', Validators.required]
        })
    }

    get title() { return this.productForm.get('title');}
    get category() { return this.productForm.get('category');}
    get price() { return this.productForm.get('price');}
    get image() { return this.productForm.get('image');}

    submit(){
        console.log("product form ------------- ", this.productForm);
        if(this.productForm.invalid){
            console.log("invaid form --- ");
            this.formValidator.markControlsAsTouched(this.productForm);
            return;
        }
        this.productService.addProduct(this.productForm.value).subscribe(res=>{
            console.log("res--------------- ", res);
        })

    }

}