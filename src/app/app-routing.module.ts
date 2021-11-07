import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterPageComponent} from "./components/character-page/character-page.component";
import {CharacterListComponent} from "./components/character-list/character-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterPageComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: CharacterListComponent },
      { path: 'search/:searchTerm', component: CharacterListComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
