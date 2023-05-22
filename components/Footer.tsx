import LogoFacebook from '@/icons/LogoFacebook';
import LogoFooter from '@/icons/LogoFooter';
import LogoInstagram from '@/icons/LogoInstagram';
import LogoLinkedin from '@/icons/LogoLinkedin';
import LogoTwitter from '@/icons/LogoTwitter';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="py-7">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <li>
            <Link href={'/'}>
              <LogoFooter />
            </Link>
          </li>
          <div className="hidden sm:inline-block h-7 w-[1px] bg-white rounded-full"></div>
          <li>
            <Link href={'https://www.facebook.com/'} target="_blank">
              <LogoFacebook />
            </Link>
          </li>
          <li>
            <Link href={'https://twitter.com/'} target="_blank">
              <LogoTwitter />
            </Link>
          </li>
          <li>
            <Link href={'https://www.linkedin.com/'} target="_blank">
              <LogoLinkedin />
            </Link>
          </li>
          <li>
            <Link href={'https://www.instagram.com/'} target="_blank">
              <LogoInstagram />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center pb-6">
        <p className="text-base text-white">Donare | Powered by NoCountry</p>
      </div>
    </footer>
  );
};

export default Footer;
