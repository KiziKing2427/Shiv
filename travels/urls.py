from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from ytriTravel.views import CreateAccountView, ProductView
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'create-account', CreateAccountView, basename='create_account')
router.register(r'product', ProductView, basename='product')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/', include('ytriTravel.urls')),  # Add this line to include the other URLs
    re_path(r'^.*$', TemplateView.as_view(template_name='dist/index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
