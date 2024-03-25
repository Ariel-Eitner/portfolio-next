#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}Iniciando el servidor de desarrollo...${NC}"
npm run dev &

echo -ne "${YELLOW}Cargando"
for i in {1..5}; do
  echo -ne "."
  sleep 1
done
echo -e "${NC}"

echo -e "${GREEN}Abriendo el navegador en localhost:3000...${NC}"
open http://localhost:3000

