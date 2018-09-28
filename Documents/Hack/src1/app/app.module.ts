import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { StateMapComponent } from './state-map/state-map.component';
import { RouterModule, Routes} from '@angular/router';
import { MatCardModule, MatListModule, MatDialogModule, MatStepperModule } from '@angular/material';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { IndoorViewComponent } from './indoor-view/indoor-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationComponent } from './donation/donation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, FormsModule, FormControl} from '@angular/forms';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { UserLoginComponent } from './user-login/user-login.component';
import { StepsComponent } from './steps/steps.component';
import { StreamComponent } from './stream/stream.component';
import { CountryComponent } from './country/country.component';
import { FormComponent } from './form/form.component';
import { LocationComponent } from './location/location.component';
import { AssociationComponent } from './association/association.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpModule} from '@angular/http';
import { Map1Component } from './map1/map1.component';
const appRoutes: Routes = [
  { path: 'mapView', component: StateMapComponent },
  { path: 'campView1', component: Map1Component },
  { path: 'indoorView', component: IndoorViewComponent },
  { path: 'campView', component: MapComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donate', component: DonationComponent },
  { path: 'feedback', component: FormComponent },
  { path: '**', redirectTo: 'login' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    Map1Component,
    StateMapComponent,
    IndoorViewComponent,
    DashboardComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    DonationComponent,
    UserLoginComponent,
    StepsComponent,
     StreamComponent,
    CountryComponent,
    FormComponent,
    LocationComponent,
    AssociationComponent,
    FeedbackComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AgmCoreModule,
    ChartModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9N09q8rpaHvhI2t53HxMtD8zGkvUCRk8'
    }),
    AgmJsMarkerClustererModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatStepperModule
  ],
  entryComponents:  [
    StepsComponent,  StreamComponent, AssociationComponent
    ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } // add as factory to your providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
