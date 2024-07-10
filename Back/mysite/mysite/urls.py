"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from myapp.views import RegisterUserView, UserView, AllUsersView, UserDetail
from myapp.views import AllProducts, RegisterProductsView, ProductDetails, ProductView
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('allusers/', AllUsersView.as_view()),
    path('user/', UserView.as_view()),
    path('user/<int:pk>/', UserDetail.as_view()),
    path('register/user/', RegisterUserView.as_view()),

    path('allproducts/', AllProducts.as_view()),
    path('view/product/<int:pk>/', ProductView.as_view()),
    path('product/<int:pk>/', ProductDetails.as_view()),
    path('register/product/', RegisterProductsView.as_view()),


    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
