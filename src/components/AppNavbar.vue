<script setup>
import {nextTick, onMounted, ref, watch} from "vue";
import IconSearch from "./icons/IconSearch.vue";
import IconBell from "./icons/IconBell.vue";
import IconChevron from "./icons/IconChevron.vue";
import {useNotificationsStore} from "../stores/notifications.js";
import {storeToRefs} from "pinia";

// Search
const searchPopover = ref();
const searchElement = ref();
const search = ref();
const toggleSearch = async (event) => {
  searchPopover.value.toggle(event);
  await nextTick()
  if (searchPopover.value.visible) {
    searchElement.value?.$el.focus()
  }
}
watch(search, () => {
  console.log('Searching for', search.value)
})

// Notifications
const notificationsStore = useNotificationsStore();
const {notifications} = storeToRefs(notificationsStore)

onMounted(() => {
  notificationsStore.setNotifications();
})


const notificationPopover = ref();
const toggleNotification = (event) => {
  if (!notifications.value.length) return;
  notificationPopover.value.toggle(event);
}

function closeMessage(id) {
  const notificationsLength = notificationsStore.removeNotification(id)
  if (!notificationsLength) {
    notificationPopover.value.hide()
  }
}

// Profile
const accountPopover = ref();
const toggleAccount = (event) => {
  accountPopover.value.toggle(event);
}

</script>

<template>

  <header class="flex flex-row flex-nowrap w-full gap-5">
    <div class="welcome">
      <div class="text-[26px] text-surface-800 font-bold mb-1">Good Morning Anima</div>
      <div class="text-sm text-surface-600">Hope you have a good day</div>
    </div>
    <div class="ml-auto"></div>
    <div class="card flex justify-center">
      <Button type="button" variant="link" @click="toggleSearch">
        <IconSearch class="text-surface-950"/>
      </Button>

      <Popover ref="searchPopover">
        <InputText ref="searchElement" v-model="search" class="w-[25rem]" placeholder="Search"/>
      </Popover>
    </div>
    <div class="card flex justify-center">
      <Button variant="link" @click="toggleNotification">
        <OverlayBadge :value="notifications.length ? notifications.length : null" class="inline-flex" severity="danger"
                      size="small">
          <IconBell class="text-surface-950"/>
        </OverlayBadge>
      </Button>

      <Popover ref="notificationPopover" class="notifications max-w-lg">
        <div class="notifications flex flex-col gap-2">
          <TransitionGroup name="list">
            <Message
                v-for="notification in notifications"
                :key="notification.id"
                closable
                severity="secondary"
                @close="closeMessage(notification.id)"
            >
              {{ notification.message }}
            </Message>
          </TransitionGroup>
        </div>
      </Popover>
    </div>
    <div class="card flex justify-center">
      <Button variant="link" @click="toggleAccount" class="!gap-5">
        <img alt="Account" src="@/assets/images/user-example.png">
        <IconChevron class="text-surface-950" height="9" width="9"/>
      </Button>
      <Popover ref="accountPopover" class="notifications min-w-xs max-w-xl">
        <Button asChild v-slot="slotProps"  severity="secondary" outlined >
          <RouterLink :to="{name: 'settings'}" :class="slotProps.class"  class="!block" @click="toggleAccount"> Account</RouterLink>
        </Button>
      </Popover>

    </div>


  </header>
</template>

<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  max-height: 1000px;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0;
}

</style>