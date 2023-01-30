import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Soda() {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            I am a Sprite. Not the fairy kind.
                        </h3>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default Soda;