import { Component } from '@angular/core';

// inbuilt service
import { Router } from '@angular/router';
// custom
import { CommonService } from '../services/common.services';
import { PubsubService } from '../services/pubsub.service';


@Component({
    selector:'top-nav',
    templateUrl:'./topnav.component.html',
    styleUrls:['./topnav.component.css']
})

export class TopNavComponent {
    title:String;
    isUserLoggedIn:boolean;

    constructor(private commonSvc:CommonService,private pubsubSvc:PubsubService,
        private router:Router){
        this.title = this.commonSvc.getTitle();

        this.updateTopnav();
        this.updateTop();
    }

    
    updateTopnav(){
        this.pubsubSvc.subLoginStatus()
        .subscribe(result=>{
            console.log("positive response in pub sub service is :",result);
            if(result=='userLoggedIn'){
                this.isUserLoggedIn=true;
            }else{
                this.isUserLoggedIn=false;
                this.router.navigateByUrl('login');
            }
        },err=>{
            console.log("negative response in pub sub service is :",err);
        })
    }

    updateTop(){
        if(localStorage.getItem('authToken')){
            this.isUserLoggedIn=true;
        }else{
            this.isUserLoggedIn=false;
        }
    }

    logout(){
        localStorage.removeItem('authToken');
        this.pubsubSvc.pubLoginStatus('loggedout'); 
    }
}