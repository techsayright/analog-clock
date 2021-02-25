setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2 + stime/120;
    mrotation = 6*mtime + stime/10;
    srotation = 6*stime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;

    let dtes=d.getDate();
    let mnth=d.getMonth();
    
    let fn= dtes+":"+mnth;
    console.log(fn);
    document.getElementById('place').innerHTML=fn;
    
}, 1000);



