from bs4 import BeautifulSoup
import requests

global type_id_to_breed, breed_to_image_count, pets, stored_images
type_id_to_breed = {
    6: 'Maine Coon',
    5: 'Persian',
    7: 'Siamese',
    3: 'Bulldog',
    1: 'German Sheperd',
    2: 'Golden Retriever',
    4: 'Yorkshire Terrier',
    10: 'Bearded Dragons',
    12: 'Leopard Geckos',
    11: 'Parrots',
    8: 'Havanna rabbit',
    9: 'Polish rabbit'
}

# dictionary to count the number of images for each breed 
breed_to_image_count = {}

# pets
pets = {
    'Henry': 4,
    'Charlie': 1,
    'Shadow': 3,
    'Buddy': 2,
    'Bella': 2,
    'Lucy': 3,
    'Daisy': 4,
    'Roxy': 3,
    'Bear': 4,
    'Rusty': 1,
    'Chance': 2,
    'Misty': 3,
    'Princess': 4,
    'Sammy': 1,
    'Whiskers': 7,
    'Mittens': 5,
    'Luna': 5,
    'Felix': 6,
    'Chloe': 7,
    'Tiger': 6,
    'Joy': 6,
    'Ash': 5,
    'Brock': 7,
    'Oliver': 7,
    'Socks': 5,
    'Thumper': 8,
    'Clover': 8,
    'Bun-Bun': 9,
    'Snowball': 8,
    'Cinnamon': 9,
    'Hazel': 9,
    'Pepper': 9,
    'Oreo': 8,
    'Cotton Trail': 9,
    'Zephyr': 11,
    'Atlas': 12,
    'Sapphire': 10,
    'Nova': 10,
    'Petra': 11,
    'Phoenix': 12,
    'Orion': 12,
    'Venus': 11,
    'Cosmo': 10,
    'Stella': 10,
    'Apollo': 12,
    'Aurora': 11
}


stored_images = {}

def getImages():
    for pet in pets:
        breed = type_id_to_breed[pets[pet]]

        print(f"link: https://unsplash.com/s/photos/{breed}")
        
        # Send a GET request
        response = requests.get(f"https://unsplash.com/s/photos/{breed}")
        #  NOT WORKING SITES ALREADY TRIED: https://www.pexels.com/search/yorkshire%20terrier/, https://www.google.com/search?q={breed}, https://www.rawpixel.com/search/{breed}?page=1&path=_topics&sort=curated , https://www.pinterest.com/search/pins/?q={breed}&rs=typed, https://duckduckgo.com/?q={breed}+site%3Adogbreedinfo.com&iax=images&ia=images
        # Works: https://unsplash.com/s/photos/{breed}

        # Parse the HTML response
        soup = BeautifulSoup(response.text, 'html.parser')

        
        # Find image URLs (assuming they're stored in img tags with src attribute)
        image_urls = [img['src'] for img in soup.find_all('img')]
        
        # Pick the next image URL based on the count of images we've already seen
        image_count = breed_to_image_count.get(breed, 0)
        
        #update the count of images for the breed
        # if the breed is not in the dictionary, add it with a count of 1
        # if the breed is in the dictionary, increment the count by 1
        if breed in breed_to_image_count:
            breed_to_image_count[breed] = image_count + 1
        else:
            breed_to_image_count[breed] = 1
        
        # Store the image URL for the pet
        stored_images[pet] = image_urls[image_count]


# for every stored_image write a sql UPDATE query to update the image_url for the pet based on pet_id
def outputQuery():
    pet_id = 1
    for pet in stored_images:
        print(f"UPDATE pet SET img = '{stored_images[pet]}' WHERE pet_id = '{pet_id}';")
        pet_id += 1

def main():
    # for every breed, if it has a space in it replace it with '-'
    for breed in type_id_to_breed:
        if ' ' in type_id_to_breed[breed]:
            type_id_to_breed[breed] = type_id_to_breed[breed].replace(' ', '-')
    
    getImages()
    outputQuery()

if __name__ == "__main__":
    main()