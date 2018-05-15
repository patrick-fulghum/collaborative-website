import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { TeaSetComponent } from './tea-set/tea-set.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JChessComponent } from './j-chess/j-chess.component';
import { MasterMindComponent } from './master-mind/master-mind.component';

const appRoutes: Routes = [
  { path: 'teaset', component: TeaSetComponent },
  { path: 'jchess', component: JChessComponent },
  { path: 'mastermind', component: MasterMindComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeaSetComponent,
    JChessComponent,
    MasterMindComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
