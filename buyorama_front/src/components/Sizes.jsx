import React from "react";
import { styled } from "styled-components";

const SizeButton = styled.div`
  &:hover {
    background-color: green;
    color: white;
    cursor: crosshair;
  }
`;

export default function Sizes({ sizes }) {
  const array_sizes = sizes.split(",");
  return (
    <div>
      <a href="#" className="text-decoration-none">
        {array_sizes.map((size, index) => (
          <SizeButton key={index} className="btn btn-warning m-1 sizes_button">
            {size}{" "}
          </SizeButton>
        ))}{" "}
      </a>
    </div>
  );
}
