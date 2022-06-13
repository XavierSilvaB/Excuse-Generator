// de define los arreglos con las frases
let excusa = document.getElementById("excuse");
// de define los arreglos con las frases
let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuse() {
  let a = Math.floor(Math.random() * who.length); // con math.floor devolvemos el numero del
  let b = Math.floor(Math.random() * what.length); // con Math.random devolvemos un numero aleatorio del arreglo especificado.
  let c = Math.floor(Math.random() * when.length);

  let x = `${who[a]} ${what[b]} ${when[c]} `; //  se usa interpolacion para hacer el concatenado de las variable

  return x; // retornamos el valor del grupo de la concatenacion
}

console.log(excuse); // imprimimos la variable excuse
excusa.innerHTML = excuse();
