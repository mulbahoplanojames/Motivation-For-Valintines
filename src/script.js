const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  const studentName = document.querySelector("#studentName").value;

  const message = document.querySelector("#message");
  const message2 = document.querySelector("#message2");
  const error = document.querySelector("#error");
  const emoji = document.querySelector("#emoji");

  const mainMessage =
    "On this day of love, let's celebrate our unique bond with coding. Embrace challenges, fix bugs with patience, and create beautiful software together. Happy Valentine's Day! 🚀💖";

  if (studentName === "") {
    error.innerHTML = "Please enter your name";
  } else {
    message.innerHTML = `Hey ${studentName}! <br/> ${mainMessage}`;
    message2.innerHTML = ` 💻 Happy Valentine's Day, Code Creators! 💻 <br /> from your Class Representatives.`;
    emoji.innerHTML = ` 💻 - 📚 - 🤔 - 🚀 - 💡 -   🐛 - 🛠️ - 📱 - 👩‍💻👨‍💻 - 🔄 - 📝 -🌐 `;

    document.querySelector("#wripper").style.backgroundColor = "#ed017f";
    document.querySelector("#card").style.backgroundColor = "#fff";
    document.querySelector("#submitBtn").style.backgroundColor = "#ed017f";
    document.querySelector("#submitBtn").style.color = "#fff";
    document.querySelector("#studentName").style.backgroundColor = "#ed017f";
    document.querySelector("#studentName").style.color = "#fff";
    document.querySelector("#message").style.color = "#ed017f";
    document.querySelector("#message2").style.color = "#ed017f";
    document.querySelector("#emoji").style.color = "#ed017f";
  }

  console.log(studentName);
});
