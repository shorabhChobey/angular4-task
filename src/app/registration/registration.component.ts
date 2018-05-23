import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var window: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
    name = "";
    email = "";
    password = "";
    a:number=0;
    public myData:any= JSON.parse(window.localStorage.getItem('value')) || []; 
    public cmpr:any=[]	      
    
constructor(private router:Router) {}


  ngOnInit() {}
   
       onSubmit(form: any):void{
       console.log(form);
       this.a=0;
       this.name=form.name;
       this.email=form.email;
       this.password=form.password;
       
       if(this.name== "" && this.email=="" && this.password=="")
       {
         alert("Please fill registration form first");
       } 
       else
       {
        this.cmpr= JSON.parse(window.localStorage.getItem('value'));
         if(this.cmpr==null)
         {
          this.myData.push(form);  
          window.localStorage.setItem('value',JSON.stringify(this.myData));
          }
        else{
           for (var i = 0 ; i < this.cmpr.length ; i++) 
           {  
            if((this.cmpr[i].email) == this.email && (this.cmpr[i].password == this.password))
               {
                  this.a=1;
                 
               }
          
              
            }
             if(this.a==0)
                {
                 this.myData.push(form);
                 window.localStorage.setItem('value',JSON.stringify(this.myData));
                 alert("successfully registered");
                 this.router.navigate(['/']); 
                }
             else{
                alert("already exist");
              }   
            }
         }   
      }
  }