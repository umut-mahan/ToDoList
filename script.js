document.getElementById("addTodo").addEventListener("click", function(){
    
    var todo = document.querySelector("#todoInput").value;
    if (todo == "") {
        var toastElList = [].slice.call(document.querySelectorAll('#emptyToast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
        return
    } else if (todo == " ") {
        var toastElList = [].slice.call(document.querySelectorAll('#emptyToast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
        return
    }

    else {
        var toastElList = [].slice.call(document.querySelectorAll('#addToast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
    }


    
    var todo = document.querySelector("#todoInput").value;
    document.querySelector("#todoInput").value = "";
    
    document.querySelector("#mainList").innerHTML += '<div class="row removable"><li class="col-9 list-group-item rounded">'+todo+'</li><span class="col-1"></span><button class="col-2 btn btn-outline-light" onclick="removeElement()"><svg viewBox="0 0 24 24" width="25" height="25" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg></button></div>';

    let listElement = document.querySelector("#mainList");
});


  function removeElement() {
    var element = document.querySelector(".removable");
    element.parentNode.removeChild(element);
  }

  document.getElementById("mainList").addEventListener("click", function(e){
    var li = e.target;
    li.classList.toggle("checked");
});



