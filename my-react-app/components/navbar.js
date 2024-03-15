import React from 'react';

function Navbar() {
  const tabs = ['HTML', 'CSS', 'JavaScript', 'React', 'Sanity and headless CMS'];

  return (
    <nav>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <a href="#" className={index === 0 ? 'active' : ''}>
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;