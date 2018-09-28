import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  {

 
  selectedLocation = 0;
  selectedCampdetail = 0;
 
  title = 'app';
  Campdetails = [];
  // cities = [];
 
 
  onSelectLocation(Location_id: number) {
    this.selectedLocation = Location_id;
    this.selectedCampdetail = 0;
    // this.cities = [];
    this.Campdetails = this.getCampdetails().filter((item) => {
      return item.Location_id === Number(Location_id)
    });
  }
 
  onSelectCampdetail(Campdetail_id: number) {
    this.selectedCampdetail = Campdetail_id;
    // // this.cities = this.getCity().filter((item) => {
    //   return item.state_id === Number(state_id)
    // });
  }
 
  getLocations() {
    return [
      { id: 1, name: 'Thane' },
      { id: 2, name: 'Airoli' },
      { id: 3, name: 'Vashi' }
    ];
  }
 
  getCampdetails() {
    return [
      { id: 1, Location_id: 1, name: 'camp1.thane' },
      { id: 2, Location_id: 1, name: 'camp2.thane' },
      { id: 3, Location_id: 2, name: 'camp1.Airoli' },
      { id: 4, Location_id: 2, name: 'camp2.airoli' },
      { id: 5, Location_id: 3, name: 'camp1.Vashi' },
      { id: 6, Location_id: 3, name: 'camp2.vashi' },
    ]
  }
  getUrl()
{
  return "url('https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwig1pKq0YzdAhVIfysKHfSoDk4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.freepik.com%2Ffree-psd%2Fabstract-background-design_1055788.htm&psig=AOvVaw13HF6iZ8psxOHJxv6gby0w&ust=1535438777716766')";
}
 
  // getCity() {
  //   return [
  //     { id: 1, state_id: 1, name: 'Thane' },
  //     { id: 2, state_id: 1, name: 'Vashi' },
  //     { id: 3, state_id: 1, name: 'Airoli' },
  //     { id: 4, state_id: 1, name: 'Kurla' },
  //     { id: 5, state_id: 2, name: 'Warangal' },
  //     { id: 6, state_id: 2, name: 'Hyderabad' },
  //     { id: 7, state_id: 2, name: 'Karimnagar' },
  //     { id: 8, state_id: 2, name: 'Kadapa' },
  //     { id: 9, state_id: 3, name: 'SOMA' },
  //     { id: 10, state_id: 3, name: 'Richmond' },
  //     { id: 11, state_id: 3, name: 'Sunset' },
  //     { id: 12, state_id: 4, name: 'Burbank' },
  //     { id: 13, state_id: 4, name: 'Hollywood' },
  //     { id: 14, state_id: 5, name: 'Sunset' },
  //     { id: 15, state_id: 5, name: 'Burbank' },
  //     { id: 16, state_id: 5, name: 'Hollywood' },
  //     { id: 17, state_id: 6, name: 'Benalla' },
  //     { id: 18, state_id: 6, name: 'Melbourne' },
  //   ]
  // }





}
