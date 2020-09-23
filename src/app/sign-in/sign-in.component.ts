import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../providers/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  constructor(private router: Router,
              private userService: UsersService) {}

  signIn() {
    if(this.userService.isAUser(this.profileForm.value.email, this.profileForm.value.password)){
      this.router.navigate(['data']);
    }
  }
}
