import React from 'react';
import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, setCurrent } from '../redux/actions/NoodleActions';

const Home = () => {
  const { current, countries, uniqueCountries } = useSelector(
    (state) => state.noodle
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });

  const fetchMoreData = () => {
    if (current.length === uniqueCountries.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      dispatch(
        setCurrent(
          current.concat(
            uniqueCountries.slice(count.prev + 10, count.next + 10)
          )
        )
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  const handleCountryClick = (country) => {
    console.log(country);
    navigate(`/${country}`, {
      state: {
        brandDetails: countries.filter((e) => e.Country === country),
      },
    });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={current.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h5>Loading brands...</h5>}
      >
        <div>
          {current &&
            current.map((e, idx) => {
              return (
                <Card onClick={() => handleCountryClick(e)} key={idx}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item role='button'>{e}</ListGroup.Item>
                  </ListGroup>
                </Card>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
