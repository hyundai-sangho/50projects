const panels = document.querySelectorAll('.panel');

// panels div 박스를 하나 하나 돌아가며
// active 클래스 모두 제거 후에 마우스로 클릭한
// 패널만 active 클래스 추가
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// panels div 박스를 하나 하나 돌아가며
// active 클래스가 있는 div 박스는 active 클래스 제거
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
