import {Page, NavController} from 'ionic-angular';

@Page({
	template: `
		<ion-navbar *navbar>
			<ion-title> Search </ion-title>
		</ion-navbar>
		<ion-content class="search-page">
			<ion-searchbar></ion-searchbar>
			<div padding>
	      <ion-segment [(ngModel)]="category">
	        <ion-segment-button value="all">
	          all
	        </ion-segment-button>
	        <ion-segment-button value="hash">
	          hashtags
	        </ion-segment-button>
	        <ion-segment-button value="people">
	          People
	        </ion-segment-button>
	      </ion-segment>
	    </div>
		</ion-content>
	`
})
export class SearchPage {
	public category: string;
	private searchQuery: string;
	public searchbar: any;

	constructor(private nav: NavController) {
		this.category = 'all';
	}

	onCancel() {
		this.nav.pop();
	}

}
