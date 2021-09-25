import { StateType } from 'typesafe-actions';
import { History } from 'history';
export declare const createRootReducer: (appHistory: History, reducers: any[]) => import("redux").Reducer<import("redux").CombinedState<{
    [x: string]: unknown;
}>, never>;
export declare type RootState = StateType<ReturnType<typeof createRootReducer>>;
