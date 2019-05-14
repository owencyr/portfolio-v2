function render() {
  let html = generateString(PROJECTS);
  $('.list').html(html);
}

function generateString(array) {
  return array.map((item, index) => generateHTML(item, index)).join('');
}

function generateHTML(item, index) {
  return `<li class="project-${index}>
  <ul>
  <li class="title"><h2>${item.title}</h2></li>
  <li class="screenshot"><a href="${item.link}"><img src="${
  item.screenshot
}" class="screenshot" alt="${item.title}"></a></li>
  <li class="desc">${item.desc}</li>
  <li class="tech">${item.tech}</li>
  <li class="link"><a href="${item.link}"</a>Github.io Deployment</li>
  <li class="repo"><a href="${item.repo}"</a>Github Repository</li>
  </ul>
  </li>`;
}

function handlePortfolio() {
  render();
}

$(handlePortfolio());
