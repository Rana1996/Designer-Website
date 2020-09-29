import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsContentService {

  getSections(){
    return SectionsDetails;
  }

  constructor() { }
}

const SectionsDetails = [//TODO: Change the color property accordingly
  {"id": 1, "url": "http://www.peleghila.com/", "imgID": "1", "title": "Shippis", "subTitle": "Global Package Tracking Platform\nShippis allows users to track their shipments from multiple carriers immediately after purchasing the retailer app. Shippis organizes all the tracks into one designed feed, which makes it easy to effectively monitor multiple shipments simultaneously\n\nMobile UX."},
  {"id": 2, "url": "http://www.peleghila.com/", "imgID": "2", "title": "Hik'oo", "subTitle": "Hiko offers arrangements for travelers around the world to get their trip plan easily. The app helps the user to find the perfect trail to hike and navigate in, and the associate recommended stopping points."},
  {"id": 3, "url": "http://www.peleghila.com/", "imgID": "3", "title": "Title Of Section 3", "subTitle": "Section 3 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 4, "url": "http://www.peleghila.com/", "imgID": "4", "title": "Title Of Section 4", "subTitle": "Section 4 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 5, "url": "http://www.peleghila.com/", "imgID": "5", "title": "Title Of Section 5", "subTitle": "Section 5 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
]
