export const topbarJson = {
  "className": "custom-topbar",
//   "layout": "horizontal",
  "items": [
    {
      "type": "link",
      "title": "SuperVisor",
      "label": "Supervisor",
      "link": "/supervisor",
      "iconpath": "fa fa-user-tie",
      "onmenu": true
    },
    {
      "type": "link",
      "title": "Workspace",
      "label": "Workspace",
      "link": "/workspace",
      "iconpath": "fa fa-tasks",
      "onmenu": true
    },
    {
      "type": "link",
      "title": "Labs",
      "label": "Labs",
      "link": "/labs",
      "iconpath": "fa fa-magic",
      "onmenu": true
    },
    {
      "type": "link",
      "title": "Actions",
      "label": "Actions",
      "link": "/actions",
      "iconpath": "fa fa-tools",
      "onmenu": true
    },
    {
      "type": "dropdown",              // parent
      "title": "Chats",
      "label": "Chats",
      "link": "/chats",
      "iconpath": "fa fa-comments",
      "onmenu": true,
      "menugroup": "chats"             // group id
    },
    {
      "type": "link",                  // child 1
      "title": "Chats2",
      "label": "Chats2",
      "link": "/chats2",
      "iconpath": "fa fa-comments",
      "onmenu": true,
      "menugroup": "chats"
    },
    {
      "type": "link",                  // child 2
      "title": "Chats3",
      "label": "Chats3",
      "link": "/chats3",
      "iconpath": "fa fa-comments",
      "onmenu": true,
      "menugroup": "chats"
    }
  ]
};
