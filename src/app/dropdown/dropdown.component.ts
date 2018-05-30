import { Component ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  selectedOption:any;

  @Input()
  dataList:any;

  @Output()
  messageEvent = new EventEmitter<string>();

  constructor() {
    
  
   }

   sendMessage(){
    this.messageEvent.emit(this.selectedOption);
   }


}
