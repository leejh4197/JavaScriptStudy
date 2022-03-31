### 클래스형 vs 함수형

__클래스형__

- React 컴포넌트에서 선언하는 두가지 방식 중 하나이다
- 현재 자주 사용하지 않지만 기존 프로젝트의 유지보수를 위해 클래스형 컴포넌트의 개념을 알아두어야 한다.

**클래스형 컴포넌트 예시**
```
class App extends Component{
    render(){
        const name = 'react';
        return <div className="react">{name}</div>
    }
}

export default APP;
```

1. Class 키워드가 필요하다.(class)
2. Component로 상속을 받아야한다.(App extends Component)
3. reder() 메소드가 반드시 있어야한다.(render())

**함수형 컴포넌트 예시**
```
const a = () => {
    return (
        <div>
            
        </div>
    );
};

export default a;
```

1. 자기 자신자체가 render함수가 된다.
2. State, lifeCycle을 Hook을 통해 해소하였다.