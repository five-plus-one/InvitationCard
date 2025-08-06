
import React, { useState } from 'react';
import { ClockIcon, LocationIcon, CornerDecoration, SealStamp, NavigationIcon } from './components/Icons';
import Fireworks from './components/Fireworks';

const App: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const university = "请输入录取学校";
  const dateTime = "输入宴请时间";
  const locationName = "输入宴请地点";
  
  const baiduNavUrl = "https://j.map.baidu.com/29/b0U";//百度地图url
  const amapNavUrl = "https://surl.amap.com/1uUa2B31e3qh";//高德地图Url

  const handleShowMapClick = () => {
    setShowMap(true);
  };

  return (
    <div className="min-h-screen bg-red-900 bg-[url('./img/subtle-grunge.png')] flex items-center justify-center p-4 py-8">
      <Fireworks />
      <div className="w-full max-w-lg bg-red-800/80 backdrop-blur-sm rounded-xl shadow-2xl relative text-amber-200 border-4 border-amber-400/50 p-6 sm:p-10 text-center">
        
        {/* Decorative Corners */}
        <CornerDecoration className="absolute top-2 left-2 w-16 h-16 text-amber-400/60" />
        <CornerDecoration className="absolute top-2 right-2 w-16 h-16 text-amber-400/60 transform scale-x-[-1]" />
        <CornerDecoration className="absolute bottom-2 left-2 w-16 h-16 text-amber-400/60 transform scale-y-[-1]" />
        <CornerDecoration className="absolute bottom-2 right-2 w-16 h-16 text-amber-400/60 transform rotate-180" />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-black text-amber-300 tracking-widest my-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            升学喜报
          </h1>

          <div className="border-t-2 border-b-2 border-amber-400/50 my-4 py-4 px-2">
             <p className="text-lg sm:text-xl leading-relaxed tracking-wide mb-4">
                家有麟儿初长成，承蒙厚爱，金榜题名。
             </p>
            <p className="text-lg sm:text-xl leading-relaxed tracking-wide">
                兹有爱子
                <span className="font-bold text-3xl sm:text-4xl text-amber-100 mx-2 tracking-normal">xxx</span>
                同学
            </p>
            <p className="text-lg sm:text-xl leading-relaxed tracking-wide mt-2">
                今夏蟾宫折桂，以优异成绩被
            </p>
            <p className="font-bold text-2xl sm:text-3xl text-amber-100 mt-2 tracking-wider">
                {university}
            </p>
             <p className="text-lg sm:text-xl leading-relaxed tracking-wide mt-2">
                录取
            </p>
          </div>

          <p className="text-base sm:text-lg leading-loose my-6 tracking-wide">
            为感念师长亲友多年的栽培与关爱，谨备薄酒，聊表寸心。诚邀您届时光临，共飨佳肴，同享喜悦。
          </p>

          <div className="space-y-4 text-left w-full max-w-sm mx-auto my-6 text-amber-100">
            <div className="flex items-center space-x-3">
              <ClockIcon className="w-6 h-6 text-amber-300 flex-shrink-0" />
              <span className="text-lg tracking-wider">
                时间：{dateTime}
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <LocationIcon className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1" />
              <span className="text-lg tracking-wider">
                地点：{locationName}
              </span>
            </div>
          </div>
          
          {/* Map and Navigation Section */}
          <div className="my-6 w-full max-w-sm mx-auto">
            {!showMap && (
              <button
                  onClick={handleShowMapClick}
                  className="w-full bg-amber-400/20 hover:bg-amber-400/40 text-amber-100 font-bold py-3 px-4 rounded-lg border-2 border-amber-400/50 flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  aria-label="查看宴会地点"
                >
                  <LocationIcon className="w-6 h-6" />
                  <span>查看宴会地点</span>
                </button>
            )}

            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showMap ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <img 
                src="./img/map.png" //地图url
                alt="宴会地点地图" 
                className="w-full h-auto rounded-lg border-2 border-amber-400/50 my-4 shadow-inner"
              />
              <div className="text-center mb-4">
                  <p className="text-lg tracking-wider text-amber-100">地址：{locationName}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href={baiduNavUrl} className="flex items-center justify-center w-full sm:w-auto text-center px-4 py-2 bg-amber-500/80 text-red-900 font-bold rounded-md hover:bg-amber-500 transition-colors transform hover:scale-105" target="_blank" rel="noopener noreferrer">
                    <NavigationIcon className="w-5 h-5 mr-2"/>
                    百度地图导航
                  </a>
                  <a href={amapNavUrl} className="flex items-center justify-center w-full sm:w-auto text-center px-4 py-2 bg-amber-500/80 text-red-900 font-bold rounded-md hover:bg-amber-500 transition-colors transform hover:scale-105" target="_blank" rel="noopener noreferrer">
                    <NavigationIcon className="w-5 h-5 mr-2"/>
                    高德地图导航
                  </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 self-end text-right w-full">
             <p className="text-xl font-bold tracking-wider">XXX</p>
             <p className="text-lg tracking-wider mt-1">暨 父母 鞠躬敬邀</p>
          </div>
          
          <div className="mt-8">
            <SealStamp className="w-24 h-24 text-red-600 opacity-80" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;