from rest_framework import serializers
from .models import *
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# Cr?erserializers
# S?rialiseurs pour convertir les instances de mod?le en JSON afin que l'interface puisse fonctionner avec les donn?es re?ues.


class CertifCardsSerializers(serializers.ModelSerializer):
    class Meta:
        model = CertifCardsModel
        fields = ('id', 'title', 'identifiant', 'etablissement', 'urlcertif', 'datefield')
        

class MessageBannetteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessagesBannetteModel
        fields = ('id', 'name', 'email', 'message')
        


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Les mots de passe ne correspondent pas"})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user