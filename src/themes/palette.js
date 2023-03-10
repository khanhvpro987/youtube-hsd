import { dark, light } from './colors';

export const palette = {
	dark: {
		background: {
			default: dark.base,
			card: dark.surfaceBase,
			paper: dark.surfaceBase,
			navbar: dark.surfaceBase,
			button: {
				success: dark.green,
				error: dark.red,
				warning: dark.peach,
				info: dark.blue,
				disable: dark.overlayBase,
			},
			buttonHover: {
				success: dark.teal,
				error: dark.maroon,
				warning: dark.yellow,
				info: dark.sapphire,
				disable: dark.overlayBase,
			},
		},
		text: {
			default: dark.text,
			card: dark.text,
			paper: dark.text,
			button: {
				default: dark.text,
				success: dark.teal,
				error: dark.maroon,
				warning: dark.yellow,
				info: dark.sapphire,
				disable: dark.subTextPrimary,
			},
			buttonHover: {
				default: dark.subTextPrimary,
				success: dark.green,
				error: dark.red,
				warning: dark.peach,
				info: dark.blue,
				disable: dark.subTextPrimary,
			},
		},
	},
	light: {
		background: {
			default: light.base,
			card: light.surfaceBase,
			paper: light.surfaceBase,
			navbar: light.surfaceBase,
			button: {
				success: light.green,
				error: light.red,
				warning: light.peach,
				info: light.blue,
				disable: light.overlayBase,
			},
			buttonHover: {
				success: light.teal,
				error: light.maroon,
				warning: light.yellow,
				info: light.sapphire,
				disable: light.overlayBase,
			},
		},
		text: {
			default: light.text,
			card: light.text,
			paper: light.text,
			button: {
				success: light.teal,
				error: light.maroon,
				warning: light.yellow,
				info: light.sapphire,
				disable: light.subTextPrimary,
			},
			buttonHover: {
				success: light.green,
				error: light.red,
				info: light.blue,
				warning: light.peach,
				disable: light.subTextPrimary,
			},
		},
	},
};
