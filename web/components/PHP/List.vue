<template>
  <el-card class="version-manager">
    <template #header>
      <div class="card-header">
        <div class="left">
          <span> PHP </span>
          <el-popover :show-after="600" placement="top" width="auto">
            <template #default>
              <span>{{ I18nT('base.customVersionDir') }}</span>
            </template>
            <template #reference>
              <el-button
                class="custom-folder-add-btn"
                :icon="FolderAdd"
                link
                @click.stop="showCustomDir"
              ></el-button>
            </template>
          </el-popover>
        </div>
        <el-button class="button" :disabled="service?.fetching" link @click="resetData">
          <yb-icon
            :svg="import('@/svg/icon_refresh.svg?raw')"
            class="refresh-icon"
            :class="{ 'fa-spin': service?.fetching }"
          ></yb-icon>
        </el-button>
      </div>
    </template>
    <el-table v-loading="service?.fetching" class="service-table" :data="versions">
      <el-table-column prop="version" width="140px">
        <template #header>
          <span style="padding: 2px 12px 2px 24px; display: block">{{
            I18nT('base.version')
          }}</span>
        </template>
        <template #default="scope">
          <span style="padding: 2px 12px 2px 24px; display: block">{{ scope.row.version }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="I18nT('base.path')" :prop="null">
        <template #default="scope">
          <template v-if="!scope.row.version">
            <el-popover popper-class="version-error-tips" width="auto" placement="top">
              <template #reference>
                <span class="path error" @click.stop="openDir(scope.row.path)">{{
                  scope.row.path
                }}</span>
              </template>
              <template #default>
                <span>{{ scope.row?.error ?? I18nT('base.versionErrorTips') }}</span>
              </template>
            </el-popover>
          </template>
          <template v-else>
            <span class="path" @click.stop="openDir(scope.row.path)">{{ scope.row.path }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column :label="I18nT('php.quickStart')" :prop="null" width="100px" align="center">
        <template #default="scope">
          <el-button
            link
            class="status group-off"
            :class="{ off: appStore?.phpGroupStart?.[scope.row.bin] === false }"
            @click.stop="groupTrunOn(scope.row)"
          >
            <yb-icon
              style="width: 30px; height: 30px"
              :svg="import('@/svg/nogroupstart.svg?raw')"
            />
          </el-button>
        </template>
      </el-table-column>
      <el-table-column :label="I18nT('base.service')" :prop="null" width="100px">
        <template #default="scope">
          <template v-if="scope.row.running">
            <el-button :loading="true" link></el-button>
          </template>
          <template v-else>
            <template v-if="scope.row.run">
              <el-button link class="status running">
                <yb-icon :svg="import('@/svg/stop2.svg?raw')" @click.stop="doStop(scope.row)" />
              </el-button>
              <el-button link class="status refresh">
                <yb-icon
                  :svg="import('@/svg/icon_refresh.svg?raw')"
                  @click.stop="doRun(scope.row)"
                />
              </el-button>
            </template>
            <template v-else>
              <el-button link class="status start">
                <yb-icon :svg="import('@/svg/play.svg?raw')" @click.stop="doRun(scope.row)" />
              </el-button>
            </template>
          </template>
        </template>
      </el-table-column>
      <el-table-column :label="I18nT('base.operation')" :prop="null" width="100px" align="center">
        <template #default="scope">
          <el-popover
            effect="dark"
            popper-class="host-list-poper"
            placement="left-start"
            :show-arrow="false"
            width="auto"
            @before-enter="onPoperShow"
          >
            <ul v-poper-fix class="host-list-menu">
              <li @click.stop="action(scope.row, scope.$index, 'open')">
                <yb-icon :svg="import('@/svg/folder.svg?raw')" width="13" height="13" />
                <span class="ml-15">{{ I18nT('base.open') }}</span>
              </li>
              <li @click.stop="action(scope.row, scope.$index, 'conf')">
                <yb-icon :svg="import('@/svg/config.svg?raw')" width="13" height="13" />
                <span class="ml-15"> php.ini </span>
              </li>
              <li @click.stop="action(scope.row, scope.$index, 'fpm-conf')">
                <yb-icon :svg="import('@/svg/config.svg?raw')" width="13" height="13" />
                <span class="ml-15"> php-fpm.conf </span>
              </li>
              <li @click.stop="action(scope.row, scope.$index, 'log-fpm')">
                <yb-icon :svg="import('@/svg/log.svg?raw')" width="13" height="13" />
                <span class="ml-15">{{ I18nT('php.fpmLog') }}</span>
              </li>
              <li @click.stop="action(scope.row, scope.$index, 'log-slow')">
                <yb-icon :svg="import('@/svg/log.svg?raw')" width="13" height="13" />
                <span class="ml-15">{{ I18nT('base.slowLog') }}</span>
              </li>
              <li @click.stop="action(scope.row, scope.$index, 'extend')">
                <yb-icon :svg="import('@/svg/extend.svg?raw')" width="13" height="13" />
                <span class="ml-15">{{ I18nT('php.extension') }}</span>
              </li>
              <li @click.stop="action(scope.row, scope.$index, 'groupstart')">
                <yb-icon
                  style="padding: 0"
                  :svg="import('@/svg/nogroupstart.svg?raw')"
                  width="18"
                  height="18"
                />
                <template v-if="appStore?.phpGroupStart?.[scope.row.bin] === false">
                  <span class="ml-10">{{ I18nT('php.groupStartOn') }}</span>
                </template>
                <template v-else>
                  <span class="ml-10">{{ I18nT('php.groupStartOff') }}</span>
                </template>
              </li>
              <li
                v-loading="pathLoading(scope.row)"
                class="path-set"
                :class="pathState(scope.row)"
                @click.stop="pathChange(scope.row)"
              >
                <yb-icon
                  class="current"
                  :svg="import('@/svg/select.svg?raw')"
                  width="17"
                  height="17"
                />
                <span class="ml-15">{{ I18nT('base.addToPath') }}</span>
              </li>
            </ul>
            <template #reference>
              <el-button link class="status">
                <yb-icon :svg="import('@/svg/more1.svg?raw')" width="22" height="22" />
              </el-button>
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
  import { ref, computed, reactive } from 'vue'
  import { dirname, join, startService, stopService, waitTime } from '@web/fn'
  import { BrewStore, SoftInstalled } from '@web/store/brew'
  import { I18nT } from '@shared/lang'
  import { AsyncComponentShow } from '@web/fn'
  import { AppStore } from '@web/store/app'
  import { MessageError, MessageSuccess } from '@/util/Element'
  import { Service } from '@web/components/ServiceManager/service'
  import { FolderAdd } from '@element-plus/icons-vue'
  import { ServiceActionStore } from '@web/components/ServiceManager/EXT/store'

  if (!Service.php) {
    Service.php = {
      fetching: false
    }
  }

  const initing = ref(false)
  const brewStore = BrewStore()
  const appStore = AppStore()

  const onPoperShow = () => {
    ServiceActionStore.fetchPath()
  }

  const pathLoading = (item: SoftInstalled) => {
    return ServiceActionStore.pathSeting?.[item.bin] ?? false
  }

  const pathState = (item: SoftInstalled) => {
    if (ServiceActionStore.allPath.length === 0) {
      return ''
    }
    const bin = dirname(item?.phpBin ?? join(item.path, 'bin/php'))
    return ServiceActionStore.allPath.includes(bin) ? 'seted' : 'noset'
  }

  const pathChange = (item: SoftInstalled) => {
    ServiceActionStore.updatePath(item, 'php')
  }

  const service = computed(() => {
    return Service.php
  })

  const php = computed(() => {
    return brewStore.module('php')
  })
  const versions = computed(() => {
    return brewStore.module('php').installed
  })

  const init = () => {
    if (initing.value) {
      return
    }
    initing.value = true
    waitTime().then(() => {
      initing.value = false
    })
  }

  const reinit = () => {
    const data = php.value
    data.installedInited = false
    init()
  }

  const doRun = (item: SoftInstalled) => {
    if (!item?.version) {
      return
    }
    startService('php', item).then((res) => {
      if (typeof res === 'string') {
        MessageError(res)
      } else {
        MessageSuccess(I18nT('base.success'))
      }
    })
  }

  const doStop = (item: SoftInstalled) => {
    if (!item?.version) {
      return
    }
    stopService('php', item).then((res) => {
      if (typeof res === 'string') {
        MessageError(res)
      } else {
        MessageSuccess(I18nT('base.success'))
      }
    })
  }

  const groupTrunOn = (item: SoftInstalled) => {
    const dict = JSON.parse(JSON.stringify(appStore.phpGroupStart))
    const key = item.bin
    if (dict?.[key] === false) {
      dict[key] = true
      delete dict?.[key]
    } else {
      dict[key] = false
    }
    appStore.config.setup.phpGroupStart = reactive(dict)
  }

  let ExtensionsVM: any
  import('./Extends.vue').then((res) => {
    ExtensionsVM = res.default
  })

  let PhpFpmVM: any
  import('./FpmConfig.vue').then((res) => {
    PhpFpmVM = res.default
  })

  let ConfVM: any
  import('./Config.vue').then((res) => {
    ConfVM = res.default
  })

  let LogVM: any
  import('./Logs.vue').then((res) => {
    LogVM = res.default
  })

  const action = (item: SoftInstalled, index: number, flag: string) => {
    switch (flag) {
      case 'groupstart':
        groupTrunOn(item)
        break
      case 'open':
        break
      case 'conf':
        AsyncComponentShow(ConfVM, {
          version: item
        }).then()
        break
      case 'fpm-conf':
        AsyncComponentShow(PhpFpmVM, {
          item
        }).then()
        break
      case 'log-fpm':
        AsyncComponentShow(LogVM, {
          version: item,
          type: 'php-fpm'
        }).then()
        break
      case 'log-slow':
        AsyncComponentShow(LogVM, {
          version: item,
          type: 'php-fpm-slow'
        }).then()
        break
      case 'extend':
        AsyncComponentShow(ExtensionsVM, {
          version: item
        }).then()
        break
    }
  }

  const resetData = () => {
    if (service?.value?.fetching) {
      return
    }
    service.value.fetching = true
    const data = brewStore.module('php')
    data.installedInited = false
    waitTime().then(() => {
      service.value.fetching = false
    })
  }

  const openDir = (dir: string) => {}

  init()

  let CustomPathVM: any
  import('@web/components/ServiceManager/customPath.vue').then((res) => {
    CustomPathVM = res.default
  })

  const showCustomDir = () => {
    AsyncComponentShow(CustomPathVM, {
      flag: 'php'
    }).then((res) => {
      if (res) {
        console.log('showCustomDir chagned !!!')
        resetData()
      }
    })
  }

  defineExpose({
    reinit
  })
</script>
