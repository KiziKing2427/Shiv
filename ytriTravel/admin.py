from django.contrib import admin
from .models import CreateAccount, Product, AppUser
# Register your models here.

admin.site.register(CreateAccount)
admin.site.register(Product)
admin.site.register(AppUser)
