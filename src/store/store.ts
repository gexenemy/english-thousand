// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { AnyAction, Store } from 'redux';

// Определи свой reducer!
const reducer = (state: any, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const makeStore = (context: Context) => configureStore({ reducer });

export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true });
