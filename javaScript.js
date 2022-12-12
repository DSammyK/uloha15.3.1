function analyza(){
  //zistenie dlzky celeho textu
  let text = document.getElementById("text");
  let textLength = (text.value).length;


  console.log(text)

  //bez medzier
  let text2 = text.value.split(" ").join("").length;

  //kolko cisel
  function getCountOfNumbers(str) {
    return str.replace(/[^0-9]/g, '').length;
  }

  numberCount = getCountOfNumbers(text.value)
  
  //najdlhsie slovo + pocet pismen, ak je ich viac, vypis

  //pocet pismen

    let novySTR = text.value.replaceAll(',', '');
    novySTR = novySTR.replaceAll('.', '');
    novySTR = novySTR.replaceAll('!', '');
    novySTR = novySTR.replaceAll('?', '');


    let rozdelenieTextu = novySTR.split(' ');
    let najdlhsieSlovoPocet = 0;

    // for loop
    for(var i = 0; i < rozdelenieTextu.length; i++){
      if(rozdelenieTextu[i].length > najdlhsieSlovoPocet){ 
    najdlhsieSlovoPocet = rozdelenieTextu[i].length; 
       }
    }
  //najdenie slov

  let listSlov = [];
  for(let i = 0; i < rozdelenieTextu.length; i++){
    if(rozdelenieTextu[i].length == najdlhsieSlovoPocet){
      if(rozdelenieTextu.length == 1){
        listSlov.push(rozdelenieTextu[i]);
      }
      else{
        listSlov += rozdelenieTextu[i] + ", ";
      }
    }
  }

  console.log(listSlov)
  //vypis
  let textOutput = document.getElementById("textOutput");
  textOutput.value = "Dĺžka celého textu: " + textLength

  textOutput.value += "\nDĺžku textu bez medzier: " + text2;

  textOutput.value += "\nV texte sa nachádza číslic: " + numberCount;

  textOutput.value += "\nNajdlhšie slová: " + listSlov;
  textOutput.value += "\nPočet písmen najdlhšieho slova: " + najdlhsieSlovoPocet;
}

function zasifruj(){
  let text = document.getElementById("text");
  let cypher = document.getElementById("cypher");

  //zasifrovany text
  textChanged = text.value.replaceAll(/o/ig, "0");
  textChanged = textChanged.replaceAll(/I/ig, "1");
  textChanged = textChanged.replaceAll(/E/ig, "3");
  textChanged = textChanged.replaceAll(/A/ig, "4");
  textChanged = textChanged.replaceAll(/S/ig, "5");
  textChanged = textChanged.replaceAll(/B/ig, "8");

  cypher.value = textChanged;
}

function hladaj(){

  let hladaneSlovo = document.getElementById("hladajSlovo");
  hladaneSlovo = hladaneSlovo.value;

  let outputHladania = document.getElementById("outputHladania")

  let text = document.getElementById("text");
  text = text.value;
  text = text.toLowerCase();

if (text.includes(hladaneSlovo)) {
	outputHladania.innerText = "Text sa nachadza"
} else {
	outputHladania.innerText = "Text sa nenachadza"
}
}