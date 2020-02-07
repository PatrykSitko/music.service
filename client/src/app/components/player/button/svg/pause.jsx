import React from "react";

export default ({ color: fill, backgroundColor, ...other }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 480 480"
      space="preserve"
      style={{ backgroundColor, enableBackground: "new 0 0 348.21 348.21" }}
      {...other}
    >
      <path
        style={{
          transition: "fill 0.55s",
          fill
        }}
        d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm0 464c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.140625 123.652344-100.347656 223.859375-224 224zm0 0"
      />
      <path
        style={{
          transition: "fill 0.55s",
          fill
        }}
        d="m216 136h-48c-4.417969 0-8 3.582031-8 8v192c0 4.417969 3.582031 8 8 8h48c4.417969 0 8-3.582031 8-8v-192c0-4.417969-3.582031-8-8-8zm-8 192h-32v-176h32zm0 0"
      />
      <path
        style={{
          transition: "fill 0.55s",
          fill
        }}
        d="m312 136h-48c-4.417969 0-8 3.582031-8 8v192c0 4.417969 3.582031 8 8 8h48c4.417969 0 8-3.582031 8-8v-192c0-4.417969-3.582031-8-8-8zm-8 192h-32v-176h32zm0 0"
      />
    </svg>
  );
};
