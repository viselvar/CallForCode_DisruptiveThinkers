import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  constructor(private loginSev : LoginService) { }

  ngOnInit() {
  }
  trasulator(text){
console.log("text",text);

this.loginSev.langTrasulator(text).subscribe(res => {
console.log("res",res);
});
  }
}
