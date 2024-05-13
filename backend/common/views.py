from django.views import generic

from drf_spectacular.utils import OpenApiExample, OpenApiResponse, extend_schema
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


class IndexView(generic.TemplateView):
    template_name = "common/index.html"


class RestViewSet(viewsets.ViewSet):
    @extend_schema(
        summary="Check REST API",
        description="This endpoint checks if the REST API is working.",
        responses={
            200: OpenApiResponse(
                description="Successful Response",
                examples=[
                    OpenApiExample(
                        "Example Response",
                        value={
                            "result": "This message comes from the backend. "
                            "If you're seeing this, the REST API is working!"
                        },
                        response_only=True,
                    )
                ],
            )
        },
        methods=["GET"],
    )
    @action(
        detail=False,
        methods=["get"],
        permission_classes=[AllowAny],
        url_path="rest-check",
    )
    def rest_check(self, request):
        return Response(
            {
                "result": "This message comes from the backend. "
                "If you're seeing this, the REST API is working!"
            },
            status=status.HTTP_200_OK,
        )
