
document.addEventListener("DOMContentLoaded", dOMContentLoaded);

function dOMContentLoaded() {
  const selectFlag = document.querySelector(".select-flag")
  const selectDrow = selectFlag.querySelector('.select-drow')
  const selectDDrow = document.querySelector('.select-drow')
  const bodyClick = document.querySelector('body')
  const tabsLi1 = document.querySelector('.tabs-li-1')
  const tabsLi2 = document.querySelector('.tabs-li-2')
  const tabsDiv1 = document.querySelector('#tabs-div-1')
  const tabsDiv2 = document.querySelector('#tabs-div-2')

  const tf = document.querySelector('.tf')
  const inputPhone = document.querySelector('#input-phone')
  const inputPass = document.querySelector('#pass')
  const Showbt1 = document.querySelector('.showbt1')
  const Showbt2 = document.querySelector('.showbt2')
  const Showbt2mess = document.querySelector('.show-bt2')
  const changeLangLocalize1 = document.getElementById('chLocalize1')
  const changeLangLocalize2 = document.getElementById('chLocalize2')
  const changeLangLocalize3 = document.getElementById('chLocalize3')
  const changeLangLocalize4 = document.getElementById('chLocalize4')
  const changeLangLocalize5 = document.getElementById('chLocalize5')
  const changeLangLocalize6 = document.getElementById('chLocalize6')
  const changeLangLocalize7 = document.getElementById('chLocalize7')
  const changeLangLocalize8 = document.getElementById('chLocalize8')
  // const changeLangLocalize9 = document.getElementById('chLocalize9')
  const changeLangLocalize10 = document.getElementById('chLocalize10')
  const changeLangLocalize11 = document.getElementById('chLocalize11')
  const clickLangVie = document.querySelector('.langVie')
  const clickLangEng = document.querySelector('.langEng')
  // set localize lang mặc định
  function setLocalize() {
    // console.log("set Localize")
    // console.log(appLocalize[localize].phone)
    changeLangLocalize1.innerText = appLocalize[localize].chLocalize1
    changeLangLocalize2.innerText = appLocalize[localize].chLocalize2
    changeLangLocalize3.innerText = appLocalize[localize].chLocalize3
    changeLangLocalize4.innerText = appLocalize[localize].chLocalize4
    changeLangLocalize5.innerText = appLocalize[localize].chLocalize5
    changeLangLocalize6.innerText = appLocalize[localize].chLocalize6
    changeLangLocalize7.innerText = appLocalize[localize].chLocalize7
    changeLangLocalize8.innerHTML = `${appLocalize[localize].chLocalize8} <a>${appLocalize[localize].chLocalize9}</a>`
    // changeLangLocalize9.innerText = appLocalize[localize].chLocalize9
    changeLangLocalize10.innerText = appLocalize[localize].chLocalize10
    changeLangLocalize11.innerText = appLocalize[localize].chLocalize11
  }
  setLocalize()
  // chuyển đổi ngôn ngữ
  clickLangVie.addEventListener('click', function(e) {
    e.preventDefault()
    localize = "vie"
    setLocalize()
    document.getElementById('input-phone').placeholder='Số điện thoại'
    document.getElementById('pass').placeholder='Mật khẩu'
    document.querySelector('.langEng').classList.remove('langBold')
    document.querySelector('.langVie').classList.add('langBold')
  })
  clickLangEng.addEventListener('click', function(e) {
    e.preventDefault()
    localize = "en"
    setLocalize()
    document.getElementById('input-phone').placeholder='Phone number'
    document.getElementById('pass').placeholder='Password'
    document.querySelector('.langEng').classList.add('langBold')
    document.querySelector('.langVie').classList.remove('langBold')
  })
  // document.getElementById("button").addEventListener("click", changeLocalize)
  const arr = [
    { a: "Cờ", b: "VN", c: "+84" },
    { a: "Cờ", b: "NB", c: "+85" },
    { a: "Cờ", b: "Ita", c: "+86" },
    { a: "Cờ", b: "Đức", c: "+87" },
  ]
  let phone = ""
  let pass = ""
  let code = ""
  // duyet mang code
  function loadCode() {
    let arrCode = arr.map(val => {
      return `<div class="select-items">
    <span>${val.a}</span>
    <span>${val.b}</span>
    <span>${val.c}</span>
  </div> `
    })
    // console.log("arrCode", arrCode)
    let Html = arrCode.join('')
    // console.log("html", Html)
    selectDDrow.innerHTML = Html
  }
  loadCode()
  const selectItems = document.querySelectorAll('.select-items')
  // fun lấy dữ liệu
  function clickItems(items) {
    items.addEventListener('click', function (e) {
      tf.innerHTML = e.currentTarget.getElementsByTagName('span')[2].innerText
      code = e.currentTarget.getElementsByTagName('span')[2].innerText
    })

  }
  // fun rê chuột
  function mouseOver() {
    selectDrow.classList.remove('hidden')

  }
  // fun lấy giá trị phone và pass
  //ẩn hiện button 1 và button 2
  function addNumber(e) {
    phone = e.target.value
    if (phone != "") {
      Showbt2.classList.remove('disabled')
      Showbt2mess.classList.add('showbt2mess')
    } else if (phone == "") {
      Showbt2.classList.add('disabled')
      Showbt2mess.classList.remove('showbt2mess')
    } else if (phone != "" && pass != "") {
      Showbt1.classList.remove('disabled')
    } else {
      Showbt1.classList.add('disabled')
    }
  }

  function addPass(e) {
    pass = e.target.value
    if (phone != "" && pass != "") {
      Showbt1.classList.remove('disabled')
    } else {
      Showbt1.classList.add('disabled')
    }
  }

  // chuyển đổi sdt và ma QR
  tabsLi1.addEventListener('click', function (e) {
    e.preventDefault()
    tabsDiv1.style.display = 'block'
    tabsDiv2.style.display = 'none'
    document.querySelector('.tabs-a-2').classList.remove('active')
    document.querySelector('.tabs-a-1').classList.add('active')
  })
  tabsLi2.addEventListener('click', function (e) {
    e.preventDefault()
    tabsDiv2.style.display = 'block'
    tabsDiv1.style.display = 'none'
    tabsLi2.classList.add('active')
    document.querySelector('.tabs-a-2').classList.add('active')
    document.querySelector('.tabs-a-1').classList.remove('active')
  })
  // event hiện khu vực cờ
  selectFlag.addEventListener('mouseover', mouseOver)
  //event ẩn khu vực cờ
  bodyClick.addEventListener('click', function () {
    selectDrow.classList.add('hidden')
  })
  //event lấy items gán vào input
  selectItems.forEach(clickItems)
  //event lấy giá trị phone number và password
  inputPhone.addEventListener('keyup', addNumber)
  inputPass.addEventListener('keyup', addPass)
}
