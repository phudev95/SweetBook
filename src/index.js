import React, { Component } from 'react';
import { Welcome, Main } from './containers';
import { Provider } from 'react-redux';
import { store } from './store';

// export const Root = () => (
//   <Provider store={store}>
//     <Welcome />
//   </Provider>
// );

export class Root extends Component {
    constructor() {
        super();

        this.state = {
            currentTab: 'home'
        };
    }

    changeTab = (tabName = 'home') => {
        this.setState({ currentTab: tabName });
    }

    renderRoot(ComponentToRender) {
        return (
            <Provider store={store}>
                <ComponentToRender changeTab={this.changeTab} />
            </Provider>
        );
    }

    render() {
        const { currentTab } = this.state;
        return currentTab === 'home' ? this.renderRoot(Welcome) : this.renderRoot(Main);
    }
}
