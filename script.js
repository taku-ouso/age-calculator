function calculateAge() {
  const input = document.getElementById('birthdate').value;
  const result = document.getElementById('result');

  if (!input) {
    result.textContent = "生年月日を入力してください。";
    return;
  }

  const birthDate = new Date(input);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.textContent = `あなたの年齢は ${age} 歳です。`;
}

function displayCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  document.getElementById('current-date').textContent = `${year}年${month}月${day}日現在`;
}

window.onload = displayCurrentDate;
