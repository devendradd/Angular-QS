import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
   name: string ;
   Email: string  ;
   Address: address ;
   Hobbies: string[]; 
   ShowHbbies: boolean;
   postsArray: Post[];
   /**
    
    */
   constructor(private postsService: PostsService) {
     console.log('here');
     
       this.name = 'Devendra Deo';
       this.Email = 'this.devendra@gmail.com';
       this.Address = {
         street:'New DP Road',
         city: 'Pune'
       };
       this.Hobbies = ['Music', 'paintings', 'sports']; 
       this.ShowHbbies= false;
       
       this.postsService.getPosts().subscribe(
         posts => {this.postsArray = posts
      });
   }   

   toggleHobbies(){
        console.log("here");
        if(this.ShowHbbies == true){
            this.ShowHbbies = false;
            
        }else{
            this.ShowHbbies=true;
            
        }
        
   }

   addHobby(hobby: any){
      console.log(hobby);
      this.Hobbies.push(hobby);
      
   }

   deleteHobby(i: any){
      this.Hobbies.splice(i, 1);
   }
  }

  interface address{
    street: string;
    city: string;
}

  interface Post{
    id: number;
    title: string;
    body: string;
  }