'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//Hoisting: var, function declaration (is in above)
console.log('1');
setTimeout(()=>{    console.log('2'); }, 1000);
console.log('3');

// Syncroonous callback --> execute immediately
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

// Asyncroonous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

// Callback Hell example(ㅋㅋ;)
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'jeremy' && password === 'dream') ||
                (id === 'coder'  && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'jeremy'){
                onSuccess({ name: 'jeremy', role: 'admin' });
            }else{
                onError(new Error('can`t access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// 암튼 이렇게 짜면 가독성도 떨어지고 구조상 좋지않음;; ㅋㅋ
userStorage.loginUser(
    id, password, 
    (user) => {
        userStorage.getRoles(user, 
                            (userWithRole)=>{
                                alert(`Hi ${userWithRole.name}, you have a ${userWithRole.role} role.` )
                            }, 
                            error=>{
            console.log(error);
        })
    }, 
    (error)=>{
        console.log(error)
    }
);