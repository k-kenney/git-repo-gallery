// for profile infor to appear
const overview = document.querySelector(".overview");
const username = "k-kenney";

const gitUserInfo = async function () {
  const userInfo = await fetch (`https://api.github.com/users/${username}`);
  const info = await userInfo.json();
  displayGitUserInfo(info);
};

gitUserInfo();

const displayGitUserInfo = function (info) {
  const div = document.createElement("div");
  div.classList.add("user-info");
  div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${info.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${info.name}</p>
      <p><strong>Bio:</strong> ${info.bio}</p>
      <p><strong>Location:</strong> USA</p>
      <p><strong>Number of public repos:</strong> ${info.public_repos}</p>
    </div>
  `;
  overview.append(div);
};
