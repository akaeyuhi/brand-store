import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BrowseDrop() {
  const [menLinks, setMenLinks] = useState([]);
  const [womenLinks, setWomenLinks] = useState([]);

  //TODO: Fetching links/filling routes path

  setMenLinks([]);
  setWomenLinks([]);

  return (
    <div className="drop__browse">
      <div className="drop__browse__flex">
        <h3 className="drop__h3">Women</h3>
        <ul className="drop__menu">
          {womenLinks.map(link => <li key={link.id}>
            <Link to={link.route} tag="a" >link.name</Link>
          </li>)}
        </ul>
      </div>
      <div className="drop__flex">
        <h3 className="drop__h3">Men</h3>
        <ul className="drop__menu">
          {menLinks.map(link => <li key={link.id}>
            <Link to={link.route} tag="a" >link.name</Link>
          </li>)}
        </ul>
      </div>
    </div>
  );
}
