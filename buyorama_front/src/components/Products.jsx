import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import Sizes from "./Sizes";
import { styled } from "styled-components";

const CardContainer = styled.div``;

const Card = styled.div`
  min-height: 500px;
`;

const CardBody = styled.div`
  position: relative;
`;

const PriceText = styled.span`
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px 0px 0px 5px;
  padding: 5px;
`;

const Price = styled.span`
  color: black;
  background-color: #ffc400;
  padding: 5px;
  border-radius: 0px 5px 5px 0px;
  &:hover {
    background-color: green;
    color: white;
    cursor: crosshair;
  }
`;

const WatchMoreButton = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  &:hover {
    background-color: #ffc400;
    color: black;
    border: transparent;
  }
`;

export default function Products() {
  const [products, setProducts] = useState([]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  useEffect(() => {
    axios.get("https://buyorama-d0bad80c5095.herokuapp.com/shop/products/").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex col-12 justify-content-between products_container flex-wrap px-lg-5 px-md-2 px-sm-5">
        {products.map((product) => (
          <CardContainer
            key={product.id}
            className="xxl-2 col-lg-2 col-md-3 col-sm-4 col-6 p-1"
          >
            <Card className="card">
              <Carousel product={product} />
              <CardBody className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <PriceText>Price: </PriceText>
                <Price>{formatPrice(product.price)}</Price>
                <div className="card-text">
                  <Sizes sizes={product.sizes} />
                </div>
                <div>
                  <b>Left:</b> {product.stock}
                </div>
                <WatchMoreButton href="#" className="btn btn-success w-100">
                  Watch more
                </WatchMoreButton>
              </CardBody>
            </Card>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
