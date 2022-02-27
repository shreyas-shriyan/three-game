import { useDrag } from "@use-gesture/react";
import { useState } from "react";

const Home = () => {
  const [swipe, setSwipe] = useState("");
  const swipeHandler = useDrag((state) => {
    const [xAxis, yAxis] = state.swipe;

    // detect swipe direction
    if (xAxis !== 0) {
      xAxis === 1 ? setSwipe("r") : setSwipe("l");
    } else if (yAxis !== 0) {
      yAxis === 1 ? setSwipe("d") : setSwipe("u");
    }
  });

  return (
    <div className={styles.home} {...swipeHandler()}>
      <div className="m-auto">{swipe}</div>
    </div>
  );
};

const styles = {
  home: "h-screen border-2 text-center align-middle touch-none",
};

export default Home;
