<template>
  <div class="character-view">
    <el-row justify="center" align="middle">
      <el-col class="character-view__infos" :span="22" :md="8">
        <h1>{{ character.name }}</h1>
        <ul>
          <li>Species: {{ character.species }}</li>
          <li>Gender: {{ character.gender }}</li>
          <li>Location: {{ character.location }}</li>
          <li>Origin: {{ character.origin }}</li>
        </ul>
        <router-link to="/characters">
          <el-link :icon="Back">Back to characters</el-link>
        </router-link>
      </el-col>
      <el-col class="character-view__image" :span="22" :md="10">
        <div class="is-dead" v-show="isDead">💀</div>
        <img :src="character.image" :alt="character.name" />
      </el-col>
    </el-row>
    <div class="character-view__loop-text">
      <div v-for="i in 2" :key="i">
        {{ character.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { Back } from "@element-plus/icons-vue";

const store = useStore();
const route = useRoute();

const id = computed(() => route.params.id);
const character = computed(() => store.state.character);
const isDead = computed(() => character.value.status === "Dead");

onMounted(() => {
  store.dispatch("fetchCharacterById", id.value);
});
</script>

<style lang="scss">
.character-view {
  &__infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media #{$md-and-down} {
      order: 2;
    }
    h1 {
      display: flex;
      align-items: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: bold;
      &:after {
        content: "";
        display: inline-block;
        width: 8rem;
        height: 0.8rem;
        margin-left: 2rem;
        background: color("primary");
      }
    }
    ul {
      li {
        display: flex;
        border: 1px solid white;
        border-radius: 1rem;
        margin-bottom: 3rem;
        padding: 2rem 0 2rem 3rem;
        font-size: 2rem;
      }
    }
    a {
      color: white;
      @media #{$md-and-down} {
        text-align: center;
        margin-bottom: 2rem;
      }
    }
  }
  &__image {
    display: flex;
    padding: 1rem;
    @media #{$md-and-down} {
      padding: 3rem 1rem 3rem;
    }
    img {
      display: block;
      max-width: 100%;
      margin: auto;
      border-radius: 1rem;
    }
    .is-dead {
      position: absolute;
      top: calc(50% - 15rem);
      left: calc(50% + 15rem);
      z-index: 1;
      font-size: 4rem;
      transform: translate(-50%, -50%);
    }
  }
  &__loop-text {
    position: absolute;
    display: flex;
    white-space: nowrap;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    z-index: -1;
    @media #{$md-and-down} {
      top: 20%;
    }
    div {
      color: #0e0a3a;
      font-size: 50vh;
      font-weight: bold;
      font-style: italic;
      padding-right: 0.5em;
      text-transform: uppercase;
      animation: textLoop 120s linear infinite;
    }
  }
  .el-row {
    min-height: 100vh;
  }
}
@keyframes textLoop {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
