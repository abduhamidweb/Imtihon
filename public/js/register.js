btn.onclick = async function render(e) {
  e.preventDefault();
  let datas = await fetch("http://10.10.3.225:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      username: username.value,
      login: login.value,
      password: password.value,
    }),
  });
  username.value = "";
  login.value = "";
  password.value = "";
  //   window.localStorage.clear();
  let res = await datas.json();
  if (res.status == 200) {
    window.localStorage.setItem("token", res.data.token);
    window.location = "http://10.10.3.225:5000/";
  } else {
    alert(res.message);
  }
};
