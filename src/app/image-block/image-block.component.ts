import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../providers/image.service";

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.css']
})
export class ImageClockComponent implements OnInit {
  @Input() _imgID : string;
  public image: { id: string; url: string };

  constructor(private _image: ImageService) { }

  ngOnInit(): void {
    console.log('##################### : In image block - _imgID: ' + this._imgID);
    this.image = this._image.getImage(this._imgID);
    console.log('##################### : In image block - image: ' + this.image);
  }

}
