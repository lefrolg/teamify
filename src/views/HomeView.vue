<script setup>

import MetricsOverviewCard from "../components/dashboard/MetricsOverviewCard.vue";
import {ref} from "vue";
import TeamsStrengthChart from "../components/dashboard/TeamsStrengthChart.vue";
import EmployeesActivityChart from "../components/dashboard/EmployeesActivityChart.vue";

const performanceMetrics = ref([
  {
    id: 1,
    title: "Top 10",
    subtitle: "Position in dribbble",
    stats: "20% Increase from Last Week",
    color: "bg-yellow-200"
  },
  {
    id: 2,
    title: "26",
    subtitle: "New employees onboarded",
    stats: "15% Increase from Last Month",
    color: "bg-primary-50"
  },
  {
    id: 3,
    title: "500",
    subtitle: "New Clients Approached",
    stats: "5% Increase from Last Week",
    color: "bg-blue-200"
  },

])

</script>

<template>
  <div>
    <div class="grid grid-cols-3 grid-rows-3 gap-6">
      <div class="row-span-3 p-6 rounded-md border border-surface-100">
        <TeamsStrengthChart/>
      </div>
      <div class="row-span-3 p-6 rounded-md border border-surface-100">
        <EmployeesActivityChart/>
      </div>
      <MetricsOverviewCard
          v-for="metric of performanceMetrics"
          :key="metric.id"
          :color="metric.color"
          :stats="metric.stats"
          :subtitle="metric.subtitle"
          :title="metric.title"
          class="row-span-1 p-3 rounded-md"/>
    </div>
  </div>
</template>
