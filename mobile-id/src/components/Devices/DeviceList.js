import React from 'react';
import Table from 'react-bootstrap/Table';

class DeviceList extends React.Component {
    constuctor() {
    }
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction Id</th>
                        <th>Transaction Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>OCR</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>TAB</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>OCR</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default (DeviceList);