from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("newpost",views.newpost,name="newpost"),
    path("sendpost",views.sendpost,name="sendpost"),
    path("apipost/<int:postid>",views.apipost,name="apipost"),
    path("profile/<str:uname>",views.profile,name="profile"),
    path("followapi/<str:name>",views.followapi,name="followapi"),
    path("follow/<str:name>",views.follow,name="follow"),
    path("unfollow/<str:name>",views.unfollow,name="unfollow"),
    path("followpost",views.followpost,name="followpost"),
    path("likesapi/<int:postid>",views.likesapi,name="likesapi")
]
