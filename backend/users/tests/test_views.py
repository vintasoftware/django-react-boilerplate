from django.urls import reverse

from common.utils.tests import TestCaseUtils
from model_bakery import baker
from rest_framework.test import APITestCase

from ..models import User


class UserViewSetTest(TestCaseUtils, APITestCase):
    def test_list_users(self):
        baker.make(User, _fill_optional=True, _quantity=5)

        response = self.auth_client.get(reverse("user-list"))

        self.assertResponse200(response)
        # Note: One user is already created in the setUp method of TestCaseUtils
        self.assertEqual(response.data.get("count"), 6)
        self.assertEqual(len(response.data.get("results")), 6)

    def test_create_user(self):
        data = {
            "email": "testuser@test.com",
            "password": "12345678",
        }

        response = self.auth_client.post(reverse("user-list"), data=data)

        self.assertResponse201(response)
        user = User.objects.get(id=response.data["id"])
        self.assertEqual(user.email, data["email"])

    def test_retrieve_user(self):
        user = baker.make(User, _fill_optional=True)

        response = self.auth_client.get(reverse("user-detail", args=[user.id]))

        self.assertResponse200(response)
        self.assertEqual(response.data["id"], user.id)
        self.assertEqual(response.data["email"], user.email)

    def test_put_update_user(self):
        user = baker.make(User, email="testuser@test.com", _fill_optional=True)
        data = {
            "email": "user@test.com",
            "password": "87654321",
        }

        response = self.auth_client.put(
            reverse("user-detail", args=[user.id]), data=data
        )

        self.assertResponse200(response)
        user.refresh_from_db()
        self.assertEqual(user.email, data["email"])

    def test_patch_update_user(self):
        user = baker.make(User, email="testuser@test.com", _fill_optional=True)
        data = {
            "email": "user@test.com",
        }

        response = self.auth_client.patch(
            reverse("user-detail", args=[user.id]), data=data
        )

        self.assertResponse200(response)
        user.refresh_from_db()
        self.assertEqual(user.email, data["email"])

    def test_delete_user(self):
        user = baker.make(User, _fill_optional=True)

        response = self.auth_client.delete(reverse("user-detail", args=[user.id]))

        self.assertResponse204(response)
        self.assertFalse(User.objects.filter(id=user.id).exists())
