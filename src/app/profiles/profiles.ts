import { Component } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
    selector: 'profiles',
    templateUrl: './profiles.html', 
    styleUrls: ['./profiles.css']
})

export class ProfileComponent {
    urlToGetAllProfiles: String;
    profiles: any;
    selectedProfile:any;
    indexedProfiles:any;

    selectedItem:any;

    constructor(private dataSvc: DataService) {
        this.profiles = [];
        this.indexedProfiles=[];
        this.urlToGetAllProfiles = "http://localhost:4000/nkart/api/getprofiles";
        this.getAllProfiles();
    }

    getAllProfiles() {
        this.dataSvc.getData(this.urlToGetAllProfiles)
            .subscribe(result => {
                console.log("data in get data result is ", result);
                this.profiles = result;
                this.indexedProfiles=this.profiles.map(function(x,i){
                    return {
                        index:i+1,
                        firstName:x.firstName,
                        lastName:x.lastName,
                        age:x.age,
                        gender:x.gender,
                        phoneNumber:x.phoneNumber,
                        country:x.country,
                        agree:x.agree,
                        userName:x.userName,
                        CreatedDate:x.CreatedDate
                    }
                })
                console.log(this.profiles);
            }, err => {
                console.log("data in get data error is ", err);
            })
    }

    getProfileByRow(p) {
        console.log("i m in get profile by row");
        this.dataSvc.getData(this.urlToGetAllProfiles +"/"+ p.userName)
        .subscribe(result=>{
            console.log("data in get profile by row RESULT is:",result);
            this.selectedProfile=result;

            this.selectedItem=result;

        },err=>{
            console.log("data in get profile by row ERROR is:",err)
        })
    }
}