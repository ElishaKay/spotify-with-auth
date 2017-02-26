import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {AlbumComponent} from './components/album/album.component';
import {ArtistComponent} from './components/artist/artist.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {SpotifyService} from './services/spotify.service';
import {Auth} from './services/auth.service';


@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[ROUTER_DIRECTIVES, NavbarComponent],
    precompile:[SearchComponent,AboutComponent,LoginComponent,ProfileComponent],
    providers:[HTTP_PROVIDERS, SpotifyService,AUTH_PROVIDERS,Auth]
})

export class AppComponent { }
