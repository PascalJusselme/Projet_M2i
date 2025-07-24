document.addEventListener("DOMContentLoaded", () => {
  const btn_more_descrip_down = document.querySelectorAll(
    "#btn-view-more-down"
  );
  const btn_more_descrip_up = document.querySelectorAll("#btn-view-more-up");

  for (let i = 0; i < btn_more_descrip_down.length; i++) {
    btn_more_descrip_down[i].addEventListener("click", () => {
      const description_mission =
        btn_more_descrip_down[i].parentElement.previousElementSibling;

      description_mission.style.height = "auto";

      btn_more_descrip_down[i].classList.add("visible");
      btn_more_descrip_up[i].classList.toggle("visible");
    });
  }

  for (let i = 0; i < btn_more_descrip_up.length; i++) {

    btn_more_descrip_up[i].addEventListener("click", () => {
      const description_mission =
        btn_more_descrip_up[i].parentElement.previousElementSibling;
  
      description_mission.style.height = "20px";
  
      btn_more_descrip_up[i].classList.add("visible");
      btn_more_descrip_down[i].classList.toggle("visible");
    });
  }
});
