export const NavigationJson = {
  className: "custom-sidebar",
  theme: "dark",
  layout: "vertical",
  items: [
    {
      title: "Dashboard",
      label: "Dashboard",
      link: "/dashboard",
      iconpath: "fa fa-tachometer-alt",
      target: "",
      device: "*",
      weight: 1,
      onmenu: true,
      blocked: false,
      element: "DashboardPage"
    },
    {
      title: "Masters",
      label: "Masters",
      link: "/masters",
      iconpath: "fa fa-database",
      target: "",
      device: "*",
      weight: 2,
      onmenu: true,
      blocked: false,
      element: "MastersPage",
      children: [
        {
          title: "Area",
          label: "Area",
          link: "/masters/area",
          iconpath: "fa fa-map-marker",
          target: "",
          device: ["pc", "mob"],
          weight: 1,
          onmenu: true,
          blocked: false,
          element: "AreaPage"
        },
        {
          title: "City",
          label: "City",
          link: "/masters/city",
          iconpath: "fa fa-city",
          target: "",
          device: "*",
          weight: 2,
          onmenu: true,
          blocked: false,
          element: "CityPage"
        },
        {
          title: "Category",
          label: "Category",
          link: "/masters/category",
          target: "",
          device: "*",
          weight: 3,
          onmenu: true,
          blocked: false,
          element: "CategoryPage",
          children: [
            {
              title: "Electronics",
              label: "Electronics",
              link: "/masters/category/electronics",
              target: "",
              device: "*",
              weight: 1,
              onmenu: true,
              blocked: false,
              element: "ElectronicsPage"
            },
            {
              title: "Furniture",
              label: "Furniture",
              link: "/masters/category/furniture",
              target: "",
              device: "*",
              weight: 2,
              onmenu: true,
              blocked: false,
              element: "FurniturePage",
              children: [
                {
                  title: "Chairs",
                  label: "Chairs",
                  link: "/masters/category/furniture/chairs",
                  target: "",
                  device: "*",
                  weight: 1,
                  onmenu: true,
                  blocked: false,
                  element: "ChairsPage"
                },
                {
                  title: "Tables",
                  label: "Tables",
                            iconpath: "fa fa-map-marker",

                  link: "/masters/category/furniture/tables",
                  target: "",
                  device: "*",
                  weight: 2,
                  onmenu: true,
                  blocked: false,
                  element: "TablesPage"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Reports",
      label: "Reports",
      link: "/reports",
      iconpath: "fa fa-chart-bar",
      target: "",
      device: "*",
      weight: 3,
      onmenu: true,
      blocked: false,
      element: "ReportsPage"
    },
    {
      title: "Analytics",
      label: "Analytics",
      link: "/analytics",
      iconpath: "fa fa-chart-line",
      target: "",
      device: "*",
      weight: 4,
      onmenu: true,
      blocked: false,
      element: "AnalyticsPage",
      children: [
        {
          title: "Sales",
          label: "Sales",
          link: "/analytics/sales",
          target: "",
          device: "*",
          weight: 1,
          onmenu: true,
          blocked: false,
          element: "SalesPage"
        },
        {
          title: "Traffic",
          label: "Traffic",
          link: "/analytics/traffic",
          target: "_blank",
          device: "*",
          weight: 2,
          onmenu: true,
          blocked: false,
          element: "TrafficPage"
        }
      ]
    },
    {
      title: "Settings",
      label: "Settings",
      link: "/settings",
      iconpath: "fa fa-cog",
      target: "_blank",
      device: "*",
      weight: 5,
      onmenu: true,
      blocked: false,
      element: "SettingsPage"
    }
  ]
};
