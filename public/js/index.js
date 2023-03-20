const token = localStorage.getItem("token");
if (!token) window.location = "http://10.10.3.225:5000/register";
(async () => {
  let check = await fetch("http://10.10.3.225:5000/check", {
    method: "GET",
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  let res = await check.json();
  if (res.status == 404) window.location = "http://10.10.3.225:5000/register";
})();

btn.onsubmit = async (e) => {
  try {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.files[0]);
    formData.append("title", title.value);

    let check = await fetch("http://10.10.3.225:5000/upload", {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
      },
      body: formData,
    });
    let res = await check.json();
    if (res.status == 401) window.location = "http://10.10.3.225:5000/register";
    if (res.status == 404) alert(res.message);
  } catch (error) {
    console.log(error.message);
  }
};

(async function () {
  let videos = await fetch("http://10.10.3.225:5000/videos");
  videos = await videos.json();
  for (let video of videos.data) {
    let li = document.createElement("li");
    li.innerHTML = `<video width="300" src=${video.path} controls></video>
      <h3>${video.username}</h3>
      <h2>${video.title}</h2>
      <p>${Date(video.add_date)}</p>`;
    list.append(li);
  }
})();
