import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // Retrieve user data from the shared service
    const userData = this.userService.getUserData();

    // Populate the login form fields with user data (if available)
    if (userData) {
      this.user.email = userData.email;
      this.user.password = userData.password;
    }
  }

  onSubmit() {
    // Handle login form submission logic here (e.g., validate credentials)
    console.log('Entered Email:', this.user.email);
    console.log('Entered Password:', this.user.password);
    const userData = this.userService.getUserData(); // Retrieve user data
    console.log('Stored User Data:', userData); // Ensure userData is defined and correct
    // Check if user data exists and matches the entered credentials
    if (userData && this.user.email === userData.email && this.user.password === userData.password) {
      // Redirect to the dashboard page after successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Handle unsuccessful login (e.g., display an error message)
      console.log('Login failed');
    }
  }
}
