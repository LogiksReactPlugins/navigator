import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function getDeviceType() {
  if (typeof window === "undefined") return "pc";
  if (window.innerWidth <= 768) return "mob";
  if (window.innerWidth <= 1024) return "tab";
  return "pc";
}
const safeChildren = (item: any) => (Array.isArray(item?.children) ? item.children : []);

const DisabledWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="select-none pointer-events-none opacity-50">{children}</div>
);

const isItemBlocked = (item: any, ancestorBlocked = false) => !!ancestorBlocked || !!item?.blocked;

const TreeItem = ({
  item,
  level = 0,
  isLast = false,
  ancestorBlocked = false,
}: {
  item: any;
  level?: number;
  isLast?: boolean;
  ancestorBlocked?: boolean;
}) => {
  const location = useLocation();
  const children = safeChildren(item);
  const blocked = isItemBlocked(item, ancestorBlocked);

  const isActive =
    item?.link === location.pathname ||
    children.some((c: any) => c?.link === location.pathname);

  const indent = level * 20;
  const Wrapper: any = blocked ? "div" : item?.link ? NavLink : "div";

  const Row = (
    <Wrapper
      to={blocked ? undefined : item?.link}
      className={`relative z-10 flex items-center gap-2 py-1
      ${blocked ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
      ${isActive ? "bg-gray-200" : ""}`}
      style={{ paddingLeft: indent }}
    >
      {level > 0 && (
        <span
          className="absolute h-px bg-gray-300 pointer-events-none"
          style={{
            left: indent - 10,
            width: 10,
            top: "50%",
          }}
        />
      )}

      {item?.iconpath && <i className={item.iconpath}></i>}
      <span className="truncate">{item?.label || item?.title || "Untitled"}</span>
    </Wrapper>
  );

  return (
    <div className="relative">
      {level > 0 && (
        <span
          className="absolute w-px bg-gray-300 pointer-events-none"
          style={{
            left: indent - 10,
            top: 0,
            bottom: isLast ? "calc(100% - 20px)" : 0,
          }}
        />
      )}

      {blocked ? <DisabledWrapper>{Row}</DisabledWrapper> : Row}

      {children.map((child: any, index: number) => (
        <TreeItem
          key={index}
          item={child}
          level={level + 1}
          isLast={index === children.length - 1}
          ancestorBlocked={blocked}
        />
      ))}
    </div>
  );
};

const toClassName = (str = "") =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const PopupMenu = ({ item }: { item: any }) => {
  const [open, setOpen] = useState(false);
  const children = safeChildren(item);
  const blocked = isItemBlocked(item, false);

  return (
    <div className={`relative navbar-popup navbar-popup-${toClassName(item?.label)}`}>
      <div
        onClick={() => {
          if (!blocked) setOpen(true);
        }}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          blocked ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"
        }`}
      >
        {item?.iconpath && <i className={`${item.iconpath} text-gray-600`}></i>}
        <span className="text-sm font-medium text-gray-700">
          {item?.label || item?.title || ""}
        </span>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 md:px-6 py-2 md:py-4 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item?.label || item?.title}
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors group"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-3 md:p-6 bg-gray-50">
              {children.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
                  {children.map((child: any, i: number) => {
                    const childBlocked = isItemBlocked(child, blocked);
                    const LinkWrapper: any = childBlocked ? "div" : NavLink;
                    return (
                      <LinkWrapper
                        key={i}
                        to={childBlocked ? undefined : child?.link || "#"}
                        className="group nav-link"
                        onClick={() => setOpen(false)}
                      >
                        <div
                          className={`bg-white border border-gray-200 rounded-lg p-2 md:p-5 hover:shadow-lg transition-all duration-200 h-full flex flex-col justify-center items-center ${
                            childBlocked ? "opacity-50 pointer-events-none" : "hover:border-action"
                          }`}
                        >
                          {child.iconpath && (
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mb-2 md:mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                              <i className={`${child.iconpath} text-2xl `}></i>
                            </div>
                          )}

                          <h4 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-action transition-colors">
                            {child?.label || child?.title}
                          </h4>

                          {child?.description && (
                            <p className="text-sm text-gray-500 line-clamp-2 mb-3">{child.description}</p>
                          )}
                        </div>
                      </LinkWrapper>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">No items available</p>
                  <p className="text-sm text-gray-400 mt-1">Check back later for updates</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuRow = ({ item, children, isActive, isDisabled, paddingLeft, handleAjax }: any) => {
  const Wrapper: any = isDisabled ? "div" : item?.link ? NavLink : "div";
  return (
    <Wrapper
      to={isDisabled || item?.target === "ajax" ? undefined : item?.link}
      onClick={() => {
        if (!isDisabled && item?.target === "ajax") handleAjax(item?.link);
      }}
      className={({ isActive: active }: any) =>
        `relative z-10 flex items-center gap-2 px-2 py-1
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
        ${(active || isActive) ? "bg-action text-white" : ""}`
      }
      style={{ paddingLeft }}
    >
      {item?.iconpath && <i className={item.iconpath}></i>}
      <span className="truncate">{children}</span>
    </Wrapper>
  );
};


const Dropdown = ({ parentItem, items, hideLabel, ancestorBlocked = false ,handleAjax}: any) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const children = Array.isArray(items) ? items : [];
  const blocked = isItemBlocked(parentItem, ancestorBlocked);

  const isChildActive = children.some(
    (item: any) =>
      item?.link === location.pathname || safeChildren(item)?.some((c: any) => c?.link === location.pathname)
  );

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200
          ${blocked ? "opacity-50 cursor-not-allowed" : ""}
          ${isChildActive ? "bg-action text-white" : ""}`}
        onClick={() => {
          if (!blocked) setOpen(!open);
        }}
      >
        {parentItem?.iconpath && <i className={parentItem.iconpath}></i>}
        {!hideLabel && <span>{parentItem?.label || parentItem?.title || ""}</span>}
        <span className="ml-auto">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="flex flex-col pl-4">
          {children.map((item: any, index: number) =>
            safeChildren(item).length ? (
              <Dropdown
                key={index}
                parentItem={item}
                items={item.children}
                hideLabel={hideLabel}
                ancestorBlocked={blocked}

                handleAjax={handleAjax}
              />
            ) : (
              <MenuRow
                key={index}
                item={item}
                paddingLeft={10}
                isDisabled={isItemBlocked(item, blocked)}

                  handleAjax={handleAjax} 
                isActive={item?.link === location.pathname}
              >
                {item?.label || item?.title}
              </MenuRow>
            )
          )}
        </div>
      )}
    </div>
  );
};

