import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhyWeComponent } from './why-we/why-we.component';
import { OpinionsComponent } from './opinions/opinions.component';
import { CertifiComponent } from './certifi/certifi.component';
import { AttentionComponent } from './attention/attention.component';
import { OffersComponent } from './offers/offers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    WhoWeAreComponent,
    WhyWeComponent,
    OpinionsComponent,
    CertifiComponent,
    AttentionComponent,
    OffersComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
