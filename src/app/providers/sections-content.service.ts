import { Injectable } from '@angular/core';
import {Section} from "../models/section.model";

@Injectable({
  providedIn: 'root'
})
export class SectionsContentService {

  getSections(){
    return SectionsDetails;
  }

  addSection(title: string, description: string, imgID: string, routeUrl: string) {
    let id = SectionsDetails.length;
    const section: Section = {id, title, description, imgID, routeUrl};
    //TODO: Add a function to check content before adding it and return error if there's a problem
    SectionsDetails.push(section);
  }

  constructor() { }
}

const SectionsDetails = [//TODO: Change the color property accordingly
  {"id": 1, "routeUrl": "http://www.peleghila.com/", "imgID": "1", "title": "Shippis", "description": "Global Package Tracking Platform\nShippis allows users to track their shipments from multiple carriers immediately after purchasing the retailer app. Shippis organizes all the tracks into one designed feed, which makes it easy to effectively monitor multiple shipments simultaneously\n\nMobile UX."},
  {"id": 2, "routeUrl": "http://www.peleghila.com/", "imgID": "2", "title": "Hik'oo", "description": "Hiko offers arrangements for travelers around the world to get their trip plan easily. The app helps the user to find the perfect trail to hike and navigate in, and the associate recommended stopping points."},
  {"id": 3, "routeUrl": "http://www.peleghila.com/", "imgID": "3", "title": "Title Of Section 3", "description": "Section 3 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 4, "routeUrl": "http://www.p eleghila.com/", "imgID": "4", "title": "Title Of Section 4", "description": "Section 4 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 5, "routeUrl": "http://www.peleghila.com/", "imgID": "5", "title": "Title Of Section 5", "description": "Section 5 Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
]

// const section1: Section = {
//   "id": 1,
//   "routeUrl": "http://www.peleghila.com/",
//   "imgID": "1",
//   "title": "Shippis",
//   "description": "Global Package Tracking Platform\nShippis allows users to track their shipments from multiple carriers" +
//     " immediately after purchasing the retailer app. Shippis organizes all the tracks into one designed feed, which makes " +
//     "it easy to effectively monitor multiple shipments simultaneously\n\nMobile UX."}
// ;
