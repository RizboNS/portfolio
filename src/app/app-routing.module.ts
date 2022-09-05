import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { bodyClass: 'gray' } },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { bodyClass: 'gray' },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { bodyClass: 'dark-gray' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
