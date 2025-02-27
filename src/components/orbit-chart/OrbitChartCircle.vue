<script setup>
import { computed} from "vue";

const props = defineProps(["circles", "lineVisibility"]);

const currentCircle = computed(() => props.circles.length ? props.circles[0] : null);
const leftCircles = computed(() => props.circles.slice(1));

</script>

<template>
  <div
      ref="containerRef"
      :style="{
        background: `linear-gradient(${currentCircle?.position}, transparent ${100 - currentCircle?.percent}%, var(${currentCircle?.baseColor}-600), var(${currentCircle?.baseColor}-800))`
      }"
      class="p-1 rounded-full flex items-center justify-center relative aspect-square relative"
  >
    <div
        class="inner-icon p-6 bg-surface-0 rounded-full flex items-center justify-center aspect-square"
    >
      <OrbitChartCircle v-if="leftCircles.length" :circles="leftCircles"/>
      <img
          v-else
          alt="employee"
          src="@/assets/images/employees-chart-center.png"
      />
    </div>
  </div>
</template>
