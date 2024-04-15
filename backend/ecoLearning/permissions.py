from rest_framework import permissions

class IsAuthenticatedOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow authenticated users to perform write operations.
    """
    def has_permission(self, request, view):
        # Allow GET, HEAD, or OPTIONS requests for unauthenticated users
        if request.method in permissions.SAFE_METHODS and not request.user.is_authenticated:
            return True
        # Allow authenticated users to perform all actions
        return request.user and request.user.is_authenticated