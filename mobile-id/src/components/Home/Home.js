import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import DeviceList from '../Devices/DeviceList';
import Container from 'react-bootstrap/Container';

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
            <>
                <Container fluid>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
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
                        <div class="col-lg-8 col-md-8 col-12">
                            <DeviceList />
                        </div>
                    </div>
                </Container>

            </>
        );
    }

}

export default (Home);