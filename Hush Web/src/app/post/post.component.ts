import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
  	public owner: string,
  	public text: string,
    public postedTime: string,
  	public numberOfLike: number,
  	public isLiked: boolean
  ) { }

  like(): void {
    if (!this.isLiked){
      this.numberOfLike += 1;
      this.isLiked = true;
    }
  }  


  ngOnInit() {
  }
}
