import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-write-feed',
  templateUrl: './write-feed.component.html',
  styleUrls: ['./write-feed.component.css']
})
export class WriteFeedComponent implements OnInit {
  @Output() send = new EventEmitter<Object>();
  text;

  constructor() { }

  ngOnInit() {
  }

  onSend(e: String) {
    this.send.emit(this.text);
    this.text = '';
  }
}
