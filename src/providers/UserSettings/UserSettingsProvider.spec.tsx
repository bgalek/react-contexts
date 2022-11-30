import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import {
    useLocalUserSettings,
    UserSettingsProvider,
} from "./UserSettingsProvider";

describe("UserSettingsProvider", () => {
    test("basic usage", async () => {
        // ARRANGE
        render(
            <UserSettingsProvider
                initialState={{ favouriteColor: "orange" }}
                settingsKey="tests"
                version="1"
            >
                <TestApp />
            </UserSettingsProvider>
        );

        // ASSERT
        expect(screen.getByRole("main")).toHaveTextContent("orange");
    });
});

function TestApp() {
    const { settings } = useLocalUserSettings<{ favouriteColor: "orange" }>();
    return <p role="main">{settings?.favouriteColor}</p>;
}
