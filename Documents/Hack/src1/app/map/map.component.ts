import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { StepsComponent } from '../steps/steps.component';
import { StreamComponent } from '../stream/stream.component';
import { AssociationComponent } from 'src/app/association/association.component';
@Component({
  selector:  'app-map',
  templateUrl:  './map.component.html',
  styleUrls:  ['./map.component.css']
})
export class MapComponent implements OnInit {
  labelOptions = {
    color: '#ffffff',
    fontFamily:  '',
    fontSize:  '20px',
    fontWeight:  'bold',
    text:  'C1',
    };
    labelOptions2 = {
      fontWeight:  'bold',
      fontFamily:  '',
      };
    public origin:  {};
    public destination:  {};
    // marker : any;
    cluster:  any;
    circle = [
      {lat: 9.318327499999999, lng:  76.61108450000006, radius:  1000},
      {lat: 9.318327499999999, lng:  76.61108450000006, radius:  1500},
     // {lat:  9.3226437, lng:  76.605523, radius:  6000},
    ];
    marker = [
      {lat: 9.321027, lng: 76.609016},
     {lat: 9.315517, lng: 76.618072},
     {lat: 9.315900, lng: 76.606158},
    ];
    marker1 = [
      {lat: 9.321638, lng: 76.60642},
      // {lat: 9.321832, lng: 76.606666},
    ];
    markers = [
      {lat: 9.315517, lng: 76.618072},
    {lat: 9.324867, lng: 76.595009},
     {lat: 9.322642, lng: 76.623249},
     {lat: 9.308143, lng: 76.618726}
    ];
    // {lat: 9.32268459, lng:  76.60523494, radius: 100},
    trucks = [
      {lat: 9.323586, lng: 76.604300},
      {lat: 9.309874, lng: 76.599177},
      {lat: 9.327552, lng: 76.619495},
    ];
    coordinates = [
      {lat: 9.323586, lng: 76.604300},
    {lat: 9.324867, lng: 76.595009}, ];
    coordinates1 = [{lat: 9.327552, lng: 76.619495},
    {lat: 9.322642, lng: 76.623249}
    ];
    coordinates2 = [
      {lat: 9.323586, lng: 76.604300},
      {lat: 9.321027, lng: 76.609016}
      ];

  constructor(private dialog:  MatDialog) {

   }
  lat:  number;

  lng:  number;
  ngOnInit() {

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth =  500;
    dialogConfig.minHeight =  300;
    this.dialog.open(StepsComponent, dialogConfig);
  }

  openStreaming() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth =  500;
    dialogConfig.minHeight =  200;
    this.dialog.open(StreamComponent, dialogConfig);
    }

    openAssociations() {
      const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth =  400;
    dialogConfig.minHeight =  300;
    this.dialog.open(AssociationComponent, dialogConfig);
    }

}
