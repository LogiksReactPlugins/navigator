import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function getDeviceType() {
  if (window.innerWidth <= 768) return "mob";
  if (window.innerWidth <= 1024) return "tab";
  return "pc";
}

const DisabledWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 px-2 py-1 opacity-50 cursor-not-allowed">
    {children}
  </div>
);

const Dropdown = ({ parentItem, items, isHorizontal, hideLabel }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative ${isHorizontal ? "inline-block" : "w-full"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent item */}
      <div
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 ${isHorizontal ? "inline-flex" : "w-full"
          }`}
        onClick={() => setOpen(!open)}
      >
        {parentItem?.iconpath && <i className={parentItem?.iconpath}></i>}
        {!hideLabel && <span>{parentItem?.label || parentItem?.title}</span>}
        <span className="ml-auto">{open ? "▲" : "▼"}</span>
      </div>

      <div
        className={`absolute z-10 bg-white shadow-md min-w-max ${open ? "block" : "hidden"
          } ${isHorizontal ? "left-0 top-full" : "left-full top-0"} nav-dropdown`}
      >
        <div className="flex flex-col">
          {items.map((item: any, index: number) => {
            const content = (
              <>
                {item?.iconpath && <i className={item?.iconpath}></i>}
                {!hideLabel && <span>{item?.label || item?.title}</span>}
              </>
            );

            if (item?.blocked) {
              return (
                <DisabledWrapper key={index}>{content}</DisabledWrapper>
              );
            }

            return item?.target === "_blank" ? (
              <a
                key={index}
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 nav-link"
              >
                {content}
              </a>
            ) : (
              <NavLink
                key={index}
                to={item?.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${isActive ? "bg-action text-white link-active" : ""
                  }`
                }
              >
                {content}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function Navigator({ navJson: config, hideLabel = false }: any) {
  const [currentDevice, setCurrentDevice] = useState(getDeviceType());
  const isHorizontal = config?.layout === "horizontal";
  const layoutClass = isHorizontal ? "flex-row" : "flex-col";
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setCurrentDevice(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = (config?.items || []).filter((item: any) => {
    if (item.onmenu === false) return false;
    if (!item?.device || item?.device === "*") return true;
    if (Array.isArray(item?.device)) return item?.device.includes(currentDevice);
    return item?.device === currentDevice;
  });

  const groupMap: any = {};
  const standaloneItems: any = [];

  visibleItems.forEach((item: any) => {
    if (item?.menugroup && item?.menugroup !== "nogroup") {
      if (item.type === "dropdown") {
        standaloneItems.push(item);
      } else {
        if (!groupMap[item.menugroup]) groupMap[item.menugroup] = [];
        groupMap[item.menugroup].push(item);
      }
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
          const childItems = groupMap[item?.menugroup];

          const content = (
            <>
              {item?.iconpath && <i className={item?.iconpath}></i>}
              {!hideLabel && <span>{item?.label || item?.title}</span>}
            </>
          );

          if (childItems && childItems.length > 0) {
            return (
              <Dropdown
                key={index}
                parentItem={item}
                items={childItems.sort(
                  (a: any, b: any) => (a.weight || 0) - (b.weight || 0)
                )}
                isHorizontal={isHorizontal}
                hideLabel={hideLabel}
              />
            );
          }

          if (item?.blocked) {
            return <DisabledWrapper key={index}>{content}</DisabledWrapper>;
          }

          const isActiveLink = item?.link && location.pathname === item?.link;

          return item?.target === "_blank" ? (
            <a
              key={index}
              href={item?.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${isActiveLink ? "bg-action text-white link-active" : ""
                } nav-link`}
            >
              {content}
            </a>
          ) : (
            <NavLink
              key={index}
              to={item?.link}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${isActive ? "bg-action text-white link-active" : ""
                } nav-link`
              }
            >
              {content}
            </NavLink>
          );
        })}
    </nav>
  );
}

export default Navigator;
