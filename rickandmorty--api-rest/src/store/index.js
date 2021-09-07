import { createStore } from 'vuex'

export default createStore({
  state: {
    chracters: [], //Guarda todo lo que tengo
    charactersFilter: [] //Se va filtrando lo que tengo a medida que escribo
  },
  mutations: { //Modifican los State
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters(commit){
      try{
        //Obtener datos de la API
        const response = await fetch ("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log
      }catch(error){
        console.error(error)
      }
    }
  },
  modules: {
  }
})
