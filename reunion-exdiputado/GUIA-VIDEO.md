# Guía para Grabar Video Demostrativo - IXIMI Legacy

## Introducción

Esta guía te ayudará a crear un video profesional de la presentación de IXIMI Legacy para enviar al exdiputado o subir a plataformas como YouTube.

---

## Paso 1: Preparación

### Asegurarse que el servidor esté activo

```bash
# En terminal, navegar al directorio del proyecto
cd iximi_legacy

# Iniciar servidor
npm start
```

### Verificar que la presentación funcione

Abrir en navegador:
```
http://localhost:3000/presentation
```

---

## Paso 2: Opciones de Grabación

### Opción A: OBS Studio (Recomendado)

**Windows/Mac/Linux:**
1. Descargar desde: https://obsproject.com/
2. Instalar y abrir OBS Studio
3. Crear nueva "Escena"
4. Agregar fuente: "Captura de Ventana"
5. Seleccionar ventana del navegador
6. Ir a http://localhost:3000/presentation
7. Hacer clic en "Auto-play: OFF" (cambia a ON)
8. Iniciar grabación: Ctrl+R
9. Esperar 40 segundos (8 slides × 5 segundos)
10. Detener grabación

### Opción B: Extensión de Chrome

1. Instalar "Screen Recorder" desde Chrome Web Store
2. Abrir http://localhost:3000/presentation
3. Activar Auto-play
4. Clic en extensión > Grabar Pestaña
5. Esperar a que termine
6. Guardar como `iximi-legacy-demo.mp4`

### Opción C: QuickTime (Mac)

1. Abrir QuickTime Player
2. Archivo > Nueva Grabación de Pantalla
3. Seleccionar área a grabar
4. Abrir http://localhost:3000/presentation
5. Activar Auto-play
6. Iniciar grabación
7. Esperar 40 segundos
8. Detener y guardar

---

## Configuración Recomendada

| Parámetro | Valor |
|-----------|-------|
| Resolución | 1920x1080 (Full HD) |
| FPS | 30 |
| Formato | MP4 |
| Duración | 40-50 segundos |
| Codec | H.264 |

---

## Contenido del Video (8 Slides)

| # | Slide | Duración |
|---|-------|----------|
| 1 | Portada - Estefanía Pérez Vázquez | 5s |
| 2 | El Problema - Apropiación Cultural | 5s |
| 3 | La Solución - IXIMI Legacy | 5s |
| 4 | Impacto Esperado | 5s |
| 5 | Demostración - Sistema QR | 5s |
| 6 | Inversión Requerida | 5s |
| 7 | Hoja de Ruta | 5s |
| 8 | Cierre - Contacto | 5s |

**Total: 40 segundos**

---

## Después de Grabar

### Editar Video (Opcional)

Puedes usar:
- **Windows**: Windows Video Editor
- **Mac**: iMovie
- **Online**: Canva, Clipchamp
- **Profesional**: Adobe Premiere, DaVinci Resolve

### Mejoras Sugeridas

1. **Música de fondo**: Agregar música suave (no hablado)
2. **Transiciones**: Suavizar cortes
3. **Logo**: Agregar watermark de IXIMI Legacy
4. **Intro/Outro**: Pantallas de inicio y cierre

### Exportar

- Formato: MP4
- Calidad: Alta (1080p)
- Compresión: H.264

---

## Compartir el Video

### Opciones de Distribución

1. **YouTube** (Público o No listado)
   - Título: "IXIMI Legacy - Sistema Blockchain para Textiles Indígenas"
   - Descripción: Incluye enlaces al repositorio

2. **WhatsApp/Telegram** (Archivo MP4 < 64MB)
   - Comprimir video si es necesario

3. **Email** (Archivo < 25MB)
   - Usar WeTransfer para archivos grandes

4. **Drive/Dropbox** (Compartir enlace)

---

## URL para Compartir

- **Presentación online**: http://localhost:3000/presentation
- **Repositorio**: https://github.com/legacyiximi-afk/iximi_legacy

---

## Checklist Antes de Grabar

- [ ] Servidor activo (`npm start`)
- [ ] Presentación cargada correctamente
- [ ] Auto-play funciona
- [ ] Pantalla limpia (sin otras ventanas)
- [ ] Conexión a internet estable
- [ ] Micrófono silencioso (si no hay narración)

---

## Problemas Comunes

### Video lento
- Cerrar aplicaciones innecesarias
- Usar GPU para encoding en OBS

### Pantalla negra
- Cambiar "Captura de Ventana" a "Captura de Pantalla"
- Ejecutar navegador como administrador

### Audio/no sincronizado
- Grabar sin audio y agregar después
- Usar Editor de video

---

## Contacto para Soporte

**Estefanía Pérez Vázquez**
- Email: legacyiximi@gmail.com
- GitHub: @legacyiximi-afk

---

*Generado para la reunión con el exdiputado - IXIMI Legacy*
