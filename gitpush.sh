#!/bin/bash

# Comprobar si se proporcionó un mensaje de commit
if [ -z "$1" ]; then
    echo "Error: Debes proporcionar un mensaje de commit."
    exit 1
fi

# Definir colores para la salida
GREEN='\033[0;32m'
NC='\033[0m' # Sin color

# Añadir todos los cambios
echo -e "${GREEN}Añadiendo cambios...${NC}"
git add .

# Commit con el mensaje proporcionado
echo -e "${GREEN}Haciendo commit: $1${NC}"
git commit -m "$1"

# Push a GitHub
echo -e "${GREEN}Haciendo push a GitHub...${NC}"
git push

echo -e "${GREEN}Completado.${NC}"

