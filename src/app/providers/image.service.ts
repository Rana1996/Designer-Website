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
  {"id": "trying", "url": "assets/images/trying.jpg"}
];
