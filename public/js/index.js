// let titleStr = "notalexgence";
let title = document.querySelector("header > h1");
let titleStr = title.textContent;

title.innerHTML = "";

for (let i = 0; i < titleStr.length; i++) {
    let str = document.createTextNode(titleStr[i]);
    let span = document.createElement('span');
    span.className = "titleLet";
    span.append(str);
    title.append(span);
}

console.log(title.textContent);

// let times = ["500ms", "1s", "1.5s", "2s", "2.5s", "3s"];
let times = ["2s", "2.5s", "3s", "4s", "5s", "6s", "7s"];
let titleSpans = document.querySelectorAll('.titleLet');
titleSpans.forEach(titleSpan => {
    titleSpan.addEventListener('animationiteration', (event) => {
        // console.log(event.target.style);
        event.target.style["animation-duration"] = times[Math.floor(Math.random() * times.length)];
        event.target.style["animation-delay"] = times[Math.floor(Math.random() * times.length)];
    });
});
