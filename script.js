const messages = [
    "Chị chắc hong zị?",
    "Chắc thật hong đó :<",
    `Chị muốn bấm "Không" thật ư :(((`,
    "Đừng mừ",
    "Chị nghĩ lại ikkk!",
    "Chị hong đồng ý là em tủi thân lắm...",
    "Em bùn lắm...",
    "Em bùn bùn bùn bùn lắm...",
    "Được ùi, em hong hỏi nữa...",
    "Thật sự đó, em hong hỏi chị nữa đâu",
    "Hong có hỏi nữa đâu, bảo rùi mà ⸨◺_◿⸩",
    "Thui mà, chị bấm đồng ý đi mà! ❤️",
    "Á hu hu (╥﹏╥)",
    "Đồ bắt nạt!!!",
    "Hừm, dỗiiii",
    "Hong nhìn mặt nữa :<",
    "Thui em đùa đó, có bao h dỗi chị đâu, nma bấm có đi mà",
];

const loopMessages = [
    "Em biết chị sẽ bấm có mà :>>",
    "Bấm có là có thưởng đó, biết chưa :33",
    "Bấm có hoặc chị sẽ không có ny trong 5 năm nữa",
    "Hông biết cho gì vào đây, cơ mà đại loại là bấm có đi",
    "Không có gì ở đây cả =w=",
    "Code nhìu tê chân vại (nếu thắc mắc thì tý hỏi em sau nha)",
    "Code nhìu này mà không được bấm có thì có buồn hong cơ chứ :((",
    "Bấm đại nút có đi mà",
    "Năn nỉ năn nỉ, hoan hỉ hoan hỉ",
    "Làm nũng nè ><",
    "Chẳng biết cho thêm gì vào đây nữa",
    "Lorem ipsum (có lẽ chị hiểu cái này nhỉ)",
    `printf("Hello world");`,
    "Nghĩ này cũng choáng choáng cái đầu, nên chị bấm có cho em nha"
]

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    if (messageIndex < messages.length){
        noButton.textContent = messages[messageIndex];
        messageIndex += 1;    
    }
    else 
        noButton.textContent = loopMessages[Math.floor(Math.random() * loopMessages.length) % loopMessages.length];
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleTurnBackClick() {
    window.location.href = "index.html";
}