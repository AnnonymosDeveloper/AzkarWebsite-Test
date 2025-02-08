document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".azkar-button");
  buttons.forEach((button) => {
    button.addEventListener("click", azkarButton);
  });

  document
    .getElementById("translate-button")
    .addEventListener("click", translate);
});

function azkarButton(event) {
  let button = event.target;
  let currentValue = parseInt(button.textContent);
  button.textContent = currentValue - 1;
  if (currentValue === 1) {
    button.closest(".container").style.display = "none";
  }
}

function translate() {
  let translations = {
    "لا اله الا الله": "La ilaha ill Allah",
    "الحمد لله رب العالمين": "Alhamdulillah rab al alameen",
    "سبحان الله": "Subhanallah",
    "الله اكبر": "Allahu Akbar",
    "استغفر الله": "Astaghfirullah",
    "لا حول ولا قوه الا بالله": "La hawla wala quwata illa billah",
    "سبحان الله وبحمده": "Subhanallah wa bihamdihi",
    "سبحان الله والحمد لله": "Subhanallah wal hamdulillah",
    "سبحان الله وبحمده سبحان الله العظيم":
      "Subhanallah wa bihamdihi Subhan Allah al Azeem",
    "اللهم صل وسلم وبارك على نبينا محمد":
      "Allahumma salli wa sallim wa barik ala nabiyyina Muhammad",
    "سبحان الله العظيم وبحمده": "Subhanallah al Azeem wa bihamdihi",
  };

  document.querySelectorAll(".zikr").forEach((element) => {
    let text = element.textContent.trim();
    if (translations[text]) {
      element.textContent = translations[text];
    }
  });
}
