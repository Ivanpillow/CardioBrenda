---
name: design-taste
description: >
  Anti-slop frontend design skill. Actívalo SIEMPRE que el usuario pida
  construir, rediseñar o revisar cualquier interfaz, landing page, componente
  UI, o diga palabras como "diseño", "frontend", "bonito", "moderno",
  "premium", "minimalista", o "no quiero que se vea genérico". Fuerza al
  agente a leer el brief primero, inferir la dirección de diseño correcta, y
  bloquear todos los patrones predecibles de AI-slop.
---

# Design Taste — Anti-Slop Frontend Skill

> "El buen diseño no se nota. El mal diseño, siempre."

---

## PASO 0 — Leer el brief antes de escribir código

Antes de generar cualquier UI, el agente debe declarar en voz alta:

```
BRIEF READ:
- Tipo de página: [landing / dashboard / portfolio / SaaS / otro]
- Palabras clave de vibe: [minimalista / editorial / brutal / suave / etc.]
- Audiencia: [devs / consumidores / B2B / etc.]
- Referencias visuales: [si las hay]
- Dirección de diseño elegida: [una frase honesta, no "AI-purple + 3 cards"]
```

Si el brief no contiene suficiente información, el agente **elige** una dirección opinionada en lugar de defaultear al centro estadístico.

---

## DIALES DE PERSONALIZACIÓN

Modifica estos valores antes de generar:

```
DESIGN_VARIANCE   = 7   // 1–10: 1 = centrado/limpio, 10 = asimétrico/experimental
MOTION_INTENSITY  = 5   // 1–10: 1 = hover simple, 10 = scroll-triggered/magnético
VISUAL_DENSITY    = 4   // 1–10: 1 = espacioso/lujo, 10 = dashboard denso
```

---

## SECCIÓN 1 — Locks irrompibles

Estas tres reglas nunca se relajan. Mantienen coherencia visual de inicio a fin.

### Color Consistency Lock
Un solo acento en toda la página. Si la paleta es warm-grey, el CTA en la sección 7 **no** puede ser azul.

### Shape Consistency Lock
Un sistema de border-radius por página. Elige: todo sharp, todo soft, o todo pill. Si mezclas, documenta la excepción.

### Page Theme Lock
Light, dark o auto — elegido una vez a nivel de página. Sin cambios de tema a mitad del scroll.

---

## SECCIÓN 2 — Mapa de brief a design system

| Si el brief menciona... | El agente usa... |
|---|---|
| Material, Google, Android | `@mui/material` o `@radix-ui` con tokens Material |
| Fluent, Microsoft, Office | `@fluentui/react-components` |
| Linear, Notion, editorial | shadcn/ui + Inter + paleta neutral |
| Tailwind, utilidad | Tailwind v4 con config extendida |
| Aesthetic-only / vibes | Web approximation honesta — el agente declara esto |

Para briefs sin referencia explícita de sistema: **no inventar un design system falso**. Usar CSS custom properties + una fuente variable.

---

## SECCIÓN 3 — Hero discipline

El hero debe caber en el viewport inicial. Sin scroll para ver el CTA.

| Elemento | Límite |
|---|---|
| Headline | Máximo 2 líneas en desktop |
| Subtext | Máximo 20 palabras, 4 líneas |
| CTA primario | Visible sin scroll |
| Navegación | Una sola línea, max 80px de alto |

---

## SECCIÓN 4 — Sistema de animación

### Frecuencia de animación
- **Alta frecuencia** (tabs, toggles, hover): sin animación o máximo 150ms
- **Media frecuencia** (modales, drawers): 200–300ms, ease-out
- **Baja frecuencia** (page transitions, onboarding): hasta 500ms, spring

### Curvas personalizadas (no usar `ease` de CSS por defecto)
```css
--ease-smooth:   cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
```

### Tecnología permitida
- Motion/Framer Motion `useScroll`, GSAP `ScrollTrigger`, `IntersectionObserver`, CSS scroll-driven animations
- **Prohibido**: `window.addEventListener('scroll')` con `rAF` tocando React state

### Skeletons canónicos

