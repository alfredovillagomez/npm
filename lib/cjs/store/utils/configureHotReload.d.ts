import { Store } from 'redux';
import { History } from 'history';
import { EpicMiddleware } from 'redux-observable';
import { RootAction } from '../actions';
import { RootState } from '../reducer';
export declare const configureHotReload: (store: Store, history: History, epicMiddleWare: EpicMiddleware<RootAction, RootAction, RootState>) => void;
