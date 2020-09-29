import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { OtpComponent } from './components/otp/otp.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentstepComponent } from './components/appointmentstep/appointmentstep.component';
import { AddfamilyComponent } from './components/addfamily/addfamily.component';
import { FamilymemberlistComponent } from './components/familymemberlist/familymemberlist.component';
import { CounsellorprofileComponent } from './components/counsellorprofile/counsellorprofile.component';
import { CounsellorClientComponent } from './components/counsellor-client/counsellor-client.component';
import { CounsellorclientprofileComponent } from './components/counsellorclientprofile/counsellorclientprofile.component';
import { CounsellorclientmessageComponent } from './components/counsellorclientmessage/counsellorclientmessage.component';
import { ClientnotesComponent } from './components/clientnotes/clientnotes.component';
import { ClientinvoiceComponent } from './components/clientinvoice/clientinvoice.component';
import { ClientContactComponent } from './components/client-contact/client-contact.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'profile',component:ProfileComponent},
{path:'setting',component:SettingComponent},
{path:'otp',component:OtpComponent},
{path:'appointment',component:AppointmentComponent},
{path:'appointmentstep',component:AppointmentstepComponent},
{path:'addfamily',component:AddfamilyComponent},
{path:'familylist',component:FamilymemberlistComponent},
{path:'counsellorprofile',component:CounsellorprofileComponent},
{path:'counsellorclients',component:CounsellorClientComponent},
{path:'counsellorclientprofile',component:CounsellorclientprofileComponent},
{path:'counsellorclientmessage',component:CounsellorclientmessageComponent},
{path:'ClientnotesComponent',component:ClientnotesComponent},
{path:'ClientinvoiceComponent',component:ClientinvoiceComponent},
{path:'ClientContactComponent',component:ClientContactComponent},
{path:'ClientresetpassowrdComponent',component:ClientContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
