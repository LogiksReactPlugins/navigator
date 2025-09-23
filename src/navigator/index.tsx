import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function getDeviceType() {
  if (window.innerWidth <= 768) return "mob";
  if (window.innerWidth <= 1024) return "tab";
  return "pc";
}

const DisabledWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 px-2 py-1 opacity-50 cursor-not-allowed">{children}</div>
);

const Dropdown = ({ parentItem, items, hideLabel }: any) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isChildActive = items.some(
    (item: any) =>
      item?.link === location.pathname ||
      (item.children && item.children.some((c: any) => c.link === location.pathname))
  );

  return (
    <div className="w-full flex flex-col">
      <div
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 w-full ${
          isChildActive ? "bg-gray-100" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        {parentItem?.iconpath && <i className={parentItem?.iconpath}></i>}
        {!hideLabel && <span>{parentItem?.label || parentItem?.title}</span>}
        <span className="ml-auto">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="flex flex-col pl-4 border-l border-gray-300">
          {items
            .sort((a: any, b: any) => (a.weight || 0) - (b.weight || 0))
            .map((item: any, index: number) => {
              if (item?.children && item.children.length > 0) {
                return (
                  <Dropdown
                    key={index}
                    parentItem={item}
                    items={item.children}
                    hideLabel={hideLabel}
                  />
                );
              }

              const content = (
                <>
                  {item?.iconpath && <i className={item?.iconpath}></i>}
                  {!hideLabel && <span>{item?.label || item?.title}</span>}
                </>
              );

              if (item?.blocked) {
                return <DisabledWrapper key={index}>{content}</DisabledWrapper>;
              }

              return item?.target === "_blank" ? (
                <a
                  key={index}
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
                >
                  {content}
                </a>
              ) : (
                <NavLink
                  key={index}
                  to={item?.link}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-2 py-1 hover:bg-gray-100 ${
                      isActive ? "bg-action text-white link-active" : ""
                    }`
                  }
                >
                  {content}
                </NavLink>
              );
            })}
        </div>
      )}
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

  return (
    <nav className={`navigator ${config?.className || ""} flex ${layoutClass} gap-2 text-action`}>
      {visibleItems
        .sort((a: any, b: any) => (a.weight || 0) - (b.weight || 0))
        .map((item: any, index: number) => {
          if (item?.children && item.children.length > 0) {
            return <Dropdown key={index} parentItem={item} items={item.children} hideLabel={hideLabel} />;
          }

          const content = (
            <>
              {item?.iconpath && <i className={item?.iconpath}></i>}
              {!hideLabel && <span>{item?.label || item?.title}</span>}
            </>
          );

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
              className={`flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${
                isActiveLink ? "bg-action text-white link-active" : ""
              }`}
            >
              {content}
            </a>
          ) : (
            <NavLink
              key={index}
              to={item?.link}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 hover:bg-gray-200 ${
                  isActive ? "bg-action text-white link-active" : ""
                }`
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
