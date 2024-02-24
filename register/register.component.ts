import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword:''
    
  };

  constructor(public layoutService: LayoutService) { }

  onRegister(form: NgForm) {


    if (this.registerForm.password === this.registerForm.confirmPassword) {
        console.log('Registration form data:', this.registerForm);
        // Burada kayıt işlemlerinizi gerçekleştirebilirsiniz
    } else {
        console.log('Passwords do not match');
        // Kullanıcıya parolaların uyuşmadığını bildirebilirsiniz
    }
  }
}
