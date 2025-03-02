import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref([])

  function setNotifications() {
    notifications.value = [
      {
        id: 1,
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laboriosam non officiis repellendus sit tempora voluptatem."
      },
      {
        id: 2,
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laboriosam non officiis repellendus sit tempora voluptatem."
      },
      {
        id: 3,
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laboriosam non officiis repellendus sit tempora voluptatem."
      },
      {
        id: 4,
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi laboriosam non officiis repellendus sit tempora voluptatem."
      }
    ]
  }

  function removeNotification (id) {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index < 0) return notifications.value.length;
    notifications.value.splice(index, 1);
    return notifications.value.length
  }

  return { notifications, setNotifications, removeNotification }
})
