import React from "react";
import { Table } from "antd";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

const columns = [
   {
      title: "Exchanges",
      dataIndex: "exchanges",
      key: "exchanges",
   },
   {
      title: "24h Trade Volume",
      dataIndex: "tradeVolume",
      key: "tradeVolume",
   },
   {
      title: "Markets",
      dataIndex: "markets",
      key: "markets",
   },
   {
      title: "Change",
      dataIndex: "change",
      key: "change",
   },
];
const data = [
   {
      key: 1,
      exchanges: "BTC",
      tradeVolume: 32,
      markets: 1000,
      change: 20,
      description: "lorem",
   },
];
const Exchanges = () => {
   const { datas, isFetching } = useGetCryptoExchangesQuery();
   console.log(datas);

   if (isFetching) return "Loading...";

   return (
      <Table
         columns={columns}
         expandable={{
            expandedRowRender: (record) => (
               <p
                  style={{
                     margin: 0,
                  }}
               >
                  {record.description}
               </p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
         }}
         dataSource={data}
      />
   );
};

export default Exchanges;
