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
      title: "Settings",
      label: "Settings",
      link: "/settings",
      iconpath: "fa fa-cog",
      target: "_blank",
      device: "*",
      weight: 4,
      onmenu: true,
      blocked: false,
      element: "SettingsPage"
    }
  ]
};
