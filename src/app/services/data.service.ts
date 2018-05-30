import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {
    private countries: any;
    countriesList:any;

    name:string;

    constructor(private http:HttpClient) {

        

        this.countriesList = [
            { name: 'India', code: 'IN' },
            { name: 'United States', code: 'USA' },
            { name: 'Australia', code: "AUS" },
            { name: 'Newzeland', code: 'NZ' }
        ]

       
        this.countries= this.countriesList.map(x=>{
            return {text:x.name,value:x.code};
        })

    }


    registerUser(payLoad){
        let url = 'http://localhost:4000/nkart/api/register';
        return this.http.post(url,payLoad);
    }

    loginUser(payLoad){
        let url= 'http://localhost:4000/nkart/api/login';
        return this.http.post(url,payLoad);
    }

    getData(url){
        return this.http.get(url);
    }

    getCountries() {
        return this.countries;
    }

    getTestData(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
}