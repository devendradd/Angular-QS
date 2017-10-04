import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>
      Hello {{name}}
    </h1>
    <p>
      <strong>
        Email:
      </strong> 
      {{Email}}
      
    </p>
    <p>
      <strong>
        Address:
      </strong> 
      {{Address.street}} , {{Address.city}}
      
    </p>
    <button (click)="toggleHobbies()"> {{ShowHbbies ? "Hide Hobbies" : "Show Hobbies"}} </button>
    <div *ngIf = "ShowHbbies">
        <h3> Hobbies </h3> 
        <ul>
            <li *ngFor="let hobby of Hobbies">
                {{hobby}}
            </li>
        </ul>
    </div>
    `,
})
export default class UserComponent  {
   name: string ;
   Email: string  ;
   Address: address ;
   Hobbies: string[]; 
   ShowHbbies: boolean;
   
   /**
    
    */
   constructor() {
       this.name = 'Devendra Deo';
       this.Email = 'this.devendra@gmail.com';
       this.Address = {
         street:'New DP Road',
         city: 'Pune'
       };
       this.Hobbies = ['Music', 'paintings', 'sports']; 
       this.ShowHbbies= false;
       
   }   

   toggleHobbies(){
        console.log("here");
        if(this.ShowHbbies == true){
            this.ShowHbbies = false;
            
        }else{
            this.ShowHbbies=true;
            
        }
        
   }
  }

  interface address{
    street: string;
    city: string;
}
