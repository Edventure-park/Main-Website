'use client'

import localFont from 'next/font/local'

// Fix the font paths by using the correct format for Next.js local fonts
const BlackMangoRegular = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Regular.ttf' })
const BlackMangoBold = localFont({ src: '../../public/fonts/BlackMango/BlackMango-Bold.ttf' })

function LatestBuzz() {
        return (
          <div className={`${BlackMangoRegular.className}`}
                style={{
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    paddingTop: '48px',
                    paddingBottom: '48px',
                    fontWeight: 900
                }}
            >
            <div>
              <h3 style={{ fontSize: 'calc(12px + 3vw)', textAlign: 'center', fontWeight: 'normal' }}>
                Get the scoop of our <span className={`${BlackMangoBold.className}`}>latest buzz!</span>
              </h3>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h3 style={{ fontSize: 'calc(12px + 1.5vw)', fontWeight: 'normal', textAlign: 'center' }}>
                Recent events
              </h3>                    <h3 style={{ fontSize: 'calc(12px + 1.5vw)', fontWeight: 'normal', textAlign: 'center' }}>
                Listen to our podcast
              </h3>                    <h3 style={{ fontSize: 'calc(12px + 1.5vw)', fontWeight: 'normal', textAlign: 'center' }}>
                Watch our latest video
              </h3>
            </div>
          </div>
        );
};

export default LatestBuzz;