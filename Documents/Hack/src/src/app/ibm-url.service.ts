import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IbmUrlService {


  public ibmUrl = 'https://callforcode-microservice.mybluemix.net';

  constructor() { }
}
