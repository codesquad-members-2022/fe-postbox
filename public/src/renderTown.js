const renderTown = (town, node) => {
    const { width, height } = town;
    let innerHtml = `<div class="town" style="width:${width}; height:${height}">
    <span class="townName">A</span>
    </div>`
    node.insertAdjacentHTML('beforeend', innerHtml);
}

export { renderTown };