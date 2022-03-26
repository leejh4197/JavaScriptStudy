### Cors 란?
- Cross Origin Resource Sharing(교차 출처 자원 공유)
- 원본 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 자원에 접근할 수 있도록 서버에서 관련 HTTP 헤더를 추가하여 브라우저에
알려주는 체제 입다.

### Sop 란?
- Same Origin Policy(동일 출처 정책)
- 원본 출처에서 실행 중인 웹어플리케이션은 보안상의 이유로 __동일한 출처의 리소스만 공유할 수 있다__ 라는 정책이다.
- Sop정책 중 다른 출처 리소스 요청을 허용하는 예외 항목이 있는데 그 중 하나가 __Cors 정책을 지킨 리소스 요청__ 이다.

### 출처(Origin) 이란?
- Origin을 알기위해서 URI 구조에 대해 알고 있어야 한다.
- http://localhost:3000/main?page=1#content

__http://__   Protocol<br>
__localhost__  Host(Domain 으로 부르기도 한다)<br>
__:3000__  Port<br>
__/main__  Path<br>
__?page=1__  Query String<br>
__#content__  Fragment<br>

으로 URI이 구성된다.

- 한 마디로 Cors/Sop는 URI 에서 **Protocol,Host,Port**가 다른 경우를 말합니다.

### 다른 출처와 동일 출처의 예

- 다른출처
	- http://localhost 와 https://localhost 는 Protocol 이 다르므로 다른 출처가 된다.
	- http://localhost:3000 과 http://localhost:3001 은 Port 가 다르므로 다른 출처가 된다.
	- https://foo.com 과 https://www.foo.com 은 Host 가 다르므로 다른 출처가 된다.
- 동일출처
	- http://localhost:3000 과 http://localhost:3000/image 는 Path 가 다르므로 동일 출처가 된다.
	- http://localhost:3000/main 과 http://localhost:3000?pageNo=1 은 Query String 이 다르므로 동일 출처가 된다.

### Cors가 동작하는 3가지 방식
- Simple Request(단순요청)
	- HTTP 요청 시, 아래 3가지 항목이 모두 충족하면 Simple Request로 판단하고 동작한다.
		- 요청 메소드가 GET,HEAD,POST 중 한가지
		- 요청 헤더가 'Accept,Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data,
		Viewport-Width,Width'만 사용
		- Content-Type 값은 'application/x-www-form-urlencoded, multipart/form-data,text/plain'만 사용

	- Simple Request에 대한 응답에는 다음 헤더가 포함되어야 한다.
		- Access-Control-Allow-Origin

	- 위 사항이 적용되지 않은 경우, 브라우저는 에러를 발생시키고 응답을 무시한다.

- Preflight Request(예비 요청)
	- __Preflight Request__ 는 메인 요청을 하기 전, 브라우저가 서버에 예비 요청을 보내 통신을 위해 어떤 옵션이 적용되어 있는지 
	확인 하는 동작 방식이다.
	- 아래 조건이 충족되면 브라우저가 Preflight Request를 보내며, 이는 프론트엔드 개발자가 요청 로직을 구현하는 것이 아니다.
		- Simple Request와 Credentialed Request를 제외한 나머지 경우
	- Preflight Request에 대한 응답을 받으면 브라우저는 허용 정책들을 비교 후, 확인이 완료되면 메인 요청을 합니다.
	- 정책에 위반되는 경우, 브라우저는 에러를 발생시키고 메인 요청을 보내지 않습니다.

- Credentialed Request(인증 요청)
	- __Credentialed Request__는 XMLHttpRequset 혹은 Fetch에 인증 플래그를 설정해 요청하는 방식이다.
	- 인증 플래그가 설정된 요청인 경우, 브라우저는 이를 Credentialed Request로 판단하고 동작한다.
	- Credentialed Request에 대한 응답에는 아래 사항이 적용되어야 한다.
		- __Access-Control_Allow-Origin__:와일드카드(*)가 아닌 값
		- __Access-Control-Allow-Credentials: true__
	- 위 사항이 적용되지 않은 경우, 브라우저에는 에러를 발생시키고 응답은 무시한다.

### Cors의 필요성
1. XSS(Cross Site Scripting)
공격자가 상대방의 브라우저에 스크립트가 실행되도록하여 사용자의 세션을 가로채거나 웹사이트변조, 악의적 콘텐츠를 삽입,
피싱 공격을 하는 것을 말한다.(Cookie에 Session 정보 탈취)
2. CSRF(Cross-Site Request Forgeries)
웹 어플리케이션의 취약점 중 하나로 인터넷 사용자가 자신의 의지와는 무관하게 공격자가 의도한 (수정,삭제,등록 등)을 특정 
웹사이트에 요청하게 만드는 공격이다.

__이런 위험을 막기위하여 Origin(출처) 사이의 리소스 공유에 제한을 거는 것이다.(SOP정책)__
