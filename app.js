function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// 主题颜色选择
document.querySelectorAll('.color-option').forEach(color => {
  color.addEventListener('click', () => {
      const newColor = color.dataset.color;
      document.documentElement.style.setProperty('--primary-color', newColor);
      localStorage.setItem('themeColor', newColor);
      color.style.transform = 'scale(0.9)';
      setTimeout(() => color.style.transform = 'scale(1)', 100);
  });
});

// 通知开关
document.getElementById('notifications').addEventListener('change', function() {
  localStorage.setItem('notificationsEnabled', this.checked);
});

// 积分系统
let dailySignIn = localStorage.getItem('dailySignIn');
const INITIAL_POINTS = localStorage.getItem('points') || 0;
document.getElementById('currentPoints').textContent = INITIAL_POINTS;

function signIn() {
  const now = new Date().toDateString();
  if (dailySignIn === now) {
      const lang = localStorage.getItem('language') || 'zh-CN';
      const alertText = {
          'zh-CN': '您今天已签到过啦！',
          'zh-TW': '您今天已簽到過啦！',
          'en': 'You have already signed in today!',
          'ja': 'あなたは今日すでにサインインしています！',
          'ru': 'Вы уже зарегистрировались сегодня!'
      };
      alert(alertText[lang]);
      return;
  }

  const newPoints = parseInt(INITIAL_POINTS) + 10;
  localStorage.setItem('points', newPoints);
  localStorage.setItem('dailySignIn', now);
  document.getElementById('currentPoints').textContent = newPoints;
  const lang = localStorage.getItem('language') || 'zh-CN';
  const alertText = {
      'zh-CN': '签到成功！获得10积分',
      'zh-TW': '簽到成功！獲得10積分',
      'en': 'Sign in successful! You have earned 10 points.',
      'ja': 'サインインに成功しました！10ポイントを獲得しました。',
      'ru': 'Вход выполнен успешно! Вы заработали 10 баллов.'
  };
  alert(alertText[lang]);
}

// 多语言支持
const i18n = {
  'zh-CN': { 
      home: '首页',
      settings: '设置',
      points: '积分',
      smart: '智能',
      robotManagement: '机器人管理',
      addToGroup: '添加到群组',
      dataStatistics: '数据统计',
      groupCount: '群组数量',
      runningStatus: '运行状态',
      commonCommands: '常用指令',
      commandList: '/help - 查看帮助<br>/stats - 查看统计数据<br>/settings - 打开设置',
      themeSettings: '主题设置',
      functionSettings: '功能设置',
      messageNotification: '消息通知',
      backupFrequency: '数据备份频率',
      daily: '每日',
      weekly: '每周',
      monthly: '每月',
      interfaceLanguage: '界面语言',
      darkMode: '暗黑模式',
      feedback: '建议反馈',
      currentPoints: '当前积分：',
      pointsCardNumber: '积分卡号：0000 0076 8383 0267',
      dailySignIn: '每日签到',
      smartAssistant: 'nmBot 智能助理 (Beta)',
      smartDesc: '帮助您管理群组配置、解答使用问题',
      askQuestion: '提出问题',
      miniappVersion: 'Miniapp 面板版本 25.4.26',
      robotVersion: '机器人版本 5.1'
  },
  'zh-TW': { 
      home: '首頁',
      settings: '設定',
      points: '積分',
      smart: '智能',
      robotManagement: '機器人管理',
      addToGroup: '添加到群組',
      dataStatistics: '數據統計',
      groupCount: '群組數量',
      runningStatus: '運行狀態',
      commonCommands: '常用指令',
      commandList: '/help - 查看幫助<br>/stats - 查看統計數據<br>/settings - 打開設定',
      themeSettings: '主題設定',
      functionSettings: '功能設定',
      messageNotification: '消息通知',
      backupFrequency: '數據備份頻率',
      daily: '每日',
      weekly: '每周',
      monthly: '每月',
      interfaceLanguage: '界面語言',
      darkMode: '暗黑模式',
      feedback: '建議反饋',
      currentPoints: '當前積分：',
      pointsCardNumber: '積分卡號：0000 0076 8383 0267',
      dailySignIn: '每日簽到',
      smartAssistant: 'nmBot 智能助理 (Beta)',
      smartDesc: '幫助您管理群組配置、解答使用問題',
      askQuestion: '提出問題',
      miniappVersion: 'Miniapp 面板版本 25.4.26',
      robotVersion: '機器人版本 5.1'
  },
  'en': { 
      home: 'Home',
      settings: 'Settings',
      points: 'Points',
      smart: 'Smart',
      robotManagement: 'Robot Management',
      addToGroup: 'Add to Group',
      dataStatistics: 'Data Statistics',
      groupCount: 'Group Count',
      runningStatus: 'Running Status',
      commonCommands: 'Common Commands',
      commandList: '/help - View help<br>/stats - View statistics<br>/settings - Open settings',
      themeSettings: 'Theme Settings',
      functionSettings: 'Function Settings',
      messageNotification: 'Message Notification',
      backupFrequency: 'Backup Frequency',
      daily: 'Daily',
      weekly: 'Weekly',
      monthly: 'Monthly',
      interfaceLanguage: 'Interface Language',
      darkMode: 'Dark Mode',
      feedback: 'Suggestion Feedback',
      currentPoints: 'Current Points: ',
      pointsCardNumber: 'Points Card Number: 0000 0076 8383 0267',
      dailySignIn: 'Daily Sign In',
      smartAssistant: 'nmBot Smart Assistant (Beta)',
      smartDesc: 'Help you manage group configurations and answer usage questions',
      askQuestion: 'Ask a Question',
      miniappVersion: 'Miniapp Panel Version 25.4.26',
      robotVersion: 'Robot Version 5.1'
  },
  'ja': { 
      home: 'ホーム',
      settings: '設定',
      points: 'ポイント',
      smart: 'スマート',
      robotManagement: 'ロボット管理',
      addToGroup: 'グループに追加',
      dataStatistics: 'データ統計',
      groupCount: 'グループ数',
      runningStatus: '稼働状態',
      commonCommands: 'よく使うコマンド',
      commandList: '/help - ヘルプを表示<br>/stats - 統計データを表示<br>/settings - 設定を開く',
      themeSettings: 'テーマ設定',
      functionSettings: '機能設定',
      messageNotification: 'メッセージ通知',
      backupFrequency: 'バックアップ頻度',
      daily: '毎日',
      weekly: '毎週',
      monthly: '毎月',
      interfaceLanguage: 'インターフェイス言語',
      darkMode: 'ダークモード',
      feedback: '提案フィードバック',
      currentPoints: '現在のポイント：',
      pointsCardNumber: 'ポイントカード番号：0000 0076 8383 0267',
      dailySignIn: '毎日のサインイン',
      smartAssistant: 'nmBot スマートアシスタント (Beta)',
      smartDesc: 'グループ設定の管理と使用方法の質問にお答えします。',
      askQuestion: '質問する',
      miniappVersion: 'Miniappパネルバージョン 25.4.26',
      robotVersion: 'ロボットバージョン 5.1'
  },
  'ru': { 
      home: 'Главная',
      settings: 'Настройки',
      points: 'Баллы',
      smart: 'Интеллект',
      robotManagement: 'Управление роботом',
      addToGroup: 'Добавить в группу',
      dataStatistics: 'Статистика данных',
      groupCount: 'Количество групп',
      runningStatus: 'Состояние работы',
      commonCommands: 'Частые команды',
      commandList: '/help - Просмотреть справку<br>/stats - Просмотреть статистику<br>/settings - Открыть настройки',
      themeSettings: 'Настройки темы',
      functionSettings: 'Настройки функций',
      messageNotification: 'Уведомления о сообщениях',
      backupFrequency: 'Частота резервного копирования',
      daily: 'Ежедневно',
      weekly: 'Раз в неделю',
      monthly: 'Раз в месяц',
      interfaceLanguage: 'Язык интерфейса',
      darkMode: 'Темный режим',
      feedback: 'Предложения и отзывы',
      currentPoints: 'Текущие баллы: ',
      pointsCardNumber: 'Номер карты баллов: 0000 0076 8383 0267',
      dailySignIn: 'Ежедневный вход',
      smartAssistant: 'nmBot Интеллектуальный ассистент (Бета)',
      smartDesc: 'Помогает вам управлять настройками групп и отвечает на вопросы об использовании.',
      askQuestion: 'Задать вопрос',
      miniappVersion: 'Версия панели Miniapp 25.4.26',
      robotVersion: 'Версия робота 5.1'
  }
};

