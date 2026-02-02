#!/bin/bash
# ============================================================================
# SCRIPT DE GRABACIÓN DE VIDEO - IXIMI LEGACY
# Genera un video demostrativo de la presentación
# ============================================================================

echo "🎬 IXIMI LEGACY - GENERADOR DE VIDEO DEMOSTRATIVO"
echo "=================================================="
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Opciones de Grabación:${NC}"
echo "1. Grabar con OBS Studio (recomendado)"
echo "2. Grabar con QuickTime (Mac)"
echo "3. Grabar con Kazam (Linux)"
echo "4. Usar extensión de Chrome/Screen Recorder"
echo ""

# URL de la presentación
PRESENTATION_URL="http://localhost:3000/presentation"

echo -e "${GREEN}PASOS PARA GRABAR EL VIDEO:${NC}"
echo "==================================="
echo ""
echo "Opción 1: OBS Studio (Windows/Mac/Linux)"
echo "------------------------------------------"
echo "1. Descargar OBS Studio desde: https://obsproject.com/"
echo "2. Abrir OBS y crear una nueva 'Escena'"
echo "3. Agregar 'Captura de Ventana' y seleccionar el navegador"
echo "4. Ir a: ${PRESENTATION_URL}"
echo "5. Activar Auto-play haciendo clic en el botón"
echo "6. Iniciar grabación (Ctrl+R)"
echo "7. Dejar que termine todos los 8 slides"
echo "8. Detener grabación"
echo ""

echo "Opción 2: Extensión de Chrome - Screen Recorder"
echo "-----------------------------------------------"
echo "1. Instalar extensión: 'Screen Recorder' de Chrome Web Store"
echo "2. Abrir: ${PRESENTATION_URL}"
echo "3. Activar Auto-play"
echo "4. Hacer clic en extensión > Grabar Pestaña"
echo "5. Esperar a que termine (40 segundos)"
echo "6. Guardar video como 'iximi-legacy-demo.mp4'"
echo ""

echo "Configuración Recomendada:"
echo "--------------------------"
echo "- Resolución: 1920x1080 (Full HD)"
echo "- FPS: 30"
echo "- Formato: MP4"
echo "- Duración estimada: 40-50 segundos"
echo ""

echo "Para iniciar la presentación:"
echo "------------------------------"
echo "1. Asegurarse que el servidor esté activo:"
echo "   npm start"
echo ""
echo "2. Abrir en navegador:"
echo "   ${PRESENTATION_URL}"
echo ""
echo "3. Hacer clic en 'Auto-play: OFF' para iniciar"
echo ""
echo "4. Usar las flechas del teclado para navegación manual"
echo ""

echo "Contenido del Video (8 Slides):"
echo "--------------------------------"
echo "1. Portada - Estefanía Pérez Vázquez"
echo "2. El Problema - Apropiación Cultural"
echo "3. La Solución - IXIMI Legacy"
echo "4. Impacto Esperado - 500K artesanos"
echo "5. Demostración - Sistema QR"
echo "6. Inversión - $106 MDP"
echo "7. Hoja de Ruta - 3 fases"
echo "8. Cierre - Contacto y Repositorio"
echo ""

echo "Después de grabar:"
echo "------------------"
echo "1. Editar video si es necesario"
echo "2. Agregar música de fondo (opcional)"
echo "3. Exportar como MP4"
echo "4. Subir a YouTube o enviar directamente"
echo ""

echo -e "${YELLOW}💡 Consejo: Graba en Fullscreen para mejor calidad${NC}"
echo ""
