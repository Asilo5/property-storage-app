import React from 'react';
import './MainPage.scss';

const MainPage = () => {
    return (
      <section>
          <header></header>
          <section className='looking-for-home'>
              <h2>Looking for a Home?..</h2>
              <p>but can't keep track of what you like</p>
          </section>
          <section className='small-intro'>
              <section>
                  <img src='https://images.unsplash.com/photo-1504615755583-2916b52192a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='red brick house' />
                  <img src='https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80' alt='inside a white bedroom facing the window' />
              </section>
              <section>
                  <h2>Proplr</h2>
                  <p>Helps you store properties from multiple sites in one spot!</p>
                  <p>Just that easy</p>
              </section>
          </section>
          <footer>

          </footer>
      </section>
    )
}

export default MainPage;