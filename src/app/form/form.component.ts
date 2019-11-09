import { Component, OnInit } from '@angular/core';
import { CallserviceService } from '../callservice.service';
import{FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  result;

  constructor(private fm:FormBuilder,private s:CallserviceService) { }
    userfm=this.fm.group({
      fname:[''],
      lname:[''],
      email:['']
    })
   addfm=this.fm.group({
     id:['',Validators.required],
    fname:['',Validators.required,Validators.minLength(5),Validators.maxLength(8)],
    lname:['',Validators.required,Validators.minLength(8),Validators.maxLength(12)],
    email:['',,Validators.required,Validators.pattern]
   })
   modalfm=this.fm.group({
    id:[''],
   fname:[''],
   lname:[''],
   email:['']
  })
  ngOnInit(){
    this.getall()
  }
  sub()
   {
    this.s.postdata(this.addfm.value).subscribe(res=>{this.result=res
    console.log(res)
    this.getall()
  })
    
   }
   getall(){
     this.s.getdata().subscribe(res=>{(this.result=res)
      console.log(res)})
   }    
   delete(r){
     this.s.deletedata(r).subscribe(res=>{(this.result=res)
    console.log(res)
    this.getall()
  })
   }
  edit(s){
    this.modalfm.patchValue({
      id:s.id,
      fname:s.fname,
      lname:s.lname,
      email:s.email,

    })
  }
  update(){
   this.s.updatedata(this.modalfm.value).subscribe(res=>{this.result=res
  console.log(res)
  this.getall()
})
  }
}
