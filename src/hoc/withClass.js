import React from 'react';
const withClass = (WrappedComponent, className) => {
    // console.log("[withClass.js] ", WrappedComponent , 'AND' ,  className);
  return props => (
      <div className={className}>
          <WrappedComponent {...props}/>
      </div>
      );
};

export default withClass;
