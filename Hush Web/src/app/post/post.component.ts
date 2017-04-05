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
  	public numberOfLike: number,
  	public isLiked: boolean
  ) { }

  ngOnInit() {
  }

}
