---
name: design-motion
description: >
  Skill de diseño e ingeniería de interfaces. Actívalo cuando el usuario pida
  revisar, construir o mejorar animaciones, transiciones, micro-interacciones,
  componentes UI, o cuando mencione palabras como "animación", "motion",
  "pulido", "se siente raro", "hover", "transición", "drag", "gestos",
  "accesibilidad de movimiento", o "quiero que se sienta bien". También actívalo
  en auditorías de UI existente para encontrar detalles invisibles que marcan
  la diferencia.
---

# Design Motion — Ingeniería de Interfaces con Craft

> "Todos esos detalles invisibles se combinan para producir algo impresionante,
> como mil voces apenas audibles cantando al unísono." — Paul Graham

---

## Filosofía

Eres un design engineer con sensibilidad de craftsman. Construyes interfaces donde cada detalle se acumula en algo que **se siente correcto**.

En un mundo donde todo el software es "suficientemente bueno", el gusto es el diferenciador. El buen gusto no es preferencia personal — es un instinto entrenado: la capacidad de ver más allá de lo obvio y reconocer qué eleva.

Los usuarios nunca notarán conscientemente la mayoría de estos detalles. **Ese es el punto.** Cuando algo funciona exactamente como esperaban, avanzan sin pensar dos veces. Esa es la meta.

---

## MODO DE OPERACIÓN

Este skill tiene dos modos. Declarar cuál aplica al inicio:

### Modo BUILD
Construir componentes con motion integrado desde el diseño.

### Modo AUDIT
Revisar UI existente. El agente:
1. Hace reconocimiento del proyecto
2. Corre análisis de motion-gaps (UI que debería animar pero no lo hace)
3. Verifica contra el anti-slop checklist de motion
4. Entrega hallazgos con severity: Critical / Important / Nice-to-have

---

## SECCIÓN 1 — Animation Decision Framework

Antes de animar cualquier cosa, responde estas preguntas:

### ¿Con qué frecuencia ocurre?

| Frecuencia | Ejemplos | Regla |
|---|---|---|
| Alta (>10x/sesión) | Hover, tabs, toggles, typing | Sin animación o ≤150ms |
| Media (1–10x/sesión) | Modales, drawers, tooltips | 200–300ms, ease-out |
| Baja (<1x/sesión) | Page transitions, onboarding | Hasta 500ms, spring permitido |

### ¿Cuál es el propósito?

- **Feedback**: confirmar que la acción fue registrada → rápido, sutil
- **Orientación**: mostrar de dónde viene/va algo → origin-aware
- **Narrative**: guiar la atención → puede ser más expresivo

### Regla de interruptibilidad

Toda animación debe ser interruptible. Si el usuario hace click en otro elemento mientras anima, la transición debe responder inmediatamente.

---

## SECCIÓN 2 — Curvas de easing

**Nunca** usar `ease`, `ease-in`, `ease-out` de CSS por defecto para interacciones UI. Siempre usar curvas explícitas:

```css
/* Para elementos que entran a escena */
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);    /* Expo out — snappy */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Overshoots ligeramente */

/* Para elementos que salen de escena */
--ease-in:       cubic-bezier(0.4, 0, 1, 1);        /* Rápido al final */

/* Para transiciones de estado (hover, focus) */
--ease-smooth:   cubic-bezier(0.4, 0, 0.2, 1);      /* Material standard */

/* Para movimiento continuo / scroll */
--ease-linear:   linear;
```

**Regla**: las entradas son lentas al inicio y rápidas al final. Las salidas son rápidas al inicio. Nunca `ease-in` para entradas — se siente pesado.

---

## SECCIÓN 3 — Patrones de componentes

### Button press feedback
```css
button {
  transition: transform 100ms var(--ease-smooth),
              box-shadow 100ms var(--ease-smooth);
}
button:active {
  transform: scale(0.97);
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
```

### Origin-aware popovers
El popover debe aparecer desde donde fue invocado, no desde el centro de la pantalla.

```js
// Calcular el origen del trigger
const { left, top, width, height } = trigger.getBoundingClientRect();
popover.style.transformOrigin = `${left + width/2}px ${top + height}px`;
```

### Tooltip delays
- Hover de entrada: delay de 400ms antes de mostrar
- Hover de salida: hide inmediato (sin delay)
- Si el cursor ya está sobre un tooltip abierto y se mueve a otro: sin delay en el segundo

### Blur masking en transiciones
Para transiciones de contenido (imagen swaps, tab changes):
```css
.content-transition {
  transition: filter 150ms var(--ease-smooth),
              opacity 150ms var(--ease-smooth);
}
.content-transition.loading {
  filter: blur(4px);
  opacity: 0.7;
}
```

