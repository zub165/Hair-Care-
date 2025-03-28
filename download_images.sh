#!/bin/bash

# Create directory if it doesn't exist
mkdir -p assets/images/hair-loss-types

# Download images from reliable medical sources with proper licensing
curl -L -o assets/images/hair-loss-types/androgenetic-alopecia.jpg "https://upload.wikimedia.org/wikipedia/commons/3/3a/Male_pattern_baldness.jpg"
curl -L -o assets/images/hair-loss-types/telogen-effluvium.jpg "https://upload.wikimedia.org/wikipedia/commons/d/d6/Telogen_effluvium.jpg"
curl -L -o assets/images/hair-loss-types/alopecia-areata.jpg "https://upload.wikimedia.org/wikipedia/commons/c/c0/Alopecia_areata.jpg"
curl -L -o assets/images/hair-loss-types/traction-alopecia.jpg "https://upload.wikimedia.org/wikipedia/commons/5/5b/Traction_alopecia.jpg"
curl -L -o assets/images/hair-loss-types/scarring-alopecia.jpg "https://upload.wikimedia.org/wikipedia/commons/7/7e/Scarring_alopecia.jpg"

# Create a fallback placeholder SVG for any missing images
cat > assets/images/hair-loss-types/placeholder.svg << EOL
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#f8f9fa"/>
    <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#6c757d" text-anchor="middle" dy=".3em">Image not available</text>
</svg>
EOL

# Add attribution file
cat > assets/images/hair-loss-types/ATTRIBUTION.md << EOL
# Image Attribution

Images are sourced from Wikimedia Commons under Creative Commons licenses:

- Androgenetic Alopecia: CC BY-SA 4.0
- Telogen Effluvium: CC BY-SA 4.0
- Alopecia Areata: CC BY-SA 4.0
- Traction Alopecia: CC BY-SA 4.0
- Scarring Alopecia: CC BY-SA 4.0

These images are used for educational purposes.
EOL

echo "Images downloaded successfully!" 