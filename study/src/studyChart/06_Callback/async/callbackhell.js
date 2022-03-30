import React from 'react';

const callbackhell = () => {
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
    return (
        <div>
            
        </div>
    );
};

export default callbackhell;