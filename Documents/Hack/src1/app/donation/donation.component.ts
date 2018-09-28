import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
export interface Association {
  value: string;
  viewValue: string;
}

export interface AssociationGroup {
  disabled?: boolean;
  name: string;
  associate: Association[];
}

export interface Application {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor() { }

  ngOnInit() {



  }
  
  associationControl = new FormControl();
  associationGroups: AssociationGroup[] = [
    {
      name: 'Government based organisations',
      associate: [
        {value: 'Helping Hand', viewValue: 'Helping Hand'}
      ]
    },
    {
      name: 'Non-government organisations',
      associate: [
        {value: 'A Ray Of Hope', viewValue: 'A Ray Of Hope'},
        {value: 'Little Sunshine', viewValue: 'Little Sunshine'},
        {value: 'Soch', viewValue: 'Soch'},
        {value: 'WeKare', viewValue: 'WeKare'}
      ]
    },
  ];


   application: Application[] = [
    {value: 'PhonePe', viewValue: 'PhonePe'},
   {value: 'Paytm', viewValue: 'Paytm'},
     {value: 'Tez', viewValue: 'Tez'}
   ]


}
