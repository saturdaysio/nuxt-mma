import { defineStore } from 'pinia'

import fighterJson from '@/json/fighter.json'

export const useFighterStore = defineStore({
    id: 'fighters',
    state: () => {

        return {
            fighterJson
        }
    },
    getters: {},

    actions: {}
})