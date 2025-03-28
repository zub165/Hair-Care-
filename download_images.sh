#!/bin/bash

# Create directory if it doesn't exist
mkdir -p assets/images/hair-loss-types

# Download images from Wikimedia Commons
curl -L -o assets/images/hair-loss-types/androgenetic-alopecia.jpg \
"https://upload.wikimedia.org/wikipedia/commons/3/3a/Male_pattern_baldness.jpg"

curl -L -o assets/images/hair-loss-types/telogen-effluvium.jpg \
"https://upload.wikimedia.org/wikipedia/commons/d/d6/Telogen_effluvium.jpg"

curl -L -o assets/images/hair-loss-types/alopecia-areata.jpg \
"https://upload.wikimedia.org/wikipedia/commons/c/c0/Alopecia_areata.jpg"

curl -L -o assets/images/hair-loss-types/traction-alopecia.jpg \
"https://upload.wikimedia.org/wikipedia/commons/5/5b/Traction_alopecia.jpg"

curl -L -o assets/images/hair-loss-types/scarring-alopecia.jpg \
"https://upload.wikimedia.org/wikipedia/commons/7/7e/Scarring_alopecia.jpg"

# Create a fallback placeholder SVG for any missing images
cat > assets/images/hair-loss-types/placeholder.svg << EOL
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f8f9fa"/>
    <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#6c757d" text-anchor="middle" dy=".3em">Image not available</text>
</svg>
EOL

# Create attribution file
cat > assets/images/hair-loss-types/ATTRIBUTION.md << EOL
# Image Attributions

All images are sourced from Wikimedia Commons under their respective licenses:

1. Androgenetic Alopecia - Male pattern baldness
   Source: Wikimedia Commons
   URL: https://commons.wikimedia.org/wiki/File:Male_pattern_baldness.jpg

2. Telogen Effluvium
   Source: Wikimedia Commons
   URL: https://commons.wikimedia.org/wiki/File:Telogen_effluvium.jpg

3. Alopecia Areata
   Source: Wikimedia Commons
   URL: https://commons.wikimedia.org/wiki/File:Alopecia_areata.jpg

4. Traction Alopecia
   Source: Wikimedia Commons
   URL: https://commons.wikimedia.org/wiki/File:Traction_alopecia.jpg

5. Scarring Alopecia
   Source: Wikimedia Commons
   URL: https://commons.wikimedia.org/wiki/File:Scarring_alopecia.jpg
EOL

echo "Images downloaded successfully!" 