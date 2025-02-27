<script setup>

import {computed} from "vue";
import OrbitChartCircle from "./OrbitChartCircle.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  lineVisibility: {
    type: Number,
    required: false,
    default: 0.9
  },
  totalBase: {
    type: Number,
    required: true,
  }
})

const chartDatasets = computed(() => {
  if (!props.data.length) return [];
  const chartData = [...props.data];
  const positionsOrder = ['to bottom', 'to right', 'to top', 'to left']

  chartData.sort((a, b) => b.data - a.data)

  return chartData.map((dataset, i) => ({
    ...dataset,
    percent: Math.max(Math.round((dataset.data / props.totalBase * 100) * props.lineVisibility), 7) ,
    position: positionsOrder[i % positionsOrder.length]
  }))

})
</script>

<template>
  <div class="orbit-chart flex">
      <OrbitChartCircle :circles="chartDatasets" :line-visibility="lineVisibility"/>
  </div>
</template>

<style scoped>

</style>