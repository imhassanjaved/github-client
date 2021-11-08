<template>
  <div v-if="chartData.length">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  name: "Repo",
  components: {
    highcharts: Chart,
  },
  props: {
    chartData: { type: Array },
  },
  data() {
    return {
      weeksData: [],
      sundayData: [],
      mondayData: [],
      tuesdayData: [],
      wednesdayData: [],
      thursdayData: [],
      fridayData: [],
      saturdayData: [],
      chartOptions: {},
    };
  },
  mounted() {
    this.populateChart(this.chartData);
  },
  methods: {
    populateChart(data) {
      if (data.length) {
        data.forEach((week, index) => {
          if (week.total) {
            this.weeksData.push(`Week-${index + 1}`);
            this.sundayData.push(week.days[0]);
            this.mondayData.push(week.days[1]);
            this.tuesdayData.push(week.days[2]);
            this.wednesdayData.push(week.days[3]);
            this.thursdayData.push(week.days[4]);
            this.fridayData.push(week.days[5]);
            this.saturdayData.push(week.days[6]);
          }
        });

        this.chartOptions = {
          chart: {
            type: "column",
          },

          title: {
            text: "Commits History",
          },

          subtitle: {
            text: "Week wise history of commits",
          },

          legend: {
            align: "right",
            verticalAlign: "middle",
            layout: "vertical",
          },

          xAxis: {
            categories: this.weeksData,
            labels: {
              x: -10,
            },
          },

          yAxis: {
            allowDecimals: false,
            title: {
              text: "Commits Count",
            },
          },

          series: [
            {
              name: "Sunday",
              data: this.sundayData,
            },
            {
              name: "Monday",
              data: this.mondayData,
            },
            {
              name: "Tuesday",
              data: this.tuesdayData,
            },
            {
              name: "Wednesday",
              data: this.wednesdayData,
            },
            {
              name: "Thursday",
              data: this.thursdayData,
            },
            {
              name: "Friday",
              data: this.fridayData,
            },
            {
              name: "Saturday",
              data: this.saturdayData,
            },
          ],

          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 500,
                },
                chartOptions: {
                  legend: {
                    align: "center",
                    verticalAlign: "bottom",
                    layout: "horizontal",
                  },
                  yAxis: {
                    labels: {
                      align: "left",
                      x: 0,
                      y: -5,
                    },
                    title: {
                      text: null,
                    },
                  },
                  subtitle: {
                    text: null,
                  },
                  credits: {
                    enabled: false,
                  },
                },
              },
            ],
          },
        };
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
