function hideAllContents() {
    const message = document.getElementById('message');
    const gift = document.getElementById('gift');
    const surprise = document.getElementById('surprise');
 message.classList.add('hidden');
    gift.classList.add('hidden');
    surprise.classList.add('hidden');

    gift.style.top = '-100px';
  }

  document.getElementById('messageButton').addEventListener('click', function () {
    hideAllContents();
    const messages = [
      '聖誕快樂啦，我還不知道妳的名字呢，醫生肯定很忙很累對吧，加油！！！最近天氣很冷妳要注意保暖，別讓自己太累了，再忙再累還是要休息，Merry Christmas ，Merry Christmas 🎄✨',
      'Merry Christmas and Happy New Year! 🎅',
    ];
    const message = document.getElementById('message');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.classList.remove('hidden');
  });

  document.getElementById('giftButton').addEventListener('click', function () {
    hideAllContents();
    const gift = document.getElementById('gift');
    const surprise = document.getElementById('surprise');

    gift.classList.remove('hidden');
    gift.style.top = '-300px';

    setTimeout(() => {
      gift.style.top = 'calc(100vh - 200px)';
    }, 50);

    setTimeout(() => {
      const confirm = window.confirm('點一下簽收你的禮物 🎁');
      if (confirm) {
        gift.classList.add('hidden');
        surprise.classList.remove('hidden');
      }
    }, 2100);
  });