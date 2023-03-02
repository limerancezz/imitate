import React, {useEffect, useState} from "react"
import {Alert} from "antd";

function CountDown() {
    let [count, setCount] = useState(10)
    const [showAlert, setShowAlert] = useState(false);


    // useEffect(() => {
    //     countClick();
    // }, [])

    const countClick = () => {
        const timer = setInterval(function () {
            count--;
            setCount(count);
            if (count == 0) {
                clearInterval(timer);
                setShowAlert(true);
            }
            console.log(count);
        }, 1000);
    }
    return (
        <div>
            {showAlert && <Alert message='活动开始'></Alert>}
            <button onClick={countClick}>开始</button>
            <div>{count}</div>
        </div>
    )
}

export default CountDown



// import React, { useState, useEffect, useCallback, useRef } from 'react';
//
// const CountDown: React.FC = () => {
//
//     const intervalRef = useRef<any>(null);
//
//     const [count, changeCount] = useState(0);
//
//     // 组件卸载时清除计时器
//     useEffect(() => {
//         return () => {
//             clearInterval(intervalRef.current);
//         };
//     }, []);
//
//     useEffect(() => {
//         if (count === 59) {
//             intervalRef.current = setInterval(() => {
//                 changeCount((preCount) => preCount - 1);
//             }, 1000);
//         } else if (count === 0) {
//             clearInterval(intervalRef.current);
//         }
//     }, [count]);
//
//     //useCallback的用法与useState的用法基本一致，但最后会返回一个函数，用一个变量保存起来。
//     // 返回的函数a会根据b的变化而变化，如果b始终未发生变化，a也不会重新生成，避免函数在不必要的情况下更新。
//     // 记得子组件导出时使用memo包裹一下，其作用是对组件前后两次进行浅对比，阻止不必要的更新
//     const onGetCaptcha = useCallback(() => {
//         changeCount(59);
//     }, []);
//
//     return (
//         <button type='button' disabled={!!count} onClick={onGetCaptcha}>
//             {count ? `${count} s` : '获取验证码'}
//         </button>
//     );
// };
//
// export default CountDown;

