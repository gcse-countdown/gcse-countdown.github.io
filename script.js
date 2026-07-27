function fmtCountdown(ms){
    if(ms<=0)return'00d 00h 00m 00s';
    const d=Math.floor(ms/86400000),h=Math.floor((ms%86400000)/3600000),
                m=Math.floor((ms%3600000)/60000),s=Math.floor((ms%60000)/1000);
    return`${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
}

const aug20 = new Date(2026, 7, 20, 0, 0, 0, 0)
const countdown = document.getElementById('countdown')

setInterval(() => {
    const now = Date.now()
    countdown.innerHTML = fmtCountdown(aug20 - now);
}, 1000);