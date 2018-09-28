import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-map',
  templateUrl: './state-map.component.html',
  styleUrls: ['./state-map.component.css']
})
export class StateMapComponent implements OnInit {

  zoom = 8;
  centerLat = 10.2505;
  centerLng = 77.3711;
  markerId: string;
  circle: any[] = [
    //{lat:  9.3835, lng: 76.5741, radius: 10000},
    {lat:  9.4981, lng:76.3388, radius: 10000 ,color: 'red'},
    {lat: 10.0602, lng:  76.6351, radius: 10000,color: 'red'},
    {lat: 10.2244, lng:  76.1978, radius: 10000,color: 'red'},
   // {lat: 10.5303, lng: 76.2147, radius: 10000,color: 'red'},
    {lat: 9.3183, lng: 76.6111, radius: 10000,color: 'red'}
  ];
  markers: any[] = [
    {
      'lat': 9.3835,
      'lng': 76.5741,
      'title': 'Thiruvalla',
      'id': 'H101'
    },
    {
      'lat': 9.4498,
      'lng': 76.6701,
      'title': 'Mallapally',
      'id': 'H102'
    },
    {
      'lat': 9.4981,
      'lng': 76.3388,
      'title': 'Alappuzha',
      'id': 'H103'
    },
    {
      'lat': 9.3183,
      'lng': 76.6111,
      'title': 'Chengannur',
      'id': 'H104'
    },
    {
      'lat': 9.6836,
      'lng': 76.3365,
      'title': 'Cherthala',
      'id': 'H105'
    },
    {
      'lat': 9.2385,
      'lng': 76.5315,
      'title': 'Mavelikkara',
      'id': 'H106'
    },
    {
      'lat': 10.0602,
      'lng': 76.6351,
      'title': 'Kothamangalam',
      'id': 'H107'
    },
    {
      'lat': 10.1076,
      'lng': 76.3457,
      'title': 'Aluva',
      'id': 'H108'
    },
    {
      'lat': 9.9894,
      'lng': 76.5790,
      'title': 'Muvattupuzha',
      'id': 'H109'
    },
    {
      'lat': 10.0153,
      'lng': 76.4050,
      'title': 'Kunnathunad',
      'id': 'H110'
    },
    {
      'lat': 10.2102,
      'lng': 76.2624,
      'title': 'Mukundapuram',
      'id': 'H111'
    },
    {
      'lat': 10.6617,
      'lng': 76.2363,
      'title': 'Wadakkancheri',
      'id': 'H112'
    },
    {
      'lat': 10.2244,
      'lng': 76.1978,
      'title': 'Kodungallur',
      'id': 'H113'
    },
    {
      'lat': 10.5303,
      'lng': 76.2147,
      'title': 'Thissur',
      'id': 'H114'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMarkerInfo(selectedMarker) {
    console.log('check', selectedMarker);
    if(selectedMarker.title==="Thiruvalla"){
    this.router.navigate(['campView']);
  }
  else{
    this.router.navigate(['campView']);
  }
  }

}
