import { Component } from '@angular/core';
// inbuilt reactive form services
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})

export class ValidationsComponent {
  showErrors:boolean;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.showErrors=false;
    this.loginForm=this.fb.group({
      email:['',[Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })
  }

  reactSubmit(){
    console.log("data in ractive form ===>>>",this.loginForm)
    this.showErrors = this.loginForm.invalid;
  }

  submit(data) {
    console.log(data);
  }

}
