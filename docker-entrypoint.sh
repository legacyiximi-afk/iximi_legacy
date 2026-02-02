#!/bin/sh
# Script de entrada para Docker
# Detecta si existen archivos compilados en dist/ y los usa, sino usa src/

if [ -d "/app/dist" ] && [ -f "/app/dist/index.js" ]; then
    echo "Usando archivos compilados desde dist/"
    exec node dist/index.js
else
    echo "Usando archivos fuente desde src/"
    exec node src/index.js
fi
