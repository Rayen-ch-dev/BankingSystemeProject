"use client";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimal=","
        end={amount}
        duration={2.5}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
