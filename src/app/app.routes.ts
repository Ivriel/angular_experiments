import { Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon-and-badge/icon.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxRadioComponent } from './components/checkbox-radio/checkbox-radio.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { Dialog2Component } from './components/dialog2/dialog2.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/button',
        pathMatch: 'full'
    },
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
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'list',
        component:ListComponent
    },
    {
        path:'grid',
        component:GridComponent
    },
    {
        path:'expansion',
        component:ExpansionComponent
    },
    {
        path:'card',
        component:CardComponent
    },
    {
        path:'tabs',
        component:TabsComponent
    },
    {
        path:'stepper',
        component:StepperComponent
    },
    {
        path:'input',
        component:InputComponent
    },
    {
        path:'select',
        component:SelectComponent
    },
    {
        path:'autocomplete',
        component:AutocompleteComponent
    },
    {
        path:'checkbox-radio',
        component:CheckboxRadioComponent
    },
    {
        path:'datepicker',
        component:DatepickerComponent
    },
    {
        path:'tooltip',
        component:TooltipComponent
    },
    {
        path:'snackbar',
        component:SnackbarComponent
    },
    {
        path:'dialog2',
        component:Dialog2Component
    },
    {
        path:'table',
        component:TableComponent
    }
];
