<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		component?: string
		max?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
		px?:
			| 'container-px'
			| '0'
			| '1'
			| '2'
			| '3'
			| '4'
			| '5'
			| '6'
			| '7'
			| '8'
			| '9'
			| '10'
			| '11'
			| '12'
	}>(),
	{
		component: 'div',
		max: '2xl',
		px: 'container-px',
	}
)

const buildClasses = computed(() => {
	const classes = ['mx-auto', 'w-full']

	switch (props.max) {
		case '2xl':
			classes.push('2xl:max-w-screen-2xl')
		case 'xl':
			classes.push('xl:max-w-screen-xl')
		case 'lg':
			classes.push('lg:max-w-screen-lg')
		case 'md':
			classes.push('md:max-w-screen-md')
		case 'sm':
			classes.push('sm:max-w-screen-sm')
	}

	if (props.px === 'container-px') {
		classes.push('container-px')
	} else if (props.px !== '0') {
		classes.push(`px-${props.px}`)
	}

	return classes.join(' ')
})
</script>

<template>
	<component :is="component" :class="buildClasses">
		<slot />
	</component>
</template>
