import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular-6-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../shared/services/app/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private socialAuthService: AuthService,
    private userService :UserService,
    private fb: FormBuilder,
    private router: Router,
    private helperService: HelperService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })

  }

  get email() {return this.loginForm.get('email');}
  get password() {return this.loginForm.get('password');}

  login(){
    console.log("login form values :::: ", this.loginForm.value);
    if(!this.loginForm.valid)
    return
    else{
      let encodedString = btoa(`${this.email.value}:${this.password.value}`)
      this.userService.loginUser(encodedString)
      .subscribe(res=>{
        console.log("login response ", res);
        if(!res['res']['err']){
          this.helperService.token = res['res']['token'];
          this.router.navigate(['products']);
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