**Sticky-stack reveal:**
```js
gsap.from(".section", {
  opacity: 0, y: 40,
  stagger: 0.1,
  scrollTrigger: { trigger: ".section", start: "top 80%" }
});
```

**Horizontal pan:**
```js
gsap.to(".track", {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: { scrub: true }
});
```

---

## SECCIÓN 5 — Dark mode

Dual-mode por default. Reglas:

- Contraste WCAG AA en ambos temas
- Off-black (`#0f0f0f`) y off-white (`#f5f5f5`), **nunca** `#000` o `#fff` puro
- Paridad de jerarquía: lo que se ve importante en light, se ve importante en dark
- Fidelidad de brand: el acento de color sobrevive en ambos modos

```css
:root {
  --bg: #f5f4f2;
  --fg: #1a1a1a;
  --accent: #2563eb;
  --muted: #6b7280;
}
[data-theme="dark"] {
  --bg: #0f0f0f;
  --fg: #e8e8e6;
  --accent: #3b82f6;
  --muted: #9ca3af;
}
```

---

## SECCIÓN 6 — THE BAN LIST (anti-slop)

El agente enforcea estas reglas en **cada generación**. Sin excepciones.

| Patrón prohibido | Razón |
|---|---|
| Em-dashes y en-dashes en copy | Usa guión o reescribe la frase |
| Eyebrows con numeración: `00 / INDEX`, `06 · how it works` | Nombra el tema en lenguaje plain |
| Labels de versión en el hero: `V0.6`, `BETA` | Solo si el brief es explícitamente un product launch |
| Captions de foto-crédito decorativos: `Field study no. 12 · Ines` | Solo atribución real a fotógrafos reales |
| Strips decorativos de texto: `BRAND. MOTION. SPATIAL.` | Prohibido |
| Pills flotando sobre imágenes | Caption debajo de la imagen si es necesario |
| Version footers en marketing: `v1.4.2 · Build 0048` | No son landing pages, son devtools |
| Strips de locale/clima: `Lisbon 14:23 · 18°C` | Prohibido en el 99% de briefs |
| Scroll cues: flecha hacia abajo, "Scroll to explore" | El usuario sabe que puede hacer scroll |
| Status dots decorativos | Solo cuando hay estado semántico real |
| `border-t` + `border-b` en cada fila de listas largas | Usa cards, tabs o scroll-snap |
| Fake product UI con divs estilizados | Usa screenshots reales o imágenes generadas |
| Tres feature cards iguales en fila | Usa zig-zag 2-col, grids asimétricos o scroll-pinned |
| AI-purple + mesh blob gradients | Base neutra + un acento de alto contraste |
| SVG illustrations decorativas hand-rolled | Solo para marca simple o si el brief lo pide |
| `window.addEventListener('scroll')` | Usa GSAP ScrollTrigger o IntersectionObserver |

---

## SECCIÓN 7 — Protocolo de rediseño

Para proyectos **existentes**, el agente audita antes de tocar:

1. **Inventario**: listar los patrones genéricos detectados
2. **Modo**: declarar si es Greenfield / Preserve / Overhaul
3. **Restricciones**: URL structure, nav labels y nombres de campos de formulario **nunca cambian silenciosamente**

Para proyectos **nuevos**, el agente declara la dirección de diseño antes de la primera línea de código.

---

## SECCIÓN 8 — Pre-flight checklist

Antes de entregar, cada punto debe pasar honestamente:

- [ ] El brief fue leído y la dirección de diseño fue declarada
- [ ] Los tres locks están aplicados
- [ ] El hero cabe en el viewport inicial
- [ ] Ningún patrón del ban list está presente
- [ ] Las curvas de animación son personalizadas (no `ease` default)
- [ ] Dark mode tiene paridad de jerarquía
- [ ] El design system elegido está correctamente referenciado
- [ ] No hay `window.addEventListener('scroll')` en el código

**Sin checklist, sin entrega.**

---

## Compatibilidad

Funciona con: React, Vue, Svelte, Astro, HTML vanilla, Next.js, Remix.
Agentes soportados: Claude Code, Codex, Cursor, Windsurf, Copilot, Gemini CLI.

Instalación:
```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```
