import NavBar from '../components/NavBar';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp;
