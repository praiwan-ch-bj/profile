import { onMounted, onUnmounted } from 'vue'
import { sections } from '@/constants/sections'

export function usePageTitle(prefix = 'Praiwan') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentSection = sections.find(
              (section) => section.id === entry.target.id
            )

            if (currentSection) {
              document.title = `${prefix} - ${currentSection.title}`
            }
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)

      if (el) {
        observer?.observe(el)
      }
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}