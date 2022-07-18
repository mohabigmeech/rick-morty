<template>
  <router-view v-slot="{ Component }">
    <transition name="discover" mode="out-in">
      <component @mouseout="openPopin" class="view" :is="Component" />
    </transition>
  </router-view>
  <el-dialog v-model="popinVisible" width="55rem" custom-class="popin" center>
    <img src="@/assets/images/seeyou.gif" />
    <template #footer>
      <span class="dialog-footer">
        <a href="https://www.linkedin.com/in/mohamed-camara/" target="_blank">
          <el-button type="primary">
            Hope we can do cool stuff together 😁🙌
          </el-button>
        </a>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";

const popinVisible = ref(false);
function openPopin(e: MouseEvent) {
  if (e.clientY < 0) {
    popinVisible.value = true;
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
body {
  background: #01020f;
  height: 100vh;
  margin: 0;
}

.view:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: 100vw;
  height: 100vh;
  background: black;
  background-image: url(@/assets/images/loader.png);
  background-repeat: no-repeat;
  background-size: 20rem;
  background-position: center;
  transition: all 0.5s;
  z-index: 10;
}

.popin {
  background: transparent;
  box-shadow: none;
}

.el-overlay-dialog {
  background: yellow;
}
</style>
