import React, { Component } from 'react';   
import SkeletonLoader from "tiny-skeleton-loader-react";

class Loader extends Component {

    render() {
      return <SkeletonLoader width='100%' height='40px' radius='4em' />;
    }
  }

export default Loader;