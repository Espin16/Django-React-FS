from django.urls import path
from . import views

urlpatterns = [
    path('entries/', views.EntryListCreateView.as_view(), name='entry-list-create'),
    path('entries/delete/<int:pk>/', views.EntryDelete.as_view(), name='delete-entry'),
]