import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: any = {};
  loginForm!:FormGroup;
  errorMessage: string | null = null;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      //Send Object to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.loginForm.reset();
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
