import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  formdata: any;
  constructor(private router : Router,private loginService : LoginService ) {
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   }); 
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }

   
 } 
 onClickSubmit(data) {


 console.log("daa",data);


this.loginService.loginUser(data).subscribe(res => {

   console.log("res",res["_body"]);

let loginPerson = res["_body"];

if(loginPerson === "login successfully" ){

  if(data.uname==="Donor"){
    this.router.navigate(['donate']); 
   }
  else if(data.uname==="Camp Coordinator"){
    this.router.navigate(['dashboard']);
  }
  else if(data.uname==="Central Fund Mgmt"){
    this.router.navigate(['mapView']);
  }  
}else{

  alert("please enter valid username");

}


});


}

}
