import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    listofPosts: Post[]=[
      
    ]
    constructor(private PostService: PostService){}

    ngOnInit():void{
      this.listofPosts=this.PostService.getPost()
    }
}

/*
new Post(
  "Tech Crunsh",
  "https://image.petmd.com/files/styles/863x625/public/2022-04/tan-dog-pooping-on-grass-picture-id91813795.jpg",
  "alex",
  "asda",
  new Date(),
  ) 
  */