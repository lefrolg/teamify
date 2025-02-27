<script setup>

import {ref, onMounted} from "vue";
import {getCssVariable} from "../../utils/getCssVariable.js";
import Chart from 'primevue/chart';
import ChartDataLabels from 'chartjs-plugin-datalabels';


onMounted(() => {
  setTimeout(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
  }, 2000)

});

const chartData = ref({});
const chartOptions = ref({});

const labelsText = ref({
  a: "Marketing",
  b: "HR",
  c: "Developers",
  d: "Design",
})

const setChartData = () => {
  return {
    labels: ['a', 'b', 'c', 'd'],
    datasets: [
      {
        label: 'Strength',
        data: [1, 5, 3, 10],
        backgroundColor: [
          getCssVariable('--color-yellow-600'),
          getCssVariable('--color-orange-600'),
          getCssVariable('--color-blue-600'),
          getCssVariable('--p-primary-600'),
        ],
        hoverBackgroundColor: [
          getCssVariable('--color-yellow-600'),
          getCssVariable('--color-orange-600'),
          getCssVariable('--color-blue-600'),
          getCssVariable('--p-primary-600'),
        ],
        borderRadius: {
          topLeft: parseFloat(getCssVariable('--radius-xs')),
          topRight: parseFloat(getCssVariable('--radius-xs')),
        },
        barPercentage: 1,
        categoryPercentage: 0.85,
        borderWidth: 0
      }
    ]
  };
};

const setChartOptions = () => {
  const textColor = getCssVariable('--p-text-color');
  const textColorSecondary = getCssVariable('--p-text-muted-color');

  return {
    layout: {
      padding: {
        top: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false
      },
      datalabels: {
        anchor: "end",
        align: "top",
        offset: -4,
        labels: {
          value: {
            color: textColor
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          display: false,
        },
        border: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        display: false,
        title: {
          display: false
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false
        }
      }
    }
  };
}
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <div class="text-lg font-bold">Teams Strength</div>
    <template v-if="chartData?.labels">
      <Chart :data="chartData" :options="chartOptions" :plugins="[ChartDataLabels]" type="bar"/>
      <div class="legend grid gap-3 grid-cols-2 mb-2">
        <div v-for="(label, i) in chartData.labels" :key="label" class="grid-cols-1 flex flex-nowrap items-center">
          <div
              :style="{backgroundColor: chartData.datasets[0].backgroundColor[i]}"
              class="text-surface-0 rounded-sm mr-3 w-[26px] h-[26px] flex items-center justify-center text-xs">
            {{ label }}
          </div>
          <span class="text-sm text-surface-600">
          {{ labelsText[label] }}
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <div  class="flex no-wrap gap-3">
        <Skeleton height="10rem" width="5rem"></Skeleton>
        <Skeleton height="10rem" width="5rem"></Skeleton>
        <Skeleton height="10rem" width="5rem"></Skeleton>
        <Skeleton height="10rem" width="5rem"></Skeleton>
      </div>
      <div class="legend grid gap-3 grid-cols-2 mb-2">
        <Skeleton v-for="i in 4" :key="i" width="w-full" height="1rem"  class="grid-cols-1" ></Skeleton>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>