import React from "react";
import "./index.css";
export default function Notice() {
  return (
    <div className="notice-info">
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        医院预约挂号须知
      </h2>
      <div className="label">
        为方便您早日就医康复，请您认真阅读预约挂号须知：
      </div>
      <h4 style={{ margin: "10px 0" }}>一、预约实名制：</h4>
      <div className="label">
        统一平台电话预约和网上预约挂号均采取实名制注册预约，请您如实提供就诊人员的真实姓名、有效证件号（身份证、护照）、性别、手机号码、社保卡号等基本信息
      </div>
      <h4 style={{ margin: "10px 0" }}>二、预约挂号：</h4>
      <div className="label">
        按照北京市卫健委统一平台要求，预约挂号规则如下：
      </div>
      <div className="label">
      在同一自然日，同一医院，同一科室，同一就诊单元，同一就诊人，可以预约最多1个号源；
      </div>
      <div className="label">
        在同一自然周，同一就诊人，可以预约最多8个号源;
      </div>
      <div className="label">
        在同一自然月，同一就诊人，可以预约最多12个号源;
      </div>
      <div className="label">
        在同一自然季度，同一就诊人，可以预约最多24个号源;
      </div>
    </div>
  );
}
