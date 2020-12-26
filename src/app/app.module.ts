import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './../../src/app/components/home/home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePipe } from './pipes/youtube.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    YoutubePipe,
    PageNotFoundComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
