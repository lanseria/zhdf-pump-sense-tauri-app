<script lang="ts" setup>
const intervalSeconds = ref(10)
const wlgToken = ref('ggUOvKv3akJQL')
const weatherUrl = ref('https://api.caiyunapp.com/v2.6/{token}/121.5627,31.3739/realtime')
</script>

<template>
  <LayoutTile
    title="配置"
    description="用于机泵数据获取分析配置"
  >
    <div mx-auto max-w-xl lg="mr-0 max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6">
        <div>
          <label class="block text-sm text-white font-semibold leading-6">
            定时获取秒数
            <span class="text-neutral-400 font-light">(间隔多少秒去获取物流港数据)</span>
          </label>
          <div mt="2.5">
            <input v-model="intervalSeconds" type="text" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
          </div>
        </div>
        <div class="mt-6">
          <label class="block text-sm text-white font-semibold leading-6">
            TOKEN
            <span class="text-neutral-400 font-light">(物流港Token)</span>
          </label>
          <div mt="2.5">
            <input v-model="wlgToken" type="text" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
          </div>
        </div>
        <div class="mt-6">
          <label class="block text-sm text-white font-semibold leading-6">
            天气API
            <span class="text-neutral-400 font-light">(用于获取天气数据地址)</span>
          </label>
          <div mt="2.5">
            <input v-model="weatherUrl" type="text" block w-full border-0 rounded-md bg="white/5" px="3.5" py-2 text-white shadow-sm ring-1 ring="white/10" ring-inset sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <Btn type="submit">
            保存配置
          </Btn>
        </div>
      </div>
    </div>
  </LayoutTile>
</template>
