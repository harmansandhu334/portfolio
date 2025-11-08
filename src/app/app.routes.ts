import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects';
import { ResumeComponent } from './resume/resume';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent },
];
