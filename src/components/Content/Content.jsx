import electronics from '../../assets/technology-stock.webp';
import womenClothing from '../../assets/female-bluejean.webp';
import furniture from '../../assets/home-furnishings-stock.webp';
import menClothing from '../../assets/ian-dooley-stock.webp';
import shoes from '../../assets/shoes-water-splash-stock.webp';
import '../Content/Content.css';

function Content() {
  return (
    <div className='main-content'>
      <div className='img-div'>
        <div className='main-image'>
          <img src={electronics} alt='' />
        </div>
        <div className='main-image'>
          <img src={womenClothing} alt='' />
        </div>
        <div className='main-image'>
          <img src={furniture} alt='' />
        </div>
        <div className='main-image'>
          <img src={menClothing} alt='' />
        </div>
        <div className='main-image'>
          <img src={shoes} alt='' />
        </div>
      </div>
      {/* <Button /> Placeholder for dev*/}
    </div>
  );
}

export default Content;
