import React from "react";

const routes = [
    {
        path: "/admin/cohorts/new",
        exact: true,
        component: React.lazy(() => import("./cohort-form/NewCohort")),
    },
    {
        path: "/admin/cohorts/:slug",
        exact: true,
        component: React.lazy(() => import("./cohort-form")),
    },
    {
        exact: true,
        path: "/admin/cohorts",
        component: React.lazy(() => import("./cohorts")),
    },
    {
        path: "/admin/students/new",
        exact: true,
        component: React.lazy(() => import("./student-form/NewStudent")),
    },
    {
        path: "/admin/students/:slug",
        exact: true,
        component: React.lazy(() => import("./student-form")),
    },
    {
        path: "/admin/students",
        component: React.lazy(() => import("./students")),
    },
];

export default routes;
