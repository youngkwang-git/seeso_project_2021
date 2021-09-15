  // 화면에 시선정보 표시
  function showGazeInfoOnDom (gazeInfo: any) {
    let gazeInfoDiv: any = document.getElementById("gazeInfo")
    gazeInfoDiv.innerText = `Gaze Information Below
                            \nx: ${gazeInfo.x}
                            \ny: ${gazeInfo.y}
                            `
  }
  // 화면에 점 표시
  function showGazeDotOnDom (gazeInfo: any) {
    let canvas: any = document.getElementById("output")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let ctx: any = canvas.getContext("2d");
    ctx.fillStyle = '#FF0000'
    ctx.clearRect(0, 0, canvas.width, canvas.height )
    ctx.beginPath();
    ctx.arc(gazeInfo.x, gazeInfo.y, 10, 0, Math.PI * 2, true);
    ctx.fill();

  }

  function showGaze(gazeInfo: any) {
    showGazeInfoOnDom(gazeInfo)
    showGazeDotOnDom(gazeInfo)
  }
	

export default showGaze;
