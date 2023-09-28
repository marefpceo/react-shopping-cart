import plusIcon from '../../assets/plus-solid.png';
import Button from '../Button/Button';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import pinterestIcon from '../../assets/pinterest.png';
import xIcon from '../../assets/x-twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import '../Footer/Footer.css';

function Footer() {
  return(
    <footer>
      <hr />
      <div className="footer-links">
        <h3>Customer Service</h3>
        <img src={plusIcon} alt="" />
      </div>
      <hr />
      <div className="footer-links">
        <h3>Store Information</h3>
        <img src={plusIcon} alt="" />
      </div>
      <hr />
      <div className="email-signup">
        <label>Sign up for email updates</label>

        <div className="updates-div">
          <input type="text" name="updates" id="updates-input" />
          
          <Button
            type={'submit'}
            text={'Submit'}
            style={
              {
                backgroundColor: '#bebebe',
                borderRadius: '3px',
                border: '1px solid #000000',
                width: '70px',
              }
            }
          />
        </div>
      </div>
      <hr />
      <div className="social-media">
        <p>Connect with us on social media!</p>
        <div className="social-media-icons">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={pinterestIcon} alt="" />
          <img src={xIcon} alt="" />
          <img src={youtubeIcon} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;