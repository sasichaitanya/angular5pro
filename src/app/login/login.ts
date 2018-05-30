import { Component } from '@angular/core';

// inbuilt service or dependency injection
import { Router } from '@angular/router';
// custom service
import { DataService } from '../services/data.service';

import { PubsubService } from '../services/pubsub.service';


@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent {
    loginDetails: any;
    message: String;

    constructor(private dataSvc: DataService,private router:Router,private pubsubSvc:PubsubService) {
        this.loginDetails = {
            userName: '',
            password: ''
        }
    }

    // resetMsgs() {
    //     this.message = '';
    // }

    login() {
        // this.resetMsgs();
        console.log(this.loginDetails);
        this.dataSvc.loginUser(this.loginDetails)
            .subscribe((result:any) => {
                console.log("data in http login result", result);
                try{
                    JSON.stringify(result);
                }catch(ex){
                    //if failed not a valid json
                }
                if(result.token){
                    localStorage.setItem('authToken',result.token);
                    this.pubsubSvc.pubLoginStatus("userLoggedIn");

                    this.router.navigateByUrl('profiles');
                }
            }, err => {
                console.log("data in http login error", err);
            })
    }

}