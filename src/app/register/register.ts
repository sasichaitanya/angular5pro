import { Component } from '@angular/core';

// custom
import { DataService } from '../services/data.service';

@Component({
    selector: 'register',
    templateUrl: './register.html',
    styleUrls: ['./register.css']
})

export class RegisterComponent {
    details: any;
    countries: any;
    Success:boolean;
    Failure:boolean;

    constructor(private datasvc: DataService) {
        this.details = {
            firstName: '',
            lastName: '',
            userName:'',
            Email: '',
            password: '',
            gender: '',
            dateOfBirth: '',
            country: '',
            agree: '',
            phoneNumber: ''
        }

        this.countries = this.datasvc.getCountries();
    }
    resetMsgs(){
        this.Success=false;
        this.Failure=false;
    }

    register(){
        this.resetMsgs();
        console.log("the details u entered are:", this.details);
        this.datasvc.registerUser(this.details)
        .subscribe(result=>{
            console.log("data in http result is :",result);
            this.Success=true;
        },
        err=>{
            console.log("data in http error is :",err);
            this.Failure=true;
        })
    }

}