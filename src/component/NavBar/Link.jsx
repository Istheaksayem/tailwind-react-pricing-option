import React from 'react';

const Link = ({route}) => {
    return (
      <li className=' px-10 lg:mr-8 hover:bg-green-400'>
        <a href={route.path}>{route.name}</a>
      </li>
    );
};

export default Link;