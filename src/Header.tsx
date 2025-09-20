import React, { useContext } from 'react';
import './Header.css';
import { ColorContext } from 'mf-pack';

function Logger() {
  const color = useContext(ColorContext);
  console.log('### color from header remote', color);
  return null;
}

export function Header() {
  const color = React.useContext(ColorContext);

  return (
    <nav>
      <ul className="header" style={{ backgroundColor: color }}>
        <li>
          Hello
          <Logger />
        </li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
    </nav>
  );
}
