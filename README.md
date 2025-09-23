
The `Navigator` component renders a **responsive navigation menu** (horizontal or vertical) based on a JSON configuration.  
It supports **dropdowns, external links, device-specific menus, disabled items, and grouping**.

---

## Usage

```tsx
import Navigator from "./Navigator";

const navJson = {
  className: "custom-sidebar",
  layout: "horizontal",
  items: [
    {
      type: "link",
      title: "Dashboard",
      label: "Dashboard",
      link: "/dashboard",
      iconpath: "fa fa-tachometer-alt",
      target: "",
      device: ["pc", "mob"],
      weight: 1,
      onmenu: true,
      blocked: false,
    },
    {
      type: "link",
      title: "Reports",
      label: "Reports",
      link: "/reports",
      iconpath: "fa fa-chart-line",
      menugroup: "Analytics",
      weight: 2,
      blocked: true,
    },
  ],
};

export default function App() {
  return <Navigator navJson={navJson} hideLabel={false} />;
}
````

---

## Props

| Prop        | Type      | Required | Default | Description                                               |
| ----------- | --------- | -------- | ------- | --------------------------------------------------------- |
| `navJson`   | `object`  | ✅ Yes    | —       | JSON config object that defines the navigation structure. |
| `hideLabel` | `boolean` | ❌ No     | `false` | If `true`, hides all text labels (only icons will show).  |

---

## JSON Schema (`navJson`)

### Top-Level

| Key         | Type                         | Required | Default      | Description                                  |
| ----------- | ---------------------------- | -------- | ------------ | -------------------------------------------- |
| `className` | `string`                     | ❌ No     | `""`         | Extra CSS classes for the `<nav>` container. |
| `layout`    | `"horizontal" \| "vertical"` | ❌ No     | `"vertical"` | Defines menu orientation.                    |
| `items`     | `array`                      | ✅ Yes    | —            | Array of menu item objects.                  |

---

### Menu Item

Each object inside `items` represents a menu entry.

| Key         | Type                     | Required | Default     | Description                                                                               |
| ----------- | ------------------------ | -------- | ----------- | ----------------------------------------------------------------------------------------- |
| `type`      | `"link" \| "dropdown"`   | ✅ Yes    | `"link"`    | Type of item. Currently supports `link` (direct) and `dropdown` (via group).              |
| `title`     | `string`                 | ✅ Yes    | —           | Fallback label if `label` is not provided.                                                |
| `label`     | `string`                 | ❌ No     | `title`     | Text to display in menu.                                                                  |
| `link`      | `string`                 | ❌ No     | —           | Internal route (for React Router). Ignored if grouped or blocked.                         |
| `iconpath`  | `string`                 | ❌ No     | —           | Icon CSS class (e.g., `"fa fa-home"`).                                                    |
| `target`    | `"_blank" \| ""`         | ❌ No     | `""`        | Open link in new tab if `_blank`.                                                         |
| `device`    | `string \| array \| "*"` | ❌ No     | `"*"`       | Restrict visibility to device(s). Possible values: `"pc"`, `"tab"`, `"mob"`, `"*"` (all). |
| `weight`    | `number`                 | ❌ No     | `0`         | Controls sorting order (lower appears first).                                             |
| `onmenu`    | `boolean`                | ❌ No     | `true`      | If `false`, hides the item from menu.                                                     |
| `menugroup` | `string`                 | ❌ No     | `"nogroup"` | Groups items under a dropdown. Items with the same `menugroup` appear under one parent.   |
| `blocked`   | `boolean`                | ❌ No     | `false`     | If `true`, item appears but is **disabled** (greyed out, not clickable).                  |

---

## Device Detection

The menu auto-adjusts visibility based on **window size**:

* `mob` → `<= 768px`
* `tab` → `<= 1024px`
* `pc` → `> 1024px`

Use the `device` property in each item to restrict rendering.

---

## Dropdowns

Dropdowns are created when multiple items share the same `menugroup` value.
The **parent menu item must have `"type": "dropdown"`** and children must have the same `menugroup`.

Example:

```json
{
  "type": "dropdown",
  "title": "Reports",
  "label": "Reports",
  "link": "#",
  "menugroup": "Analytics",
  "weight": 1
},
{
  "type": "link",
  "title": "Sales Report",
  "label": "Sales",
  "link": "/reports/sales",
  "menugroup": "Analytics",
  "weight": 2
},
{
  "type": "link",
  "title": "User Report",
  "label": "Users",
  "link": "/reports/users",
  "menugroup": "Analytics",
  "weight": 3
}
```


## Blocked Items

* Shown in menu.
* Styled as **disabled** (`opacity-50`, `not-allowed`).
* No click/hover effect.

```json
{
  "title": "Settings",
  "label": "Settings",
  "link": "/settings",
  "iconpath": "fa fa-cog",
  "blocked": true
}
```

---

## Custom CSS Classes

These utility classes are added in the component for consistency and styling.
You can extend or override them in your global CSS/Tailwind config.

| Class          | Where it’s used                | Purpose                                     |
| -------------- | ------------------------------ | ------------------------------------------- |
| `nav-link`     | On `<NavLink>` and `<a>` items | Base class for all navigation links.        |
| `link-active`  | On active route `<NavLink>`    | Applied when the link is the current route. |
| `nav-dropdown` | On dropdown wrapper `<div>`    | Styles the dropdown container.              |
| `navigator`    | On root `<nav>` element        | Base class for the whole navigation.        |

These can be combined with Tailwind classes (`bg-action`, `hover:bg-gray-200`, etc.) or replaced with your own theme.

---

## Styling

* **Active link** → `bg-action text-white link-active`
* **Hover effect** → `hover:bg-gray-200` (standalone) / `hover:bg-gray-100` (dropdowns)
* **Blocked** → `opacity-50 cursor-not-allowed pointer-events-none`

---

## Example JSON Config

```json
{
  "className": "custom-nav",
  "layout": "horizontal",
  "items": [
    {
      "type": "link",
      "title": "Home",
      "label": "Home",
      "link": "/",
      "iconpath": "fa fa-home",
      "device": "*",
      "weight": 1
    },
    {
      "type": "link",
      "title": "Profile",
      "label": "Profile",
      "link": "/profile",
      "iconpath": "fa fa-user",
      "weight": 2,
      "blocked": true
    },
    {
      "type": "link",
      "title": "Reports",
      "label": "Reports",
      "link": "#",
      "menugroup": "Analytics",
      "iconpath": "fa fa-chart-line",
      "weight": 3
    },
    {
      "type": "link",
      "title": "Sales Report",
      "label": "Sales",
      "link": "/reports/sales",
      "menugroup": "Analytics",
      "weight": 4
    }
  ]
}
```