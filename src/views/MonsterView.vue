<script setup>
	import { useMonsterStore } from '@/stores/monsterStore';

	import { useRoute } from 'vue-router';

	const monsters = useMonsterStore();
	const route = useRoute();

	// data store . monster array
	const foundMonster = monsters.list.find((monster) => {
		return monster.slug === route.params.slug;
	});
</script>
<template>
	<h1 class="loud-voice">Monster Detail</h1>
	{{ foundMonster }}
</template>
