<template>
  <div class="soft-index-panel main-right-panel">
    <ul class="top-tab">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        :class="tab === index ? 'active' : ''"
        @click="tab = index"
        >{{ item }}</li
      >
    </ul>
    <div class="main-block">
      <Service v-if="tab === 0" ref="service" type-flag="php"></Service>
      <Manager v-else-if="tab === 1" type-flag="php" :has-static="true"></Manager>
      <Composer
        v-else-if="tab === 2"
        type-flag="composer"
        title="Composer"
        url="https://getcomposer.org/download/"
      >
      </Composer>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Service from './List.vue'
  import Manager from '../VersionManager/index.vue'
  import { AppModuleSetup } from '@web/core/Module'
  import { I18nT } from '@shared/lang'
  import Composer from '../VersionManager/all.vue'

  const { tab } = AppModuleSetup('php')
  const tabs = [I18nT('base.service'), I18nT('base.versionManager'), 'Composer']
</script>
