import React ,{useState, useEffect} from 'react';


var funcStyle = 'color:blue';
var funcId = 0;

const FunctionEx = (props) => {
    // 2개의 값으로 이루어진 배열! 무적권 배열로 호출된다.
    var numberState = useState(props.initNumber);
    // useState의 첫번째 값
    var number = numberState[0];
    // State값을 바꾸는 두번째인자
    var setNumber = numberState[1];
    console.log(numberState)

    // var dateState = useState(Date().toString())
    // var date = dateState[0];
    // var setDate = dateState[1];
 
    const [date, setDate] = useState(Date().toString());

    // 웹페이지가 처음으로 render가 끝났을때 실행되고
    // render가 실행될때도 실행된다.
    useEffect(function(){
    console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate)'+(++funcId),funcStyle)
    document.title = number + ' : ' + date;
    return function(){
        // cleanup
    console.log('%cfunc => useEffect return (componentDidMount & componentDidUpdate)'+(++funcId),funcStyle)
    }
    });

    console.log('%cfunc => render'+(++funcId),funcStyle)

    return (
        <div className='container'>
            <h2>함수형 컴포넌트 예시</h2>
            <p>함수형props방법 : {number}</p>
            <p>Date : {date}</p>
            <input type="button" value="random" onClick={
                    function(){
                        setNumber(Math.random())
                    }
                }/>
            <input type="button" value="date" onClick={
                    function(){
                        setDate(Date().toString())
                    }
                }/>
        </div>
    );
};

export default FunctionEx;