import {provideRouter, RouterConfig} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';


const routes: RouterConfig = [
    {path:'', component:SearchComponent},
    {path:'about', component: AboutComponent},
    {path:'artist/:id', component:ArtistComponent},
    {path:'album/:id', component:AlbumComponent},
    {path:'login', component:LoginComponent},
    {path:'profile', component:ProfileComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];