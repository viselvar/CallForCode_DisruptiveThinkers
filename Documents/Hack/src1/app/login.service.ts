import { Injectable } from '@angular/core';
import { Http , HttpModule } from '@angular/http';
import { IbmUrlService } from './ibm-url.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : Http,private ibmUrls : IbmUrlService) { }


loginUser(user){
  return this.http.get(`${this.ibmUrls.ibmUrl}/login?userName=${user.uname}`);

}

donatersList(){

return this.http.get(`http://3.209.34.103:8888/hackathon/getAssociationDetails`);
}
}
