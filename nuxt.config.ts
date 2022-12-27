import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

const range = (size: number, startAt = 1) =>
	Array.from(Array(size).keys()).map(i => i + startAt)

export default defineNuxtConfig({
	appConfig: {
		nuxtIcon: {
			size: '1.5em',
		},
	},
	modules: ['@unocss/nuxt', 'nuxt-icon', '@vueuse/nuxt'],
	srcDir: 'src',
	unocss: {
		preflight: true,
		safelist: [
			...range(12).map(i => `space-x-${i}`),
			...range(12).map(i => `space-y-${i}`),
			'items-start',
			'items-baseline',
			'items-center',
			'items-stretch',
			'items-end',
			'justify-start',
			'justify-end',
			'justify-center',
			'justify-between',
			'justify-around',
			'justify-evenly',
		],
		transformers: [transformerDirectives(), transformerVariantGroup()],
		typography: true,
	},
})
