import '../Card/Card.css';

function Card() {
  return (
    <div className='card'>
      <div className='card-image'></div>
      <div className='card-body'>
        <div className='item-name'></div>
        <div className='item-description'></div>
        <div className='item-cost'></div>
      </div>
    </div>
  );
}

export default Card;
