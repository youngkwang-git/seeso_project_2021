import React from 'react';
import Seeso from 'seeso/easy-seeso';
import showGaze from '../showGaze';
// 개이즈 페이지
const Gaze: React.FC<any> = (props: any) => {
  const seeso: any = new Seeso();
  const LICENSE_KEY: string = "dev_nacnaia9luwxmv3xqy7doo05bzpmokv4slzoy15q";
  // 개이즈 콜백
  function onGaze(gazeInfo: any) {
    // do something with gaze info.
    showGaze(gazeInfo);
  }
  // 디버그 콜백
  function onDebug(FPS: number, latency_min: number, latency_max: number, latency_avg: number) {
    // do something with debug info.
  }

  function stopGaze() {
    seeso.stopTracking();
  }
  function startGaze() {
    seeso.startTracking(onGaze, onDebug)
  }

  // 메인함수
  async function main() {
    if(props.location.state !== undefined) {
      const calibrationData = props.location.state.calibrationData // 샐리브래이션된 데이터
        await seeso.init(LICENSE_KEY, // 씨소에 연결함
          async () => {        
            await seeso.setCalibrationData(calibrationData) // 위에서 가공한 데이터를 통해 캘리브래이션 설정
            await console.log("callback when init.")
          }, // 연결성공시
          () => console.log("callback when init failed.") // 연결실패시
        )
    } else {
      await props.history.push('/calibration') // 샐리브레이션 데이터가 없을시 푸쉬함
      alert("샐리브래이션 데이터가 없어서 샐리브래이션 세팅 페이지로 이동합니다.")
    }
  }
    // 메인함수 실행
  (async () => {
    await main();
  })()
  
  return (
    <div className="main">
      <div className="calibration">
        <canvas id="output"></canvas>
        <h1> Gaze Service </h1>
        <div id="gazeInfo">출력</div>
        <button onClick={startGaze}>트랙킹 시작</button>
        <button onClick={stopGaze}>트랙킹 종료</button>
      </div>
    </div>
  )
}


  export default Gaze