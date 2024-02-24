import { Component } from '@angular/core';

@Component({
  selector: 'app-profedit',
  templateUrl: './profedit.component.html',
  styleUrls: ['./profedit.component.scss']
})
export class ProfeditComponent {
  profileForm = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  passwordForm = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  constructor() { }

  onUpdateProfile() {
    // Profil güncelleme işlemi
    if (this.profileForm.name && this.profileForm.surname && this.profileForm.email && this.profileForm.phone) {
      console.log('Profile updated with:', this.profileForm);
      // Burada güncelleme servisini çağırın
    }
  }

  onChangePassword() {
    // Şifre güncelleme işlemi
    if (this.passwordForm.newPassword === this.passwordForm.confirmNewPassword) {
      console.log('Password changed to:', this.passwordForm.newPassword);
      // Burada şifre güncelleme servisini çağırın
    } else {
      console.log('Passwords do not match.');
      // Kullanıcıya şifrelerin uyuşmadığına dair bir mesaj gösterin
    }
  }
}

