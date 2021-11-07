import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    PaginatorComponent,
    CharacterPageComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
