import React from 'react';
import './App.css';
import Seeso from 'seeso/dist/seeso'
import { UserStatusOption } from 'seeso';
import { version } from 'process';

const App: React.FC = () => {
  // 영광, seeso개발자용 라이센스 키: string
  const LICENSE_KEY: string = "dev_nacnaia9luwxmv3xqy7doo05bzpmokv4slzoy15q";
  let started: any;
  // GazeTracking 데이터 생성
  const seeso: any = new Seeso();
  
  // seeso의 버전확인
  const version: string = Seeso.getVersionName();
  
  // userStatusOption
  const isUseAttention: boolean = true;
  const isUseBlink: boolean = true;
  const isUseDrowsiness: boolean = true;
  const userStatusOption: any = new UserStatusOption(isUseAttention, isUseBlink, isUseDrowsiness);

  // seeso init
  (async () => {
    const errorCode = seeso.initialize(
      LICENSE_KEY, userStatusOption
    );
    // 트래킹시작
    const stream: any = await navigator.mediaDevices.getUserMedia({'video': true});
    started = await seeso.startTracking(stream);
    // 크래킹중지
    seeso.stopTracking()
  })()
  const result = seeso.startCalibration(5, 0);


  return (
    <div className="App">

    </div>
  );
}

export default App;
