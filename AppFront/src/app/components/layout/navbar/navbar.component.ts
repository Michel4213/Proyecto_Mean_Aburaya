import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ["../../../../styles.css"]
})
export class NavbarComponent {
  router = inject(Router)
  usersService = inject(UsersService)
  
  
  onClickLogout (){
    localStorage.removeItem("user_token");
    this.router.navigate(["/home"])
  }
  
  themeToggle(){
    document.body.classList.toggle("dark-mode");
  }

}
