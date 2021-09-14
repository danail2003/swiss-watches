const notificationsReceiver = (text) => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'notification');
    const content = document.createTextNode(text);
    newDiv.appendChild(content);
    const currentDiv = document.getElementById('root');
    document.body.insertBefore(newDiv, currentDiv);

    setTimeout(() => {
        document.body.removeChild(newDiv);
    }, 3000);
};

export default notificationsReceiver;