import React, { useState } from "react";
import milify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  // const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  if (isFetching) return "Loading...";

  return (
    <>
      <Row gutter={[16, 16]} className="crypto-card-container">
        {cryptos?.slice(0, simplified ? 10 : 100).map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price : {milify(currency.price)}</p>
                <p>Market Cap : {milify(currency.marketCap)}</p>
                <p>Daily Change : {milify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
