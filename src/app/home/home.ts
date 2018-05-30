import { Component } from '@angular/core';

import { DataService } from '../services/data.service';


@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent {
    countries: any;
    receivedItem:string;

    testArray:any;

    latitude: number;
    longitude: number;

    locationChosen: boolean;



    constructor(private dataSvc: DataService) {
        
        this.latitude = -25.96;
        this.longitude = 28.09;

        this.locationChosen = false;

        this.getAllData();

        this.countries = this.dataSvc.getCountries();
    }

    onChoseLocation(event) {
        console.log(event);
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;

        this.locationChosen = true;
    }

    receivedMsg(item){
        this.receivedItem = item;
        console.log("received message from child====>>",item);
    }

    getAllData(){
        this.dataSvc.getTestData()
        .subscribe(result=>{
            console.log("i m in get all data positive result====>>>",result);
            this.testArray=result;
            console.log("i m in get all data positive result====>>>",this.testArray)
        },err=>{
            console.log("i m in get all data negative result====>>>",err)
        })
    }
}