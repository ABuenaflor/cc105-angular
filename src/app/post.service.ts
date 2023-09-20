import { Injectable } from "@angular/core";
import { Post } from "./post.model";
@Injectable ({providedIn:'root'})

export class PostService{
  listofPosts: Post[]=[
    new Post(
      'PAKYO ERICK',
      'https://image.petmd.com/files/styles/863x625/public/2022-04/tan-dog-pooping-on-grass-picture-id91813795.jpg',
      'description',
      'author:',
       new Date,
    ),
    new Post(
      'PAKYO AUS',
      'https://t3.ftcdn.net/jpg/04/03/46/38/360_F_403463886_kuH04q6krNOGSSD53qQsTWaZMUTXEluo.jpg',
      'description',
      'author:',
      new Date,
    )
  ]
  getPost(){
    return this.listofPosts;
  }
  deletePost(index: number){
    this.listofPosts.splice(index,1)
  }
  addPost(post: Post){
    this.listofPosts.push(post);
  }
  updatePost(index: number, post: Post){
    this.listofPosts[index]
  }
  
}

/*
getPost(){
    return this.listofPosts;
  }
  deletePosts(){
    this.listofPosts.splice(index,0);
  }
  addPost(){
    this.listofPosts.push(post);
  }
  updatePost(index:number, post:Post){
    this.listofPosts[index]=post;
  }
*/