
const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Aurallon. All rights reserved.
        </p>
        <div className="mt-2">
          <a 
            href="mailto:info@aurallon.com" 
            className="text-aurallon-blue hover:text-aurallon-blue/80 text-sm"
          >
            info@aurallon.com
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a 
            href="https://aurallon.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-aurallon-blue hover:text-aurallon-blue/80 text-sm"
          >
            aurallon.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
