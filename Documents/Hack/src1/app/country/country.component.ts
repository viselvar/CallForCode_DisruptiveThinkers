import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  selectedCountry = 0;
  selectedState = 0;
  selectedAname = 0;

  title= 'app';
  States = [];
  ANames = [];

  onSelectCountry(CountryId: number) {
    this.selectedCountry = CountryId;
    this.selectedState = 0;
    this.States = this.getStates().filter((item) => {
      return item.CountryId === Number(CountryId)
    } );
  }


  onSelectState(StateId: number) {
    this.selectedState = StateId;
    this.selectedAname = 0;
    this.ANames = this.getAnames().filter((item) => {
       return item.StateId === Number(StateId)
   } );
  }

  onselectAname(AnameId: number) {
    this.selectedAname = AnameId;
  }

  
  getCountries() {
    return [
      { id: 1, name: 'India'},
      { id: 2, name: 'Switzerland'},
      { id: 3, name: 'Mexico'}
    ];
  }

  getStates() {
    return [
      { id: 1, CountryId: 1, name: 'AndhraPradesh'},
      { id: 2, CountryId: 1, name: 'Telangana'},
      { id: 3, CountryId: 1, name: 'Kerala'},

      { id: 4, CountryId: 2, name: 'Geneva'},
      { id: 5, CountryId: 2, name: 'Bern'},
      { id: 6, CountryId: 2, name: 'Ticino'},

      { id: 7, CountryId: 3, name: 'Sinaloa'},
      { id: 8, CountryId: 3, name: 'Veracruz'},
      { id: 9, CountryId: 3, name: 'Jalisco'},
    ]

  }

  getAnames() {
    return [
      { id: 1, StateId: 1, name: 'GiveIndia'},
      { id: 2, StateId: 1, name: 'Heritage Action'},

      { id: 3, StateId: 2, name: 'The Foundation for a Better Life'},
      { id: 4, StateId: 2, name: 'SCARE for a CURE'},

      { id: 5, StateId: 3, name: 'Network for Good'},
      { id: 6, StateId: 3, name: 'Lifeline Express'},

      { id: 7, StateId: 4, name: 'John A. Hartford Foundation'},
      { id: 8, StateId: 4, name: 'Epilepsy Foundation'},

      { id: 9, StateId: 5, name: 'Drosos Foundation'},
      { id: 10, StateId: 5, name: 'GlobalGiving'},

      { id: 11, StateId: 6, name: 'Lifeline Express'},
      { id: 12, StateId: 6, name: 'Robert Bosch Stiftung'},

      { id: 13, StateId: 7, name: 'Pin-ups for Vets'},
      { id: 14, StateId: 7, name: 'Opportunity International'},

      { id: 15, StateId: 8, name: 'Realdania'},
      { id: 16, StateId: 8, name: 'Norwegian Mission Alliance'},

      { id: 17, StateId: 9, name: 'Saint Camillus Foundation'},
      { id: 18, StateId: 9, name: 'W. K. Kellogg Foundation'},

    ]
  }
}
