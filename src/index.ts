import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (next) => console.log("siguiente [next]: ", next),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.log("completado [obs]"),
};
