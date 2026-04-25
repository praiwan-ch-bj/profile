import { onMounted, onUnmounted } from 'vue'

export function usePageTitle(prefix = 'Praiwan') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = document.querySelectorAll('section')
    
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            document.title = `${prefix} - ${id}`
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) => observer?.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}