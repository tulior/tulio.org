import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)},
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