function changeLanguage(select) {
  const lang = select.value;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[lang][key]) {
          if (key === 'currentPoints') {
              el.textContent = i18n[lang][key] + document.getElementById('currentPoints').textContent;
          } else {
              el.innerHTML = i18n[lang][key];
          }
      }
  });
  document.querySelectorAll('#backup-frequency option').forEach(option => {
      const key = option.dataset.i18n;
      if (i18n[lang][key]) {
          option.textContent = i18n[lang][key];
      }
  });
}

// 暗黑模式
function toggleDarkMode() {
  document.body.classList.toggle('dark-theme');
  const isDarkMode = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkMode', isDarkMode);
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : '');
}

document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  // 主题颜色
  const savedColor = localStorage.getItem('themeColor') || '#2196F3';
  document.documentElement.style.setProperty('--primary-color', savedColor);

  // 通知状态
  const notificationsEnabled = localStorage.getItem('notificationsEnabled') === 'true';
  document.getElementById('notifications').checked = notificationsEnabled;

  // 备份频率
  const backupFrequency = localStorage.getItem('backupFrequency') || 'daily';
  document.getElementById('backup-frequency').value = backupFrequency;

  // 暗黑模式
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  document.getElementById('darkModeToggle').checked = isDarkMode;
  if (isDarkMode) toggleDarkMode();

  // 语言设置
  const savedLang = localStorage.getItem('language') || 'zh-CN';
  document.getElementById('language').value = savedLang;
  changeLanguage({ value: savedLang });
});

// 备份频率
document.getElementById('backup-frequency').addEventListener('change', function() {
  localStorage.setItem('backupFrequency', this.value);
});

// 智能助理模拟功能
function openSmartHelp() {
  const lang = localStorage.getItem('language') || 'zh-CN';
  const alertText = {
      'zh-CN': '智能助理功能正在开发中，当前支持基础问题解答\n\n请尝试提问：如何绑定账号？',
      'zh-TW': '智能助理功能正在開發中，當前支持基礎問題解答\n\n請嘗試提問：如何綁定帳號？',
      'en': 'The smart assistant function is under development. Currently, it supports basic question answering.\n\nPlease try asking: How to bind an account?',
      'ja': 'スマートアシスタント機能は開発中です。現在は基本的な質問応答に対応しています。\n\n質問を試してみてください：アカウントをどのように紐付けますか？',
      'ru': 'Функция умного ассистента находится в разработке. В настоящее время поддерживается ответ на базовые вопросы.\n\nПопробуйте задать вопрос: Как привязать аккаунт?'
  };
  alert(alertText[lang]);
}

// 页面加载动画
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
});
  