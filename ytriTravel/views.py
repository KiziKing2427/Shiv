from rest_framework.viewsets import ModelViewSet
from .models import CreateAccount, Product
from .serializers import *
from django.contrib.auth import login, logout, get_user_model
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password
from rest_framework.generics import RetrieveAPIView
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework.exceptions import ValidationError
from django.core.mail import send_mail
from django.shortcuts import redirect


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        data = request.data
        if not validate_email(data):
            raise ValidationError("Invalid email format")
        if not validate_password(data):
            raise ValidationError("Invalid password format")
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            session_id = request.session.session_key
            print("Session ID:", session_id)
            return Response(serializer.data, status=status.HTTP_200_OK)

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class FetchUserInformation(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        user = request.user
        user_data = {
            'email': user.email,
            'username': user.username
            # Add other fields as needed
        }
        return Response(user_data, status=status.HTTP_200_OK)

class CreateAccountView(ModelViewSet):
    queryset = CreateAccount.objects.all()
    serializer_class = CreateAccountSerializer

class ProductView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
