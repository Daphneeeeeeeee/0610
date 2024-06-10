/*const apiKey = 'sk-proj-79CXIdTWQsPn9vzsiYAuT3BlbkFJcMSPizkF8bqq6o7em7D6';*/

let currentChapter = 1;

const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');
const imageSection = document.querySelector('.image-section'); 

const story = {
    1: {
        text: `在二戰時期，京城的古老書店裡，一位名叫荊琛的密碼專家專心致志地翻閱著書架上的書籍。正當他沉浸在《密碼學概論》的內容中時，一位中年男子張煜走進了書店。
        
        "荊先生，久仰大名。" 張煜微笑著說道。
        
        "您是？" 荊琛有些驚訝地問道。
        
        "在下張煜，國民黨特工。我們需要像您這樣的人才，來協助我們對抗日軍。" 張煜的聲音充滿了誘惑和期待。

        荊琛面臨著一個重要的抉擇。他可以選擇接受張煜的邀請，立即加入國民黨的行列，為國家出力；或者他可以詢問更多資訊，搞清楚自己的角色和責任；又或者他可以暫時拒絕，需要一些時間來考慮這個重要的決定。`,
        options: [
            { text: '接受邀請', next: 2 },
            { text: '詢問更多資訊', next: 3 },
            { text: '暫時拒絕', next: 4 }
        ]
        
    },
    2: {
        text: `荊琛：原來如此，那我願意加入。`,
        options: [
            { text: '進入第二章', next: 5 }
        ]
    },
    3: {
        text: `荊琛：請問，張先生，您為何找上我？
        
        張煜：荊先生的才華在北平聞名，我們需要您的智慧來破解日軍的密碼。
        
        荊琛：原來如此，那我願意加入。`,
        options: [
            { text: '進入第二章', next: 5 }
        ]
    },
    4: {
        text: `荊琛：請給我一些時間考慮。
        
        張煜：當然，荊先生，我們隨時歡迎您的加入。`,
        options: [
            { text: '進入第二章', next: 5 }
        ]
    },
    5: {
        text: `第二章：密碼專家的成長
        
        場景：國民黨密碼破解辦公室。
        
        張煜：荊先生，這些日軍的密碼似乎很複雜，我需要您儘快破解。
        
        荊琛：張先生，我需要更多的時間和資源。`,
        options: [
            { text: '請求更多資源', next: 6 },
            { text: '詢問密碼的重要性', next: 7 },
            { text: '表示信心', next: 8 }
        ]
    },
    6: {
        text: `荊琛：如果能得到更多的資源和支援，我相信我可以更快地破解這些密碼。
        
        張煜：當然，荊先生，我會盡力為您提供所需的一切。`,
        options: [
            { text: '進入第三章', next: 9 }
        ]
    },
    7: {
        text: `荊琛：張先生，這些密碼的破解對戰局有多大影響？
        
        張煜：荊先生，這些密碼關係到日軍的重要行動，破解它們將極大地幫助我們的戰爭努力。`,
        options: [
            { text: '進入第三章', next: 9 }
        ]
    },
    8: {
        text: `荊琛：雖然複雜，但我有信心能夠破解這些密碼。
        
        張煜：荊先生，您的才華讓我對勝利充滿希望。`,
        options: [
            { text: '進入第三章', next: 9 }
        ]
    },
    9: {
        text: `第三章：愛情的萌芽
        
        場景：醫院，霜雨瑾正在照顧傷者。
        
        霜雨瑾：荊先生，您怎麼來了？這裡可是前線醫院。
        
        荊琛（微笑）：我來看望一位老朋友。霜小姐，您在戰亂中這麼堅強，令人欽佩。
        
        霜雨瑾（輕笑）：戰爭讓人變得堅強，我也只是做我該做的事罷了。`,
        options: [
            { text: '稱讚霜雨瑾', next: 10 },
            { text: '問霜雨瑾的家人', next: 11 },
            { text: '聊工作', next: 12 }
        ]
    },
    10: {
        text: `荊琛：霜小姐，您的堅韌和善良讓我敬佩不已。
        
        霜雨瑾：謝謝荊先生，您的支持讓我感到溫暖。`,
        options: [
            { text: '進入第四章', next: 13 }
        ]
    },
    11: {
        text: `荊琛：霜小姐，您在戰亂中失去了家人，真是令人痛心。
        
        霜雨瑾：是的，但我相信他們的在天之靈會保佑我們。`,
        options: [
            { text: '進入第四章', next: 13 }
        ]
    },
    12: {
        text: `荊琛：霜小姐，您在醫院的工作一定很辛苦。
        
        霜雨瑾：是的，但能為傷者提供幫助，我覺得很有意義。`,
        options: [
            { text: '進入第四章', next: 13 }
        ]
    },
    13: {
        text: `第四章：秘密的揭露
        
        場景：秘密會議室，荊琛和霜雨瑾獨處。
        
        荊琛：霜小姐，我最近發現了一些奇怪的事情，您能幫我解答嗎？
        
        霜雨瑾（猶豫）：荊先生，什麼事情？`,
        options: [
            { text: '直接質問', next: 14 },
            { text: '迂迴提問', next: 15 },
            { text: '表達關心', next: 16 }
        ]
    },
    14: {
        text: `荊琛：霜小姐，您是日軍的間諜嗎？
        
        霜雨瑾（震驚）：荊先生，我…`,
        options: [
            { text: '進入第五章', next: 17 }
        ]
    },
    15: {
        text: `荊琛：霜小姐，最近有謠言說醫院裡有間諜，您怎麼看？
        
        霜雨瑾（緊張）：荊先生，謠言不可輕信。`,
        options: [
            { text: '進入第五章', next: 17 }
        ]
    },
    16: {
        text: `荊琛：霜小姐，您最近看起來很疲憊，有什麼需要幫忙的嗎？
        
        霜雨瑾（感激）：謝謝荊先生，我只是工作太忙了。`,
        options: [
            { text: '進入第五章', next: 17 }
        ]
    },
    17: {
        text: `第五章：背叛與原諒
        
        場景：荊琛的住所，荊琛和陸聲遠在討論霜雨瑾的身份。
        
        陸聲遠：荊琛，霜雨瑾是間諜，我們必須將她繩之以法。
        
        荊琛：陸聲遠，她已經向我坦白了，她也在幫助我們。`,
        options: [
            { text: '支持陸聲遠', next: 18 },
            { text: '相信霜雨瑾', next: 19 },
            { text: '請求時間', next: 20 }
        ]
    },
    18: {
        text: `荊琛：你說得對，陸聲遠。我們不能輕信她的話。
        
        陸聲遠：我會盡快安排人手將她抓捕。`,
        options: [
            { text: '進入第六章', next: 21 }
        ]
    },
    19: {
        text: `荊琛：陸聲遠，我相信她，她的悔意是真誠的。
        
        陸聲遠：荊琛，你要三思而行。`,
        options: [
            { text: '進入第六章', next: 21 }
        ]
    },
    20: {
        text: `荊琛：陸聲遠，給我一點時間，我會處理好這件事的。
        
        陸聲遠：好吧，荊琛，但不要讓她逃脫。`,
        options: [
            { text: '進入第六章', next: 21 }
        ]
    },
    21: {
        text: `無論選擇如何，荊琛最終決定原諒霜雨瑾，並說服陸聲遠給她一個機會。
        
        霜雨瑾：荊先生，謝謝您相信我，我會用行動證明我的忠誠。`,
        options: [
            { text: '進入第六章', next: 22 }
        ]
    },
    22: {
        text: `第六章：最後的決戰
        
        場景：國民黨指揮部，荊琛和霜雨瑾共同面對即將到來的戰役。
        
        韓郎斯：荊先生，霜小姐，我們已經收到日軍即將大規模進攻的消息，您們有什麼對策？
        
        荊琛：將軍，我們已經破解了日軍的最新密碼，這裡有他們的詳細計畫。
        
        霜雨瑾：我也收集到一些重要的情報，可以幫助我們制定反擊策略。`,
        options: [
            { text: '制定防守計劃', next: 23 },
            { text: '主動出擊', next: 24 },
            { text: '分散兵力', next: 25 }
        ]
    },
    23: {
        text: `荊琛：將軍，我建議我們先行防守，穩住陣腳，再伺機反攻。
        
        韓郎斯：很好，我們會按照您的計劃行事。`,
        options: [
            { text: '進入結局', next: 26 }
        ]
    },
    24: {
        text: `荊琛：將軍，我們應該主動出擊，打他們一個措手不及。
        
        韓郎斯：荊先生，這個計畫很冒險，但也許是我們獲勝的機會。`,
        options: [
            { text: '進入結局', next: 26 }
        ]
    },
    25: {
        text: `荊琛：將軍，我們可以分散兵力，擾亂日軍的進攻節奏。
        
        韓郎斯：這個方法不錯，可以削弱他們的戰鬥力。`,
        options: [
            { text: '進入結局', next: 26 }
        ]
    },
    26: {
        text: `結局
        
        場景：戰後的平靜，荊琛和霜雨瑾站在山頂，遠眺著遠方。
        
        荊琛：霜小姐，感謝你一直以來的幫助。
        
        霜雨瑾：荊先生，能夠與你並肩作戰，是我的榮幸。
        
        荊琛：未來還有很多挑戰，但我相信，我們能一起面對。
        
        霜雨瑾：是的，荊先生，我們一定能贏得自由和幸福。`,
        options: []
    }
};

function displayStory(chapter) {
    const chapterData = story[chapter];
    storyElement.innerText = chapterData.text;
    optionsElement.innerHTML = '';
    
    // 更新图片
    let imagePath;
    switch (chapter) {
        case 1:
            imagePath = '風起雲湧第一幕.jpg';
            break;
        case 5:
            imagePath = '風起雲湧第二幕.jpg';
            break;
        case 9:
            imagePath = '風起雲湧第三幕.jpg';
            break;
        case 13:
            imagePath = '風起雲湧第四幕.jpg';
            break;
        case 17:
            imagePath = '風起雲湧第五幕.jpg';
            break;
        case 22:
            imagePath = '風起雲湧第六幕.jpg';
            break;
        case 26:
            imagePath = '風起雲湧結局.jpg';
            break;
        default:
            imagePath = 'path/to/default.jpg';
    }
    imageSection.innerHTML = `<img src="${imagePath}" alt="Chapter Image">`;

    chapterData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => {
            displayStory(option.next);
        };
        optionsElement.appendChild(button);
    });
}

displayStory(currentChapter);
