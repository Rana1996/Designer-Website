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
  {"id": 2, "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section 2", "subTitle": "Section 2 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 3, "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section 3", "subTitle": "Section 3 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 4, "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section 4", "subTitle": "Section 4 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 5, "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section 5", "subTitle": "Section 5 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
]
