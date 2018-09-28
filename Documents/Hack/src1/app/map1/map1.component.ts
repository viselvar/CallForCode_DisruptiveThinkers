import { Component, OnInit } from '@angular/core';
import { MatDialogConfig,MatDialog } from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {
  labelOptions = {
    color:"#ffffff",
    fontFamily: '',
   
 fontSize: '20px',
    fontWeight: 'bold',
    text: 'C1',
    animation:'BOUNCE'
  
  }
   
 labelOptions2 = {
      
      fontWeight: 'bold',
      fontFamily: '',
      }
 
   
  
  //marker :any;
    cluster: any;
 
   circle = [
      {lat:9.3835433333, lng: 76.57414455555, radius: 1000},
   
   {lat:9.3835433333, lng: 76.57414455555, radius: 1500},
     // {lat: 9.3226437, lng: 76.605523, radius: 6000},
    ];
  
  marker = [
      {lat:9.371454, lng:76.578383},
     //{lat:9.389595,lng:76.520621},
    {lat:9.371414,lng:76.520606},
    ];
   
 marker1 = [
      {lat:9.382100, lng:76.585000},
      // {lat:, lng:},
    ];
  
  markers = [
      {lat:9.266161,lng:76.783939},
    {lat:9.3784,lng:76.5566},
    {lat:9.3895,lng:76.5717},
   
  {lat:9.393924,lng:76.578423},
  {lat:9.3846,lng:76.5878}
    ];
    // {lat:9.32268459, lng: 76.60523494, radius:100},
   
 trucks=[
      {lat:9.381212,lng:76.574141},
      {lat:9.378383,lng:76.564245},
      {lat:9.381024,lng:76.581764},
    ]
   coordinates=[
      {lat:9.381212,lng:76.574141},
      {lat:9.3895,lng:76.5717},]
   coordinates1=[{lat:9.378383,lng:76.564245},   
    {lat:9.3784,lng:76.5566},
    ]
    
coordinates3=[
      {lat:9.381024,lng:76.581764},   
      {lat:9.393924, lng:76.578423},
      
      ]
      coordinates2=[
        {lat:9.381024,lng:76.581764}, 
        {lat:9.3846,lng:76.5878},
      ]
  constructor(private dialog: MatDialog) { }
  lat: number;
  
  lng: number;
  ngOnInit() {
  }

}
