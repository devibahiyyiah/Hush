import { Component, OnInit, HostListener} from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-thread-row',
  inputs: ['thread'],
  host: {class: 'list-group-item list-group-item-action flex-column align-items-start'},
  templateUrl: './thread-row.component.html',
  styleUrls: ['./thread-row.component.css']
})
export class ThreadRowComponent implements OnInit {
  @HostListener('click') onClick() {
    this.expand();
  }

  thread: PostComponent
  likeButton: string
  textDisplayed: string
  expanded: boolean

  constructor() {
    this.likeButton = "+";
    this.expanded = false;
  }

  like(): void {
    if (!this.thread.isLiked) {
      this.thread.like();
    }
    else
      this.thread.dislike();
  }

  showDislike(): void {
    if (this.thread.isLiked)
      this.likeButton = "-";
  }

  hideDislike(): void {
    this.likeButton = "+";
  }

  expand(): void{
    if (!this.expanded) {
      this.expanded = true;
      this.textDisplayed = this.thread.text;
    }
    else{
      this.expanded = false;
      this.textDisplayed = this.thread.textSummary;
    }
  }

  ngOnInit() {
    this.textDisplayed = this.thread.textSummary;
  }

}
