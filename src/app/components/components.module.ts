import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonComponentsModule } from './common/common-components.module';

const LIST: any[] = [NavbarComponent];

@NgModule({
	declarations: [LIST],
	imports: [CommonModule, CommonComponentsModule],
	exports: [LIST],
})
export class ComponentsModule {}
