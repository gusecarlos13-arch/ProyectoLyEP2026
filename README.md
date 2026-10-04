# TRABAJO INTEGRADOR FINAL - PROGRAMACION VISUAL

## Descripcion TP Integrador - 2026

Este proyecto consiste en la construccion de un Panel de Control de Clientes utilizando React y Vite. Esta aplicacion permite la gestion y visualizacion de informacion de clientes a traves del consumo de datos de la API pública FakeStoreAPI, ademas de la navegacion entre distintas vistas de forma dinamica.

Se implementaran tecnologias como React Router Dom, Context API, LocalStorage, peticiones asincronicas y el uso de un framework de interfaz de usuario, para que la experiencia del usuario sea mas dinamica e interactiva.

## Flujo de Trabajo para Equipos LyEP - 2026

Este repositorio está configurado como base para práctica profesional. Si sos parte de un equipo de trabajo, seguí las instrucciones del TP01.

El flujo general es:

1. Hacé fork de este repositorio
2. Cloná tu fork localmente
3. Agregá este repo como upstream: git remote add upstream [URL]
4. Trabajá en ramas feature: git checkout -b feature/nombre-mejora
5. Hacé commits semánticos frecuentes
6. Abrí un Pull Request desde tu fork hacia este repo

## Configuración local

Las credenciales de acceso al sistema no están escritas en el código fuente (`src/services/autorizacionesServices.js`); se leen desde una variable de entorno (`VITE_USUARIOS`).

Para que el proyecto funcione apenas se clona, el repositorio incluye un archivo `.env` con un set de usuarios de prueba (los mismos que se usaban antes del cambio). No hace falta ningún paso extra para loguearse.

Si preferís usar tus propias credenciales en tu entorno local, creá un archivo `.env.local` con el mismo formato que `.env.example` — ese archivo nunca se sube al repositorio (está en `.gitignore`) y tiene prioridad sobre `.env`.

## Licencia de Uso

El código fuente está bajo licencia MIT.

La documentación y material pedagógico están bajo Creative Commons Attribution 4.0.

© 2026 — Cátedra Legislación y Ejercicio Profesional - Carrera Analista Programador Universitario - FI UNJu