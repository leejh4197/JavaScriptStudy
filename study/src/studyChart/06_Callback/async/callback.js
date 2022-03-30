// hoisting : var, function declaration 함수 선언들이 제일 위로 올라가는 것

const { getRoles } = require("@testing-library/react");

function printImmediately(print) {
    print();
}
// 1.
console.log('1');   //동기
// 2.
setTimeout(()=>{    //비동기
console.log('2');
},1000);
// 3.
console.log('3');   //동기

// 동기 callback

printImmediately(()=>{ console.log('hello')})   //동기

// 비동기 callback

function printWithDelay(print, timeout) {   //비동기
    setTimeout(print, timeout);
}
// hosting으로 인해 printWithDelay함수가 제일 위로 올라가게 된다.

printWithDelay(()=>{console.log('asyc Callback')},2000)

// 콜백지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError,){
        setTimeout(()=>{
            if(
                (id === 'joo' && password === 'hyeong')||
                (id === 'zoo' && password === 'gyeong')
            ){
                onSuccess(id);
            } else{
                onError(new Error('존재하지 않습니다.'))
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'joo'){
                onSuccess({name:'joo', role: 'admin'});
            }else{
                onError(new Error('엑세스 할 수 없습니다.'))
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해');
const password = prompt('패스워드를 입력해');
userStorage.loginUser(
    id, 
    password, 
    (user)=>{
        userStorage.getRoles(
            user,
            (userWithRole)=>{
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {console.log(error)}
        )
    },
    error => {console.log(error)}
)

// 콜백체인의 문제점
// 1. 가독성이 떨어진다.
// 2. 에러처리,디버깅할때 어렵다.
// 3. Promise async,await  활용해보기