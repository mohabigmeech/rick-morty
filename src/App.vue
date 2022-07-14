<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-page-header content="Home Test" @back="goBack" />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
const goBack = () => {
  console.log("go back");
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
