import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { PageReservationComponent } from './pages/reservation/page-reservation/page-reservation.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { LaoderComponent } from './components/laoder/laoder.component';
import { CarComponent } from './components/car/car.component';
import { DetailVoitureComponent } from './components/detail-voiture/detail-voiture.component';
import { DetailVoyageComponent } from './components/detail-voyage/detail-voyage.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { RouterModule, Routes } from '@angular/router';
import { BoutonChaiseComponent } from './components/bouton-chaise/bouton-chaise.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationReservationModalComponent } from './components/validation-reservation-modal/validation-reservation-modal.component';

registerLocaleData(localeFr, 'fr');

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'reservation', component: CarComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageReservationComponent,
    MenuComponent,
    HeaderComponent,
    LaoderComponent,
    CarComponent,
    DetailVoitureComponent,
    DetailVoyageComponent,
    BoutonChaiseComponent,
    ValidationReservationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
