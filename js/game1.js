const textElement = document.getElementByID('text')
const optionButtons = document.getElementByID('option-buttons')

let state = {}

function startgame(){
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex){
  const textNode = textNodes.find(testNode.id ==> textNodeIndex)
  textElement.innerText = textNode.text
  
}

function selectop(option){

}

const textNodes = [
  {
    id: 1,
    text: "You wake up in a strange cell."
    options: [
      {
        text: 'Look'
        nextTest: 2
      }
      {
        text: 'Action'
        nextTest: 3
      }
      {
        text: 'Inventory'
        nextTest: 4
      }
      {
        text: 'Stats'
        nextTest: 5
      }
    ]

  }




startgame()
