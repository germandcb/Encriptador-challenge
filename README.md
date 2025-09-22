# Encrypt Challenge

## Descripción

Encrypt Challenge es una aplicación web simple y educativa para encriptar y desencriptar texto utilizando un algoritmo de sustitución básico. Este proyecto demuestra conceptos fundamentales de criptografía y manipulación de cadenas en JavaScript, ideal para principiantes en desarrollo web y seguridad informática.

La aplicación permite a los usuarios ingresar texto en minúsculas (sin acentos) y transformarlo mediante reglas de encriptación predefinidas, así como revertir el proceso para obtener el texto original.

## Características Principales

- **Encriptación Simple**: Reemplaza vocales con cadenas específicas para ofuscar el texto.
- **Desencriptación**: Revierte el proceso de encriptación para recuperar el texto original.
- **Interfaz Intuitiva**: Diseño limpio y fácil de usar con botones para encriptar, desencriptar y copiar.
- **Validación de Entrada**: Solo acepta texto en minúsculas sin acentos para mantener la simplicidad del algoritmo.
- **Copia al Portapapeles**: Función integrada para copiar el resultado procesado.
- **Responsive**: Adaptable a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos y diseño visual.
- **JavaScript (Vanilla)**: Lógica de encriptación, desencriptación y manipulación del DOM.

## Instrucciones de Instalación

Este proyecto es un sitio web estático y no requiere instalación compleja. Sigue estos pasos para ejecutarlo localmente:

1. **Clona el repositorio** (si aplica) o descarga los archivos del proyecto.
2. **Abre el archivo principal**: Navega al directorio del proyecto y abre `index.htm` en tu navegador web preferido (Chrome, Firefox, Safari, etc.).
3. **¡Listo!** La aplicación estará funcionando inmediatamente.

### Requisitos del Sistema

- Un navegador web moderno con soporte para JavaScript (recomendado: Chrome 80+, Firefox 75+, Safari 13+).
- No se requieren dependencias externas ni servidores.

## Ejemplos de Uso

### Encriptar Texto

1. Ingresa texto en minúsculas sin acentos en el campo de entrada (ejemplo: "hola mundo").
2. Haz clic en el botón "Encriptar".
3. El texto encriptado aparecerá en el área de resultados (ejemplo: "hoberlai mufatndober").

### Desencriptar Texto

1. Ingresa texto encriptado en el campo de entrada (ejemplo: "hoberlai mufatndober").
2. Haz clic en el botón "Desencriptar".
3. El texto original aparecerá en el área de resultados (ejemplo: "hola mundo").

### Copiar Resultado

- Después de encriptar o desencriptar, haz clic en el botón "Copiar" para guardar el resultado en el portapapeles.

### Reglas de Encriptación

- `e` → `enter`
- `o` → `ober`
- `i` → `imes`
- `a` → `ai`
- `u` → `ufat`

Estas reglas se aplican de manera secuencial y son reversibles.

## Estructura del Proyecto

``` shell
encrypt-challenge/
├── index.htm          # Archivo principal HTML
├── css/
│   └── styles.css     # Estilos CSS
├── js/
│   └── main.js        # Lógica JavaScript
├── imagenes/
│   ├── Logologo.png   # Logo del sitio
│   └── munecoi.png    # Imagen decorativa
└── README.md          # Este archivo
```
