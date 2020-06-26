import React, { useState } from 'react'; 

export default function Picture({ url }) { 
    const [loading, setLoading] = useState(true); 

    return (
        <div>
            <p style={{ display: loading ? 'block' : 'none'}}>Loading....</p>
            <img src={url} onLoad={() => setLoading(false)} alt="zapdos"/>
        </div>
    ); 
}