import React from 'react';

import './home-page.style.scss';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const HomePage = (props) => {
  console.log(props)
  return(
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <DirectoryMenu />
    </div>
  );
}


export default HomePage;