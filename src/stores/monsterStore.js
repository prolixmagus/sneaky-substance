import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useMonsterStore = defineStore('monsters', () => {
  const list = reactive([
    {
      id: 'a1',
      identity: 'Margaret',
      slug: 'margaret',
      age: 62,
      location: 'Hartfordshire',
      food: 'tea and crumpets'
    },
    {
      id: 'a2',
      identity: 'Olivia',
      slug: 'olivia',
      age: 45,
      location: 'The Oval',
      food: 'popcorn'
    },
    {
      id: 'a3',
      identity: 'Huck',
      slug: 'huck',
      age: 45,
      location: 'B613',
      food: 'Gettysburger'
    }
  ]);

  function add(monster) {
    list.push(monster);
  }

  function removeMonster(id) {
    let foundMonsterIndex = list.findIndex((monster) => monster.identity === id);
    list.splice(foundMonsterIndex, 1);
  }

  return { list, add, removeMonster };
});
