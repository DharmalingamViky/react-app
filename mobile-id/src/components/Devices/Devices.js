import React from 'react';
import '../../styles.scss';

class Devices extends React.Component {
    constuctor() {
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

export default (Devices);