// console.log("okk");

function getelementbyId(id) {
  const getValue = Number(document.getElementById(id).value);
  return getValue;
}

function getelementbyIdtext(id) {
  const getValue = Number(document.getElementById(id).innerText);
  return getValue;
}

document.getElementById("donateNow").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("added");
  const getAm = getelementbyId("donationAm");
  // console.log(getAm);
  const mainB = getelementbyIdtext("main-balance");
  // console.log(mainB);
  const donateNowFeni = getelementbyIdtext("noakhaliBalance");
  // console.log(donateNowFeni);
  if (!isNaN(getAm)) {
    const feniBalance = donateNowFeni + getAm;
    console.log(feniBalance);
    document.getElementById("noakhaliBalance").innerText = feniBalance;
    document.getElementById("donationAm").value = "";
    const finalBalance = mainB - getAm;
    document.getElementById("main-balance").innerText = finalBalance;
  } else {
    alert("Please Input Valid Number");
  }
});

// -----------------Feni----------------------

document
  .getElementById("donateNowFeni")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("added");
    const getAm = getelementbyId("donationAmFeni");
    // console.log(getAm);
    const mainB = getelementbyIdtext("main-balance");
    // console.log(mainB);
    const donateNowFeni = getelementbyIdtext("feniBalance");
    // console.log(donateNowFeni);
    if (!isNaN(getAm)) {
      const feniBalance = donateNowFeni + getAm;
      console.log(feniBalance);
      document.getElementById("feniBalance").innerText = feniBalance;
      document.getElementById("donationAmFeni").value = "";
      const finalBalance = mainB - getAm;
      document.getElementById("main-balance").innerText = finalBalance;
    } else {
      alert("Please Input Valid Number");
    }
  });

// -------------Sylhet--------------------
document.getElementById("donateNowSyl").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("added");
  const getAm = getelementbyId("dsyL");
  // console.log(getAm);
  const mainB = getelementbyIdtext("main-balance");
  // console.log(mainB);
  const donateNowSyl = getelementbyIdtext("sylhetBalance");
  // console.log(donateNowSyl);
  if (!isNaN(getAm)) {
    const SylBalance = donateNowSyl + getAm;
    console.log(SylBalance);
    document.getElementById("sylhetBalance").innerText = SylBalance;
    document.getElementById("dsyL").value = "";
    const finalBalance = mainB - getAm;
    document.getElementById("main-balance").innerText = finalBalance;
  } else {
    alert("Please Input Valid Number");
  }
});
