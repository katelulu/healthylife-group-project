import "./Footer.css";
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';
import NavLink from "react-bootstrap/NavLink";


export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper_footer">
        <div className="form-input">
          <label for="email"></label>
          <input type="email" placeholder="Your Email" />
          <button
            className="subscribe-btn"
            type="submit"
            value="Send Request"
            onclick="activateLasers()"
          >
            <span></span>
            <a href="/">Subscribe</a>
          </button>
        </div>

        <div className="wrapper_social_media_icons">
          <NavLink href="https://www.facebook.com/" target="blank">
            <div className="social_media_icons_facebook">
              <Facebook color="#ff5e62" size={35} href="/" />
            </div>
          </NavLink>
          <NavLink href="https://www.instagram.com/" target="blank">
            <div className="social_media_icons_instagram">
              <Instagram color="#ff5e62" size={35} />
            </div>
          </NavLink>
          <NavLink href="https://www.youtube.com/" target="blank">
            <div className="social_media_icons_youtube">
              <Youtube color="#ff5e62" size={35} />
            </div>
          </NavLink>
        </div>
          

      
      </div>

      
      
      
      
    </div>
  )
}
