import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import DeviceList from '../Devices/DeviceList';

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
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Device list</Accordion.Header>
                            <Accordion.Body>
                                <h1>pagination</h1>
                                <h1>device list will go here with endless scrolling</h1>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>reserved</Accordion.Header>
                            <Accordion.Body>
                                <h1>pagination</h1>
                                <h1>device list will go here with endless scrolling</h1>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div class="container-right">
                    <DeviceList />
                </div>
            </div>
        );
    }

}

export default (Home);