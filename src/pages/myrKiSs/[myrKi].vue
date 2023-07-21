<script setup lang="ts">
const props = defineProps<{ myrKi: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewMyrKi(props.myrKi)
})
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      {{ props.myrKi }}
    </p>

    <p text-sm opacity-75>
      <em>Testing myrKi Implementation</em>
    </p>

    <template v-if="user.otherMyrKis.length">
      <p mt-4 text-sm>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherMyrKi in user.otherMyrKis" :key="otherMyrKi">
            <RouterLink :to="`/myrKiSs/${otherMyrKi}`" replace>
              {{ otherMyrKi }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        m="3 t6" text-sm btn
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