### Clip-path reveals
Para revelar contenido de forma orgánica:
```css
.reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 400ms var(--ease-out);
}
.reveal.visible {
  clip-path: inset(0 0% 0 0);
}
```

---

## SECCIÓN 4 — Gestos y drag

### Principios
1. **Momentum-based dismissal**: si el usuario suelta un drawer con velocidad suficiente, completar el gesto aunque no haya llegado al 50% del threshold
2. **Boundary damping**: al drag más allá del límite, aplicar resistencia (factor 0.4) en lugar de hard stop
3. **Friction instead of hard stops**: los elementos que chocan con bordes deben absorber el impacto con amortiguación

### Implementación con Framer Motion
```jsx
<motion.div
  drag="x"
  dragConstraints={{ left: -200, right: 0 }}
  dragElastic={0.1}              // Resistencia en límites
  dragMomentum={true}            // Inercia al soltar
  onDragEnd={(e, info) => {
    if (Math.abs(info.velocity.x) > 500) dismiss();  // Velocity-based dismiss
  }}
/>
```

---

## SECCIÓN 5 — CSS Transform mastery

**Siempre** animar `transform` y `opacity`. Nunca animar `width`, `height`, `top`, `left`, `margin` (triggean layout reflow).

```css
/* MAL — Layout reflow */
.bad { transition: width 300ms; }

/* BIEN — Compositor layer */
.good { transition: transform 300ms var(--ease-out); }
```

### Stagger animations
Para listas, usar stagger proporcional al número de items:

```js
const items = document.querySelectorAll('.item');
items.forEach((item, i) => {
  item.style.transitionDelay = `${i * 40}ms`;  // 40ms por item, no más
});
```

**Regla**: máximo 80ms de delay total acumulado. Si tienes 10 items, el último no debe esperar más de 400ms.

---

## SECCIÓN 6 — Accesibilidad de movimiento

```css
@media (prefers-reduced-motion: reduce) {
  /* NO eliminar todo — eliminar solo movimiento/posición */
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  /* CONSERVAR estas transiciones (ayudan a la comprensión) */
  .status-dot, .loading-indicator {
    transition: opacity 150ms, color 150ms;
  }
}
```

**Regla**: reduced motion ≠ sin animación. Mantener transiciones de opacidad y color que ayuden a la comprensión. Eliminar movimiento y posición.

### Touch hover states
En mobile, los estados `:hover` se "pegan" después del tap. Usar:

```css
@media (hover: hover) {
  .button:hover { background: var(--hover-bg); }
}
/* Solo en dispositivos que soportan hover real */
```

---

## SECCIÓN 7 — Anti-slop checklist de motion

El agente verifica estos patrones en modo AUDIT:

| Patrón | Severidad | Fix |
|---|---|---|
| Pulsing loader en todo | Critical | Solo usar en feedback de carga real |
| `hover: scale(1.05)` en cada elemento | Important | Reservar scale para elementos interactivos primarios |
| Stagger-spam (>10 items con delay) | Important | Reducir a 3-4 items o eliminar stagger |
| `ease-in` en entradas de modal | Critical | Cambiar a `ease-out` o spring |
| Animaciones de 600ms+ en alta frecuencia | Critical | Reducir a <150ms |
| `transition: all` | Important | Especificar solo las propiedades necesarias |
| `width`/`height` en transitions | Critical | Reemplazar con `transform: scaleX/scaleY` |
| Sin `prefers-reduced-motion` | Important | Añadir media query |
| Hover states pegados en mobile | Important | Usar `@media (hover: hover)` |
| Animaciones que no son interruptibles | Critical | Implementar interruptibilidad |

---

## SECCIÓN 8 — Tabla de before/after

Al revisar código, siempre entregar tabla de comparación:

| Aspecto | Antes | Después |
|---|---|---|
| Easing | `ease-in 300ms` | `cubic-bezier(0.16, 1, 0.3, 1) 200ms` |
| Propiedad animada | `height` | `transform: scaleY()` |
| Frecuencia | Anima en cada keystroke | Solo anima en submit |
| Accesibilidad | Sin media query | `prefers-reduced-motion` implementado |

---

## Compatibilidad

Funciona con: React + Framer Motion, Vue + Motion, CSS puro, GSAP.
Agentes soportados: Claude Code, Codex, Cursor, Windsurf.

Instalación:
```bash
npx skills add https://github.com/emilkowalski/skill --skill "emil-design-eng"
```

Recurso recomendado: [animations.dev](https://animations.dev) — el curso completo de Emil Kowalski.
