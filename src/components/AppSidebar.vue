<script setup>

import IconLogo from "./icons/IconLogo.vue";
import {RouterLink} from "vue-router";
import IconGrid from "./icons/IconGrid.vue";
import IconTeams from "./icons/IconTeams.vue";
import IconUsers from "./icons/IconUsers.vue";
import IconProject from "./icons/IconProject.vue";
import IconPhone from "./icons/IconPhone.vue";
import IconFolder from "./icons/IconFolder.vue";
import IconSettings from "./icons/IconSettings.vue";

const navLinks = [
  {
    name: 'dashboard',
    text: 'Dashboard',
    icon: IconGrid
  },
  {
    name: 'teams',
    text: 'Teams',
    icon: IconTeams
  },
  {
    name: 'employees',
    text: 'Employees',
    icon: IconUsers
  },
  {
    name: 'projects',
    text: 'Projects',
    icon: IconProject
  }
]
const subNavLinks = [
  {
    name: 'meetings',
    text: 'Meetings',
    icon: IconPhone
  },
  {
    name: 'tasks',
    text: 'Tasks',
    icon: IconFolder
  },
  {
    name: 'settings',
    text: 'Settings',
    icon: IconSettings
  },
]
</script>

<template>
  <nav class="side-bar py-10 px-8 flex flex-col bg-surface-50">
    <RouterLink :to="{name: 'dashboard'}"
                class="text-primary-800 font-bold text-[22px] flex flex-row items-center mb-16 lg:mb-[74px]">
      <IconLogo alt="Teamify" class="inline-block mr-5"/>
      Teamify
    </RouterLink>

    <RouterLink
        v-for="link in navLinks"
        :key="link?.name"
        :to="{name: link?.name || '/'}"
        class="flex flex-row items-center text-lg py-4 text-surface-700"
        exactActiveClass="!text-primary-800 font-bold">
      <component :is="link.icon" class="mr-4" height="20" width="20"/>
      {{ link.text }}
    </RouterLink>
    <hr class="my-4 border-surface-200"/>
    <RouterLink
        v-for="link in subNavLinks"
        :key="link?.name"
        :to="{name: link?.name || '/'}"
        class="flex flex-row items-center text-lg py-4 text-surface-700"
        exactActiveClass="!text-primary-800 font-bold">
      <component :is="link.icon" class="mr-4" height="20" width="20"/>
      {{ link.text }}
    </RouterLink>
  </nav>

</template>

<style scoped>

</style>