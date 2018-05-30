import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class PubsubService{

    loginStatus:Subject<any>=new Subject<any>();

    constructor(){

    }
    // publishing the user status
    pubLoginStatus(status:String){
        this.loginStatus.next(status);
    }

    // subscribing the login status
    subLoginStatus(){
        return this.loginStatus.asObservable();
    }



}