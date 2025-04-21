import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import {uuidv4} from 'uuid'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
 public userForm!:FormGroup
 public isSubmitted = false
 public quad :string [] = ['India','Japan','USA','Aus']
 constructor(private fb:FormBuilder){
  this.userForm = fb.group({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    age:new FormControl('',[Validators.required,this.formvalidator]),
    address:fb.group({
      streetname:new FormControl('',[Validators.required]),
      zipcode:new FormControl('',[])
    }),
    password:new FormControl('',[Validators.required]),
    confrmpass:new FormControl('',[]),
    drpdown:new FormControl('',[Validators.required]),
    radiobtn:new FormControl('',[Validators.required])
  },{validator:this.passmatch})
 }
 mysubmit(){
  this.isSubmitted = true
  if(this.userForm.valid){
    console.log(this.userForm.value);
    this.isSubmitted = false
    this.userForm.reset();
  }
  
 }
 formvalidator(control:AbstractControl):ValidationErrors|null{
  if(control.value >= 18){
    return null
  }
  else{

    return {errmsg : 'should be at least 18'}
  }
 }

 passmatch(control:AbstractControl):ValidationErrors | null {
  // let ismatch!:boolean
  // if(control.get('password')?.valid)
    return control.get('password')?.value === control.get('confrmpass')?.value ? null : {matcherr:'Password mismatch'}
}
}
