import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const Brand = () => {
  const params = useParams();
  const location = useLocation();

  const {
    Brand = '',
    Country = '',
    Stars = '',
    Style = '',
    Variety = '',
  } = location?.state?.brandDetails[0];

  return (
    <div>
      <Card className='d-flex'>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <b>Brand</b> - {Brand}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Country</b> - {Country}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Stars</b> - {Stars}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Style</b> - {Style}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Top Ten</b> - {location?.state?.brandDetails['Top Ten']}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Variety</b> - {Variety}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Brand;
