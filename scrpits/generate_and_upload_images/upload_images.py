import requests

# Replace 'YOUR_API_KEY' and 'YOUR_API_SECRET' with your actual pinata.cloud API credentials
api_key = 'YOUR_API_KEY'
api_secret = 'YOUR_API_SECRET'

# Define the generated image URL obtained from DALL-E 2 or Midjourney
generated_image_url = 'https://example.com/generated_image.jpg'

# Upload the image to pinata.cloud
headers = {
    'pinata_api_key': api_key,
    'pinata_secret_api_key': api_secret,
}

data = {
    'file': requests.get(generated_image_url).content,
}

response = requests.post('https://api.pinata.cloud/pinning/pinFileToIPFS', headers=headers, files=data)

# Get the IPFS URL from the response
if response.status_code == 200:
    ipfs_url = response.json()['IpfsHash']
    print("IPFS URL:", f"https://ipfs.io/ipfs/{ipfs_url}")
else:
    print("Error uploading image to IPFS:", response.json())
