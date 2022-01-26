import React from 'react';
import {Card, CardTitle, CardBody, CardText, Button } from 'reactstrap'

function tiles({title, text}) {
  return (
    <div className='w-25'>

        <Card
            color="success"
            outline>
            <CardBody>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardText>
                {text}
            </CardText>
            <Button>
                View More
            </Button>
            </CardBody>
        </Card>
    </div>
)
}
export default tiles
