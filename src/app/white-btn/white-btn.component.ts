import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-white-btn',
  templateUrl: './white-btn.component.html',
  styleUrls: ['./white-btn.component.css']
})
export class WhiteBtnComponent implements OnInit {
  @Input() url : string;

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
    window.open(this.url, "_blank");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
