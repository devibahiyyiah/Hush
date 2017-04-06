import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-thread-row',
  inputs: ['thread'],
  host: {class: 'list-group-item list-group-item-action flex-column align-items-start'},
  templateUrl: './thread-row.component.html',
  styleUrls: ['./thread-row.component.css']
})
export class ThreadRowComponent implements OnInit {
  thread: PostComponent;

  constructor() { }

  like(): void {
    this.thread.like();
  }  
  ngOnInit() {
  }

}
