<script>
  /* eslint-disable no-param-reassign,no-unused-expressions */

  export default {
    name: 'transition-collapse',
    functional: true,
    render (createElement, context) {
      const data = {
        props: {
          name: 'expand'
        },
        on: {
          afterEnter (element) {
            element.style.height = 'auto'
          },
          enter (element) {
            const width = getComputedStyle(element).width
            
            element.style.width = width
            element.style.position = 'relative'
            element.style.visibility = 'hidden'
            element.style.height = 'auto'
            
            const height = getComputedStyle(element).height
            
            element.style.width = null
            element.style.position = null
            element.style.visibility = null
            element.style.height = 0

            // Force repaint to make sure the
            // animation is triggered correctly.
            getComputedStyle(element).height

            requestAnimationFrame(() => {
              element.style.height = height
            })
          },
          leave (element) {
            const height = getComputedStyle(element).height
            element.style.height = height
            // Force repaint to make sure the
            // animation is triggered correctly.
            getComputedStyle(element).height

            requestAnimationFrame(() => {
              element.style.height = 0
            })
          }
        }
      }
      return createElement('transition', data, context.children)
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>
