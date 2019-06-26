import React from "react";

export const RoutesContext = React.createContext({
    api: {
        tasks: `/api/tasks`,
        task: id => `/api/task/${id}`,
        projects: `/api/projects`,
        project: id => `/api/project/${id}`,
        clients: `/api/clients`,
        client: id => `/api/client/${id}`,
        invoices: `/api/invoices`,
        invoice: id => `/api/invoice/${id}`,
        session: `/api/session`
    },
    view: {
        task: {
            all: `/tasks`,
            one: id => `/task/${id}`,
            new: `tasks/new`,
            edit: id => `/task/edit/${id}`
        },
        project: {
            all: `/projects`,
            one: id => `/project/${id}`,
            new: `projects/new`,
            edit: id => `/project/edit/${id}`
        },
        client: {
            all: `/clients`,
            one: id => `/client/${id}`,
            new: `clients/new`,
            edit: id => `/client/edit/${id}`
        },
        invoice: {
            all: `/invoices`,
            one: id => `/invoice/${id}`,
            new: `invoices/new`,
            edit: id => `/invoice/edit/${id}`
        },
        session: {
            logout: `/logout`,
            login: `/login`,
            register: `/register`
        }
    }
});
export const SessionContext = React.createContext(undefined);