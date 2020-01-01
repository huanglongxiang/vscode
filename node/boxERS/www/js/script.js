const socket = io('ws://192.168.23.51:3000');
let local = new Local(socket);
let remote = new Remote(socket);

socket.on('waiting',function (str) {
    document.getElementById('waiting').innerText = str;
})