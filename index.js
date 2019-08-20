
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector( '#nested .target')
}

function increaseRankBy(n){
    let list = document.querySelectorAll( '.ranked-list' )

    for (let i = 0; i < list.length; i++) {
        let secondList = list[i].children

        for(let j = 0; j < secondList.length; j++){
           secondList[j].innerHTML = (parseInt(secondList[j].innerHTML) + n).toString()
        }
      }
}

function deepestChild(){
    let children = document.querySelectorAll('#grand-node div')
    let deepestChild = children[children.length - 1]

    return deepestChild
}
