from django.contrib import admin

from .models import User, Pagepost, Infollow, Plike
# Register your models here.

admin.site.register(User)
admin.site.register(Pagepost)
admin.site.register(Infollow)
admin.site.register(Plike)
