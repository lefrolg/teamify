<script setup>

import {computed, onMounted, ref, watch} from "vue";
import OrbitChart from "../orbit-chart/OrbitChart.vue";

const selectedDate = ref();

// TODO: change to range datepicker
const dates = ref([
  {name: 'Aug 25-Sept 25', code: 'aug25'},
  {name: 'Aug 24-Sept 24', code: 'aug24'},
  {name: 'Aug 23-Sept 23', code: 'aug23'},
  {name: 'Aug 22-Sept 22', code: 'aug22'},
]);

onMounted(() => {
  selectedDate.value = dates.value[0]
  setEmployeesActivityData()
})

const data = ref([])
const totalBaseColor = '--color-yellow';

function setEmployeesActivityData() {
  data.value = [
    {
      data: 500,
      baseColor: '--p-primary',
      label: 'Inactive'
    },
    {
      data: 3000,
      baseColor: '--color-orange',
      label: 'Active'
    },
  ]
}


const totalBaseChart = computed(() => data.value.reduce((sum, i) => sum + i?.data || 0, 0));

const chartData = computed(() => {
  return [...data.value,
    {
      data: totalBaseChart.value,
      baseColor: totalBaseColor,
      label: "Total"
    }
  ];
})

</script>

<template>
  <div class="flex flex-col h-full">
    <header class="flex flex-nowrap justify-between">
      <div class="text-lg font-bold">Employees</div>
      <Select v-model="selectedDate" :options="dates" optionLabel="name" placeholder="Select a City"
              pt:dropdown="!w-auto"
              pt:dropdownIcon="!w-[7px] !text-surface-700"
              pt:label="!px-1"
              pt:option="!text-sm"
              pt:root="!border-0 !shadow-none !text-sm !text-surface-700"
              size="small"/>
    </header>
    <div class="my-auto flex flex-row">
      <div class="legend flex flex-col h-full justify-between">
        <div v-for="item in chartData" :key="item.label" class=" flex items-center flex-wrap">
          <div :style="{background: `var(${item.baseColor}-600)`}"
               class="rounded-full mr-1 inline-block w-[10px] aspect-square"></div>
          <div class="text-sm text-surface-700">{{ item.label }}</div>
          <div class="w-full"></div>
          <div class="font-bold text-lg mt-2">{{ item.data }}</div>
        </div>
      </div>
      <OrbitChart :data="chartData" :line-visibility="0.8" :total-base="totalBaseChart"/>
    </div>
  </div>
</template>

