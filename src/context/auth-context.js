import React, {useEffect, useRef} from 'react';

const authContext =  React.createContext({
     authenticated: false,
    login: () => {

    }
});

export default authContext;
