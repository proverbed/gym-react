import FacebookIcon from "./../img/icon-facebook.svg";
import YoutubeIcon from "./../img/icon-youtube.svg";
import TwitterIcon from "./../img/icon-twitter.svg";
import PinterestIcon from "./../img/icon-pinterest.svg";
import InstagramIcon from "./../img/icon-instagram.svg";
import Logo from "./../img/logo-white.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div>
            <img src={Logo} className="h-8" alt="" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={FacebookIcon} alt="Facebook icon" className="h-8" />
            </a>
            <a href="#">
              <img src={YoutubeIcon} alt="YouTube icon" className="h-8" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="Twitter icon" className="h-8" />
            </a>
            <a href="#">
              <img src={PinterestIcon} alt="Pinterest icon" className="h-8" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram icon" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 rounded-full px-4 focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
