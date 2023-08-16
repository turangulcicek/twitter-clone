import { authEle } from "./ui.js";
import { API } from "./api.js";
import { setLocal } from "./helpers.js";

const api = new API();

// şifre için kuralları içeren tanım
// min 1 küçük 1 büyük harf
// 1 sayı en az 8 karakter

const regex =
  "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$";

// uyarıları ekrana basar
const renderWarns = (nameWarn, passWarn) => {
  // isim uyarısı varsa ekrana bas yoksa eski uyarıyı sil
  if (nameWarn) {
    authEle.nameArea.innerHTML = `<span class="alert alert-danger p-2"> ${nameWarn} </span>`;
  } else {
    authEle.nameArea.innerHTML = "";
  }
  // şifre uyarısı varsa ekrana bas yoksa eski uyarıyı sil

  if (passWarn) {
    authEle.passArea.innerHTML = `<span class="alert alert-danger p-2"> ${passWarn} </span>`;
  } else {
    authEle.passArea.innerHTML = "";
  }
};
// formun gönderilme olayı izler

authEle.loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let nameWarn = null;
  let passWarn = null;

  //   değerlere erişme

  const name = authEle.nameInp.value;
  const pass = authEle.passInp.value;

  // isim kontrol etme

  if (!name) {
    nameWarn = "Please type your username";
  } else if (name.length < 3) {
    nameWarn = "username can not be less than 6 characters";
  } else {
    nameWarn = null;
  }
  // şifre kontrol etme
  if (!pass) {
    passWarn = "Please type your passwoord";
  } else if (pass.length < 8) {
    passWarn = "password should consist of  minimum 8 characters";
  } else if (!pass.match(regex)) {
    passWarn =
      "-Password should include at Least eight characters including one lowercase, one uppercase and one number";
  } else {
    passWarn = null;
  }
  //   uyarı ekrana bas
  renderWarns(nameWarn, passWarn);
  // uyarı yoksa formu gönder
  if (!nameWarn && !passWarn) {
    const userData = await api.getUser(name);
    // kullanıcıyı lokale ekler
    setLocal("user", userData);

    // anaysayfaya yönlendirme

    window.location = "/";
  }
});
