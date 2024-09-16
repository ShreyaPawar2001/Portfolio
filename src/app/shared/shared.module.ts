import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../menus/header/header.component';
import { FooterComponent } from '../menus/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent],
})
export class SharedModule { }
 