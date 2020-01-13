import * as React from 'react';
import LeftMenuItem from './left-menu-item';
import {MenuItem} from './left-menu-types';
import {LeftMenuItems} from './left-menu-const';


const LeftMenu= () => {


  const elements = LeftMenuItems.map((item) => {
    return (      
      <li key={item.id} className="left-menu__li">
        <LeftMenuItem  item={item}/>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul className="left-menu">
        { elements }
      </ul>
    </React.Fragment>
  );
};

export default React.memo(LeftMenu);
