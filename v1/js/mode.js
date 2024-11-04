// Optimized mode.js with smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    // トランジション中フラグ
    let isTransitioning = false;

    // 初期モードの設定
    const savedMode = localStorage.getItem('mode') || 'dark';
    if (savedMode === 'light') {
        body.classList.add('light');
    }

    // クリックイベントの設定
    toggleButton.addEventListener('click', () => {
        if (isTransitioning) return; // トランジション中は追加のクリックを防止

        isTransitioning = true;

        // モード切り替えとアニメーション
        body.classList.toggle('light');
        toggleButton.classList.add('active');

        // モード保存
        localStorage.setItem('mode', body.classList.contains('light') ? 'light' : 'dark');

        // トランジション完了後にフラグをリセット
        setTimeout(() => {
            toggleButton.classList.remove('active');
            isTransitioning = false;
        }, 500);
    });
});