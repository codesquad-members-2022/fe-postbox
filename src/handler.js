import { renderTownInfo, renderMailboxInfo, changeBorderColor } from "./render.js";

function handleCheckBtn(e) {
    const townNodes = document.querySelector('.contents').childNodes;
    const hasMailboxSize = (town) => town.dataset.mailboxSize !== 'null';
    const mailboxTowns = Array.from(townNodes).filter(hasMailboxSize)

    let townNames = [];
    mailboxTowns.forEach(town => {
        townNames = [...townNames, town.dataset.name];
        changeBorderColor({el: town, color: 'var(--red)'})
    })

    renderTownInfo(townNames)
    renderMailboxInfo(townNames)

}

export { handleCheckBtn }