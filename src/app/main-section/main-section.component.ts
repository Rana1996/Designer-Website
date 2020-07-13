import { Component, OnInit } from '@angular/core';
import {ImageService} from "../providers/image.service";

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  title = "Gal Yosef - ";
  fadedTitle = "Product Designer";
  subTitle = "Product design leader with theoretical knowledge about psycho-cognitive models and theories.Passionate for creating the product’s lifecycle from research through prototyping to design & usability testing.";
  sectionText = "My name is Gal Yosef. I'm a UX/UI designer based in Israel, with over 7 years of experience in the digital industry.<br><br>" +
    "I am a great team player who knows how to collaborate and brainstorm with all kinds of people with different skills. I like to solve complex product problems with a touch of extraordinary, pixel-perfect design solutions that keep up with the new trends in design."

  constructor() { }

  ngOnInit(): void {
  }

}
