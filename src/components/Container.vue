<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		component?: string
		max?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
	}>(),
	{
		component: 'div',
		max: '2xl',
	}
)

const buildClasses = computed(() => {
	const classes = ['mx-auto', 'px-4', 'w-full']

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

	return classes.join(' ')
})
</script>

<template>
	<component :is="component" :class="buildClasses">
		<slot />
	</component>
</template>
