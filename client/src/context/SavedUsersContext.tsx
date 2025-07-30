"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SavedUsersContextType = {
    savedIds: string[];
    addUser: (id: string) => void;
    removeUser: (id: string) => void;
};

const SavedUsersContext = createContext<SavedUsersContextType | undefined>(undefined);

export function SavedUsersProvider({ children }: { children: ReactNode }) {
    const [savedIds, setSavedIds] = useState<string[]>([]);

    const addUser = (id: string) => {
        setSavedIds((prev) => [...prev, id]);
    };

    const removeUser = (id: string) => {
        setSavedIds((prev) => prev.filter((sid) => sid !== id));
    };

    return (
        <SavedUsersContext.Provider value={{ savedIds, addUser, removeUser }}>
            {children}
        </SavedUsersContext.Provider>
    );
}

export function useSavedUsers() {
    const ctx = useContext(SavedUsersContext);
    if (!ctx) throw new Error("useSavedUsers must be inside SavedUsersProvider");
    return ctx;
}
