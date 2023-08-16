// ! Olay İzleyicileri
import { mainEle, renderUserInfo, renderTweets } from "./scripts/ui.js";
import { getLocal } from "./scripts/helpers.js";

// sayfaının yüklenmesi
document.addEventListener("DOMContentLoaded", () => {
  const user = getLocal("user");
  // kullanıcı localde yoksa giriş sayfasına yönlendir anasayfaya girmesine izin verme
  if (user) {
    renderUserInfo(user);
  } else {
    window.location = "/auth.html";
  }
});

// çıkış butonuna tıklanma

mainEle.logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location = "/auth.html";
});
