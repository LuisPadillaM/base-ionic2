import { Injectable } from '@angular/core';
import Feed           from '../../data/feed';

@Injectable()
export class FeedService {
    constructor() {}
    getFeed() {
        return Feed;
    }
}
