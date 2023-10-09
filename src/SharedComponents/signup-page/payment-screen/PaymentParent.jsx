import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useState } from "react";
import "./paymentParent.scss";
import CreditDebit from "./CreditDebit";
import Upi from "./Upi";
import NetBanking from "./NetBanking";

const PaymentParent = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const paymentTabs = [
    {
      id: "1",
      label: "Credit/Debit",
      component: (
        <CreditDebit details={props.details} onPayment={props.onPayment} />
      ),
    },
    {
      id: "2",
      label: "UPI",
      component: <Upi details={props.details} onPayment={props.onPayment} />,
    },
    {
      id: "3",
      label: "Net Banking",
      component: (
        <NetBanking details={props.details} onPayment={props.onPayment} />
      ),
    },
  ];
  return (
    <div className="tabs-container">
      <Tabs
        activeKey={activeTab}
        onChange={(activeKey) => setActiveTab(activeKey)}
        defaultActiveKey="1"
      >
        {paymentTabs.map((item) => {
          return (
            <TabPane
              tab={<div className="tab-label">{item.label}</div>}
              key={item.id}
              className="tabs"
              id={item?.styleId}
            >
              {item.component}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default PaymentParent;
