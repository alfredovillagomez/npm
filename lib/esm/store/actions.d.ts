/// <reference types="connected-react-router" />
import { ActionType } from 'typesafe-actions';
export declare const rootActionCreator: (actions: {}) => {
    router: {
        push: typeof import("connected-react-router").push;
        replace: typeof import("connected-react-router").replace;
        go: typeof import("connected-react-router").go;
        goBack: typeof import("connected-react-router").goBack;
        goForward: typeof import("connected-react-router").goForward;
    };
};
export declare type RootAction = ActionType<ReturnType<typeof rootActionCreator>>;
