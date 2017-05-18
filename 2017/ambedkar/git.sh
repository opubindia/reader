for file in *; do
    git add $file
    git commit -m "Added $file from Opub Generator"
done
