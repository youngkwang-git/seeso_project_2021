import React from 'react';
import Seeso from 'seeso/easy-seeso';
// 샐리브레이션을 하는 페이지
const Calibration: React.FC<any> = (props: any) => {
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
		const href: any = props.location.search; // 현재페이지의 search값을 가져온다.
		const decodedURI: string = decodeURI(href); // url 데이터가공
		const queryString: string = decodedURI.split('?')[1]; // url 데이터가공
		if (!queryString) return undefined // 쿼리스트링이 없으면 언디파인드 리턴
		const jsonString: string = queryString.slice("calibrationData=".length, queryString.length)
		return jsonString // 있으면 가공된 데이터 리턴
	}
	
	  // 메인함수
  async function main() {
    const calibrationData: string|undefined = parseCalibrationDataInQueryString() // 샐리브래이션된 데이터
    if (calibrationData){ // 데이터가 있을시
			console.log('데이터생성')
			props.history.push('/gaze', {calibrationData: parseCalibrationDataInQueryString()}); // 생성된 데이터를 스태이트에 담아 푸쉬
    } else {
      console.log('데이터없음') // 데이터가 없을시
    }
  }
    // 메인함수 실행
    (async () => {
      await main();
    })()

	return (
		<div className="calibration">
			<h1>샐리브레이션을 서비스</h1>
			<div className="container">
				<button id="calibrationButton" onClick={onClickCalibrationBtn}>샐리브래이션을 진행하려면 버튼을 클릭하세요</button>
			</div>
		</div>
	)
}
export default Calibration