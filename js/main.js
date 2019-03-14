    var a = document.getElementsByClassName('main')[0];
    var b = document.getElementsByClassName('form')[0];
    var c = document.getElementsByClassName('p')[0];
    console.log(c);

    function pop() {
        a.style.opacity = "1";
        a.style.zIndex = "1";
        a.style.transition = ".3s all";
        b.style.transition = ".3s all";
        a.style.height = "100%";
        b.style.opacity = "1";
        b.style.top = "50%";
        b.style.zIndex = "1";
        c.innerHTML = ""
    }

    function popdown() {
        a.style.opacity = "0";
        a.style.zIndex = "-1";
        a.style.transition = ".3s all";
        b.style.transition = ".3s all";
        a.style.height = "100%";
        b.style.opacity = "0";
        b.style.top = "35%";
        b.style.zIndex = "-1";
    }

    function msg() {
        a.style.opacity = "0";
        a.style.zIndex = "-1";
        a.style.transition = ".3s all";
        b.style.transition = ".3s all";
        a.style.height = "100%";
        b.style.opacity = "0";
        b.style.top = "35%";
        b.style.zIndex = "-1";
        var name1 = document.getElementById('name').value;
        var mail = document.getElementById('mail').value;
        c.innerHTML = "Hello " + name1 + ". Your Email is " + mail;
    }
