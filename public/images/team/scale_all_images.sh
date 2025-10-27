#!/bin/bash

# Directory for scaled images
output_dir=""

# Scale factor (percentage)
scale_factor=50

# Create the output directory if it doesn't exist


# Loop through all image files in the current directory
for file in *.{jpg,jpeg,png}; do
  # Check if the file exists (in case no images are found)
  [ -e "$file" ] || continue

  # Get the file name (preserve the original name)
  filename=$(basename "$file")

  # Set the output file path in the scaled directory
  output_file="$filename"

  # Resize the image using ImageMagick
  convert "$file" -resize "$scale_factor%" "$output_file"

  echo "Scaled $file -> $output_file"
done

echo "All images have been scaled and saved in the '$output_dir' directory."
