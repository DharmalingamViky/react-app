
import React from 'react';

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

class UserProfile extends React.Component {
    constuctor() {
    }
    render() {
        const changeTheme = () => {
            // 👇️ use document.getElementById()
            const el = document.getElementById('my-element');
            console.log(el);
            this.el.nativeElement.className = 'dark-theme'; //light-theme
        };
        return (
            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    user
                </Button>

                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </>
        );
    }
}
export default (UserProfile);