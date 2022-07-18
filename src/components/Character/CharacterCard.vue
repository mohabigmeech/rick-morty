<template>
  <router-link :to="{ name: 'character', params: { id: props.id } }">
    <div class="character-card">
      <img :src="props.image" :alt="props.name" />
      <p>{{ props.name }}</p>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.character-card {
  text-align: center;
  transition: all 0.3s;
  img {
    display: block;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
    margin-bottom: 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
}
</style>
