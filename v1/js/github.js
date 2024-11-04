document.addEventListener('DOMContentLoaded', () => {
    const user = 'rxxuzi';
    const apiUrl = `https://api.github.com/users/${user}`;
    function setProfileData(data) {
        const profileName = document.getElementById('profile-name');
        const profileImage = document.querySelector('.profile-image');
        const followers = document.getElementById('followers');
        const following = document.getElementById('following');
        const profileRepos = document.getElementById('profile-repos');
        if (profileName) profileName.textContent = data.name || user;
        if (profileImage) profileImage.src = data.avatar_url;
        if (followers) followers.textContent = data.followers;
        if (following) following.textContent = data.following;
        if (profileRepos) profileRepos.textContent = data.public_repos;
    }
    async function fetchUserProfile() {
        try {
            const response = await fetch(apiUrl);
            const userData = await response.json();
            setProfileData(userData);

        } catch (error) {
            console.error('Error fetching GitHub data:', error);
        }
    }
    fetchUserProfile();
});
