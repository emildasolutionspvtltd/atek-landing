import React, { useState } from 'react';
import { Phone, Mail, UserPlus } from 'lucide-react';

const StickyContactBar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contactItems = [
    {
      id: 'phone',
      icon: <Phone className="h-5 w-5" />,
      label: '+1 (469)-269-2345',
      action: () => window.open('tel:+14692692345', '_self'),
      bgColor: 'bg-red-500',
      hoverBgColor: 'hover:bg-red-600',
      labelBgColor: 'bg-red-500',
      arrowColor: 'border-l-red-500',
    },
    {
      id: 'mail',
      icon: <Mail className="h-5 w-5" />,
      label: 'Contact Us',
      action: () => window.location.href = '/contact',
      bgColor: 'bg-orange-500',
      hoverBgColor: 'hover:bg-orange-600',
      labelBgColor: 'bg-orange-500',
      arrowColor: 'border-l-orange-500',
    },
    {
      id: 'apply',
      icon: <UserPlus className="h-5 w-5" />,
      label: 'Apply Now',
      action: () => window.location.href = '/careers',
      bgColor: 'bg-blue-500',
      hoverBgColor: 'hover:bg-blue-600',
      labelBgColor: 'bg-blue-500',
      arrowColor: 'border-l-blue-500',
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2">
        {contactItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Expanded Label */}
            <div
              className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
                hoveredItem === item.id
                  ? 'opacity-100 translate-x-0 visible'
                  : 'opacity-0 translate-x-4 invisible'
              }`}
            >
              <div className={`${item.labelBgColor} text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium`}>
                {item.label}
                {/* Arrow pointing to button */}
                <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 ${item.arrowColor} border-t-4 border-t-transparent border-b-4 border-b-transparent`}></div>
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={item.action}
              className={`
                ${item.bgColor} ${item.hoverBgColor}
                text-white p-3 rounded-l-lg shadow-lg
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                group-hover:pr-4
              `}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyContactBar;
