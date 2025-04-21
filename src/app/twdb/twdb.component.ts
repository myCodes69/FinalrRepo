import { Component } from '@angular/core';

@Component({
  selector: 'app-twdb',
  templateUrl: './twdb.component.html',
  styleUrls: ['./twdb.component.css']
})
export class TwdbComponent {
public name !: string;
change():void{
  this.name = 'changed by method'
}
}
