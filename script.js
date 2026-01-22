const toggleBtn = document.querySelector(`.toggle-btn`);
const detail = document.querySelector(`.detail`);

toggleBtn.addEventListener(`click`, () => {
  detail.classList.toggle(`hidden`);
});

const menuBtn = document.querySelector(`.menu-btn`);
const menu = document.querySelector(`.menu`);

// メニューが開いているかどうか
let isMenuOpen = false;

// メニューを開く
function openMenu() {
  menu.classList.remove("hidden");
  isMenuOpen = true;
};

// メニューを閉じる
function closeMenu () {
  menu.classList.add("hidden");
  isMenuOpen = false;
};

// ボタンクリックで開閉
menuBtn.addEventListener(`click`, (e) => {
  // 外クリック判定に引っかからないようにする
  e.stopPropagation();

  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// メニューを外クリックで閉じる
document.addEventListener(`click`, (e) =>{
  if(!isMenuOpen) return;

  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMenu();
  }
});

// ESCキーで閉じる
document.addEventListener("keydown", (e) => {
  if(!isMenuOpen) return;

  if(e.key === "Escape") {
    closeMenu();
  }
});

const buttons = document.querySelectorAll(`.faq-btn`);

buttons.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    // 今開いているものを全部閉じる
    document.querySelectorAll(`.faq-answer`).forEach((answer) => {
      answer.classList.add(`hidden`);
    });

    const answer = btn.nextElementSibling;
    answer.classList.toggle(`hidden`);
  });
});

// メニュー内リンクを押したら閉じる
menu.addEventListener("click", (e) =>{
  if (!isMenuOpen) return;
  if(e.target.tagName !== "A") return;

  closeMenu();
});

// お問い合わせフォーム（必須チェック飲み・送信はダミー）
const form = document.querySelector("#contact-form");

if (form) {
  const errorBox = form.querySelector(".form-error");

  const showError = (message, elToFocus) => {
    if(!errorBox) return;
    errorBox.textContent = message;
    errorBox.classList.remove("hidden");
    if(elToFocus) elToFocus.focus();
  };

  const clearError = () => {
    if(!errorBox) return;
    errorBox.textContent = "";
    errorBox.classList.add("hidden");
  };

  form.addEventListener("submit", (e) =>{
    e.preventDefault();
  clearError();


const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// 何もしなくていいケースを先に捨てる
if(!name.value.trim()) {
  showError("お名前を入力してください", name);
  return;
}

if(!email.value.trim()) {
  showError("メールアドレスを入力してください", email);
  return;
}

if(!message.value.trim()) {
  showError("内容を入力してください", message);
  return;
}

// ここまできたらOK（送信はダミー）
  clearError();
  alert("送信内容を受け付けました（デモ）");
  form.reset();
  });

  // 入力中にエラーを消す（最小のUX改善）
  form.addEventListener("input", () => {
    clearError();
  });
}