import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  textSummary: string
  maximalTextDisplay: number

  constructor(
  	public owner: string,
  	public text: string,
    public postedTime: string,
  	public numberOfLike: number,
  	public isLiked: boolean
  ) {
    this.maximalTextDisplay = 100;
    this.textSummary = this.text.slice(0, this.maximalTextDisplay);
    if (this.text.length > this.maximalTextDisplay)
      this.textSummary = this.textSummary + " ..."
  }

  like(): void {
    this.numberOfLike += 1;
    this.isLiked = true;
  }

  dislike(): void {
    this.numberOfLike -= 1;
    this.isLiked = false;
  }  

  ngOnInit() {
  }

}
