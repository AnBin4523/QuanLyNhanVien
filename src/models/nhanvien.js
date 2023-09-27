function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, salary, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.salary = salary;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.totalSalary = 0;
    this.loaiNhanVien = "";

    this.tinhTotalSalary = function () {
        if (this.chucVu === "Sếp") {
            this.totalSalary = this.salary * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            this.totalSalary = this.salary * 2;
        } else {
            this.totalSalary = this.salary;
        }
    };

    this.xepLoaiNhanVien = function () {
        if (this.gioLam >= 192) {
            this.loaiNhanVien = "Xuất sắc";
        } else if (this.gioLam >= 176) {
            this.loaiNhanVien = "Giỏi";
        } else if (this.gioLam >= 160) {
            this.loaiNhanVien = "Khá";
        } else {
            this.loaiNhanVien = "Trung bình";
        }
    };
}