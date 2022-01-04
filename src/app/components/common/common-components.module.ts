import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNavbarComponent } from './card-navbar/card-navbar.component';
import { NavbarOptionComponent } from './navbar-option/navbar-option.component';

const LIST = [CardNavbarComponent, NavbarOptionComponent];

@NgModule({
	declarations: [LIST],
	imports: [CommonModule],
	exports: [LIST],
})
export class CommonComponentsModule {}
