var sidebarOpen = false
var sidebar = document.getElementById("sidebar")

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive")
    sidebarOpen = true
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive")
    sidebarOpen = false
  }
}

// ---------- CHARTS ----------

// RADAR CHART
var barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: "radar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Datorer", "Mobiler", "Datorskärmar", "Hörlurar", "Kameror"],
  },
  yaxis: {
    title: {
      text: "Antal",
    },
  },
}

var barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
)
barChart.render()

// BAR CHART
var areaChartOptions = {
  series: [
    {
      name: "Köpta Ordrar",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sålda Ordrar",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#f5b74f", "#367952"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Antal Köpta Ordrar",
      },
    },
    {
      opposite: true,
      title: {
        text: "Antal Sålda Ordrar",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
}

var areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
)
areaChart.render()
