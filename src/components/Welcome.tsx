import React, { useContext } from 'react';
import ContextStore from '../Context';

const Welcome: React.FC = () => {
    const state = useContext(ContextStore);

    return (
        <div></div>
    );
}

export default Welcome;
