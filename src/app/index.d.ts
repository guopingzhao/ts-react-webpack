/// <reference types="react" />
import * as React from "react";
export interface AppProps {
    compiler: string;
    framework: string;
}
export declare class App extends React.Component<AppProps, {}> {
    render(): JSX.Element;
}
