import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundsService {

  getBackgrounds(){
    return SectionsBackground;
  }

  constructor() { }
}
const SectionsBackground = [
  // {"id": 0, "color1": "#151414"},
  {"id": 1, "color1": "#F6FAF9", "color2": "#8EF3F1", "color3": "#72EAE1", "color4": "#4CDDCC"},
  {"id": 2, "color1": "#BE62FF", "color2": "#AE3BFE", "color3": "#9500FD"},
  {"id": 3, "color1": "#FF74B9", "color2": "#FF57AB", "color3": "#FF359A"},
  {"id": 4, "color1": "#F1D655", "color2": "#F3C736", "color3": "#F5B006"},
  {"id": 4, "color1": "#E62352", "color2": "#D70566"},
  // {"id": 4, "color1": "#151414"},
];
