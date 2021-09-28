import { Store, StoreEnhancer } from 'redux';
import { History } from 'history';
import { EpicMiddleware } from 'redux-observable';
import { RootAction } from '../actions';
import { RootState } from '../reducer';
export declare type ApplicationStore = Store<RootState, RootAction>;
export declare const getEnhancers: (history: History, epicMiddleware: EpicMiddleware<RootAction, RootAction, RootState>) => StoreEnhancer<ApplicationStore, {}>;
