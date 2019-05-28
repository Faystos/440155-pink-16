var buttonsSettings = document.querySelectorAll(".photo-edit__button-setting"),
  editControls = document.querySelectorAll(".photo-edit__controls");

function changeActiveControls(num) {
  buttonsSettings[num].addEventListener("click", function(e) {
    e.preventDefault();

    var activeBtn = document.querySelector(".photo-edit__button-setting.active"),
      activeEdit = document.querySelector(".photo-edit__controls.active");

    if (activeBtn) {
      activeBtn.classList.remove("active");
    }

    if (activeEdit) {
      activeEdit.classList.remove("active");
    }

    buttonsSettings[num].classList.add("active");
    editControls[num].classList.add("active");
  });
}

for (var i = 0; i < buttonsSettings.length; i++) {
  changeActiveControls(i);
}
