import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private socialAuthService: AuthService,
    private userService :UserService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm(){
    this.signupForm = this.fb.group({
      name : ['',Validators.required],
      password : ['',Validators.required],
      mobile : ['',Validators.required],
      email:['',Validators.required],
    })

  }

  get userName() {return this.signupForm.get('userName');}
  get email() {return this.signupForm.get('email');}
  get password() {return this.signupForm.get('password');}
  get name() {return this.signupForm.get('name');}
  get mobile() {return this.signupForm.get('mobile');}

  signup(){
    console.log("sign up form values :::: ", this.signupForm.value,this.signupForm.valid);
    if(!this.signupForm.valid)
    return
    else{
      this.userService.signupUser(this.signupForm.value)
      .subscribe(res=>{
        if(res['res']){
           console.log('-----------signup successfull---------');
           this.router.navigate(['login']);
        }  
      },
      err=>{
        console.log("login error ", err);
      });
    }
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    ).catch(err =>{
      console.log(err)
    })
  }

  navigateToSignUp(){
    console.log("methods hit------");
    this.router.navigate(['sign-up']);
  }

}
