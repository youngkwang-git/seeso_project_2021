* 이슈 1: typescript문제 seeso의 모듈이 jacascript로 작성되어있어서 type에러를 발생시켰음
해결: 노드모듈스의 @type에 index.d.is파일을 만들었고 tsconfig.json에 타입루트를 정의함
* 이슈 2: 퀵스타트를 테스트하려고 했으나 크로스오리진 이슈로 실행되지 않음
해결: 구글에서 크로스오리진 토큰을 임시로 발급받아 index.html 헤더에 meta데이터로 추가함 
* 이슈 3: 프롭스를 이용하여 샐리브래이션 정보를 전달하려고 했으나 타입에러가 뜨면서 실패함
해결: React.FC에 <any>를 붙여 에러는 지웠지만 아직 props는 전달하지 못함(이슈 5번으로 해결)
* 이슈 4: 조금 더 리액트답게 만들어야 할 필요성이 있어보임 
해결: 아직 진행중(이슈 5번으로 해결)
* 이슈 5: 컴포넌트를 리팩토링하던 중 캘리브래이션된 값을 전달해야하는 상황이생김 처음엔 setState를 해결: props로 보내어 해결하려 했으나 setState는 보내지지만 history, location 등 props가 전달이 안됨
* 이슈 6: './'에 gazr컴포넌트를 route하였더니 작동하지않음.
해결: route에 exact를 줘서 url이 완전히 맞을 때만 컴포넌트를 호출하게함
<<<<<<< HEAD
해결: props.history.push로 값을 전달하였고 props.location.state로 값을 전달받음
=======
해결: props.history.push로 값을 전달하였고 props.location.state로 값을 전달받음
>>>>>>> 557cb69a9ee5a7ada91d49b0fad616a9865240eb
