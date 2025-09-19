export const NavigationJson = {
  "className": "custom-sidebar",
  "theme": "dark",
  "layout": "vertical",
  "items": [
    {
      "type": "link",
      "title": "Dashboard",
      "label": "Dashboard",
      "link": "/dashboard",
      "iconpath": "fa fa-tachometer-alt",
      "target": "",
      // "device":  ["pc","mob"],
      "weight": 1,
      "onmenu": true,
      "blocked": true
    },
    {
      "type": "link",
      "title": "Masters",
      "label": "Masters",
      "link": "/masters",
      "iconpath": "fa fa-map-marker",
      "menugroup": "nogroup",
      "target": "",
      "weight": 2,
      "onmenu": true,
      "blocked": false
    }, {
      "type": "link",
      "title": "Area",
      "label": "Area",
      "link": "/masters/area",
      "iconpath": "fa fa-map-marker",
      "menugroup": "Masters",
      "device": ["pc", "mob"],
      "target": "",
      "weight": 1,
      "onmenu": true,
      "blocked": false
    },
    {
      "type": "link",
      "title": "City",
      "label": "City",
      "link": "/masters/city",
      "iconpath": "fa fa-city",
      "menugroup": "Masters",
      "device": "*",
      "target": "",
      "weight": 2,
      "onmenu": true,
      "blocked": false
    },
    {
      "type": "link",
      "title": "Reports",
      "label": "Reports",
      "link": "/reports",
      "iconpath": "fa fa-chart-bar",
      "device": "*",
      "target": "",
      "weight": 4,
      "onmenu": true,
      "blocked": false
    },
    {
      "type": "link",
      "title": "Settings",
      "label": "Settings",
      "link": "/settings",
      "iconpath": "fa fa-cog",
      "device": "*",
      "target": "_blank",
      "weight": 5,
      "onmenu": true,
      "blocked": false
    }
  ]
}



