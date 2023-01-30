import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Crunchwrap() {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            I am a Crunchwrap Supreme. Please eat me.
                        </h3>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default Crunchwrap;