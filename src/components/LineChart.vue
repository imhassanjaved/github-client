<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  name: "LineChart",
  components: {
    highcharts: Chart,
  },
  props: {
    participantsData: { type: Object },
  },
  data() {
    return {
      chartOptions: {},
    };
  },
  mounted() {
    this.populateChart(this.participantsData);
  },
  methods: {
    populateChart(data) {
      if (data && data.all && data.owner) {
        this.chartOptions = {
          title: {
            text: "Participation Comparison",
          },

          subtitle: {
            text: "Comparison of participation of the owner and all other people",
          },

          yAxis: {
            title: {
              text: "Number of Commits",
            },
          },

          xAxis: {
            accessibility: {
              rangeDescription: "Yearly Comparison",
            },
          },

          legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
          },

          plotOptions: {
            series: {
              label: {
                connectorAllowed: false,
              },
              pointStart: 1,
            },
          },

          series: [
            {
              name: "Others",
              data: data.all,
            },
            {
              name: "Owner",
              data: data.owner,
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
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom",
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
