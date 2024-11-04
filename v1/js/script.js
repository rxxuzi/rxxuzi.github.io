document.addEventListener('DOMContentLoaded', () => {
    initializeLucideIcons();
    loadRepositoryData();
    createLanguageGrid();
});

function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error('Lucideが読み込まれていません。CDNリンクを確認してください。');
    }
}

function loadRepositoryData() {
    const repositoriesPath = '../../data/repo.json';
    const cardbg = [
        'linear-gradient(135deg, #373083, #3b82d6, #73a3f3)',
        'linear-gradient(135deg, #6d17d9, #9b7cf6, #bb6cf6)',
        'linear-gradient(135deg, #ef4444, #f59e0b, #efe444)',
        'linear-gradient(135deg, #0a9faa, #3aaf8f, #5fffaf)',
        'linear-gradient(135deg, #ff4070, #ff9090, #ffa08a)',
        'linear-gradient(135deg, #5050cf, #3aafaf, #4fffcf)',
        'linear-gradient(135deg, #a55e00, #f58e0b, #f5ce0b)',
        'linear-gradient(135deg, #9c3a8a, #dc79ca, #fc9ffa)'
    ];

    fetch(repositoriesPath)
        .then(response => response.json())
        .then(repositories => {
            repositories.forEach((repo, index) => {
                createRepoCard(repo, index, cardbg);
            });
            lucide.createIcons();
        })
        .catch(error => console.error('Error loading repository data:', error));
}

function createRepoCard(repo, index, cardbg) {
    const repoList = document.getElementById('repo-list');
    const repoLink = document.createElement('a');
    repoLink.href = repo.url;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    repoLink.classList.add('repo-card');
    repoLink.style.background = cardbg[index % cardbg.length];

    const repoHeader = document.createElement('div');
    repoHeader.classList.add('repo-header');

    const repoIcon = document.createElement('i');
    repoIcon.setAttribute('data-lucide', 'github');
    repoIcon.classList.add('social-icon');
    repoHeader.appendChild(repoIcon);

    const repoUser = document.createElement('span');
    repoUser.textContent = repo.user;
    repoHeader.appendChild(repoUser);

    const repoDetails = document.createElement('div');

    const repoName = document.createElement('h3');
    repoName.classList.add('repo-name');
    repoName.textContent = repo.repo;
    repoDetails.appendChild(repoName);

    const repoLang = document.createElement('p');
    repoLang.classList.add('repo-lang');
    repoLang.textContent = repo.lang;
    repoDetails.appendChild(repoLang);

    const repoDesc = document.createElement('p');
    repoDesc.classList.add('repo-description');
    repoDesc.textContent = repo.description;
    repoDetails.appendChild(repoDesc);

    repoLink.appendChild(repoHeader);
    repoLink.appendChild(repoDetails);
    repoList.appendChild(repoLink);
}

function createLanguageGrid() {
    const languageData = [
        { lang: 'C', rank: '1st', lightColor: '#ff4e8d', darkColor: '#992e54' },
        { lang: 'Java', rank: '2nd', lightColor: '#ff6b3d', darkColor: '#994024' },
        { lang: 'Go', rank: '3rd', lightColor: '#ffc107', darkColor: '#997304' },
        { lang: 'Python', rank: '4th', lightColor: '#4287f5', darkColor: '#275193' },
        { lang: 'Scala', rank: '5th', lightColor: '#a855f7', darkColor: '#643394' }
    ];

    const languageGrid = document.getElementById('lang-grid');
    languageData.forEach(lang => {
        createLangCard(lang, languageGrid);
    });
}

function createLangCard(lang, languageGrid) {
    const langCard = document.createElement('div');
    langCard.classList.add('lang-card');

    const langUpper = document.createElement('div');
    langUpper.classList.add('lang-upper');
    langUpper.style.backgroundColor = lang.lightColor;

    const langRank = document.createElement('span');
    langRank.classList.add('lang-rank');
    langRank.textContent = lang.rank;
    langRank.style.color = lang.darkColor;
    langUpper.appendChild(langRank);

    const langLower = document.createElement('div');
    langLower.classList.add('lang-lower');
    langLower.style.backgroundColor = lang.darkColor;

    const langName = document.createElement('span');
    langName.classList.add('lang-name');
    langName.textContent = lang.lang;
    langName.style.color = lang.lightColor;
    langLower.appendChild(langName);

    langCard.appendChild(langUpper);
    langCard.appendChild(langLower);
    languageGrid.appendChild(langCard);
}