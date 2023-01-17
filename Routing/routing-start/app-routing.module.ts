import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";
import { canDeactivateGaurd } from "src/app/servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "src/app/servers/edit-server/edit-server.component";
import { ServerComponent } from "src/app/servers/server/server.component";
import { ServersComponent } from "src/app/servers/servers.component";
import { UserComponent } from "src/app/users/user/user.component";
import { UsersComponent } from "src/app/users/users.component";
import { AuthGuard } from "src/auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children:[
      { path: ':id/:name', component: UserComponent }
  ] },
    { 
        path: 'servers',
        //canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children:
    [{ path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGaurd] }] },
    { path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ];

@NgModule ({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
    
})


export class AppRoutingModule{

}