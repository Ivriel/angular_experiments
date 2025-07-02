import { Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
    {
        path:'button',
        component:ButtonComponent
    },
    {
        path:'icon',
        component:IconComponent
    },
    {
        path:'dialog',
        component:DialogComponent
    },
    {
        path:'spinner',
        component:ProgressSpinnerComponent
    },
    {
        path:'sidenav',
        component:SidenavComponent
    }
];
