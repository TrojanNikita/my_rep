import * as React from 'react';
import LeftMenuItem from './left-menu-item';
import {LeftMenuItems} from './left-menu-const';

//import './left-menu.scss';

const LeftMenu= () => {

  const elements = LeftMenuItems.map((item) => {
    return (      
      <li key={item.id} className="left-menu__li">
        <LeftMenuItem  item={item}/>
      </li>
    );
  });

  return (
    <div>
      <ul className="left-menu">
        { elements }
      </ul>
    </div>
  );
};

export default React.memo(LeftMenu);
