import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-white-btn',
  templateUrl: './white-btn.component.html',
  styleUrls: ['./white-btn.component.css']
})
export class WhiteBtnComponent implements OnInit {
  @Input() url : string;

  email: "rana1996am@gmail.com";

  hover: boolean;

  buttonConfig = {
    styles: {
      position: 'relative',
      width: '150px',
      height: '50px',
      backgroundColor: '#fff',
      color: '#151414',
      borderRadius: '5px',
      marginTop: '30px',
      padding: 0,
      border: 0,
      fontSize: '18px',
      fontFamily: 'Poppins, sans-serif',
    },
    text: 'Let\'s talk'
  };

  onTextBtnClick() {
    location.href = "mailto:galpeleg192@gmail.com?subject=hello&body=fggf";
    window.open("mailto:galpeleg192@gmail.com?subject=hello&body=fggf", '_self');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
