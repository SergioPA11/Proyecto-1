import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register(form) {
    let teacher: Teacher = {
      id: null,
      username: form.value.email,
      password: form.value.password,
      name: form.value.name
    };
    this.authService.register(teacher).subscribe((res) => {
      this.router.navigateByUrl('login');
    });
  }

}
