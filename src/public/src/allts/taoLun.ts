function formatDateTime(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 明确声明元素类型并使用类型断言
const a = document.getElementById("q") as HTMLElement | null;
const b = document.getElementById("aa") as HTMLInputElement | null;
const cs = document.getElementById("cs") as HTMLElement | null;

// 使用可选链操作符进行嵌套校验
if (a?.addEventListener && b && cs) {
  a.addEventListener("click", () => {
    const inputValue = b.value.trim();
    
    if (inputValue) {
      const sanitizedInput = inputValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      
      const newContent = `
        <div class="taolundendedCard">
          <div class="tlInfoLine">
            <img src="tlimg.png" alt=""> 
            <p class="p1">匿名用户</p>
            <p class="p2">${formatDateTime()}</p>
          </div>
          <p>${sanitizedInput}</p>
        </div>
      `;

      cs.insertAdjacentHTML("beforeend", newContent);
      b.value = "";
    }
  });
}