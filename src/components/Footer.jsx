import React from 'react';
import styles from '.components/footer.css' 

function footer(){
    return
    <footer className='footer'>
        <div className='footer-container'>
            <h1 className='footer-text'>
                &#169 {new Date().getFullYear()} My App. All rights reserved.
            </h1>
        </div>
    </footer>
}

export default App;