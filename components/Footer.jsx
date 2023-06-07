import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerData = [
    {
      title: 'Síguenos en redes sociales',
      links: [
        { label: 'Facebook', url: '/enlace1' },
        { label: 'Instagram', url: '/enlace2' },
        { label: 'Twitter', url: '/enlace3' }
      ]
    },
    {
      title: 'Acerca de nosotros',
      links: [
        { label: 'Terminos y Condiciones', url: '/files/Términos-y-Condiciones-de-Dragon-Ball-Collection.pdf' },
      ]
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center bg-gray-100 p-4 border-t border-white mb-2">
      <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 p-4">
        {footerData.map((section, index) => (
          <div key={index} className="mx-6 mb-4 md:mb-0 py-5 border-b border-white">
            <h2 className="text-white">{section.title}</h2>
            <br />
            <div className="text-white">
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex}>
                  <Link  href={link.url} passHref target="_blank" rel="noopener noreferrer" className="text-lg text-center mb-8 text-white">{link.label}</Link>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-white text-center mt-2">
        Dragon Ball Collection © {new Date().getFullYear()} Trabajando juntos para perfeccionar y evolucionar continuamente Dragon Ball Collection
      </p>
    </footer>
  );
};

export default Footer;
