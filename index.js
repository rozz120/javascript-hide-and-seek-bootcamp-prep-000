function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.getElementById("nested").querySelector("div.target")
}
function increaseRankBy(n)
{
  const list = document.getElementByID("app").querySelectorAll("ul.ranked-lists");
  var i;
  for(i-0; i< list.length; i++)
  {
    list[i].innerHTML = ((parseInt(list[i].innerHTML))+ n);
  }
}

function deepestChild()
{
  var deep = document.getElementByID("grand-node").querySelectorAll("div")
  return deep[deep.length-1]
}
