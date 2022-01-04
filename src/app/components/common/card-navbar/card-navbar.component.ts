import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'card-navbar',
	templateUrl: './card-navbar.component.html',
	styleUrls: ['./card-navbar.component.scss'],
})
export class CardNavbarComponent implements OnInit {
	@Input() option!: { icon: string; text: string; title: string };

	constructor() {}

	ngOnInit(): void {}
}
