<template>
  <main class="characters-view">
    <el-row class="characters-view__intro">
      <el-col :span="24" :lg="12">
        <img src="@/assets/images/logo.png" alt="Rick & Morty" />
        <p>
          The series follows the misadventures of Rick Sanchez, a cynical and
          whimsical scientist, and his troubled and easily influenced grandson,
          Morty Smith, who divide their time between a domestic life and
          interdimensional adventures.
        </p>
      </el-col>
    </el-row>
    <CharactersList />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import CharactersList from "../components/Character/CharactersList.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchCharacters");
});
</script>

<style lang="scss">
.characters-view {
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-position: top right;
  @media #{$lg-and-down} {
    background-size: 150% auto;
  }
  &__intro {
    padding: 15rem 0;
    text-align: center;
    @media #{$lg-and-down} {
      padding: 25rem 3rem 5rem;
    }
    img {
      width: 75rem;
      max-width: 100%;
    }
    p {
      max-width: 50rem;
      margin: auto;
    }
  }
}
</style>
