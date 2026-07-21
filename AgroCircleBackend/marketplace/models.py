from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ("Grains", "Grains"),
        ("Vegetables", "Vegetables"),
        ("Fruits", "Fruits"),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    seller = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.CharField(max_length=50)
    rating = models.CharField(max_length=20)

    image = models.ImageField(
        upload_to="products/",
        blank=True,
        null=True
    )

    description = models.TextField()

    def __str__(self):
        return self.name


class Farmer(models.Model):
    GENDER_CHOICES = [
        ("Male", "Male"),
        ("Female", "Female"),
        ("Other", "Other"),
    ]

    IRRIGATION_CHOICES = [
        ("Rainfed", "Rainfed"),
        ("Canal", "Canal"),
        ("Drip", "Drip"),
        ("Sprinkler", "Sprinkler"),
        ("Borewell", "Borewell"),
    ]

    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=15)
    email = models.EmailField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    dob = models.DateField()
    aadhaar = models.CharField(max_length=12, blank=True)

    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    village = models.CharField(max_length=100)
    address = models.TextField(blank=True)
    pincode = models.CharField(max_length=10, blank=True)

    farm_size = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True
    )

    farming_experience = models.PositiveIntegerField(
        null=True,
        blank=True
    )

    irrigation = models.CharField(
        max_length=20,
        choices=IRRIGATION_CHOICES,
        blank=True
    )

    crop = models.CharField(max_length=100)

    registered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Buyer(models.Model):
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=15)
    email = models.EmailField()

    company = models.CharField(max_length=150)
    business_type = models.CharField(max_length=100)

    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    address = models.TextField()
    pincode = models.CharField(max_length=10)

    crop = models.CharField(max_length=100)
    quantity = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name