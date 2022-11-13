import {useSpring} from "react-spring";

export default function useSequenceList(topDistance: number) {
  return useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px, ${topDistance}px ,0px)`
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0px ,0px)'
    },
    config: {
      mass: 0.8,
      tension: 280,
      friction: 20
    },
  })
}
