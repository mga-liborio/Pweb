from django.contrib import admin
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model
# from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from .models import User


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    fieldsets = (
        (None, {'fields': ('email', 'username', )}),
        (_('Personal info'), {'fields': ('name', 'cpf', 'rg', 'cnh')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        (_('user_info'), {'fields': ('profession', 'cnh_first_date')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide'),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ['email', 'name', 'is_staff']
    search_fields = ('email', 'name', 'cpf', 'cnh')
    ordering = ('email', 'name')


admin.site.register(User, UserAdmin)
