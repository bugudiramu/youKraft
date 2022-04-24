import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../redux/actions/NoodleActions';

const Country = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.noodle);

  let randomNumber = (minimum, maximum) =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  useEffect(() => {
    dispatch(getImages());
  }, []);

  const handleBrandClick = (brand) => {
    navigate(`/brand/${brand}`, {
      state: {
        brandDetails: location?.state?.brandDetails?.filter(
          (e) => e.Brand === brand
        ),
      },
    });
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap'>
      {location?.state?.brandDetails &&
        location?.state?.brandDetails.map((e, idx) => {
          let r = randomNumber(0, location?.state?.brandDetails.length);
          return (
            <Card
              role='button'
              onClick={() => handleBrandClick(e.Brand)}
              className='mx-2 my-4'
              key={idx}
              style={{ width: '18rem', height: '20rem' }}
            >
              <Card.Body>
                <Card.Img
                  loading='lazy'
                  style={{
                    height: '15rem',
                    objectFit: 'cover',
                  }}
                  variant='top'
                  src={images[r]?.Image}
                />
                <Card.Title>{e.Brand}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default Country;
