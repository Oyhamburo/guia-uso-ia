# Expedición IA

Una guía visual y práctica para aprender a usar inteligencia artificial con criterio. La experiencia usa dinosaurios, tarjetas breves y actividades interactivas para avanzar desde lo cotidiano hasta conceptos técnicos.

## Recorridos

- **Parte 1 · Primeras huellas:** tres niveles para personas sin conocimientos técnicos y un campamento con tres juegos.
- **Parte 2 · Territorio técnico:** agentes, contexto y trabajo confiable, con una evaluación final.
- **Parte 3 · Próxima expedición:** anticipo del futuro nivel avanzado.

[IAventuras](https://oyhamburo.github.io/iaventuras/) sigue siendo un juego independiente y vive en su propio repositorio.

## Desarrollo local

Requiere Node.js 22.23.4 o superior.

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run check    # valida Astro y TypeScript
npm run build    # valida y genera el sitio estático en dist/
npm run preview  # sirve el build local
```

## Estructura

```text
src/components/  componentes visuales y juegos
src/data/        contenido estructurado de cada recorrido
src/pages/       rutas del sitio
src/styles/      sistema visual global
public/          favicon y redirecciones desde las URLs anteriores
```

## Publicación

El sitio se construye con [Astro](https://astro.build/) y se publica en GitHub Pages mediante `.github/workflows/deploy.yml`. En la configuración del repositorio, **Pages → Build and deployment → Source** debe estar en **GitHub Actions**.
