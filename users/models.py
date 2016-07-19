# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    def __str__(self):
        return self.get_full_name()

    def get_full_name(self):
        return "{} {}".format(self.first_name, self.last_name)
