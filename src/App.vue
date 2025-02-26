<script setup>
import {RouterView} from 'vue-router'
import AppSidebar from "./components/AppSidebar.vue";
import AppNavbar from "./components/AppNavbar.vue";

</script>

<template>
  <div class="app-wrapper py-4 bg-surface-100">
    <div class="container mx-auto">
      <div class="dashboard rounded-xl flex items-stretch bg-surface-0">
        <AppSidebar class="rounded-l-xl min-w-2xs"/>
        <div class="right p-10 w-full">
          <AppNavbar class="mb-12" />
          <main>
            <RouterView/>
          </main>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.dashboard {
  box-shadow: 0 44px 84px 6px rgb(216, 217, 219);
}
</style>
