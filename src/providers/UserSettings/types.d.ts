import React from "react";

type UserSettingsHook<T> = {
    settings: T;
    setSettings: (key: keyof T, value: unknown) => void;
    clearSettings: () => void;
};

type UserSettingsProviderProps = {
    initialState: object;
    settingsKey: string;
    version: string;
    children: React.ReactNode;
};

type parserOptions<T> =
    | {
          raw: true;
      }
    | {
          raw: false;
          serializer: (value: T) => string;
          deserializer: (value: string) => T;
      };
