# 📱 IXIMI Legacy - Guía para Termux (Android)

## 🔧 Paso 1: Actualizar Termux

```bash
pkg update && pkg upgrade
```

**Presiona ENTER cuando pregunte.**

---

## 🟢 Paso 2: Instalar Node.js

```bash
pkg install nodejs
```

**Verificar instalación:**
```bash
node --version
```

---

## 📦 Paso 3: Clonar el Proyecto

```bash
git clone https://github.com/legacyiximi-afk/iximi_legacy.git
cd iximi_legacy
```

---

## 🔧 Paso 4: Instalar Dependencias

```bash
npm install
```

---

## 🚀 Paso 5: Iniciar el Servidor

```bash
npm start
```

---

## 🌐 Paso 6: Acceder

Abre tu navegador en Android y visita:
```
http://localhost:3000
```

---

## 🔍 Verificar que Funciona

```bash
#Nueva terminal en Termux
curl http://localhost:3000/health
```

Deberías ver:
```json
{"status":"healthy","service":"IXIMI Legacy API"}
```

---

## ⏹️ Detener el Servidor

Presiona `Ctrl + C` en la terminal donde está corriendo.

---

## 📋 Resumen Rápido

```bash
# 1. Actualizar
pkg update && pkg upgrade

# 2. Instalar Node.js
pkg install nodejs

# 3. Clonar
git clone https://github.com/legacyiximi-afk/iximi_legacy.git
cd iximi_legacy

# 4. Instalar dependencias
npm install

# 5. Iniciar servidor
npm start

# 6. Abrir navegador
# http://localhost:3000
```

---

## 🐛 Solución de Problemas

**Error: Puerto en uso**
```bash
fuser -k 3000/tcp
npm start
```

**Error: Permisos**
```bash
chmod +x deploy_master.sh
./deploy_master.sh
```

**Necesitas git:**
```bash
pkg install git
```

**Necesitas curl:**
```bash
pkg install curl
```
