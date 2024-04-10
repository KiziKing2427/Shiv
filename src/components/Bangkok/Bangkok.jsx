import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchData from './SearchData';
import { useTranslation } from 'react-i18next';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((names) => names.name.toLowerCase().includes(query.toLowerCase()));
};

const Bangkok = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const { packagesData } = SearchData;
  const { items } = packagesData;
  const filteredItems = getFilteredItems(query, items);

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const renderPlace = (item) => {
    return (
      <div className="content-frame" key={item.id}>
        <Link to={item.link} className="nav-link">
          <img src={item.image} alt={`Place ${item.id}`} />
        </Link>
        <div className="descriptionBkk">
  <span style={{ color: 'black', fontWeight: 'bold' }}>
    {item.name.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
            <div className="places">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <span style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                  &#9733; &#9733; &#9733; &#9733; &#9733; {/* 5-star rating */}
                </span>
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  {item.price}
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-wrapper" style={{ cursor: 'pointer' }}>
          <input
            type="text"
            placeholder={t('Search for a Tour, Hotel or Taxi pickup and other Ytri Travel Packages. . .')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="fa fa-search" style={{ fontSize: '30px', color: 'red' }}></i>
        </div>
      </div>
      <div className="bangkok-container"></div>
      <div className="section" id="beautiful-places">
        <h2 className="heading">Beautiful Places In Bangkok</h2>
        <div className="places">
          {filteredItems.map((item) => renderPlace(item))}
        </div>
      </div>
    </div>
  );
};

export default Bangkok;
