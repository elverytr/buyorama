from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('shop/', include('products.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)