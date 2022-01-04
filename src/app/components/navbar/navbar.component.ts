import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { LOGO } from '../../helpers/constans/logo';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	@ViewChild('contentLogo', { static: true }) contentLogo!: ElementRef<HTMLElement>;

	optionsCard: { icon: string; text: string; title: string }[] = [
		{
			icon: 'fas fa-map-marker-alt',
			text: 'Selecciona',
			title: 'Tu ubicación',
		},
		{
			icon: 'fas fa-user',
			text: 'Hola, ingresa ahora',
			title: 'Mi cuenta y pedidos',
		},
	];

	optionsIcon: { icon: string; quantity: number }[] = [
		{
			icon: 'fas fa-bell',
			quantity: 4,
		},
		{
			icon: 'fas fa-shopping-cart',
			quantity: 3,
		},
	];

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.contentLogo.nativeElement.innerHTML = LOGO;
	}
}
