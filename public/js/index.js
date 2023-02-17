let titleStr = "notalexgence";
let title = document.querySelector("header > h1");

for (let i = 0; i < titleStr.length; i++) {
    let str = document.createTextNode(titleStr[i]);
    let span = document.createElement('span');
    span.className = "titleLet";
    span.append(str);
    title.append(span);
}

let times = ["500ms", "1s", "1.5s", "2s", "2.5s", "3s"];
let titleSpans = document.querySelectorAll('.titleLet');
titleSpans.forEach(titleSpan => {
    titleSpan.addEventListener('animationiteration', (event) => {
        console.log(event.target.style);
        event.target.style["animation-duration"] = times[Math.floor(Math.random() * times.length)];
        event.target.style["animation-delay"] = times[Math.floor(Math.random() * times.length)];
    });
});
