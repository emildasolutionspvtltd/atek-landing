import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Pay Pilot SaaS', href: '/services/paypilot' },
        { name: 'Other Services', href: '/services' },
      ]
    },
    { name: 'Insights', href: '/insights' },
    { name: 'Partners', href: '/partners' },
    { name: 'Clients', href: '/clients' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div key={item.name} className="relative">
            {item.dropdown ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
        
        <a
          href="/contact"
          className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
        >
          Get Started
        </a>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            <a
              href="/contact"
              className="block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;