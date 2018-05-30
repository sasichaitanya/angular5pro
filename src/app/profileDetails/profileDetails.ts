import { Component ,Input} from  '@angular/core';

@Component({
    selector:'profiledetails',
    templateUrl:'./profileDetails.html',
    styleUrls:['./profileDetails.css']
})

export class ProfileDetailsComponent{
     
    @Input()
    selectedProfile:any;

    constructor(){

    }
}