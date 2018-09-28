import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl ,NgForm,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MessageFormComponent } from '../components/message-form/message-form.component';

export interface Association {
  id: number;
  value: string;
  viewValue: string;
}

export interface AssociationGroup {
  disabled?: boolean;
  name: string;
  associate: Association[];
}

export interface Application {
  id : number;
  value: string;
  viewValue: string;
}




@Component({
  selector: 'donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  groupDetails ; donateType ; donateFunds : any;

  constructor(private login : LoginService,private dialog:  MatDialog) { }

  ngOnInit() {



  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth =  500;
    dialogConfig.minHeight =  300;
    this.dialog.open(MessageFormComponent, dialogConfig);
  }
  
  associationControl = new FormControl();
  associationGroups: AssociationGroup[] = [
    {
     
      name: 'Government based organisations',
      associate: [
        { id: 1000, value: 'Helping Hand', viewValue: 'Helping Hand'}
      ]
    },
    {
      name: 'Non-government organisations',
      associate: [
        { id: 9999,value: 'A Ray Of Hope', viewValue: 'A Ray Of Hope'},
        { id: 9998,value: 'Little Sunshine', viewValue: 'Little Sunshine'},
        { id: 9997,value: 'Soch', viewValue: 'Soch'},
        { id: 9996,value: 'WeKare', viewValue: 'WeKare'}
      ]
    }
  ];


   application: Application[] = [
    {id: 8889, value: 'PhonePe', viewValue: 'PhonePe'},
   {id: 8880,value: 'Paytm', viewValue: 'Paytm'},
     {id: 8888, value: 'Tez', viewValue: 'Tez'}
   ]
   associate : any;
   donateFund() {
    console.log("xcxx",this.groupDetails,this.donateType, this.donateFunds);
    let groupNGO: any;
    let groupGovtBody: any;
    if(this.groupDetails == 9999){
     groupNGO = 9999;
     groupGovtBody = '';
    }else if(this.groupDetails == 1000){
      groupGovtBody = 1000;
      groupNGO = '';
    }


    let donateObj = {
      "$class" : "org.cg.hackathon.postdisaster.DonateForDisaster",
      "donar": "org.cg.hackathon.postdisaster.Donor#varun1234@gmial.com",
      "Amount": this.donateFunds,
      "centralFundWallet": "org.cg.hackathon.postdisaster.CentralFundWallet#123",
      "paymentWallet": `org.cg.hackathon.postdisaster.PaymentWallet#${this.donateType}`,
      "ngo": `org.cg.hackathon.postdisaster.NGO#${groupNGO}`,
      "govtBody": `org.cg.hackathon.postdisaster.GovtBody${groupGovtBody}`,
      "transactionId": "string",
      "timestamp": "2018-09-20T08:13:25.682Z"
    }
    this.login.donateFund(donateObj).subscribe( res => {
      console.log(res);

    });

   }

}
