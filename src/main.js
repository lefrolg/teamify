import "./assets/styles/main.css";

import { definePreset } from '@primeuix/themes';
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App);

const TeamifyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			0: '#ffffff',
			50: "#ECEAFE", // design
			100: '#d6d0ec',
			200: "#c5bde8",
			300: '#b5abe3',
			400: '#9b8eda',
			500: '#7661E2',//design
			600: "#6b57d0",
			700: '#6853d2',
			800: "#6956E5",// design
			950: '#2d2969',
		},
		orange: {
			200: "#ffddd7",
			600: "#F6866A",
			800: "#FB896B",
		},
		yellow: {
			200: "#FFF0E6",
			600: "#FABE7A",
			800: "#FABE7A",
		},
		blue: {
			200: "#E5F7FF",
			600: "#59E6F6",
			800: "#26bfd0",
		},
		colorScheme: {
			light: {
				surface: {
					0: '#ffffff',
					50: "#F9F9F9",
					100: '#DEE1E7',
					200: '#C4C4C4',
					300: '#cecdd9',
					400: '#bdb9cc',
					500: '#9d99ab',
					600: "#828282", //
					700: '#878787',
					800: '#23262F',
					950: '#000000', //
				},
			},
			dark: {
				surface: {
					950: '#ffffff',
					800: "#F9F9F9",
					700: '#DEE1E7',
					600: '#e3e2e8',
					500: '#cecdd9',
					400: '#C4C4C4',
					300: '#9d99ab',
					200: "#787486",
					100: '#878787',
					50: '#23262F',
					0: '#000000',
				}
			}
		}

	}
});

app.use(PrimeVue, {
	theme: {
		preset: TeamifyPreset,
		options: {
			darkModeSelector: ".p-dark",
		},
	},
});

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount("#app");
