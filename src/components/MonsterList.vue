<script setup>
	import { monsterStore } from '@/stores/monsterStore'

	const monsterData = monsterStore()
</script>

<template>
	<ul class="monster-list">
		<li class="monster-item" v-for="monster in monsterData.monsters" :key="monster.id">
			<ul>
				<li>Name: {{ monster.identity }}</li>
				<li>Age: {{ monster.age }}</li>
				<li>Location: {{ monster.location }}</li>
				<li>Favorite Food: {{ monster.food }}</li>
				<!-- <li>add joy message somehow? </li> -->
			</ul>
		</li>
	</ul>
</template>

<style scoped>
	.monster-list {
		margin-top: 20px;
		padding-inline: 0;
		display: grid;
		gap: 20px;

		ul {
			padding-inline: 0;
		}
	}

	li {
		list-style: none;
	}
</style>
