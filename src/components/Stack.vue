<script lang="ts" setup>
withDefaults(
	defineProps<{
		vertical?: boolean
		component?: string
		items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
		justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
		gap?:
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
		to?: string
	}>(),
	{
		vertical: false,
		component: 'div',
		gap: '0',
	}
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
	<component
		:is="component === 'div' && to !== undefined ? NuxtLink : component"
		:to="to"
		class="flex"
		:class="{
			'flex-col': vertical,
			[`space-${vertical ? 'y' : 'x'}-${gap}`]: true,
			[`items-${items}`]: items,
			[`justify-${justify}`]: justify,
		}"
	>
		<slot />
	</component>
</template>
