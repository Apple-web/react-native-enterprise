import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './reducers/configureStore';
import App from './app';

const store = configureStore();
store.subscribe(() => {
    //监听state变化
    console.log(store.getState());
});
export default class Root extends Component {
    render() {
        return (
            // 实现组件和store的关联
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}