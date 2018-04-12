import * as React from "react";
import TSComponent from "../components/TSComponent"

export interface AppProps {
    compiler: string; framework: string;
}

export class App extends React.Component<AppProps, {}> {
    render() {
        const { compiler, framework } = this.props;
        return (
            <div>
                <h1>Hello from {compiler} and {framework}!</h1>
                <TSComponent></TSComponent>
            </div>
        );
    }
}