import React from 'react';

class Home extends React.Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `newPath`;
        this.props.history.push(path);
    }

    render() {
        return (
            <div class="container">
                <div class="container-left">
                    This will have content in the left box.
                </div>
                <div class="container-right">
                    This will have content in the right box.
                </div>
            </div>
        );
    }

}

export default (Home);