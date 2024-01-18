import { computed } from 'vue'

const usePreviousAndNextPages = (currentPage, lastPage) => {
  const previousPage = computed(() => {
    const previuousPage = currentPage.value - 1
    const firstPage = 1
    return previuousPage >= firstPage ? previuousPage : undefined
  })

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1
    return nextPage <= lastPage.value ? nextPage : undefined
  })

  return { previousPage, nextPage }
}

export default usePreviousAndNextPages
