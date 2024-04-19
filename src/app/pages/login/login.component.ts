import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';
import { Token } from '@angular/compiler';
import { UserStoreService } from 'src/app/services/UserStore/user-store.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any = {};
  loginForm!:FormGroup;
  errorMessage: string | null = null;
  hidePassword=true;

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private router:Router,
    private userStore:UserStoreService) {}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  showPassword(){
    this.hidePassword=!this.hidePassword;
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            this.loginForm.reset();
            this.auth.storeToken(res.accessToken);
            this.auth.storeRefreshToken(res.refreshToken);
            this.auth.decodedToken();

          //   this.auth.refreshToken(res.refreshToken).subscribe({
          //     next: (refreshRes) => {
          //       console.log('Refreshed token:', refreshRes);
          //     },
          //     error: (refreshErr) => {
          //       console.error('Token refresh error:', refreshErr);
          //     }
          //   });
            
          const role = this.auth.getRoleFromToken();
            if (role === 'Admin') {
              this.router.navigate(['dashboard']); 
            } else {
              this.router.navigate(['home']); 
            }
          },
          error: (err) => {
            this.errorMessage = err;
          }
        })
    }else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
}
