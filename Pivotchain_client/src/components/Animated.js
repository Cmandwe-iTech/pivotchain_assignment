// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// const AnimatedBackground = () => {
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });

//   return (
//     <animated.div
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'blue', // Replace with your preferred background color or image
//         opacity: props.opacity,
//       }}
//     />
//   );
// };

// export default AnimatedBackground;

import React from "react";
import "./list.css"
function Animated() {
  return (
    <div className="parent-div">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}

export default Animated;
