<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const myrKi = $ref(user.savedMyrKi)

const router = useRouter()
function go() {
  if (myrKi)
    router.push(`/myrKiSs/${encodeURIComponent(myrKi)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <img alt="MADAMADAM logo" :src="isDark ? '/MADAMADAM_LOGO.png' : '/MADAMADAM_LOGO_LIGHT.png'">
    <p>
      <em text-sm opacity-75>tha Expository Manifestation ov MDMDM Gnosis within tha MyriaD EcoSystem</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="myrKi"
      placeholder="enter myrKi..."
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">We require more than a mere key for entry...</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!myrKi"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
