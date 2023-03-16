let fn$$ = document.querySelectorAll(".fn-insert-here");

for (let index = 0; index < fn$$.length; index++) {
  let p$$ = document.createElement("p");

  p$$.textContent = "voy dentro!";
  fn$$[index].appendChild(p$$);
}
