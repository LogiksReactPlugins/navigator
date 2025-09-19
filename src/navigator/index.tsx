// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// function getDeviceType() {
//   if (window.innerWidth <= 768) return "mob";
//   if (window.innerWidth <= 1024) return "tab";
//   return "pc";
// }

// const currentDevice = getDeviceType();

// const Dropdown = ({ parentItem, items, isHorizontal }: any) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className={`relative group ${isHorizontal ? "inline-block" : "w-full"}`}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       {/* Parent item (clickable link if it has one) */}
//       {parentItem?.target === "_blank" ? (
//         <a
//           href={parentItem?.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${
//             isHorizontal ? "inline-flex" : "w-full"
//           }`}
//           onClick={() => setOpen(!open)}
//         >
//           {parentItem?.iconpath && <i className={parentItem?.iconpath}></i>}
//           <span>{parentItem.label || parentItem.title}</span>
//           <span className="ml-auto">{open ? "▲" : "▼"}</span>
//         </a>
//       ) : (
//         <NavLink
//           to={parentItem.link}
//           className={({ isActive }) =>
//             `flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${
//               isActive ? "bg-action text-white" : ""
//             } ${isHorizontal ? "inline-flex" : "w-full"}`
//           }
//           onClick={(e) => {
//             // prevent immediate navigation if dropdown toggle
//             if (items.length > 0) {
//               e.preventDefault();
//               setOpen(!open);
//             }
//           }}
//         >
//           {parentItem.iconpath && <i className={parentItem.iconpath}></i>}
//           <span>{parentItem.label || parentItem.title}</span>
//           <span className="ml-auto">{open ? "▲" : "▼"}</span>
//         </NavLink>
//       )}

//       {/* Child items */}
//       <div
//         className={`absolute z-10 bg-white shadow-md min-w-max ${
//           open ? "block" : "hidden"
//         } ${isHorizontal ? "left-0 top-full" : "left-full top-0"}`}
//       >
//         <div className="flex flex-col">
//           {items.map((item: any, index: number) =>
//             item.target === "_blank" ? (
//               <a
//                 key={index}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
//               >
//                 {item.iconpath && <i className={item.iconpath}></i>}
//                 <span>{item.label || item.title}</span>
//               </a>
//             ) : (
//               <NavLink
//                 key={index}
//                 to={item.link}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${
//                     isActive ? "bg-action text-white" : ""
//                   }`
//                 }
//               >
//                 {item.iconpath && <i className={item.iconpath}></i>}
//                 <span>{item.label || item.title}</span>
//               </NavLink>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// function Navigator({ config }: any) {

//   const [currentDevice, setCurrentDevice] = useState(getDeviceType());
//   const isHorizontal = config.layout === "horizontal";
//   const layoutClass = isHorizontal ? "flex-row" : "flex-col";

//   useEffect(() => {
//     const handleResize = () => setCurrentDevice(getDeviceType());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const visibleItems = (config.items || []).filter((item: any) => {
//     if (!item.onmenu) return false;
//     if (!item.device || item.device === "*") return true;
//     if (Array.isArray(item.device)) return item.device.includes(currentDevice);
//     return item.device === currentDevice;
//   });

//   const groupMap: any = {};
//   const standaloneItems: any = [];

//   visibleItems.forEach((item: any) => {
//     if (item.menugroup) {
//       if (!groupMap[item.menugroup]) groupMap[item.menugroup] = [];
//       groupMap[item.menugroup].push(item);
//     } else {
//       standaloneItems.push(item);
//     }
//   });

//   return (
//     <nav
//       className={`navigator ${config.className || ""} flex ${layoutClass} gap-2 text-action`}
//       style={{ maxWidth: 500 }}
//     >
//       {standaloneItems
//         .sort((a: any, b: any) => (a.weight || 0) - (b.weight || 0))
//         .map((item: any, index: number) => {
//           const childItems = groupMap[item.label || item.title];
//           if (childItems) {
//             return (
//               <Dropdown
//                 key={index}
//                 parentItem={item}   
//                 items={childItems.sort(
//                   (a: any, b: any) => (a.weight || 0) - (b.weight || 0)
//                 )}
//                 isHorizontal={isHorizontal}
//               />
//             );
//           }

