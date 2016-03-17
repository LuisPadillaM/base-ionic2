import {Injectable} from 'angular2/core';
import Feed from '../../data/feed';

@Injectable()
export class FeedService {
    constructor() {}
    getFeed() {
        return Feed;
    }
}
