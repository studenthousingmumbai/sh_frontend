import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
// import 'nprogress/nprogress.css';

const TopProgressBar = () => {
  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return null; // No JSX required for the bar itself
};

export default TopProgressBar;
