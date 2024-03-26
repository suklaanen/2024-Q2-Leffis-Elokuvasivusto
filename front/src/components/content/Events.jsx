import React from 'react';

const Events = ({ events }) => {

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h4>{event.title}</h4>
          <p>{event.synopsis}</p>
          <p>Genre: {event.genres}</p>
          {event.imageUrl && <img src={event.imageUrl} alt={event.title} />}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Events;