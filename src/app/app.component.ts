import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Gal Yosef - ";
  fadedTitle = "Product Designer";
  subTitle = "Product design leader with theoretical knowledge about psycho-cognitive models and theories.Passionate for creating the product’s lifecycle from research through prototyping to design & usability testing.";
  sectionText = "My name is Gal Yosef. I'm a UX/UI designer based in Israel, with over 7 years of experience in the digital industry.<br><br>" +
    "I am a great team player who knows how to collaborate and brainstorm with all kinds of people with different skills. I like to solve complex product problems with a touch of extraordinary, pixel-perfect design solutions that keep up with the new trends in design."
  imgPath = "Gal.png";
}
