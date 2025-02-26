<script setup>

import MetricsOverviewCard from "../components/dashboard/MetricsOverviewCard.vue";
import {ref} from "vue";

const performanceMetrics = ref([
  {
    id: 1,
    title: "Top 10",
    subtitle: "Position in dribbble",
    stats:  "20% Increase from Last Week",
    color: "bg-yellow-200"
  },
  {
    id: 2,
    title: "26",
    subtitle: "New employees onboarded",
    stats:  "15% Increase from Last Month",
    color: "bg-primary-50"
  },
  {
    id: 3,
    title: "500",
    subtitle: "New Clients Approached",
    stats:  "5% Increase from Last Week",
    color: "bg-blue-200"
  },

])

</script>

<template>
  <div>
    <div class="grid grid-cols-3 grid-rows-3 gap-6">
      <div class="row-span-3 p-6 rounded-md border border-surface-100">

      </div>
      <div class="row-span-3 p-6 rounded-md border border-surface-100"></div>
      <MetricsOverviewCard
          v-for="metric of performanceMetrics"
          :key="metric.id"
          :title="metric.title"
          :subtitle="metric.subtitle"
          :stats="metric.stats"
          :color="metric.color"
          class="row-span-1 p-3 rounded-md" />
      <Card class="col-span-2 p-6"></Card>
      <div class="row-span-1"></div>


    </div>
  </div>
</template>
