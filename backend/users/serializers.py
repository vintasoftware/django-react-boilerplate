from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [  # noqa: RUF012
            "id",
            "email",
            "is_active",
            "is_staff",
            "is_superuser",
            "created",
            "modified",
            "last_login",
        ]
