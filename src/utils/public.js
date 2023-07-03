export function transformTimer (ymdhms) {
        if (!ymdhms) {
            return false;
        }
    const timestamp = new Date(ymdhms);
    const nowTime = new Date().getTime();
    const oldTime = timestamp.getTime();

    const t = nowTime - oldTime;
    const m = 60000; //分钟\
    const h = 3600000;
    const d = 86400000; //天
    const month = 2629800000;
    const y = 31557600000;
        if (t < m) {
            return `1分钟前`;
        }
        if (t < h) {
            return Number.parseInt((t / m)) + '分钟前';
        }
        if (t < d) {
            return Number.parseInt((t / h)) + `小时前`
        }
        if (t < month) {
            return Number.parseInt(t / d) + `天前`;
        }
        if (t < y) {
            return Number.parseInt(t / month) + `月前`;
        }
        if (t > y) {
            return Number.parseInt(t / y) + `年前`;
        }
        return `NaN`;
        console.log('-timestamp');
        console.log('-----旧时间' + ymdhms);
        console.log(nowTime);
        console.log(t);
        console.log();
        return 'test'
        
}