import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsContentService {
  title : string;
  subTitle : string;
  getNumberOfSections(){
    return SectionsDetails.length - 2;
  }

  getSection(id: number) {
    return SectionsDetails.find(Section => Section.id == id)
  }

  constructor() { }
}

const SectionsDetails = [//TODO: Change the color property accordingly
  // {"id": -1, "color": "", "imgID": "Profile"},
  // {"id": 0, "color": "", "imgID": "Profile"},
  {"id": 1, "color": "", "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section", "subTitle": "Section Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 2, "color": "", "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section", "subTitle": "Section Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 3, "color": "", "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section", "subTitle": "Section Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
  {"id": 4, "color": "", "url": "http://www.peleghila.com/", "imgID": "trying", "title": "Title Of Section", "subTitle": "Section Content - can be very long, so long will need to take a lot of place here, but it's a temporary solution, until server and database are ready"},
]
