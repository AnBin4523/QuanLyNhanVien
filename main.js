var dsnv = new DanhSachNhanVien();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNhanVien() {
    var taiKhoan = getEle("tknv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var salary = getEle("luongCB").value;
    var chucVu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;

    var isValid = true;
    // kiểm tra tài khoản
    isValid &= 
        kiemTraRong(taiKhoan, "tbTKNV", "Vui lòng không bỏ trống") &&
        kiemTraDoDaiKyTu(taiKhoan, 4, 6, "tbTKNV", "Tài khoản tối đa 4 - 6 ký số");
    // kiểm tra tên
    isValid &= 
        kiemTraRong(hoTen, "tbTen", "Vui lòng không bỏ trống") &&
        kiemTraTen(hoTen, "tbTen", "Tên nhân viên phải là chữ");
    // kiểm tra email
    isValid &=
        kiemTraRong(email, "tbEmail", "Vui lòng không bỏ trống") &&
        kiemTraEmail(email, "tbEmail", "Email phải đúng định dạng");
    // kiểm tra mật khẩu
    isValid &=
        kiemTraRong(matKhau, "tbMatKhau", "Vui lòng không bỏ trống") &&
        kiemTraMatKhau(matKhau, 6, 10, "tbMatKhau", "Mật khẩu phải từ 6-10 ký tự và chứa ít nhất 1 số, 1 chữ hoa và 1 ký tự đặc biệt");
    // kiểm tra ngày làm
    isValid &=
        kiemTraRong(ngayLam, "tbNgay", "Vui lòng không bỏ trống") &&
        kiemTraNgayLam(ngayLam, "tbNgay", "Ngày làm không hợp lệ. Định dạng mm/dd/yyyy");
    // kiểm tra lương
    isValid &=
        kiemTraRong(salary, "tbLuongCB", "Vui lòng không bỏ trống") &&
        kiemTraLuong(salary, "tbLuongCB", "Lương cơ bản phải từ 1,000,000 đến 20,000,000");
    // kiểm tra chức vụ
    isValid &=
        kiemTraRong(chucVu, "tbChucVu", "Vui lòng không bỏ trống") &&
        kiemTraChucVu("chucvu", "tbChucVu", "Vui lòng chọn chức vụ hợp lệ");
    // kiểm tra số giờ
    isValid &=
        kiemTraRong(gioLam, "tbGiolam", "Vui lòng không bỏ trống") &&
        kiemTraGioLam(gioLam, "tbGiolam", "Số giờ làm phải từ 80 đến 200 giờ");

    if (!isValid) {
        return null;
    }

    var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, salary, chucVu, gioLam);
    nhanVien.tinhTotalSalary();
    nhanVien.xepLoaiNhanVien();
    return nhanVien;
}

function themNhanVien() {
    var nhanVien = layThongTinNhanVien();

    if (nhanVien) {
        dsnv.themNV(nhanVien);

        renderListNV(dsnv.arr);

        setLocalStorage();
    }  
}

function renderListNV(data) {
    var content = "";
    for (let i = 0; i < data.length; i++) {
        var nhanVien = data[i];

        content += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.totalSalary}</td>
                <td>${nhanVien.loaiNhanVien}</td>
                <td>
                    <button class = "btn btn-info" onclick = "suaNV('${nhanVien.taiKhoan}')">Sửa</button>
                    <button onclick = "xoaNV('${nhanVien.taiKhoan}')" class = "btn btn-danger">Xóa</button>
                </td>
            <tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    renderListNV(dsnv.arr);
    setLocalStorage();
}

function suaNV(taiKhoan) {
    var nhanVien = dsnv.layThongTinNVTheoTaiKhoan(taiKhoan);
    if (nhanVien) {
        getEle("tknv").value = nhanVien.taiKhoan;
        getEle("tknv").disabled = true;

        getEle("name").value = nhanVien.hoTen;
        getEle("email").value = nhanVien.email;
        getEle("password").value = nhanVien.matKhau;
        getEle("datepicker").value = nhanVien.ngayLam;
        getEle("luongCB").value = nhanVien.salary;
        getEle("chucvu").value = nhanVien.chucVu;
        getEle("gioLam").value = nhanVien.gioLam;
    }
}

function capNhatNV() {
    var nhanVien = layThongTinNhanVien();
    if (nhanVien) {
        dsnv.capNhatNV(nhanVien);
        renderListNV(dsnv.arr);
        setLocalStorage();
    }
}

getEle("searchName").addEventListener("keyup", function () {
    var keyWord = getEle("searchName").value;
    var mangTimKiem = dsnv.timKiemNV(keyWord);
    renderListNV(mangTimKiem);
})

function setLocalStorage() {
    var dataString = JSON.stringify(dsnv.arr);

    localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");

        var dataJson = JSON.parse(dataString);

        dsnv.arr = dataJson;

        renderListNV(dsnv.arr); 
    }
}

