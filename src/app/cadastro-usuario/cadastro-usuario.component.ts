import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  usuario = {
    nome: '',
    email: '',
    senha: '',
    foto: null
  };
  

  constructor(private http: HttpClient, private router: Router) {}

  // Método para registrar o usuário
  registre() {
    const formData = new FormData();
    formData.append('nome', this.usuario.nome);
    formData.append('email', this.usuario.email);
    formData.append('senha', this.usuario.senha);
    if (this.usuario.foto) {
      formData.append('foto', this.usuario.foto, this.usuario.foto);
    }
    this.router.navigate(['/login']);
    // Submete a requisição POST para a API (substitua pela URL do seu backend)
    this.http.post('http://localhost:3000/usuarios', formData).subscribe(
      (resposta) => {
        console.log(resposta);
        setTimeout(() => {
          

        }, 500);
        
      },
      (erro) => {
        console.error('Erro no cadastro:', erro);
      }
    );
  }

  // Método para lidar com a seleção do arquivo de foto
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.usuario.foto = file;
    }
  }
}
