export const privateRoutes = [
    { path: "", page: "Home" },
    { path: "profile", page: "Profile" },
    { path: "goals", page: "Goals" },
    { path: "tasks", page: "Tasks" },
    { path: "indicators", page: "Indicators" },
    { path: "evidences", page: "Evidences" },
    { path: "activities", page: "Activities" },
    { path: "activities/:id", page: "ActivityInner" },
    { path: "manage-departments", page: "ManageDepartments" },
    { path: "manage-users", page: "ManageUsers" },
    { path: "logs", page: "Logs" },
    { path: "parameters", page: "Parameters" },
    { path: "contact-info", page: "ContactInfo" },
    { path: "statistics", page: "Statistics" }
];

export const publicRoutes = [
    { path: "login", page: "Login" },
    { path: "required-password-change", page: "RequiredPasswordChange" }
];
