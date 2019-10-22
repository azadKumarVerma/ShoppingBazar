import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormValidations } from "../../shared/services/Validations/FormValidations.service";
import { CategoryService } from "../category.service";

@Component({
    selector: 'create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit{
    categoryForm: FormGroup;
    constructor(private fb : FormBuilder,
        private formValidator: FormValidations,
        private categoryService: CategoryService){

    }

    ngOnInit(){
        this.createCategoryForm();
    }

    createCategoryForm(){
        this.categoryForm = this.fb.group({
            code : ['', Validators.required],
            name: ['', Validators.required],
            
        })
    }

    get code() { return this.categoryForm.get('code');}
    get name() { return this.categoryForm.get('name');}

    submit(){
        // console.log("product form ------------- ", this.categoryForm);
        if(this.categoryForm.invalid){
            console.log("invaid form --- ");
            this.formValidator.markControlsAsTouched(this.categoryForm);
            return;
        }
        this.categoryService.addCategory(this.categoryForm.value).subscribe(res=>{
            console.log("res--------------- ", res);
        })

    }

}