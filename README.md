# Taller: Autenticación con JWT y Guards en NestJS

Este repositorio contiene la implementación del taller de "Desarrollo en Plataformas" de la PUCE.

## Objetivos Cumplidos

- [x] Registro de usuarios con contraseña hasheada (bcrypt).
- [x] Login de usuarios generando token JWT.
- [x] Protección de rutas mediante Guards (`JwtAuthGuard`).
- [x] Acceso a datos del usuario desde el request (`req.user`).

## Instalación y Ejecución

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el proyecto:
   ```bash
   npm run start:dev
   ```

El servidor correrá en `http://localhost:3000`.

## Endpoints Principales

- `POST /auth/register`: Registro de usuario.
- `POST /auth/login`: Iniciar sesión (retorna token).
- `GET /auth/profile`: Perfil del usuario (Requiere Token).
- `GET /auth/protected`: Ruta de prueba protegida (Requiere Token).
