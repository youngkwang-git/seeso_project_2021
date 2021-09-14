import React, { useRef, useState } from 'react';
import Seeso from 'seeso/easy-seeso';
import showGaze from './showGaze';

const Calibration: React.FC = (props: any) => {
  // 라이센스키
  const LICENSE_KEY: string = "dev_nacnaia9luwxmv3xqy7doo05bzpmokv4slzoy15q";
  // 버튼을 클릭시 샐리브래이션 창을 띄어 샐리브래이션을 진행하고 리디렉트함
  function onClickCalibrationBtn() {
    const userId: string = '960412'; // 유저의 아이디
    const redirectUrl: string = 'http://localhost:3000/calibration'; // 샐리브래이션 이후 리디렉트될 페이지
    const calibrationPoint: number = 1; // 샐리브래이션 횟수와 관련 많이 할수록 정확도가 올라감 1, 5, 6
    Seeso.openCalibrationPage(LICENSE_KEY, userId, redirectUrl, calibrationPoint);
  }

  // 사용자의 샐리브래이션 정보를 파싱해서 Json데이터를 생성하고 Json형식의 스트링 값을 리턴함
  function parseCalibrationDataInQueryString() {
    const href: string = props.location.search; // 현재페이지의 search값을 가져온다.
    const decodedURI: string = decodeURI(href); // url 데이터가공
    const queryString: string = decodedURI.split('?')[1]; // url 데이터가공
    if (!queryString) return undefined // 쿼리스트링이 없으면 언디파인드 리턴
    const jsonString: string = queryString.slice("calibrationData=".length, queryString.length)
    return jsonString
  }

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
    const calibrationData = parseCalibrationDataInQueryString() // 샐리브래이션된 데이터
    if (calibrationData){ // 데이터가 있을시
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
      console.log('No calibration data given.') // 데이터가 없을시
    }
  }

  // 메인함수 실행
  (async () => {
    await main();
  })()

  return (
    <div className="calibration">
      <canvas id="output"></canvas>
      <h1> Calibration Service </h1>
      <h2 id="gazeInfo"></h2>
      <div className="container">
        <button id="calibrationButton" onClick={onClickCalibrationBtn}> Click me to use calibration service </button>
      </div>
    </div>
  )
}
export default Calibration