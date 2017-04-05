import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-thread-row',
  inputs: ['thread'],
  templateUrl: './thread-row.component.html',
  styleUrls: ['./thread-row.component.css']
})
export class ThreadRowComponent implements OnInit {
  thread: PostComponent;

  constructor() { }

  ngOnInit() {
  }

}
