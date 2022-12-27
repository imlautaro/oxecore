Nuxt layer with essential modules and components to simplify a little bit the creation of new projects.

## Setup

```bash
npm i -D oxecore # yarn add -D oxecore
```

```tsx
// ~~/nuxt.config.ts
export default defineNuxtConfig({
	extends: ['oxecore'],
})
```

## Modules Preset

-   UnoCSS\*
-   Nuxt Icon\*
-   VueUse

### UnoCSS defaults

-   Preflight
-   Directives & Variant Group Transformers enabled
-   Typography enabled

### Nuxt Icon defaults

-   Size set to 1.5em

## Components

-   Stack
-   Container

## Usage

### Stack Component

This component is for creating flex elements by an intuitive way.

**Example:**

```tsx
<template>
	<Stack gap="2" items="center" vertical>
		<span>Apple</span>
		<span>Banana</span>
		<span>Orange</span>
	</Stack>
	<!-- unocss equivalent -->
	<div class="flex flex-col space-y-2 items-center">
		<span>Apple</span>
		<span>Banana</span>
		<span>Orange</span>
	</div>
</template>
```

**Props available are:**

-   `vertical` → `boolean`
-   `component` → `string`
-   `items` → `'start' | 'end' | 'center' | 'baseline' | 'stretch’`
-   `justify` → `'start' | 'end' | 'center' | 'between' | 'around' | 'evenly’`
-   `gap` → `string ('0' to '12')`

**Defaults are:**

-   `vertical: false`
-   `component: ‘div’`
-   `gap: ‘0’`

<aside>
ℹ️ Notice that the gap prop doesn’t actually use the `gap` css feature, it uses margins between elements to have full compatibility across all browsers.

</aside>

### Container Component

This component is for creating containers by an intuitive way.

**Example:**

```tsx
<template>
	<Container class="py-12" max="lg">
		<h1>Hello world!</h1>
	</Container>
	<!-- unocss equivalent -->
	<div class="mx-auto px-4 w-full lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm py-12">
		<h1>Hello world!</h1>
	</div>
</template>
```

**Props available are:**

-   `max` → `'sm' | 'md' | 'lg' | 'xl' | '2xl’`
-   `component` → `string`

**Defaults are:**

-   `max: '2xl'`
-   `component: ‘div’`
