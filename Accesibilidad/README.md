# Accesibilidad

## WAI - ARIA

Iniciativa de Accesibilidad Web para Aplicaciones Enriquecidas en Internet

## Introducción

Es la posibilidad de que un producto o servicio web pueda ser accedido o usado, de forma independiente de las limitaciones propias del individuo o de las derivadas del contexto.

### Limitaciones

- Visuales: Desde la baja visión hasta la ceguera total. También hay que tomar en cuenta el daltonismo.
- Motrices: Dificultades a la hora de usar las manos debido a enfermedades como el Parkinson, la distrofia muscular, etc.
- Cognitivas: Dislexia, disfasia, problemas de atención, dificultad de aprendizaje.
- Auditivas: Sordera u otras enfermedades.

### Beneficios

- Aumenta el número de potenciales visitantes y así captamos más clientes.
- Incrementa la satisfacción de los usuarios (UX)
- Disminuye los costes de desarrollo y mantenimiento.
- Reduce los tiempos de carga de las páginas y de los servidores web.

### Tecnologías asistivas, asistenciales o inclusivas

Componentes tecnológicos creados especialmente para proporcionar asistencia a personas que las necesitan en función de sus particularidades

- Lectores de Pantalla (Screen Readers)
- Magnificadores de Pantalla (Screen Magnifiers)
- Lectores de texto: A voz, a voz en línea, a voz para dispositivos móviles, para navegadores, para redes sociales.
- Teclados o dispositivos de entrada alternativos
- Scanning de software

## Estándares de accesibilidad Web: WAI

Es una iniciativa del W3C que trabaja todo esto. Su objetivo es facilitar el acceso y el uso para las personas con discapacidad a la web, eliminando las barreras que impiden su acceso a la información y a los servicios que ofrece.

Ahora están en la versión **WCAG 2.2**

### Niveles

- **A**: Lo más básico.
- **AA**: Son puntos que sí o sí el desarrollador debe de cumplir porque el ingreso a la web sería muy difícil si no se cumplen.
- **AAA**: El nivel más alto, páginas especializadas para grupos específicos.

## Criterios WCAG actual

### Perceptible

1. Proporcionar alternativas textuales para todo contenido no textual. (Alt en las imágenes)
2. Crear contenido que se pueda presentar de diferentes formas sin perder información o estructuras. (Responsive Design)
3. Facilitar a los usuarios ver y oír el contenido.
4. Medios tempo-dependientes (Activar o desactivar animaciones)

### Operable

1. Proporcionar acceso a toda la funcionalidad mediante el teclado (Eventos funcionales según el elemento al que estemos apuntando)
2. Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido.
3. Contenido que evite ataques, espasmos o convulsiones.
4. Proporcionar medios al usuario para indicarle donde se encuentra (Breadcrumbs)

### Comprensible

1. Hacer que el contenido textual sea legible
2. Hacer que haya contraste

### Robusto

1. Maximizar la compatibilidad con las aplicaciones de usuario actuales y futuras, incluyendo las ayudas técnicas.

## Recomendaciones

- Todos los elementos visuales deben contar con una descripción de su función.
- Incluir subtítulos y transcripciones de los sonidos.
- Usar texto que tenga sentido cuando se lee fuera de contexto.

### Elementos de accesibilidad HTML y CSS

- **DOCTYPE**
- Identificar el **idioma** de la página `<html lang="idioma">`
- Construir **títulos** de página significativos
- Usar HTML Semántico y válido
  - Encabezados correctamente ordenados
- Ayudas de navegación adicionales
  - Propósito de los enlaces
  - Añadir título a los vínculos
- Presentar inicialmente el contenido principal ('above the fold')
