function DanhSachNhanVien() {
    this.arr = [];

    this.themNV = function (nhanVien) {
        this.arr.push(nhanVien);
    }

    this.timViTriNV = function (taiKhoan) {
        var index = -1;
        for (let i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i];
            if (taiKhoan === nv.taiKhoan) {
                index = i;
                break;
            }
        }
        return index;
    }

    this.xoaNV = function (taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index != -1) {
            this.arr.splice(index, 1);
        }
    }

    this.layThongTinNVTheoTaiKhoan = function (taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index != -1) {
            return this.arr[index];
        }
        return null;
    }

    this.capNhatNV = function (nhanVien) {
        var index = this.timViTriNV(nhanVien.taiKhoan);
        if (index != -1) {
            this.arr[index] = nhanVien; 
        }
    }

    this.timKiemNV = function (keyWord) {
        var mangTimKiem = [];
        for (let i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];

            var keyWordLowerCase = keyWord.toLowerCase();

            var xepLoaiLowerCase = nhanVien.loaiNhanVien.toLowerCase();

            if (xepLoaiLowerCase.indexOf(keyWordLowerCase) != -1) {
                mangTimKiem.push(nhanVien);
            }
        }
        return mangTimKiem;
    }
}