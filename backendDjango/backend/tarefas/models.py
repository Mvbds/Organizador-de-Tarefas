from django.db import models
from django.contrib.auth.models import User

class Tarefa(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    prazo = models.DateField()
    prioridade = models.CharField(
        max_length=10,
        choices=[('Baixa', 'Baixa'), ('Média', 'Média'), ('Alta', 'Alta')]
    )
    concluida = models.BooleanField(default=False)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
