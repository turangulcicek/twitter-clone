export const authEle = {
  loginForm: document.querySelector("#login"),
  nameInp: document.querySelector("#name"),
  passInp: document.querySelector("#pass"),
  nameArea: document.querySelector(".name-warning "),
  passArea: document.querySelector(".pass-warning "),
};

export const mainEle = {
  pics: document.querySelectorAll("#profile-pic"),
  userName: document.querySelector(".user-info #user-name"),
  userTag: document.querySelector(".user-info #user-tag"),
  logoutBtn: document.querySelector("#logout-btn"),
  tweetArea: document.querySelector(".tweet-area"),
};

// kullanıcı bilgilerini ekrana basar
export const renderUserInfo = (user) => {
  // kullanıcı resimlerini günceller
  mainEle.pics.forEach((img) => (img.src = user.avatar));
  // kullanıcı ismini ekrana basar
  mainEle.userName.innerText = user.name;
  mainEle.userTag.innerText = "@" + user.profile;
};

// tweetleri ekrana basma
export const renderTweets = (tweet) => {};
