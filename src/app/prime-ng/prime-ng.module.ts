import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    FieldsetModule,
    CardModule,
    MenubarModule,
    ToolbarModule,
    TableModule
    
  ]
})
export class PrimeNgModule { }
