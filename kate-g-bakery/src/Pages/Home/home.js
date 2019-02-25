import React, { Component } from 'react';
import Header from './Components/Header/header.js';
import SocialMedia from './Components/SocialMedia/social_media.js';
import Footer from './Components/Footer/footer.js';

import './Home.scss';

class Home extends Component {
  render() {
    // console.log(<Home />);
    const title = 'bab';
    return(
      <div className="main-page">
        <SocialMedia />
        <Header />
          <div id="clear">
          </div>
          <section id="first-section">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus. </p>
          </section>
          <section>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus. </p>
          </section>
          <section>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus. </p>
          </section>
          <section>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis, sequi necessitatibus distinctio id quo doloremque accusamus. Nesciunt debitis, sit tempore, quasi rerum fuga beatae minima quisquam officiis animi temporibus. </p>
          </section>
        <Footer title={title}/>
      </div>
    )
  }
}

export default Home;
