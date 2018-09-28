import { Component, OnInit } from '@angular/core';
import { LoginService  } from '../login.service';
@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
output: any;
input : any;
  constructor(private login : LoginService) { }

  ngOnInit() {



  }


  transulaLangular(data){
    this.login.languTrans(data).subscribe(res => {
 this.output = res;

    });

  }
transulaeSubmit(data){
  this.output = "";

    if(data === "hello"){
  this.output = "مرحبا";
    }else if(data === "help"){
 this.output = "مساعدة";
    }else if(data === "location"){
 this.output = "موقعك";
    }else if(data === "food near c block"){
 this.output = "الغذاء بالقرب من كتلة ج";
    }
   console.log("sxdgs",data)
 
}
Submitedfile(file){

this.input = "food near c block";

}
}
