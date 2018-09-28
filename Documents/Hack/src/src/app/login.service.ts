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

machineLearning(){
    return this.http.get(` https://callforcode-microservice.mybluemix.net/machineLearning`);

 
}
chatbot(){

 return this.http.get(` https://callforcode-microservice.mybluemix.net/ChatWatson`);
}

donatersList(){

return this.http.get(`${this.ibmUrls.ibmUrl}/getAssociationDetails`);
}

getAllMedicalShops(){

return this.http.get(`${this.ibmUrls.ibmUrl}/getAllMedicalShops`);
}

languTrans(daat){
  return this.http.get(`https://callforcode-microservice.mybluemix.net/languageTrans${daat}`);

}

forecastData(){
    return this.http.get(`https://twcservice.mybluemix.net/api/weather/v1/geocode/9.3/76.5/forecast/daily/3day.json`);

}

}
