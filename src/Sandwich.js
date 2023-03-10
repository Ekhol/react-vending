import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Sandwich() {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            I am a Sub Sandwich. Delicious.
                        </h3>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default Sandwich;