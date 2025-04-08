import { Route } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { BoardComponent } from './pages/board/board.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const appRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: 'account', component: AccountComponent },
  { path: 'board', component: BoardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }, // Redirect to login on logout
];
