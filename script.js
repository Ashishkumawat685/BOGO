function selectRadio(id) {
  document.getElementById(id).checked = true;
}

function ShowFullbox(box) {
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  const Total = document.getElementById("Total");
  radio2.checked = true;

  if (box === "box1") {
    box1.style.maxHeight = "174px";
    box2.style.maxHeight = "0px";
    box3.style.maxHeight = "0px";
    radio1.checked = true;
    radio2.checked = false;
    radio3.checked = false;
    Total.innerHTML = "Total : $10.00 USD";
  } else if (box === "box2") {
    box1.style.maxHeight = "0px";
    box2.style.maxHeight = "174px";
    box3.style.maxHeight = "0px";
    radio1.checked = false;
    radio2.checked = true;
    radio3.checked = false;
    Total.innerHTML = "Total : $18.00 USD";
  } else if (box === "box3") {
    box1.style.maxHeight = "0px";
    box2.style.maxHeight = "0px";
    box3.style.maxHeight = "174px";
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = true;
    Total.innerHTML = "Total : $24.00 USD";
  }
}
ShowFullbox();

function Add_Cart() {
  const Add_Cart = document.getElementById("Add_Cart");
  Add_Cart.innerHTML = `<img src="./Loading_2.gif" alt="Loading..." style="width:20px; height:20px;">`;

  setTimeout(() => {
    Add_Cart.innerHTML = `Added`;
  }, 2000);
}
