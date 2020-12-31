import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { ColorHueModule } from 'ngx-color/hue';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageComponent} from './components/message/message.component';
import {BackgroundComponent} from './components/background/background.component';
import {AutofocusDirective} from './core/directives/autofocus.directive';
import { PlayerComponent } from './components/youtube/player/player.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    BackgroundComponent,
    AutofocusDirective,
    PlayerComponent,
    ColorPickerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    ShareButtonsModule,
    ShareIconsModule,
    ColorHueModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
