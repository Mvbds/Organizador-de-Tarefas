from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from tarefas.views import TarefaViewSet
from users.views import RegisterUserView

router = DefaultRouter()
router.register(r'tarefas', TarefaViewSet, basename='tarefa')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Registra as URLs da API de tarefas
    path('api/auth/', include('djoser.urls')),  # URLs padrão de autenticação (registro, login, etc.)
    path('api/auth/token/', include('djoser.urls.jwt')),  # URLs para JWT com Djoser (login, refresh, etc.)
    path('api/users/register/', RegisterUserView.as_view(), name='register_user'),  # Endpoint customizado para registrar usuário
    path('auth/token/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT token para login
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # JWT token para refresh
]
