import Vue from 'vue';

const store = Vue.observable({
    isLoaded: false,
    setArtistsData: []
})

export const mutations = {
    setIsLoaded: payload => store.isLoaded = payload,
    setArtistsData: payload => store.setArtistsData = payload
}

export const getters = {
    isLoaded: () => store.isLoaded,
    setArtistsData: () => store.setArtistsData,
}

export const actions = {
    async getArtists() {
        mutations.setIsLoaded(false)
        const response = await fetch('http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2');
        const data = await response.json();
        mutations.setArtistsData(data);
        mutations.setIsLoaded(true);
    }
}
