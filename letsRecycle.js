function recycle(array) {
  //create an array for each recycle bin
  let paperBin = [];
  let glassBin = [];
  let organicBin = [];
  let plasticBin = [];

  //create function to return array of recycle bins in order
  let output = [paperBin, glassBin, organicBin, plasticBin];

  function addToBins(item) {
    //get the correct bin using item material
    //push item type to correct bin
    getBin(item.material).push(item.type);
    //check if item has secondMaterial
    if (item.secondMaterial != null) {
      //get the correct bin using item material
      //push item type to correct bin
      getBin(item.secondMaterial).push(item.type);
    }
  }

  function getBin(material) {
    //return bin array for corresponding material
    switch (material) {
      case "paper":
        return paperBin;
      case "glass":
        return glassBin;
      case "organic":
        return organicBin;
      case "plastic":
        return plasticBin;
    }
  }
  console.log("input", array);
  //for each item in input array, add to bins
  array.forEach(addToBins);
  console.log("output", output);
  //return line 8
  return output;
}

//iterate through array
//check item material in array
//add to correct recycle bin
//check if secondMaterial in array exists
//add to correct recycle bin
//return output
