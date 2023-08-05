import openai

# Replace 'YOUR_API_KEY' with your actual OpenAI API key
openai.api_key = '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'

# Define your prompt for image generation
prompt = "A beautiful landscape with mountains and a lake."

# Set the model and parameters (DALL-E 2)
model = "image-dall-e-2-tpu"
temperature = 0.7
max_tokens = 100

# Request the image generation
response = openai.Completion.create(
    engine=model,
    prompt=prompt,
    temperature=temperature,
    max_tokens=max_tokens
)

# Retrieve the generated image URL
generated_image_url = response['choices'][0]['image']
print("Generated Image URL:", generated_image_url)
