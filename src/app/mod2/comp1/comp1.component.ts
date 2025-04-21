import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-comp1m2',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
constructor(private api:ApiService){
  
}
ngOnInit(): void {
    this.api.fetchdata().subscribe((data:any)=>{
      console.log(data);
      
    })
    setTimeout(() => {
      this.api.sub.next('changed from another component')
    }, 4000);
}
 
}


