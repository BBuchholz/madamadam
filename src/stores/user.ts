import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current myrKi of the user.
   */
  const savedMyrKi = ref('')
  const previousMyrKis = ref(new Set<string>())

  const usedMyrKis = computed(() => Array.from(previousMyrKis.value))
  const otherMyrKis = computed(() => usedMyrKis.value.filter(myrKi => myrKi !== savedMyrKi.value))

  /**
   * Changes the current myrKi of the user and saves the one that was used
   * before.
   *
   * @param myrKi - new myrKi to set
   */
  function setNewMyrKi(myrKi: string) {
    if (savedMyrKi.value)
      previousMyrKis.value.add(savedMyrKi.value)

    savedMyrKi.value = myrKi
  }

  return {
    setNewMyrKi,
    otherMyrKis,
    savedMyrKi,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
