function kiemTraRong(value, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    if (value == "") {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    } else {
        domTheSpan.innerHTML = "";
        return true;
    }
}

function kiemTraDoDaiKyTu(value, min, max, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    if (value.length < min || value.length > max) {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    } else {
        domTheSpan.innerHTML = "";
        return true;
    }
}

function kiemTraTen(hoTen, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    var regexName = /^[a-zA-Z]+$/;
    var isValid = regexName.test(hoTen);
    
    if (isValid) {
        domTheSpan.innerHTML = "";
        return true;
    } else {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    }
}

function kiemTraEmail(email, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = regexEmail.test(email);

    if (isValid) {
        domTheSpan.innerHTML = "";
        return true;
    } else {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    }
}

function kiemTraMatKhau(matKhau, min, max, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    if (matKhau.length < min || 
        matKhau.length > max || 
        !/[0-9]/.test(matKhau) || 
        !/[A-Z]/.test(matKhau) || 
        !/[!@#$%^&*]/.test(matKhau)
    ) {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;        
    } else {
        domTheSpan.innerHTML = "";
        return true;
    }
}

function kiemTraNgayLam(ngayLam, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    var regexNgayLam = /^\d{2}\/\d{2}\/\d{4}$/;
    var isValid = regexNgayLam.test(ngayLam);

    if (isValid) {
        domTheSpan.innerHTML = "";
        return true;
    } else {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    }
}

function kiemTraLuong(salary, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    if (isNaN(salary) || salary < 1000000 || salary > 20000000) {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    } else {
        domTheSpan.innerHTML = "";
        return true;
    }
}

function kiemTraChucVu(idSelect, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);
    var domSelect = getEle(idSelect).selectedIndex;

    if (domSelect == 0) {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    } else {
        domTheSpan.innerHTML = "";
        return true;
    }
}

function kiemTraGioLam(gioLam, idCanhBao, mess) {
    var domTheSpan = getEle(idCanhBao);

    if (isNaN(gioLam) || gioLam < 80 || gioLam > 200) {
        domTheSpan.style.display = "block";
        domTheSpan.innerHTML = mess;
        return false;
    } else {
        domTheSpan.innerHTML = "";
        return true;
    }
}