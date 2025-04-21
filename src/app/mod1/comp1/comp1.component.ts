import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{
  public msg!:string
  constructor(private api:ApiService){
    api.obs$.subscribe((data:string)=>{
      this.msg = data
    })
    // setTimeout(() => {
    //   api.sub.next('changed')
    // }, 4000);
  }
//  public msg:string = this.api.obs$

}
