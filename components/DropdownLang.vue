<template>
  <div class="">
    <button
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img
        :src="require('~/static/images/' + $i18n.locale + '.svg')"
        alt="flag"
        class="w-6 h-6 ml-1 mr-2"
      />
      <span class="text-xs font-bold text-gray-300">{{
        $i18n.locale.toUpperCase()
      }}</span>
      <svg
        fill="currentColor"
        class="text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path
          class="heroicon-ui"
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        ></path>
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-if="isVisible"
        ref="dropdown"
        v-on-clickaway="hideDropdown"
        class="absolute z-30 w-32 mt-3 overflow-hidden font-normal normal-case bg-white border rounded shadow md:mr-9"
      >
        <li>
          <a
            ref="language"
            href="#"
            class="flex items-center mt-1 mb-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-600"
            @click.prevent="setLocale('pl')"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../static/images/pl.svg"
              alt="english flag"
              class="w-6 h-6 ml-1 mr-2"
            />
            <span class="text-xs">PL</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mb-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-600"
            @click.prevent="setLocale('nl')"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../static/images/nl.svg"
              alt="dutch flag"
              class="w-6 h-6 ml-1 mr-2"
            />
            <span class="text-xs">NL</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mb-1 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-600"
            @click.prevent="setLocale('en')"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <img
              src="../static/images/en.svg"
              alt="english flag"
              class="w-6 h-6 ml-1 mr-2"
            />
            <span class="text-xs">EN</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      // currentLocale: this.$i18n.locale.toString(),
      // availableLocales: this.$i18n.availableLocales
    };
  },
  // computed: {
  //   availableLocales () {
  //     return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  //   }
  // },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    // localeChanged () {
    //   this.$router.push({
    //     path: this.$tp(this.$route.path, this.currentLocale, true)
    //   })
    //   this.hideDropdown()
    // },
    setLocale(locale) {
      var language = locale.toLocaleLowerCase();
      this.$i18n.setLocaleCookie(language);
      this.$router.replace(this.switchLocalePath(language));
      this.hideDropdown();
    },
  },
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
