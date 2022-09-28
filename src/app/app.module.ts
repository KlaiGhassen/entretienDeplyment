import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { NavigationComponent } from './homeComponents/navigation/navigation.component';
import { FooterComponent } from './homeComponents/footer/footer.component';
import { ApplicationContentComponent } from './homeComponents/application-content/application-content.component';
import { WhatWeDoComponent } from './homeComponents/what-we-do/what-we-do.component';
import { WhyChooseUsComponent } from './homeComponents/why-choose-us/why-choose-us.component';
import { OurSolutionComponent } from './homeComponents/our-solution/our-solution.component';
import { CountUpDirective } from './homeComponents/why-choose-us/count-up.directive';
import { OurteamComponent } from './homeComponents/ourteam/ourteam.component';
import { UpButtonComponent } from './homeComponents/up-button/up-button.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { VedioPlayerComponent } from './homeComponents/vedio-player/vedio-player.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    CountUpDirective,
    AppComponent,
    WhoAreWeComponent,
    WhoWeAreComponent,
    NavigationComponent,
    FooterComponent,
    ApplicationContentComponent,
    WhatWeDoComponent,
    WhyChooseUsComponent,
    OurSolutionComponent,
    OurteamComponent,
    UpButtonComponent,
    VedioPlayerComponent,

  ],
  imports: [
    MatDialogModule,
    
    MatProgressSpinnerModule,
    VgOverlayPlayModule,
    BrowserModule,
    VgBufferingModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    VgControlsModule,
    VgCoreModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
