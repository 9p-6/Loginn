function bgcolor() {
    document.getElementById('al5alefya').style.background=document.getElementById('bgcolor').value;
    
}


function login() {
    const data = {
        relon:{password:'1'},
        osama:{password:'12345'},
        hamza:{password:'1234'},
        foad:{password:'123'},
    }
        const inpuserRaw = document.getElementById('inptext').value;
        const inpuser = inpuserRaw.toLowerCase();
        const inppass = document.getElementById('inppass').value;
        const msg = document.getElementById('msg')

    if (data.hasOwnProperty(inpuser) && inppass === data[inpuser].password) {
        window.msg.innerHTML=`<span style='color:green;'> Welcome </span>` + inpuserRaw+"!"
        setTimeout(() => {
        window.location.href = "hhh.html"; 
        }, 3000);
    } else {
        window.msg.innerHTML=`<span style=
        'color:red;'
        font-size: 6vw;
        >Check UserName Or Password</span>`
    }
  
    
}

  function logout() {
    sessionStorage.removeItem('authToken');
    window.location.href = "index.html";
}
