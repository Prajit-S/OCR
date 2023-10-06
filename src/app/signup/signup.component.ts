import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  constructor(
    private router: Router,
    private userService: UserService // Inject UserService
  ) {}
  formSubmitted = false;
  onSubmit() {
    // Set formSubmitted to true when the form is submitted
    this.formSubmitted = true;
    // Perform validation here if needed
    if (this.user.password !== this.user.confirm_password) {
      console.log('Password and confirm password do not match');
      return; // Don't proceed with submission
    }
     // Store the user data in the service
     this.userService.setUserData(this.user);
    // Handle signup form submission logic here
    console.log('User signed up:', this.user);

    // Reset the form fields after submission if needed
    this.user = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
     // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
