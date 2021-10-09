window.addEventListener("load", () => {
  const hello = document.createElement("code");
  hello.classList.add("hello-world");
  hello.textContent = "hello, world!"
  document.body.appendChild(hello);
});
