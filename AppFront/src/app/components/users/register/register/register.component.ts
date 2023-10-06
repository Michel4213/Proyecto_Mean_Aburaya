import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ["../../../../../styles.css"]
})
export class RegisterComponent {
  formulario : FormGroup;

  constructor(private userService: UsersService){
    this.formulario = new FormGroup({
      name : new FormControl(),
      lastname : new FormControl(),
      age : new FormControl(),
      email : new FormControl(),
      password : new FormControl()
    })
  }

  async onSubmit(){
    const res = await this.userService.register(this.formulario.value);
    console.log(res)
  }
}
