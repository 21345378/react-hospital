import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { HomeOutlined, RightOutlined, FundOutlined,BookOutlined } from "@ant-design/icons";
import "./index.css";
import CarouselMoudel from "../../component/CarouselMoudel";
import {getHospitalLeveL} from '../../api/hospital/hospitalList'
import { useNavigate } from "react-router-dom";
//React.FC来对函数式组件进行了对应的限制
const Home = () => {
  const [levelId, setLevelId] = useState('0');
  const [locationId, setLocationId] = useState("222");
  const [levelList,setlevelList] = useState([{id:'12313',name:'一级'}]);
  const [location,setLocationList] = useState([
    {id:'12313',name:'一级'}
  ]);
  const [hospitalList] = useState([
    {
      id: "123155",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "123151235",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "1231asd55",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "12wad3155",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "123awd155",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "123as155",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "123asd155",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "1231asdwad55",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
    {
      id: "123asdawd155",
      name: "北京人民医院",
      level: "三级甲等",
      time: "08:30",
    },
  ]);
  const navigate = useNavigate()
  const gotoHospital = (id:string) =>{
    navigate(`/hospital/appointment`)
  }
  useEffect(() => {
    const getList =async () => {
      const {hospitalLevel,hospitalLocation} = await getHospitalLeveL('getHomeData')
      setLevelId(hospitalLevel[0].id)
      setlevelList(hospitalLevel)
      setLocationId(hospitalLocation[0].id)
      setLocationList(hospitalLocation)
    }

    getList()
    },[])
  return (
    <div className="home-page">
      <CarouselMoudel/>
      <div className="search-container fx fa jc">
        <div className="search-wrapper">
          <Input
            className="serach-input"
            size="large"
            placeholder="点击搜索医院名称"
            prefix={<SearchOutlined />}
            style={{ fontSize: "18px" }}
          />
          <Button className="search-btn" type="link">
            搜&nbsp;索
          </Button>
        </div>
      </div>
      <div className="page-bottom fx jc">
        <div className="left">
          <h2 className="title">医院</h2>
          <div className="left-select-wrapper">
            <div className="filter-wrapper fx">
              <span className="label">等级</span>
              <div className="wrapper-list">
                {levelList.map((item) => {
                  return (
                    <span
                      className={
                        item.id === levelId
                          ? "active wrapper-list-item"
                          : "wrapper-list-item"
                      }
                      onClick={() => {
                        setLevelId(item.id);
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="filter-wrapper fx">
              <span className="label" style={{width:'32px'}}>等级</span>
              <div className="wrapper-list">
                {location.map((item) => {
                  return (
                    // <span className={item.id === locationId ? 'active':''} onClick={handelLocation(item.id)} id={item.id}  key={item.id}>{item.label}</span>
                    <span
                      className={
                        item.id === locationId
                          ? "active wrapper-list-item"
                          : "wrapper-list-item"
                      }
                      onClick={() => {
                        setLocationId(item.id);
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="left-scroll-list">
            {hospitalList.map((item) => {
              return (
                <div className="v-card clickable list-item" key={item.id} onClick={()=>{
                  gotoHospital(item.id)
                }}>
                  <div className="list-item-content fx jb fa">
                    <div className="list-item-wrapper fx">
                      <div className="hospital-title fx">{item.name}</div>
                      <div className="hospital-bottom fx jb">
                        <div className="icon-wrapper fx fa">
                          <HomeOutlined />
                          <span className="icon-wrapper-name">
                            {item.level}
                          </span>
                        </div>
                        <div className="icon-wrapper">
                          <HomeOutlined />
                          <span className="icon-wrapper-name">
                            每天{item.time}放号
                          </span>
                        </div>
                      </div>
                    </div>
                    <img src="" alt={item.name} className="hospital-image" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="left-result-list"></div>
        </div>
        <div className="right">
          <div className="nosocomium-office">
            <div className="header-wrapper fx jb fa">
              <div className="header-wrapper-title">常见科室</div>
              <div className="header-wrapper-all fx fa">
                <span>全部</span>
                <RightOutlined />
              </div>
            </div>
            <div className="content-wrapper fx">
              <div className="nosocomium-item link-to">神经内科</div>
              <div className="nosocomium-item link-to">消化内科</div>
              <div className="nosocomium-item link-to">呼吸内科</div>
              <div className="nosocomium-item link-to">内科</div>
              <div className="nosocomium-item link-to">神经外科</div>
              <div className="nosocomium-item link-to">妇科</div>
              <div className="nosocomium-item link-to">产科</div>
              <div className="nosocomium-item link-to">儿科</div>
            </div>
          </div>
          <div className="space">
            <div className="header-wrapper fx jb fa">
              <div className="header-wrapper-title fx fa jb">
                <div className="title-icon fx jc fa">
                  <FundOutlined />
                </div>
                <div className="header-wrapper-title">平台公告</div>
              </div>
              <div className="header-wrapper-all fx fa">
                <span>全部</span>
                <RightOutlined />
              </div>
            </div>
            <div className="content-wrapper">
                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>
                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>
            </div>
          </div>
          <div className="suspend-notice-list space">
            <div className="header-wrapper fx jb fa">
              <div className="header-wrapper-title fx fa jb">
                <div className="title-icon fx jc fa">
                  <BookOutlined />
                </div>
                <div className="header-wrapper-title">停诊公告</div>
              </div>
              <div className="header-wrapper-all fx fa">
                <span>全部</span>
                <RightOutlined />
              </div>
            </div>
            <div className="content-wrapper">
                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>
                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>
            </div>
          </div>          
          <div className="space">
            <div className="header-wrapper fx jb fa">
              <div className="header-wrapper-title fx fa jb">
                <div className="title-icon fx jc fa">
                  <FundOutlined />
                </div>
                <div className="header-wrapper-title">系统公告</div>
              </div>
              <div className="header-wrapper-all fx fa">
                <span>全部</span>
                <RightOutlined />
              </div>
            </div>
            <div className="content-wrapper">
                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>
                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>                <div className="notice-wrapper fx fa">
                    <div className="notice-point"></div>
                    <div className="notice-content link-to">关于延长北京大学国际医院放假的通知</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
