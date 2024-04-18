import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: any = {};
  loginForm!:FormGroup;
  errorMessage: string | null = null;
  hidePassword=true;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  showPassword(){
    this.hidePassword=!this.hidePassword;
  }

  onLogin(){
    if(this.loginForm.valid){
  
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          this.router.navigate(['home'])
        },
        error:(err)=>{
          this.errorMessage = err;
        }
      })
    }else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
}
