import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule]  // Adicione CommonModule aqui
})
export class DashboardComponent {

  constructor(private router: Router) {}
  
  tarefasHoje = [
    { titulo: 'Exemplo de Tarefa Hoje', descricao: 'Descrição da Tarefa Hoje', prazo: '2024-12-09', prioridade: 'Alta' }
  ];

  tarefasProximas = [
    { titulo: 'Exemplo de Próxima Tarefa', descricao: 'Descrição da Próxima Tarefa', prazo: '2024-12-10', prioridade: 'Média' }
  ];

  tarefasBaixaPrioridade = [
    { titulo: 'Exemplo de Tarefa de Baixa Prioridade', descricao: 'Descrição da Tarefa de Baixa Prioridade', prazo: '2024-12-11', prioridade: 'Baixa' }
  ];

  adicionarTarefa() {
    console.log('Adicionar nova tarefa');
  }

  concluirTarefa(tarefa: any) {
    tarefa.concluida = true;
    console.log('Tarefa concluída:', tarefa);
  }

  editarTarefa(tarefa: any) {
    console.log('Editar tarefa:', tarefa);
  }

  verTarefasCompletas() {
    console.log('Ver tarefas completas');
  }

  sair() {
    // Adicione lógica de logout, se necessário, como limpar sessões, tokens, etc.
    this.router.navigate(['/login']);
  }
}
