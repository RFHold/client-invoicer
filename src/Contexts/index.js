import React from "react";

export const RoutesContext = React.createContext({
    api: {
        tasks: `/api/tasks`,
        task: id => `/api/task/${id}`,
        projects: `/api/projects`,
        project: {
            one: id => `/api/project/${id}`,
            tasks: id => `/api/project/${id}/tasks`
        },
        clients: `/api/clients`,
        client: id => `/api/client/${id}`,
        invoices: `/api/invoices`,
        invoice: id => `/api/invoice/${id}`,
        session: `/api/session`,
        users: `/api/users`,
        timeEntries: id => `/api/task/${id}/timeEntries`
    },
    view: {
        tasks: {
            all: `/tasks`,
            one: id => `/task/${id}`,
            new: `tasks/new`,
            edit: id => `/task/edit/${id}`,
            projectTasks: id => `/project/${id}/tasks`
        },
        time: {
            new: id => `/tasks/${id}/timeEntry` 
        },
        projects: {
            all: `/projects`,
            one: id => `/project/${id}`,
            new: `projects/new`,
            edit: id => `/project/edit/${id}`,
        },
        clients: {
            all: `/clients`,
            one: id => `/client/${id}`,
            new: `clients/new`,
            edit: id => `/client/edit/${id}`
        },
        invoices: {
            all: `/invoices`,
            one: id => `/invoice/${id}`,
            new: `invoices/new`,
            edit: id => `/invoice/edit/${id}`
        },
        session: {
            logout: `/logout`,
            login: `/login`,
            register: `/register`
        },
        index: "/"
    }
});
export const SessionContext = React.createContext(undefined);