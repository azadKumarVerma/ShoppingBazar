import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Injectable()
export class FormValidations{
    validate(control: AbstractControl){
      if(control.touched && control.invalid){
          return 'form-control-danger';
      }
    }

    markControlsAsTouched(group: FormGroup){
      for(let key in group.controls){
          group.controls[key].markAsTouched();
      }
    }

    compareMasterCode(first: any, second: any): boolean {
	    return first && second ? first.code === second.code : first === second;
	}
}