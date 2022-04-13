const play          = () => location.href = "/tirage";
const restart       = () => location.href = "/game";
const goHomePage    = () => location.href = "/";

const clickOnCardForReverse = thisCard => {
    let selectedCard = thisCard.getAttribute("data-card");
    let stateImg     = thisCard.getAttribute("src");

    stateImg === "/static/cards/back.png"
        ? stateImg = `/static/cards/${selectedCard}.png`
        : stateImg = `/static/cards/back.png`;

    thisCard.setAttribute("src", stateImg);
}



