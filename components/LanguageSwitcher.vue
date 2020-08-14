<template>
  <div class="lang-dropdown bg-gray-500 text-gray-800">
    <select v-model="$i18n.locale">
      <option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
        >{{ lang.name }}</option
      >
    </select>
  </div>
</template>

<script>
export default {};
</script>
