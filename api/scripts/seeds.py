# seed_pets.py
import urllib.request
from django.core.files.base import ContentFile

from pets.models import Breed, Pet, PetImage
from account.models import Account

# URLs de imagens
dog_images = [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=400&fit=crop",
]

cat_images = [
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop",
]

# Raças de exemplo
breeds_data = {
    "Cachorro": [
        {"name": "Labrador", "description": "Raça dócil e ativa."},
        {"name": "Bulldog", "description": "Raça calma e robusta."},
        {"name": "Poodle", "description": "Inteligente e brincalhão."},
    ],
    "Gato": [
        {"name": "Siamês", "description": "Elegante e comunicativo."},
        {"name": "Persa", "description": "Calmo e peludo."},
    ],
}

def download_image(url):
    """Baixa imagem de uma URL e retorna ContentFile"""
    try:
        with urllib.request.urlopen(url) as response:
            return ContentFile(response.read())
    except Exception as e:
        print(f"⚠️ Erro ao baixar {url}: {e}")
        return None

def run():
    print("🔄 Populando raças...")
    breeds = {}
    for animal_type, items in breeds_data.items():
        for b in items:
            breed, _ = Breed.objects.get_or_create(
                name=b["name"],
                defaults={"description": b["description"]}
            )
            breeds[b["name"]] = breed

    users = list(Account.objects.all()[:6])  # pegar até 6 primeiros usuários
    if len(users) < 6:
        print("⚠️ É necessário ter pelo menos 6 usuários cadastrados.")
        return

    print("🔄 Criando pets...")
    pets_info = [
        {"name": "Rex", "age": 3, "gender": "Male", "price": 800, "breed": breeds["Labrador"], "images": [dog_images[0]]},
        {"name": "Thor", "age": 2, "gender": "Male", "price": 1200, "breed": breeds["Bulldog"], "images": [dog_images[1]]},
        {"name": "Luna", "age": 1, "gender": "Female", "price": 950, "breed": breeds["Poodle"], "images": [dog_images[2]]},
        {"name": "Mia", "age": 2, "gender": "Female", "price": 600, "breed": breeds["Siamês"], "images": [cat_images[0]]},
        {"name": "Nina", "age": 3, "gender": "Female", "price": 700, "breed": breeds["Persa"], "images": [cat_images[1]]},
        {"name": "Tom", "age": 4, "gender": "Male", "price": 500, "breed": breeds["Siamês"], "images": []},  # sem imagem
    ]

    for idx, pet_data in enumerate(pets_info):
        pet = Pet.objects.create(
            name=pet_data["name"],
            age=pet_data["age"],
            gender=pet_data["gender"],
            description=f"{pet_data['name']} é um {pet_data['breed'].name} muito querido!",
            price=pet_data["price"],
            breed=pet_data["breed"],
            owner=users[idx],
        )

        # baixar e salvar imagens
        for i, img_url in enumerate(pet_data["images"]):
            img_content = download_image(img_url)
            if img_content:
                pet_image = PetImage(pet=pet)
                pet_image.image.save(f"{pet.name.lower()}_{i}.jpg", img_content, save=True)

    print("✅ Banco populado com sucesso!")


run()
