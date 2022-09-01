import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component:HomePageComponent },
  { path: 'DashBoard', component: DashboardComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Levels', component:  NotFoundComponent},
  { path: 'Levels/Level1', component:  NotFoundComponent},
  { path: 'Levels/Level1/Level2.1', component:  NotFoundComponent},
  { path: 'Levels/Level1/Level2.2', component:  NotFoundComponent},
  { path: 'Levels/Level2', component:  NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
