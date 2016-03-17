import {Page, NavController} from 'ionic-angular';
import {FeedService} from '../../services/feed';
import {SearchPage} from '../search/search';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [FeedService]
})
export class HomePage {
  private hash: string;
  private items: any[];

  constructor(private nav: NavController, private feed: FeedService) {
    this.hash = 'my';
    this.initializeItems();
  }

  // Get feed from service
  getFeed() {
    return this.feed.getFeed();
  }

  initializeItems() {
    this.items = this.getFeed();
  }

  openSearchPage() {
    this.nav.push(SearchPage);
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    let q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    // debugger;
    this.items = this.items.filter((v) => {
      if (v.product.description.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}
