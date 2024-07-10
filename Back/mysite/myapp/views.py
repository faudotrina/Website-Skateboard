from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser

from .models import UserProfile
from .models import Products
from .serializers import UserProfileSerializer
from .serializers import ProductsSerializer
from rest_framework import generics
## CRUD de la table Users:

# UTILISATEURS
# permet d'enregistrer un utilisateur dans la bdd
class RegisterUserView(APIView):
    parser_classes = [JSONParser, MultiPartParser, FormParser]

    def post(self, request):
        # if email is already in use
        if UserProfile.objects.filter(email=request.data['email']).exists():
            return Response({'error': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = UserProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# permet d'afficher les informations de l'utlisateur  
class UserView(APIView):
    # permission_classes = (IsAuthenticated,)
    parser_classes = [JSONParser, MultiPartParser, FormParser]

    def get(self, request):
        serializer = UserProfileSerializer(request.user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

# permet de modifier ou supprimer les informations de l'utlisateur
class UserDetail(APIView):

    def get_object(self, pk):
        try:
            return UserProfile.objects.get(pk=pk)
        except UserProfile.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        users = self.get_object(pk)
        serializer = UserProfileSerializer(users, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        serializer = self.get_object(pk)
        serializer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# permet d'afficher les informations de tous les utlisateurs enregistré dans la bdd 
class AllUsersView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        users = UserProfile.objects.all()
        serializer = UserProfileSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# PRODUITS
# permet d'enregistrer un produit dans la bdd
class RegisterProductsView(APIView):
    parser_classes = [JSONParser, MultiPartParser, FormParser]

    def post(self, request):
        serializer = ProductsSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# permet d'afficher les informations d'un produit
class ProductView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        products = Products.objects.get(pk=pk)
        serializer = ProductsSerializer(products)
        return Response(serializer.data, status=status.HTTP_200_OK)

# permet de modifier ou supprimer les informations d'un produit
class ProductDetails(APIView):

    def get_object(self, pk):
        try:
            return Products.objects.get(pk=pk)
        except Products.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        products = self.get_object(pk)
        serializer = ProductsSerializer(products, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        serializer = self.get_object(pk)
        serializer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
# permet d'afficher les informations de tous les produits enregistré dans la bdd
class AllProducts(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        products = Products.objects.all()
        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

