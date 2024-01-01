import plusIcon from '../../assets/plus-solid.png';
import minusIcon from '../../assets/minus-solid.png';
import Button from '../Button/Button';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import pinterestIcon from '../../assets/pinterest.png';
import xIcon from '../../assets/x-twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import '../Footer/Footer.css';
import { useEffect, useState } from 'react';

function Footer() {
  const [serviceList, setServiceList] = useState(
    window.innerWidth > 768 ? '100%' : '0',
  );
  const [infoList, setInfoList] = useState(
    window.innerWidth > 768 ? '100%' : '0',
  );
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleScreenChange() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenChange);

    setServiceList(screenWidth > 768 ? '100%' : '0');
    setInfoList(screenWidth > 768 ? '100%' : '0');

    return () => {
      window.removeEventListener('resize', handleScreenChange);
    };
  }, [screenWidth]);

  function toggleServiceList() {
    if (serviceList === '0') {
      setServiceList('100%');
    } else {
      setServiceList('0');
    }
  }

  function toggleInfoList() {
    if (infoList === '0') {
      setInfoList('100%');
    } else {
      setInfoList('0');
    }
  }

  return (
    <footer>
      <hr />

      <div className='footer-links'>
        <div>
          <h3>Customer Service</h3>
          <img
            src={serviceList === '100%' ? minusIcon : plusIcon}
            alt='Customer service'
            onClick={toggleServiceList}
          />
        </div>
        <ul className='customer-service-list' style={{ height: serviceList }}>
          <li>
            <a href='#'>
              <p>Contact Us</p>
            </a>
          </li>
          <li>
            <a href='#'>
              <p>FAQs</p>
            </a>
          </li>
          <li>
            <a href='#'>
              <p>Returns</p>
            </a>
          </li>
          <li>
            <a href='#'>
              <p>Shipping</p>
            </a>
          </li>
        </ul>
      </div>
      <hr />

      <div className='footer-links'>
        <div>
          <h3>Store Information</h3>
          <img
            src={infoList === '100%' ? minusIcon : plusIcon}
            alt='Store information'
            onClick={toggleInfoList}
          />
        </div>
        <ul className='store-info-list' style={{ height: infoList }}>
          <li>
            <a href='#'>
              <p>Locations</p>
            </a>
          </li>
          <li>
            <a href='#'>
              <p>Store Hours</p>
            </a>
          </li>
          <li>
            <a href='#'>
              <p>Careers</p>
            </a>
          </li>
          <li>
            <a href='#'>
              <p>Sitemap</p>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className='footer-contact'>
        <div className='email-signup'>
          <label>Sign up for email updates</label>
          <div className='updates-div'>
            <input type='text' name='updates' id='updates-input' />
            <Button
              type={'submit'}
              text={'Submit'}
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '3px',
                border: '1px solid #bebebe',
                boxShadow: '1px 1px 3px #444444',
                width: '70px',
              }}
            />
          </div>
        </div>
        <hr />
        <div className='social-media'>
          <p>Connect with us on social media!</p>
          <div className='social-media-icons'>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <img src={facebookIcon} alt='Facebook' />
            </a>
            <a
              href='https://www.instagram.com'
              rel='noreferrer'
              target='_blank'
            >
              <img src={instagramIcon} alt='Instagram' />
            </a>
            <a
              href='https://www.pinterest.com '
              rel='noreferrer'
              target='_blank'
            >
              <img src={pinterestIcon} alt='Pinterest' />
            </a>
            <a href='https://www.twitter.com' rel='noreferrer' target='_blank'>
              <img src={xIcon} alt='Twitter' />
            </a>
            <a href='https://www.youtube.com' rel='noreferrer' target='_blank'>
              <img src={youtubeIcon} alt='Youtube' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
