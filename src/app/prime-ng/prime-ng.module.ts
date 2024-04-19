import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [
    MenubarModule,
    SidebarModule,
    ButtonModule,
  ]
})
export class PrimeNgModule { }
