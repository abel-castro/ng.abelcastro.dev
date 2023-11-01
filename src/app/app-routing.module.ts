import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsDashboardComponent } from './components/sports-dashboard/sports-dashboard.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';


const routes: Routes = [
  { path: '', component: BlogPostListComponent },
  { path: 'sports-dashboard', component: SportsDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
