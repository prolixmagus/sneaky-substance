import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const monsterStore = defineStore('keeper', () => {
  const monsters = reactive([
    {
      id: 'a1',
      identity: 'Margaret',
      age: 62,
      location: 'Hartfordshire',
      food: 'tea and crumpets'
    },
    {
      id: 'a2',
      identity: 'Olivia',
      age: 45,
      location: 'The Oval',
      food: 'popcorn'
    },
    {
      id: 'a3',
      identity: 'Huck',
      age: 45,
      location: 'B613',
      food: 'Gettysburger'
    }
  ])

  const addJoy = computed(() => {
    return `${monster.identity} is awesome!`
  })

  return { monsters, addJoy }
})
