import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'navbar-option',
	templateUrl: './navbar-option.component.html',
	styleUrls: ['./navbar-option.component.scss'],
})
export class NavbarOptionComponent implements OnInit {
	@Input() option: { icon: string; quantity: number } = {
		icon: 'fas fa-bell',
		quantity: 3,
	};

	constructor() {}

	ngOnInit(): void {}
}
