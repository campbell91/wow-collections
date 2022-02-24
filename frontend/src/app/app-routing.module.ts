import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { CharacterDetailComponent } from "./character-details/character-details.component";
import { MountListComponent } from "./mount-list/mount-list.component";
import { RouteResolver } from "./resolvers/route.resolver";

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailComponent
  },
  {
    path: 'mounts',
    component: MountListComponent,
    resolve: { // fetches character mounts before rending component
      data: RouteResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
