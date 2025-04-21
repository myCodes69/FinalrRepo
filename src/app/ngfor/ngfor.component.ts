import { Component, EventEmitter, Input, Output } from '@angular/core';
// import stds, { std } from 'src/interface';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
//  public students : std[] = stds 
 @Input() public child !: string
  public op!: string
  @Output() eveemit = new EventEmitter()
 send2parent(val:any){
  this.op = val.value
  this.eveemit.emit(this.op)
  
 }
}
