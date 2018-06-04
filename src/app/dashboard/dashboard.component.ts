import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



declare var window: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
    public taskname:string="";
    date = "";
    description= "";
    taskUpdate="";
  
  
    
    public editItem:{ "taskname": string, "date": any, "description": any }=null;
  
     
     updateval:any;
    public update=false;
    public a :number=0;
    public myArray:any= JSON.parse(window.localStorage.getItem('key')) || []; 
    public match:any=[]        
    
constructor(private router:Router) {}


  ngOnInit() {
  this.match= JSON.parse(window.localStorage.getItem('key'));
   
  }
   
       onSubmit(form: any):void{
      
       this.a=0;
       this.taskname=form.taskname;
       this.date=form.date;
       this.description=form.description;
       
       if(this.taskname== "" && this.date=="" && this.description=="")
       {
         alert("Please fill task details.");
       } 
       else
       {
        this.match= JSON.parse(window.localStorage.getItem('key'));
         if(this.match==null){

          this.myArray.push(form);  
          window.localStorage.setItem('key',JSON.stringify(this.myArray));
          }
        else{
           for (var i = 0 ; i < this.match.length ; i++) {
              if((this.match[i].taskname) == this.taskname )
               {
                  this.a=1;
               }
            }
             if(this.a==0)
                {
                 this.myArray.push(form);
                 window.localStorage.setItem('key',JSON.stringify(this.myArray));
                 alert("Task data store");
                 
                }
             else{
                alert("This task is already present. Please enter other.");
                 }   
            }
         }  

             this.match= JSON.parse(window.localStorage.getItem('key'));  
             

             
      }


    delete(taskname:string, date:string, description:string){
        alert("Delete Successful");
        let fetchArray= JSON.parse(window.localStorage.getItem('key'));
           var j;


           
          for(var i=0; i< fetchArray.length; i++)
         {
           if (taskname == fetchArray[i].taskname && date==fetchArray[i].date && description==fetchArray[i].description)
            {

             j=i;
        
           }
        
         }  
 this.myArray.splice(j,1);
                 
                 window.localStorage.setItem('key',JSON.stringify(this.myArray));
                console.log(this.myArray);
             this.match= JSON.parse(window.localStorage.getItem('key'));

  }
edit(taskname:string){
  
       this.update=true;
       let fetchArray= JSON.parse(window.localStorage.getItem('key'));
       this.editItem = fetchArray.filter(fetchArray => fetchArray.taskname == taskname);
        this.taskname=this.editItem[0].taskname;  
        this.date=this.editItem[0].date;
        this.description=this.editItem[0].description;
        this.updateval=this.editItem[0].taskname;
   
   }

  
  updateItem(form: any):void{
   
   
    this.update=false;
       this.taskname=form.taskname;
  
       this.date=form.date;
       this.description=form.description;
       form.taskname=this.updateval;
       this.taskUpdate=form.taskname;
       
        let inLocalStorage= JSON.parse(window.localStorage.getItem('key'));
       
          let itemUpdate={ "taskname":this.taskname , "date": this.date, "description": this.description};
          var j;

if(this.taskname!=="" &&this.date!=="" &&this.description!=="" &&this.taskUpdate!=="")       
      {    for(var i=0; i< inLocalStorage.length; i++)
         {
           if (this.taskUpdate == inLocalStorage[i].taskname)
           {

             j=i;
        

                 this.myArray.splice(j,1,itemUpdate);
                
                 window.localStorage.setItem('key',JSON.stringify(this.myArray));
             this.match= JSON.parse(window.localStorage.getItem('key'));
           }
        
         } } 
        
}
  }