# 🧩 Arquitectura de microservicios

Arquitectura de microservicios en Python con base de datos MongoDB y Nginx como proxy.

## Estructura

- `ms-1/` y `ms-2/`: microservicios
- `mongo/`: configuración de MongoDB
- `nginx/`: configuración de Nginx
- `docker-compose.yaml`: orquestación de los servicios

## Tecnologías

Python · MongoDB · Nginx · Docker

## Cómo ejecutarlo

```bash
git clone https://github.com/LuisAc3ved4/Arquitectura-de-micro-servidores.git
cd Arquitectura-de-micro-servidores
docker compose up --build
```

> Nota: el keyfile de MongoDB no se incluye por seguridad. Genera uno propio con:
> `openssl rand -base64 756 > mongo-keyfile`

## Autor

Luis Gabriel Acevedo Hernández · [@LuisAc3ved4](https://github.com/LuisAc3ved4)
