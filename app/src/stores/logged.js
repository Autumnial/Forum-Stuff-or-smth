import { defineStore } from 'pinia'

export const userDataStore = defineStore({
    id: 'userData',
    state: () => ({
        
        logged: false,
        name: "default",
        id: 0,
        level: 0

    })
})