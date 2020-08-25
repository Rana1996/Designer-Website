import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getImage(id: string) {
    return ImagesDetails.find(Images => Images.id == id)
  }
}
const ImagesDetails = [
  {"id": "Profile", "url": "assets/images/Profile.jpeg"},
  {"id": "1", "url": "assets/images/Section1.png"},
  {"id": "2", "url": "assets/images/trying.jpg"},
  {"id": "3", "url": "assets/images/trying2.jpeg"},
  {"id": "4", "url": "assets/images/trying3.jpeg"},
  {"id": "5", "url": "assets/images/trying2.jpeg"},
];
