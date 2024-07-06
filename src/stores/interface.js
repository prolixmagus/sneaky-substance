import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const userInterfaceStore = defineStore('interface', () => {
	const mainMenuOpen = ref(false);

	function toggleMenu() {
		mainMenuOpen.value = !mainMenuOpen.value;
	}

	const menuClass = computed(() => {
		if (mainMenuOpen.value) {
			return 'menu-open';
		} else {
			return 'menu-closed';
		}
	});

	return {
		mainMenuOpen,
		toggleMenu,
		menuClass
	};
});
