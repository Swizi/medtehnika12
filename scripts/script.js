function checkAddress(checkbox)
{
    if (checkbox.checked)
    {
      document.body.style.overflow = "hidden";
    } else
    {
      document.body.style.overflow = "auto";
    }
}

document.querySelector('input#sort-asc').onclick = function () {
    sortList('data-price');
}
document.querySelector('input#sort-desc').onclick = function () {
    sortListDesc('data-price');
}

function sortList(sortType) {
    let items = document.querySelector('.item_list');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.item_list');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}