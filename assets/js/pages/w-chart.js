'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {

  (function () {
    // canceled order chart
    var options_canceled_order = {
      chart: {
        type: 'line',
        height: 60,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#f3be1e'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    if (!window.chart_canceled_order_initialized) {
      window.chart_canceled_order_initialized = true;
      var chart_canceled_order = new ApexCharts(document.querySelector('#canceled-order-chart'), options_canceled_order);
      chart_canceled_order.render();
    }

    // total order chart
    var options_total_order = {
      chart: {
        type: 'area',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#62ba87'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0
        }
      },
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }]
    };
    if (!window.chart_total_order_initialized) {
      window.chart_total_order_initialized = true;
      var chart_total_order = new ApexCharts(document.querySelector('#total-order-chart'), options_total_order);
      chart_total_order.render();
    }

   


    // reports chart
    var options_reports = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false
        }
      },
      colors: ['#f3be1e','#62ba87'],
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          stops: [0, 100],
          shadeIntensity: 0.5,
          gradientToColors: ['#62ba87','#f3be1e'],
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: "اليوم",
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
          name: "أمس",
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
      ],
      xaxis: {
        categories: ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    if (!window.chart_reports_initialized) {
      window.chart_reports_initialized = true;
      var chart_reports = new ApexCharts(document.querySelector('#reports-chart'), options_reports);
      chart_reports.render();
    }

    document.querySelector('#chart-line').addEventListener('click', function(e) {
      chart_reports.updateOptions({
        chart: {
          type: 'line',
        },
        fill: {
          type: 'solid',
        },
      })
    })

    document.querySelector('#chart-area').addEventListener('click', function(e) {
      chart_reports.updateOptions({
        chart: {
          type: 'area',
        },
        fill: {
          type: 'gradient',
        },
      })
    })

    document.querySelector('#chart-bar').addEventListener('click', function(e) {
      chart_reports.updateOptions({
        chart: {
          type: 'bar',
        },
        fill: {
          type: 'solid',
        },
      })
    })

  })();
  
}
