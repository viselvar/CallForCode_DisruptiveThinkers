import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IbmUrlService {


  public ibmUrl = 'http://3.209.34.103:8888/hackathon';
  public ibmServicesUrl = 'https://ibm-ms.mybluemix.net';
  public ibmBlockchainUrl = 'http://ec2-18-222-237-57.us-east-2.compute.amazonaws.com:2600/api'
  constructor() { }
}
