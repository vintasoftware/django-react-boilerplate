from .views import RestViewSet

routes = [
    {"regex": r"rest", "viewset": RestViewSet, "basename": "Rest"},
]
