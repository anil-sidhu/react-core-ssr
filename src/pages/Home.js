import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                MY home Page
                <button onClick={()=>{console.warn("some ssr");
                }}>Click me to catch</button>
            </div>
        );
    }
}

export default Home;