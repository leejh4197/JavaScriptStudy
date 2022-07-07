__yarn start__
- react-scripts start를 실행한다.
- 개발자 서버를 실행한다.
__yarn build__
- react-scripts의 build가 실행된다.
- optimized production build가 생성된다.
__yarn test__
- react-scripts test를 실행한다.
- jest가 미리 설정되어 test code를 실행한다.
__yarn eject__
- react-scripts eject가 실행된다
( CRA로 만든 프로젝트에서 CRA를 제거한다.)
CRA를 빼서 여러가지 설정이 가능하게 한다.

__리덕스의 액션이란 ?__
- 액션은 object이다.
- 두 가지 형태의 액션이 있다.
	- {type:'TEST'} // payload가 없는 액션
	- {type:'TEST', params: 'hello'} // payload가 있는 액션
- type 만이 필수 프로퍼티이며, type은 문자열 이다.

__리덕스의 액션 생성자란 ?__
```
function 액션생성자(...args) { return 액션;}
```
- 액션을 생성하는 함수를 "액션 생성자 (Action Creator)"라고 한다.
- 함수를 통해 액션을 생성하여, 액션 객체를 리턴해준다.
- createTest('hello'); // { type: 'TEST', prams: 'hello' } 리턴

__리덕스의 액션이 하는 일?__
- 액션 생성자를 통해 액션을 만들어 낸다.
- 만들어낸 액션 객체를 기덕스 스토어에 보낸다.
- 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경 된다.
- 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경된다.
- 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있다.

__액션 준비__
- 액션의 타입을 정의하여 변수로 빼는 단계
	- 강제는 아니다.
	- 그냥 타입을 문자열로 넣기에는 실수를 유발할 가능성이 크다.
	- 미리 정의한 변수를 사용하면, 스펠링에 주의를 덜 기울여도 된다.
- 액션 객체를 만들어 내는 함수를 만드는 단계
	- 하나의 액션 객체를 만들기 위해 하나의 함수를 만들어낸다.
	- 액션의 타입은 미리 정의한 타입 변수로 부터 가져와서 사용한다.

__리덕스의 리듀서?__
- 액션을 주면, 그 액션이 적용되어 달라진 결과를 만들어 준다.
- 그냥 함수이다.
	- Pure Function(항상 같은 인풋을 받으면 같은 결과를 반환한다. )
	- Immutable(불변성)
	__이유?__
	  - 리듀서를 통해 state가 달라졌음을 리덕스가 인지하는 방식
__리듀서의 형태__

```
function 리듀서 (previousState, action) {
    return newState;
}
```
- 액션을 받아서 state를 리턴하는 구조
- 인자로 들어오는 previousState와 리턴되는 newState는 다른 참조를 가지도록 해야한다.

__스토어를 만드는 함수__
```
const store = createStore(리듀서);
```
- createStore<S>(
    reducer: Reducer<S>,
    preloadedState: S,
    enhancer?: StoreEnhancer<S>
  ): Store<S>;

__store__
- store.getState();
현재 store에 State를 가져오는 함수
- store.dispatch(action); , store.dispatch(액션생성자());
store의 상태를 변경한다
- const unsubscribe = store.subscribe(()=>{}); // store에 변경이 생겼을때 subscribe함수를 실행
	- 리턴이 unsubscribe 이다.
	- unsubscribe(); 하면 제거

- store.replaceReducer(다른 리듀서);
원래 가지고 있던 리듀서를 다른 리듀서로 바꾼다.(실무에서 잘 쓰지이는 않음)
