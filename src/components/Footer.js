import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.Links.map(social => {
          const { name, icon, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ri-${icon}-fill`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
