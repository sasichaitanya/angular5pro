import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
    selector:'[numberOnly]'
})

export class NumberOnlyDirective{

    @HostListener('keypress',['$event'])
    keyentered(e){
        console.log("in key entered:",e)
        if(e.charCode>=48 && e.charCode<=57){
            this.el.nativeElement.style="background:yellow";
            return true;
        }else{
            this.el.nativeElement.style="background:red";
            return false;
        }
    }

    @HostListener('mouseleave',['$event'])
    mouseLeave(e){
        this.el.nativeElement.style="background:white";
    }

    constructor(private el:ElementRef){

    }
}