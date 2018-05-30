import { Directive } from '@angular/core';

import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
    selector:'[simple]'
})

export class SimpleDirective{

    @HostListener('mouseover',['$event'])
    mouseOvered(e){
        console.log("mouse overed :",e)
        this.el.nativeElement.style="background:yellow";
    }

    @HostListener('mouseleave',['$event.target'])
    mouseLeaved(e){
        this.el.nativeElement.style="background:green";

    }


    constructor(private el:ElementRef){
       
    }
}