import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
netImage:any = "../assets/chatbot.jpg";
menImage:any = "../assets/men.jpg";
message : any;
  data: Array<Object>=[];

  constructor() { }

  ngOnInit() {

  }
  public sendMessage(value): void {
let sfasfd = value
let timestamp = new Date();
let retuend = this.returnData(sfasfd,timestamp,this.menImage)
console.log(retuend,sfasfd)
this.data.push(retuend);


if(sfasfd === "Hi"){
  sfasfd = "How can i help you"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}else if(sfasfd === "Hello"){
 sfasfd = "How can i help you"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "food donation"){
 sfasfd = "You can contact to Helping Hand Organization.You can visit to their website www.helpinghand.org.in for more information or Contact them +011 2325469"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "Clothes donation"){
 sfasfd = "You can contact to Little Sunshine NGO.You can visit to their website www.littlesunshine.org.in for more information or Contact them +022 2328756"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "I am stuck up"){
 sfasfd = "What is your location"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "I am victim"){
 sfasfd = "What is your location"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "I need help"){
 sfasfd = "What is your location"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "What is my nearest help center"){
 sfasfd = "What is your location"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}else if(sfasfd === "empire state building"){
 sfasfd = "To get help you can go to Main Street Health center."
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "kochi"){
 sfasfd = "Here is the list of Camps.\n 1. kodungallur 2. Mukundapuram"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else if(sfasfd === "thiruvalla"){
 sfasfd = "Here is the list of Camps.\n 1. Thiruvalla\n 2. Chengannur\n 3.Mavelikkara"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
else{
  sfasfd = "I didn't understand can you try again"
  let retuend = this.returnData(sfasfd,timestamp,this.netImage)
  this.data.push(retuend);
}
this.message = '';
  }
  

  returnData(sfasfd,timestamp,img){
let datal  = {
  "message" : sfasfd,
  "timing" : timestamp,
  "img" : img
}
return datal;
  }


  }


