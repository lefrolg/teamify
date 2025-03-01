<script setup>
import {ref, computed, onMounted, onUnmounted} from "vue";

const props = defineProps(["circles", "lineVisibility"]);

// Reference to the container element
const containerRef = ref(null);
const containerSize = ref({width: 0, height: 0});

// Update container dimensions using getBoundingClientRect
const updateContainerSize = () => {
  if (containerRef.value) {
    const {width, height} = containerRef.value.getBoundingClientRect();
    containerSize.value = {width, height};
  }
};

let resizeObserver = null;

onMounted(() => {
  updateContainerSize();

  resizeObserver = new ResizeObserver(updateContainerSize);
  if (containerRef.value) {
    resizeObserver.observe(containerRef.value);
  }
});

onUnmounted(() => {
  resizeObserver.disconnect();
});


const currentCircle = computed(() => props.circles.length ? props.circles[0] : null);
const leftCircles = computed(() => props.circles.slice(1));


const dotStyle = computed(() => {
  const percent = currentCircle.value.percent / 100;
  const radius = containerSize.value.width / 2;
  const circleLength = 2 * Math.PI * radius;

  const transparentSegment = 2 * radius * (Math.PI - Math.acos(1 - 2 * percent));
  const coloredSegment = circleLength - transparentSegment;

  const angleFrom12 = (coloredSegment + transparentSegment / 2) / radius;

  let offset = 0;
  switch (currentCircle.value.position) {
    case 'to bottom':
      offset = 0; //12h
      break;
    case 'to top':
      offset = Math.PI;//6h
      break;
    case 'to left':
      offset = Math.PI / 2;//3h
      break;
    case 'to right':
      offset = 3 * Math.PI / 2; // 9h
      break;
  }

  const finalAngle = offset + angleFrom12;

  const x = radius * Math.sin(finalAngle);
  const y = radius * Math.cos(finalAngle);

  const top  = radius - y;
  const left = radius + x;

  return {
    top:  `${Math.floor(top)}px`,
    left: `${Math.floor(left)}px`,
    width: `12px`,
    height: `12px`,
    background: `var(${currentCircle.value?.baseColor}-600)`,
    position: 'absolute',
    zIndex: 100
  };
});


</script>

<template>
  <div
      ref="containerRef"
      :style="{
        background: `linear-gradient(${currentCircle?.position}, transparent ${100 - currentCircle?.percent}%, var(${currentCircle?.baseColor}-600) ${115 - currentCircle?.percent}%, var(${currentCircle?.baseColor}-800))`
      }"
      class="p-1 rounded-full flex items-center justify-center relative aspect-square relative"
  >
    <div :style="dotStyle" class="absolute rounded-full -translate-[4px] origin-center"></div>

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
