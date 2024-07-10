from rest_framework import serializers
from .models import UserProfile
from .models import Products

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'email', 'password', 'username', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        
        # Extract required fields
        email = validated_data.get('email')
        username = validated_data.get('username')
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')
        password = validated_data.get('password')
        

        user = UserProfile.objects.create_user(
            email=email,
            username=username,
            first_name=first_name,
            last_name=last_name,
            password=password
        )
        return user
        
class ProductsSerializer(serializers.ModelSerializer):

    class Meta(object):
        model = Products
        fields = ('id','name', 'quantity', 'price', 'description')

    def create(self, validated_data):
        name = validated_data.get('name')
        quantity = validated_data.get('quantity')
        price = validated_data.get('price')
        description = validated_data.get('description')

        product = Products.objects.create(
            name=name,
            quantity=quantity,
            price=price,
            description=description
        )
        return product