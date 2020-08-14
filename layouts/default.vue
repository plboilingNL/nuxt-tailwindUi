<template>
  <div>
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  },
  head: {
    title: "Nuxt.js with TailwindUI",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindUI example"
      }
    ]
  }
};
</script>
