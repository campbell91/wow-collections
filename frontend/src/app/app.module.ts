import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-details/character-details.component';
import { RealmListComponent } from './realms/realm-list.component';
import { MountListComponent } from './mount-list/mount-list.component';

import { AppRoutingModule } from './app-routing.module';
import { RouteResolver } from './resolvers/route.resolver';

@NgModule({
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, AppRoutingModule, HttpClientModule,
  ],
  declarations: [
    AppComponent, CharacterDetailComponent, RealmListComponent, MountListComponent,

  ],
  providers: [RouteResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
