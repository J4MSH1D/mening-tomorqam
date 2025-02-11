export default defineNuxtRouteMiddleware((to) => {
  const layouts = {
    auth: ["login"],
  };

  const layoutName = Object.entries(layouts).find(([layoutName, list]) =>
    list.includes(to.name)
  )
    ? Object.entries(layouts).find(([layoutName, list]) =>
        list.includes(to.name)
      )[0]
    : "default";

  // Set the layout on the route you are navigating _to_
  setPageLayout(layoutName);
});
