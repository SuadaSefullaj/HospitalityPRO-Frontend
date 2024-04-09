import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validationform';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {

  public signUpForm!: FormGroup;
  errorMessage: string | null = null;
  
  constructor(private fb : FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name:['', Validators.required],
      surname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      phoneNumber:['', Validators.required],
      birth:['', Validators.required],
    })
  }

 
  onSubmit() {
    if (this.signUpForm.valid) {
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
          this.signUpForm.reset();
          this.router.navigate(['login'])
        }),
        error:(err)=>{
          this.errorMessage = err;
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm); //{7}
    }
  }

}