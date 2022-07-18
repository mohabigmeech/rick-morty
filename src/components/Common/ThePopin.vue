<template>
  <el-dialog width="55rem" custom-class="popin" center>
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

<style lang="scss">
.popin {
  background: transparent;
  box-shadow: none;
}

.el-overlay-dialog {
  background: yellow;
}
</style>
