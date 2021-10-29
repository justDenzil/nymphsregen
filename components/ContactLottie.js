import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/83358-contact-green.json";

export default function ContactLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={495} width={495} />;
}