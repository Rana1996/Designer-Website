import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  @Input() isFirst: boolean;
  title: string;
  fadedTitle: string;
  subTitle: string;
  sectionText: string;
  linkedInButton: string;

  constructor() { }

  ngOnInit(): void {
    if(this.isFirst){
      this.title = "Gal Yosef - ";
      this.fadedTitle = "Product Designer";
      this.subTitle = "Product design leader with theoretical knowledge about psycho-cognitive models and theories.Passionate for creating the product’s lifecycle from research through prototyping to design & usability testing.";
      this.sectionText = "My name is Gal Yosef. I'm a UX/UI designer based in Israel, with over 7 years of experience in the digital industry.<br><br>" +
        "I am a great team player who knows how to collaborate and brainstorm with all kinds of people with different skills. I like to solve complex product problems with a touch of extraordinary, pixel-perfect design solutions that keep up with the new trends in design."
    } else {
      this.linkedInButton = "LinkedIn";
      this.subTitle = "Can I help with anything?";
      this.sectionText = "if you have a design project that you think I could help with, please drop me a line...";
    }
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/galyos/", "_blank");
  }
}
