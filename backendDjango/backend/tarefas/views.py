from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Tarefa
from .serializers import TarefaSerializer 

class TarefaViewSet(viewsets.ModelViewSet):
    serializer_class = TarefaSerializer
    permission_classes = [IsAuthenticated]
    queryset = Tarefa.objects.all()  

    def get_queryset(self):
        return Tarefa.objects.filter(usuario=self.request.user) 
    
    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user) 
