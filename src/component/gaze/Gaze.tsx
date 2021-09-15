import React from 'react';
import Seeso from 'seeso/easy-seeso';
import showGaze from '../showGaze';
// 개이즈 페이지
const Gaze: React.FC<any> = (props: any) => {
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

  // 메인함수
  async function main() {
    if(props.location.state !== undefined) {
      const calibrationData = props.location.state.calibrationData // 샐리브래이션된 데이터
        const seeso: any = new Seeso(); // 씨소를 생성하고
        await seeso.init(LICENSE_KEY, // 씨소에 연결함
          async () => {        
            await seeso.setCalibrationData(calibrationData) // 위에서 가공한 데이터를 통해 캘리브래이션 설정
            await seeso.startTracking(onGaze, onDebug)
            console.log("callback when init.")
          }, // 연결성공시
          () => console.log("callback when init failed.") // 연결실패시
        )
    } else {
      alert("샐리브래이션된 데이터가 없어서 샐리브래이션 페이지로 이동합니다.")
      props.history.push('/calibration') // 샐리브레이션 데이터가 없을시 푸쉬함
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
          <h2 id="gazeInfo"></h2>
        </div>
      </div>
    )
}


  export default Gaze