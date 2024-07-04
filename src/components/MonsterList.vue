<script setup>
	import { reactive } from 'vue';
	import { useMonsterStore } from '@/stores/monsterStore';

	const monsterData = useMonsterStore();

	const monster = reactive({
		identity: '',
		age: '',
		location: '',
		food: ''
	});

	function save() {
		const newMonster = {
			identity: monster.identity,
			age: monster.age,
			location: monster.location,
			food: monster.food,
			slug: monster.identity.toLowerCase()
		};

		monsterData.add(newMonster);
		clear();
	}

	function clear() {
		monster.identity = '';
		monster.age = '';
		monster.location = '';
		monster.food = '';
	}
</script>

<template>
	<form @submit.prevent="save()">
		<div class="field">
			<label for="i">Monster Name</label>
			<input id="i" type="text" v-model="monster.identity" />
		</div>

		<div class="field">
			<label for="a">Monster Age</label>
			<input id="a" type="text" v-model="monster.age" />
		</div>

		<div class="field">
			<label for="l">Monster Location</label>
			<input id="l" type="text" v-model="monster.location" />
		</div>

		<div class="field">
			<label for="f">Monster Food</label>
			<input id="lf" type="text" v-model="monster.food" />
		</div>

		<button type="submit">Submit</button>
	</form>

	<ul class="monster-list">
		<li class="monster-item" v-for="monster in monsterData.monsters" :key="monster.id">
			<RouterLink :to="`monster/${monster.slug}`">
				{{ monster.identity }}
			</RouterLink>
		</li>
	</ul>
</template>

<style>
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
