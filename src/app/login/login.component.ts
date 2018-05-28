import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = "";
    password = "";
    public a:number=0;
    public cmpr:any=[];
    constructor(private router:Router) { }


    ngOnInit() {}
    
    onSubmit(form: any):void{
      
       this.email=form.email;
       this.password=form.password;
       this.a=0;
      
     if(this.email=="" && this.password=="")
      {
        alert("Enter your id and password");
      } 
      else
         {
         this.cmpr= JSON.parse(window.localStorage.getItem('value'));
        
          if(this.cmpr==null)
           {
            alert("Invalid Amuthentication");
           }
          else{

           for(var i = 0 ; i < this.cmpr.length ; i++) 
            {
             if((this.cmpr[i].email) == this.email && (this.cmpr[i].password == this.password))
              {
               this.a=1;
              }
             
             }
          if(this.a==1)
            {
            alert("Sign In successful. Welcome"); 
            this.router.navigate(['/dashboard']); 
            }
          else{
               alert("Incorect ID or password");
            }

          }
              
   }     
}
}