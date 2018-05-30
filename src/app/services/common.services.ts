import { Injectable } from '@angular/core';

@Injectable()

export class CommonService{
    private title:String;
    
    constructor(){
        this.title="Shopping-App";
    }  

    getTitle(){
        return this.title;
    } 
}