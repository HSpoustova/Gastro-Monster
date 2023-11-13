//spocita nahodny index v zavisloti na delce pole, splice vezme jeden prvek v poli, odstrani ho z něj a vrati ho zpet jako samostatne pole, univerzalni fce

export const GetRandomObject = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array.splice(randomIndex, 1)[0];
};
