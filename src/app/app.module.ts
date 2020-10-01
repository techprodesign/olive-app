import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { OtpComponent } from './components/otp/otp.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentstepComponent } from './components/appointmentstep/appointmentstep.component';
import { AppfooterComponent } from './layout/appfooter/appfooter.component';
import { AddfamilyComponent } from './components/addfamily/addfamily.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { FamilymemberlistComponent } from './components/familymemberlist/familymemberlist.component';
import { CounsellorprofileComponent } from './components/counsellorprofile/counsellorprofile.component';
import { CounsellorClientComponent } from './components/counsellor-client/counsellor-client.component';
import { CounsellorclientprofileComponent } from './components/counsellorclientprofile/counsellorclientprofile.component';
import { CounsellorclientmessageComponent } from './components/counsellorclientmessage/counsellorclientmessage.component';
import { ClientnotesComponent } from './components/clientnotes/clientnotes.component';
import { ClientinvoiceComponent } from './components/clientinvoice/clientinvoice.component';
import { ClientContactComponent } from './components/client-contact/client-contact.component';
import { ClientresetpassowrdComponent } from './components/clientresetpassowrd/clientresetpassowrd.component';
import { ClientresetpasswordComponent } from './components/clientresetpassword/clientresetpassword.component';
import { CounsellorfacilityComponent } from './components/counsellorfacility/counsellorfacility.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SettingComponent,
    OtpComponent,
    AppointmentComponent,
    AppointmentstepComponent,
    AppfooterComponent,
    AddfamilyComponent,
    FamilymemberlistComponent,
    CounsellorprofileComponent,
    CounsellorClientComponent,
    CounsellorclientprofileComponent,
    CounsellorclientmessageComponent,
    ClientnotesComponent,
    ClientinvoiceComponent,
    ClientContactComponent,
    ClientresetpassowrdComponent,
    ClientresetpasswordComponent,
    CounsellorfacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
