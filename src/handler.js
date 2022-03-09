import { renderTownInfo, renderMailboxInfo } from "./render.js";

function handleCheckBtn(e) {
    let towns = [];
    const townNodes = document.querySelector('.contents').childNodes;
    townNodes.forEach(town => {
        if(town.dataset.mailbox === 'true'){
            towns = [...towns, town.dataset.name];
        }
    })
    renderTownInfo(towns)
    renderMailboxInfo(towns)
}

export { handleCheckBtn }