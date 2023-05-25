<template>
  <component :is="Icon" v-for="(Icon, key) in icons" :key="key" class="icon" />
  <hr />
  <component
    :is="`TuIcon${key}`"
    v-for="key in Object.keys(icons)"
    :key="key"
    class="icon"
  />
</template>

<script lang="ts" setup>
import { icons } from '@tu-view-plus/icons-vue/global'
</script>

<style>
.icon {
  height: 20px;
  color: #409eff;
}
</style>
