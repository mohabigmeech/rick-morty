<template>
  <div class="greetings">
    <h1 class="green">{{ props.msg }}</h1>
    <h3>
      You’ve <span>successfully</span> created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
h3 {
  span {
    color: color("primary");
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media #{$md-and-up} {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
