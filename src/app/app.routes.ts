import { Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { DialogComponent } from './components/dialog/dialog.component';

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
    }
];
