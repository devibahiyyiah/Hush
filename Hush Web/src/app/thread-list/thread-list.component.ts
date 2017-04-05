import { Component, OnInit } from '@angular/core';
import { ThreadRowComponent } from '../thread-row/thread-row.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threadList: PostComponent[];

  constructor() { 
  	this.threadList = [
  	  new PostComponent('syj', 'Describe the city you live in', 0, false),
  	  new PostComponent('Kan', 'Hao hao hao', 0, false)
  	];
  }

  ngOnInit() {
  }

}