//           // Normal standalone item
//           return item?.target === "_blank" ? (
//             <a
//               key={index}
//               href={item?.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200"
//             >
//               {item?.iconpath && <i className={item?.iconpath}></i>}
//               <span>{item?.label || item?.title}</span>
//             </a>
//           ) : (
//             <NavLink
//               key={index}
//               to={item?.link}
//               title={item?.tips}
//               className={({ isActive }) =>
//                 `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${
//                   isActive ? "bg-action text-white" : ""
//                 }`
//               }
//             >
//               {item?.iconpath && <i className={item?.iconpath}></i>}
//               <span>{item?.label || item?.title}</span>
//             </NavLink>
//           );
//         })}
//     </nav>
//   );
// }


// export default Navigator;

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function getDeviceType() {
  if (window.innerWidth <= 768) return "mob";
  if (window.innerWidth <= 1024) return "tab";
  return "pc";
}

const Dropdown = ({ parentItem, items, isHorizontal }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative ${isHorizontal ? "inline-block" : "w-full"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent item */}
      <div
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${
          isHorizontal ? "inline-flex" : "w-full"
        }`}
        onClick={() => setOpen(!open)}
      >
        {parentItem?.iconpath && <i className={parentItem.iconpath}></i>}
        <span>{parentItem.label || parentItem.title}</span>
        <span className="ml-auto">{open ? "▲" : "▼"}</span>
      </div>

      {/* Subitems */}
      <div
        className={`absolute z-10 bg-white shadow-md min-w-max ${
          open ? "block" : "hidden"
        } ${isHorizontal ? "left-0 top-full" : "left-full top-0"} nav-dropdown`}
      >
        <div className="flex flex-col">
          {items.map((item: any, index: number) =>
            item.target === "_blank" ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 nav-link"
              >
                {item.iconpath && <i className={item.iconpath}></i>}
                <span>{item.label || item.title}</span>
              </a>
            ) : (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${
                    isActive ? "bg-action text-white  link-active" : ""
                  }`
                }
              >
                {item.iconpath && <i className={item.iconpath}></i>}
                <span>{item.label || item.title}</span>
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
};

function Navigator({ config }: any) {
  const [currentDevice, setCurrentDevice] = useState(getDeviceType());
  const isHorizontal = config?.layout === "horizontal";
  const layoutClass = isHorizontal ? "flex-row" : "flex-col";
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setCurrentDevice(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = (config.items || []).filter((item: any) => {
    if (!item.onmenu) return false;
    if (!item.device || item.device === "*") return true;
    if (Array.isArray(item.device)) return item.device.includes(currentDevice);
    return item.device === currentDevice;
  });

  const groupMap: any = {};
  const standaloneItems: any = [];

  visibleItems.forEach((item: any) => {
    if (item.menugroup && item.menugroup !== "nogroup") {
      if (!groupMap[item.menugroup]) groupMap[item.menugroup] = [];
      groupMap[item.menugroup].push(item);
    } else {
      standaloneItems.push(item);
    }
  });

  return (
    <nav
      className={`navigator ${config?.className || ""} flex ${layoutClass} gap-2 text-action`}
    >
      {standaloneItems
        .sort((a: any, b: any) => (a.weight || 0) - (b.weight || 0))
        .map((item: any, index: number) => {
          const childItems = groupMap[item.label || item.title];
          if (childItems && childItems.length > 0) {
            return (
              <Dropdown
                key={index}
                parentItem={item}
                items={childItems.sort(
                  (a: any, b: any) => (a.weight || 0) - (b.weight || 0)
                )}
                isHorizontal={isHorizontal}
              />
            );
          }

          const isActiveLink = item.link && location.pathname === item.link;

          return item?.target === "_blank" ? (
            <a
              key={index}
              href={item?.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${
                isActiveLink ? "bg-action text-white  link-active" : ""
              } nav-link`}
            >
              {item?.iconpath && <i className={item?.iconpath}></i>}
              <span>{item?.label || item?.title}</span>
            </a>
          ) : (
            <NavLink
              key={index}
              to={item?.link}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${
                  isActive ? "bg-action text-white link-active" : ""
                } nav-link`
              }
            >
              {item?.iconpath && <i className={item?.iconpath}></i>}
              <span>{item?.label || item?.title}</span>
            </NavLink>
          );
        })}
    </nav>
  );
}

export default Navigator;
