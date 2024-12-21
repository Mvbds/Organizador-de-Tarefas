import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    usuario: '',
    senha: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    if (this.loginData.usuario && this.loginData.senha) {
      this.http.post('http://localhost:3000/login', this.loginData).subscribe(
        (response: any) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            this.router.navigate(['/dashboard']);
          } else {
            alert('Credenciais inválidas');
          }
        },
        (error) => {
          console.error('Erro no login:', error);
          alert('Erro no login');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
