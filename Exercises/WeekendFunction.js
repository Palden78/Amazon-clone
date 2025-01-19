import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function isWeekend(date) {
    if (date.format('dddd')==="Saturday" || date.format('dddd')==="Sunday"){
        console.log("Yes its a weekend")
    }
    else{
        console.log('no its a weekday');
    }
}

export default isWeekend();