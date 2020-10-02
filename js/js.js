
document.addEventListener("DOMContentLoaded", dOMContentLoaded);

function dOMContentLoaded() {
  const selectFlag = document.querySelector(".select-flag")
  const selectDrow = selectFlag.querySelector(".select-drow")
  const selectItems = document.querySelectorAll('.select-items')
  const selectFl = document.querySelector('.tf')
  const inputPhone = document.querySelector("#input-phone")
  const inputPass = document.querySelector('#pass')
  const show = document.querySelector('.show')
  let phone = ""
  let password = ""
  let code = ""
  inputPhone.addEventListener('keyup', function (e) {

    console.log("fsfsf", e.target.value)
    phone = e.target.value
    if (phone != "" && password != "") {
      show.classList.remove('disabled')
    } else {
      show.classList.add('disabled')
    }
  })
  inputPass.addEventListener('keyup', function (e) {

    console.log("fsfsf", e.target.value)
    password = e.target.value
    if (phone != "" && password != "") {
      show.classList.remove('disabled')
    } else {
      show.classList.add('disabled')
    }
  })
  function mouseLeave() {
    console.log('daclick')
    selectDrow.classList.add('hidden')
  }
  selectFlag.addEventListener("mouseover", function () {
    console.log('daclick')
    selectDrow.classList.remove('hidden')
  })
  // selectFlag.addEventListener("mouseleave", mouseLeave)
  selectItems.forEach(function (items) {
    items.addEventListener('click', function (e) {

      console.log("ádasdqd", e.currentTarget.getElementsByTagName('span')[2].innerText)
      selectFl.innerHTML = e.currentTarget.getElementsByTagName('span')[2].innerText
      code = e.currentTarget.getElementsByTagName('span')[2].innerText
    })
  })
}


