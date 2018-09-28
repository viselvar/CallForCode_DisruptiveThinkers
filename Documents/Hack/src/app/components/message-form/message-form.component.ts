import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  data: Array<object>=[];

  constructor() { }

  ngOnInit() {
  }
  public sendMessage(value): void {
let sfasfd = value
let timestamp = new Date();
let datal  = {
  "message" : sfasfd,
  "timing" : timestamp
}
sfasfd = ''
console.log(datal,sfasfd)
this.data.push(datal);
  }


  }


