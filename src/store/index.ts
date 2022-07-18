import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      character: {},
      characters: [],
      pagination: {},
    };
  },
  getters: {
    getCharacters: (state) => state.characters,
    getCharacterById: (state, id) =>
      state.characters.find((character: ICharacter) => character.id === id),
  },
  mutations: {
    SET_CHARACTER(state, character) {
      state.character = character;
    },
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
    },
  },
  actions: {
    async fetchCharacters({ commit }, params) {
      const api = new URL("https://rickandmortyapi.com/api/character");
      const name = params?.name?.toLowerCase();
      const status = params?.status?.toLowerCase();
      const page = params?.page;

      if (name) api.searchParams.append("name", name);
      if (status) api.searchParams.append("status", status);
      if (page) api.searchParams.append("page", page);

      try {
        const data = await axios.get(api.toString());
        const pagination = data.data.info;
        const characters = data.data.results.map((character: IApiCharacter) => {
          console.log(character);
          return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            location: character.location.name,
            image: character.image,
          };
        });
        commit("SET_PAGINATION", pagination);
        commit("SET_CHARACTERS", characters);
      } catch (error: any) {
        if (error.response.status === 404) {
          console.error("NO RESULTS");
          commit("SET_CHARACTERS", []);
        } else {
          console.error(error);
        }
      }
    },
    async fetchCharacterById({ commit }, id) {
      const api = new URL(`https://rickandmortyapi.com/api/character/${id}`);
      try {
        const data = await axios.get(api.toString());
        const character = {
          id: data.data.id,
          name: data.data.name,
          status: data.data.status,
          species: data.data.species,
          gender: data.data.gender,
          origin: data.data.origin.name,
          location: data.data.location.name,
          image: data.data.image,
        };
        commit("SET_CHARACTER", character);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
}

export interface IApiCharacter {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "female" | "male" | "genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default store;
