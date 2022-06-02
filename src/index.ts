import { from, range } from "rxjs";
import { filter } from "rxjs/operators";

/* range(1, 10)
  .pipe(filter((val) => val % 2 === 1))
  .subscribe(console.log); */

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);
/* .subscribe(console.log); */

interface Persnaje {
  tipo: string;
  nombre: string;
}

const personajes: Persnaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];
from(personajes)
  .pipe(filter((personaje) => personaje.tipo === "heroe"))
  .subscribe(console.log);
