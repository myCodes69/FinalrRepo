import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Comp1Component } from './mod1/comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'newapp';
  myDate = new Date()
  public visible !: boolean
  @ViewChild(Comp1Component) child!:Comp1Component;
  ngAfterViewChecked(): void {
    // this.title = this.child.msg 
  }
  switch(){
    this.visible = !(this.visible)
  }
  m1(val:string){
     console.log(val);
     
  }
 
}