function Navigator({ config, hideLabel = false ,handleAjax,treeView}: any) {
  const [currentDevice, setCurrentDevice] = useState(getDeviceType());
  const layout = config?.layout || "vertical";

  useEffect(() => {
    const handleResize = () => setCurrentDevice(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


const items = React.useMemo(() => {
  const rawItems = config?.items || [];
  if (!treeView) return rawItems;

  const groups = new Map<string, any>();
  const usedAsParent = new Set<string | number>();
  const roots: any[] = [];

  rawItems.forEach((item: any) => {
    const category = item?.category;
    if (!category) return;

    if (!groups.has(category)) {
      groups.set(category, {
        id: `group-${category}`,
        title: category,
        label: category,
        link: "#",
        iconpath: "fa fa-angle-right",
        onmenu: true,
        device: "*",
        children: [],
        weight: item.weight ?? 0,
      });
    }

    const group = groups.get(category);
    group.children.push(item);
    usedAsParent.add(category);

    if (item.weight != null && item.weight < group.weight) {
      group.weight = item.weight;
    }
  });

  rawItems.forEach((item: any) => {
    if (!item?.category && !usedAsParent.has(item.title)) {
      roots.push({ ...item });
    }
  });

  return [...roots, ...groups.values()];
}, [config?.items, treeView]);




const visibleItems = (items || []).filter((item: any) => {
    if (!item) return false;
    if (item.onmenu === false) return false;

    const device = item.device;
    if (!device || device === "*") return true;
    if (Array.isArray(device)) return device.includes(currentDevice);
    return device === currentDevice;
  });

  if (layout === "tree") {
    return (
      <nav className="navigator flex flex-col gap-1">
        {visibleItems.map((item: any, index: number) => (
          <TreeItem key={index} item={item} />
        ))}
      </nav>
    );
  }

  if (layout === "popup") {
    return (
      <nav className="navigator flex flex-col gap-2">
        {visibleItems.map((item: any, index: number) =>
          safeChildren(item).length ? (
            <PopupMenu key={index} item={item} />
          ) : (
            <NavLink
              key={index}
                to={item?.target === "ajax" ? undefined : item?.link}
                  onClick={() => {
                    if (item?.target === "ajax") handleAjax(item?.link);
                  }}
                  className={`flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${
                isItemBlocked(item) ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {item?.iconpath && <i className={item.iconpath}></i>}
              <span>{item?.label || item?.title}</span>
            </NavLink>
          )
        )}
      </nav>
    );
  }

  const layoutClass = layout === "horizontal" ? "flex-row" : "flex-col";

  return (
    <nav className={`navigator flex ${layoutClass} gap-2 text-action`} style={{ alignItems: "flex-start" }}>
      {visibleItems
        .sort((a: any, b: any) => (a?.weight || 0) - (b?.weight || 0))
        .map((item: any, index: number) =>
          safeChildren(item).length ? (
            <Dropdown key={index} parentItem={item} items={item.children} hideLabel={hideLabel} handleAjax={handleAjax} />
          ) : (
            <NavLink
              key={index}
              to={item?.target === "ajax" ? undefined : item?.link}
                onClick={() => {
                  if (item?.target === "ajax") handleAjax(item?.link);
                }}
                className={`flex items-center nav-link gap-2 px-2 py-1 hover:bg-gray-200 ${
                isItemBlocked(item) ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {item?.iconpath && <i className={item.iconpath}></i>}
              {!hideLabel && <span>{item?.label || item?.title || ""}</span>}
            </NavLink>
          )
        )}
    </nav>
  );
}

export default Navigator;
