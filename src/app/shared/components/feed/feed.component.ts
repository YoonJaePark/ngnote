import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input('content') content: Board;
  @Input('isMine') isMine: boolean;
  @Output('onOk') onOk:EventEmitter<any> = new EventEmitter(); 
  @Output('onDelete') onDelete: EventEmitter<any> = new EventEmitter();

  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleEdit() {
    this.isEdit = true;
  }

  handleOk(content) {
    this.isEdit = false;
    this.onOk.emit(content);
  }

  handleCancle() {
    this.isEdit = false;
  }

  handleDelete(content) {
    this.onDelete.emit(content.key);
  }
}
