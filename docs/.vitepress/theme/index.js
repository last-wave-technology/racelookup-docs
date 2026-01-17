import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import * as panzoomModule from '@panzoom/panzoom'
import './mermaid-zoom.css'

// Handle ESM default export compatibility
const panzoom = panzoomModule.default || panzoomModule

export default {
  extends: DefaultTheme,
  setup() {
    let panzoomInstances = []

    // Initialize panzoom for Mermaid diagrams after they render
    const initMermaidZoom = () => {
      // Clear previous instances
      panzoomInstances.forEach(instance => {
        try {
          instance.destroy()
        } catch (e) {
          // Ignore errors during cleanup
        }
      })
      panzoomInstances = []

      // Wait for Mermaid to render
      setTimeout(() => {
        const mermaidContainers = document.querySelectorAll('.mermaid:not([data-zoom-initialized])')

        mermaidContainers.forEach((container) => {
          // Find the SVG element
          const svg = container.querySelector('svg')
          if (!svg) return

          // Wrap the container in a zoomable wrapper
          const wrapper = document.createElement('div')
          wrapper.className = 'mermaid-zoom-wrapper'
          container.parentNode.insertBefore(wrapper, container)
          wrapper.appendChild(container)

          // Initialize panzoom on the SVG
          try {
            const instance = panzoom(svg, {
              minZoom: 0.5,
              maxZoom: 3,
              step: 0.1,
              animate: true,
            })
            panzoomInstances.push(instance)

            // Add zoom controls
            addZoomControls(wrapper, instance)

            container.dataset.zoomInitialized = 'true'
          } catch (error) {
            console.warn('Failed to initialize panzoom:', error)
          }
        })
      }, 800)
    }

    // Add zoom control buttons
    const addZoomControls = (wrapper, instance) => {
      const controls = document.createElement('div')
      controls.className = 'mermaid-zoom-controls'

      const zoomInBtn = document.createElement('button')
      zoomInBtn.innerHTML = '+'
      zoomInBtn.title = 'Zoom In'
      zoomInBtn.onclick = (e) => {
        e.stopPropagation()
        instance.zoomIn()
      }

      const zoomOutBtn = document.createElement('button')
      zoomOutBtn.innerHTML = '−'
      zoomOutBtn.title = 'Zoom Out'
      zoomOutBtn.onclick = (e) => {
        e.stopPropagation()
        instance.zoomOut()
      }

      const resetBtn = document.createElement('button')
      resetBtn.innerHTML = '⌂'
      resetBtn.title = 'Reset View'
      resetBtn.onclick = (e) => {
        e.stopPropagation()
        instance.zoomAbs(0, 0, 1)
        instance.moveTo(0, 0)
      }

      controls.appendChild(zoomInBtn)
      controls.appendChild(zoomOutBtn)
      controls.appendChild(resetBtn)
      wrapper.appendChild(controls)
    }

    onMounted(() => {
      initMermaidZoom()

      // Watch for new content and reinitialize (debounced)
      let timeoutId
      const observer = new MutationObserver(() => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          initMermaidZoom()
        }, 300)
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      // Also reinitialize when route changes
      if (typeof window !== 'undefined') {
        window.addEventListener('hashchange', initMermaidZoom)
      }
    })
  }
}

