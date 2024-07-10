from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class UserProfileManager(BaseUserManager):
    # Gestion des profiles utilsateurs

    def create_user(self, email, username, last_name, first_name, password=None):
        if not email:
            raise ValueError('Users must have an email')

        email = self.normalize_email(email)
        user = self.model(
            email=email, 
            username=username, 
            last_name=last_name, 
            first_name=first_name)

        user.set_password(password)
        user.is_staff = True
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email')

        email = self.normalize_email(email)
        user = self.model(email=email, password=password)

        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

class UserProfile(AbstractUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name'] 

    class Meta:
        managed = True
        db_table = 'auth_user'

    def __str__(self):
        return self.email


class Products(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.PositiveSmallIntegerField()
    price = models.FloatField(max_length=50)
    description = models.TextField(max_length=50)
    image_url = models.CharField(max_length=255, null=True, blank=True)
    
    # Un utilisateur peut ajouter plusieurs produits et chaque produit est ajouter par plusieurs utilisateurs
    # user_id = models.ManyToManyField('UserProfile')

    class Meta:
        managed = True
        db_table = 'products'

    def __str__(self):
        return self.name
