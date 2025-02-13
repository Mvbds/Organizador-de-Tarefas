from django.contrib.auth.models import User
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View

@method_decorator(csrf_exempt, name='dispatch')
class RegisterUserView(View):
    def post(self, request):
        try:
            # Pegando os dados do formulário
            username = request.POST.get('email')
            password = request.POST.get('senha')
            nome = request.POST.get('nome')

            if not username or not password or not nome:
                return JsonResponse({'error': 'Nome, usuário e senha são obrigatórios'}, status=400)

            # Verificando se o email já existe
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Email já registrado'}, status=400)

            # Criando o usuário
            user = User.objects.create_user(username=username, password=password)

            # Processando a foto, caso seja enviada
            foto = request.FILES.get('foto')
            if foto:
                fs = FileSystemStorage()
                foto_name = fs.save(foto.name, foto)
                foto_url = fs.url(foto_name)
                # Aqui você pode adicionar a foto ao perfil do usuário, se necessário

            return JsonResponse({'message': 'Usuário registrado com sucesso'}, status=201)

        except Exception as e:
            return JsonResponse({'error': f'Erro interno: {str(e)}'}, status=500)
