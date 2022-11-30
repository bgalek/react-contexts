import React, { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import { UserSettingsHook, UserSettingsProviderProps } from "./types";

const UserSettingsContext = createContext({});

export function UserSettingsProvider({
    settingsKey,
    version,
    initialState,
    children,
}: UserSettingsProviderProps) {
    const [settings, setState] = useLocalStorage<typeof initialState>(
        `${settingsKey}@${version}`,
        initialState
    );
    return (
        <UserSettingsContext.Provider
            value={{
                settings,
                setSettings: (key: keyof typeof initialState, value: unknown) =>
                    setState((prev: typeof initialState) => ({
                        ...prev,
                        [key]: value,
                    })),
                clearSettings: () => setState(initialState),
            }}
        >
            {children}
        </UserSettingsContext.Provider>
    );
}

export function useLocalUserSettings<T>() {
    return useContext(UserSettingsContext) as UserSettingsHook<T>;
}
