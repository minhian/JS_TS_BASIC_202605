/*
================================================================================
                      BÀI TẬP VÒNG LẶP FOR VÀ WHILE
================================================================================
*/

// ====================================
// PHẦN 1: BÀI TẬP CƠ BẢN WHILE LOOP
// ====================================

// Bài 1: In ra các số từ 1 đến 10 dùng while
function bai1_InSo1Den10() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// Bài 2: In ra các số chẵn từ 2 đến 20 dùng while
function bai2_InSoChauTu2Den20() {
  let i = 2;
  while (i <= 20) {
    console.log(i);
    i += 2;
  }
}

// Bài 3: Tính tổng của các số từ 1 đến 100 dùng while
function bai3_TinhTongTu1Den100() {
  let i = 1;
  let tong = 0;
  while (i <= 100) {
    tong += i;
    i++;
  }
  console.log(`Tổng từ 1 đến 100: ${tong}`);
  return tong;
}

// Bài 4: Đếm bao nhiêu lần lặp cần thiết để tổng >= 500 (bắt đầu từ 1)
function bai4_DemSoLanDenTong500() {
  let i = 0;
  let tong = 0;
  while (tong < 500) {
    i++;
    tong += i;
  }
  console.log(`Cần ${i} lần để tổng đạt 500: ${tong}`);
  return i;
}

// Bài 5: In ra "Xin chào" 5 lần dùng while
function bai5_InXinChao5Lan() {
  let dem = 1;
  while (dem <= 5) {
    console.log(`Lần ${dem}: Xin chào`);
    dem++;
  }
}

// ====================================
// PHẦN 2: BÀI TẬP CƠ BẢN FOR LOOP
// ====================================

// Bài 6: In ra các số từ 1 đến 10 dùng for
function bai6_ForInSo1Den10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Bài 7: In ra các số lẻ từ 1 đến 20 dùng for
function bai7_ForInSoLeFrom1To20() {
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}

// Bài 8: Tính tích (nhân) của các số từ 1 đến 5 dùng for
function bai8_ForTinhTichTu1Den5() {
  let tich = 1;
  for (let i = 1; i <= 5; i++) {
    tich *= i;
  }
  console.log(`Tích từ 1 đến 5: ${tich}`);
  return tich;
}

// Bài 9: In ra bảng cửu chương 3 (3x1=3, 3x2=6, ...)
function bai9_BangCuuChương3() {
  for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
  }
}

// Bài 10: In đảo ngược các số từ 10 về 1 dùng for
function bai10_InDaoNguoc10Den1() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// ====================================
// PHẦN 3: BÀI TẬP VỚI MẢNG (FOR VÀ FOR OF)
// ====================================

// Bài 11: In ra tất cả phần tử trong mảng dùng for cổ điển
function bai11_InMangFORClassic() {
  let sanPham = ["Táo", "Cam", "Chuối", "Dâu"];
  for (let i = 0; i < sanPham.length; i++) {
    console.log(`Vị trí ${i}: ${sanPham[i]}`);
  }
}

// Bài 12: In ra tất cả phần tử trong mảng dùng for of
function bai12_InMangForOf() {
  let sanPham = ["Táo", "Cam", "Chuối", "Dâu"];
  for (let item of sanPham) {
    console.log(item);
  }
}

// Bài 13: Tìm số lớn nhất trong mảng
function bai13_TimSoLonNhat() {
  let danhSoSo = [15, 3, 42, 8, 99, 5, 23];
  let soLonNhat = danhSoSo[0];
  
  for (let i = 1; i < danhSoSo.length; i++) {
    if (danhSoSo[i] > soLonNhat) {
      soLonNhat = danhSoSo[i];
    }
  }
  
  console.log(`Số lớn nhất: ${soLonNhat}`);
  return soLonNhat;
}

// Bài 14: Tính tổng tất cả các phần tử trong mảng
function bai14_TinhTongMang() {
  let danhSoSo = [10, 20, 30, 40, 50];
  let tong = 0;
  
  for (let so of danhSoSo) {
    tong += so;
  }
  
  console.log(`Tổng mảng: ${tong}`);
  return tong;
}

// Bài 15: Lọc các số chẵn từ mảng và in ra
function bai15_LocSoChauTrongMang() {
  let danhSoSo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Các số chẵn:");
  
  for (let i = 0; i < danhSoSo.length; i++) {
    if (danhSoSo[i] % 2 === 0) {
      console.log(danhSoSo[i]);
    }
  }
}

// Bài 16: Đảo ngược mảng và in ra
function bai16_DaoNguocMang() {
  let mang = ["A", "B", "C", "D"];
  console.log("Mảng ban đầu:", mang);
  
  for (let i = mang.length - 1; i >= 0; i--) {
    console.log(mang[i]);
  }
}

// Bài 17: Đếm số lần xuất hiện của một phần tử trong mảng
function bai17_DemSoLanXuatHien() {
  let danhSoSo = [1, 2, 2, 3, 2, 4, 2, 5];
  let timSo = 2;
  let dem = 0;
  
  for (let so of danhSoSo) {
    if (so === timSo) {
      dem++;
    }
  }
  
  console.log(`Số ${timSo} xuất hiện ${dem} lần`);
  return dem;
}

// ====================================
// PHẦN 4: BÀI TẬP VỚI OBJECT (FOR IN)
// ====================================

// Bài 18: In ra tất cả key và value của object dùng for in
function bai18_InObjectForIn() {
  let config = {
    browser: "Chrome",
    timeout: 5000,
    headless: false,
    retries: 3
  };
  
  for (let key in config) {
    console.log(`${key}: ${config[key]}`);
  }
}

// Bài 19: Tính tổng tất cả giá trị số trong object
function bai19_TinhTongValueObject() {
  let thongTin = {
    chiPhiNha: 5000000,
    chiPhiAn: 1000000,
    chiPhiBaoHiem: 500000,
    chiPhiXe: 2000000
  };
  
  let tong = 0;
  for (let key in thongTin) {
    tong += thongTin[key];
  }
  
  console.log(`Tổng chi phí: ${tong}`);
  return tong;
}

// ====================================
// PHẦN 5: BÀI TẬP NÂNG CAO - MẢNG CỦA OBJECT
// ====================================

// Bài 20: In ra thông tin sản phẩm dùng for of
function bai20_InSanPham() {
  let danhSachSP = [
    { ten: "Áo thun", gia: 200000, soLuong: 5 },
    { ten: "Quần jean", gia: 500000, soLuong: 3 },
    { ten: "Giày thể thao", gia: 1000000, soLuong: 2 }
  ];
  
  for (let sp of danhSachSP) {
    console.log(`${sp.ten} - Giá: ${sp.gia} - Số lượng: ${sp.soLuong}`);
  }
}

// Bài 21: Tính tổng giá tiền của tất cả sản phẩm
function bai21_TinhTongGiaTienSP() {
  let danhSachSP = [
    { ten: "Áo thun", gia: 200000, soLuong: 5 },
    { ten: "Quần jean", gia: 500000, soLuong: 3 },
    { ten: "Giày thể thao", gia: 1000000, soLuong: 2 }
  ];
  
  let tongGia = 0;
  for (let sp of danhSachSP) {
    tongGia += sp.gia * sp.soLuong;
  }
  
  console.log(`Tổng giá tiền: ${tongGia}`);
  return tongGia;
}

// Bài 22: Tìm sản phẩm có giá cao nhất
function bai22_TimSPGiaCaoNhat() {
  let danhSachSP = [
    { ten: "Áo thun", gia: 200000 },
    { ten: "Quần jean", gia: 500000 },
    { ten: "Giày thể thao", gia: 1000000 }
  ];
  
  let spGiaCaoNhat = danhSachSP[0];
  
  for (let sp of danhSachSP) {
    if (sp.gia > spGiaCaoNhat.gia) {
      spGiaCaoNhat = sp;
    }
  }
  
  console.log(`Sản phẩm đắt nhất: ${spGiaCaoNhat.ten} - Giá: ${spGiaCaoNhat.gia}`);
  return spGiaCaoNhat;
}

// Bài 23: Lọc các sản phẩm có giá > 300000
function bai23_LocSPTheoGia() {
  let danhSachSP = [
    { ten: "Áo thun", gia: 200000 },
    { ten: "Quần jean", gia: 500000 },
    { ten: "Giày thể thao", gia: 1000000 },
    { ten: "Mũ", gia: 100000 }
  ];
  
  console.log("Sản phẩm có giá > 300000:");
  for (let sp of danhSachSP) {
    if (sp.gia > 300000) {
      console.log(`${sp.ten} - ${sp.gia}`);
    }
  }
}

// ====================================
// PHẦN 6: BÀI TẬP LỒNG VÒNG LẶP
// ====================================

// Bài 24: In hình chữ nhật sao "*" (5x3)
function bai24_HinhChuNhatSao() {
  for (let i = 0; i < 3; i++) {
    let hang = "";
    for (let j = 0; j < 5; j++) {
      hang += "* ";
    }
    console.log(hang);
  }
}

// Bài 25: In bảng cửu chương từ 1 đến 5
function bai25_BangCuuChuongDayDu() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
  }
}

// Bài 26: In tam giác sao
function bai26_TamGiacSao() {
  for (let i = 1; i <= 5; i++) {
    let hang = "";
    for (let j = 0; j < i; j++) {
      hang += "* ";
    }
    console.log(hang);
  }
}

// ====================================
// PHẦN 7: BÀI TẬP VỀ ĐIỀU KIỆN DỪNG
// ====================================

// Bài 27: Tìm số đầu tiên chia hết cho 7 từ 1 đến 100
function bai27_TimSoDauTienChiaHetCho7() {
  let i = 1;
  while (i <= 100) {
    if (i % 7 === 0) {
      console.log(`Số đầu tiên chia hết cho 7: ${i}`);
      break; // Dừng vòng lặp
    }
    i++;
  }
}

// Bài 28: Tìm số chẵn đầu tiên từ 1 đến 20 dùng for
function bai28_TimSoChauDauTien() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`Số chẵn đầu tiên: ${i}`);
      break;
    }
  }
}

// Bài 29: Bỏ qua các số chia hết cho 3, in ra các số từ 1 đến 20
function bai29_BoQuaSoChiaHetCho3() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      continue; // Bỏ qua lần này
    }
    console.log(i);
  }
}

// ====================================
// PHẦN 8: BÀI TẬP NÂNG CAO
// ====================================

// Bài 30: Kiểm tra xem mảng có chứa một giá trị nào đó không
function bai30_KiemTraGiaTriTrongMang() {
  let mang = [10, 20, 30, 40, 50];
  let timGiaTri = 30;
  let tìmThấy = false;
  
  for (let so of mang) {
    if (so === timGiaTri) {
      tìmThấy = true;
      break;
    }
  }
  
  console.log(`Giá trị ${timGiaTri} ${tìmThấy ? "có" : "không"} trong mảng`);
  return tìmThấy;
}

// Bài 31: Tìm chỉ số của phần tử cần tìm trong mảng
function bai31_TimChiSoPhantTu() {
  let mang = ["A", "B", "C", "D", "E"];
  let chuoiCanTim = "C";
  let chiSo = -1;
  
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] === chuoiCanTim) {
      chiSo = i;
      break;
    }
  }
  
  if (chiSo !== -1) {
    console.log(`Tìm thấy "${chuoiCanTim}" tại vị trí ${chiSo}`);
  } else {
    console.log(`Không tìm thấy "${chuoiCanTim}"`);
  }
  return chiSo;
}

// Bài 32: Tính số trung bình cộng của mảng
function bai32_TinhTrungBinhCong() {
  let danhSoSo = [10, 20, 30, 40, 50];
  let tong = 0;
  
  for (let so of danhSoSo) {
    tong += so;
  }
  
  let trungBinh = tong / danhSoSo.length;
  console.log(`Trung bình cộng: ${trungBinh}`);
  return trungBinh;
}

// Bài 33: Kiểm tra xem mảng có phần tử nào âm không
function bai33_KiemTraSoAm() {
  let danhSoSo = [5, -3, 8, -1, 10];
  let coSoAm = false;
  
  for (let so of danhSoSo) {
    if (so < 0) {
      coSoAm = true;
      break;
    }
  }
  
  console.log(`Có số âm trong mảng: ${coSoAm}`);
  return coSoAm;
}

// Bài 34: Tạo mảng mới chứa bình phương các số từ mảng cũ
function bai34_TaoBinhPhuong() {
  let mang = [1, 2, 3, 4, 5];
  let mangBinhPhuong = [];
  
  for (let so of mang) {
    mangBinhPhuong.push(so * so);
  }
  
  console.log("Mảng ban đầu:", mang);
  console.log("Mảng bình phương:", mangBinhPhuong);
  return mangBinhPhuong;
}

// Bài 35: Đếm bao nhiêu sản phẩm có giá từ 300000 trở lên
function bai35_DemSPTheoGia() {
  let danhSachSP = [
    { ten: "Áo thun", gia: 200000 },
    { ten: "Quần jean", gia: 500000 },
    { ten: "Giày thể thao", gia: 1000000 },
    { ten: "Mũ", gia: 100000 },
    { ten: "Túi", gia: 350000 }
  ];
  
  let dem = 0;
  for (let sp of danhSachSP) {
    if (sp.gia >= 300000) {
      dem++;
    }
  }
  
  console.log(`Số sản phẩm có giá >= 300000: ${dem}`);
  return dem;
}

// ====================================
// HƯỚNG DẪN SỬ DỤNG
// ====================================
/*
Để chạy từng bài tập, bạn có thể:

1. Tìm hàm bài tập muốn chạy (ví dụ: bai1_InSo1Den10)
2. Ghi hàm đó vào console.log hoặc chạy trực tiếp
3. Hoặc nhập lệnh tại dòng cuối cùng của file

Ví dụ chạy bài 1:
bai1_InSo1Den10();

Ví dụ chạy bài 5:
bai5_InXinChao5Lan();
*/

// ====================================
// THỰC HIỆN CÁC BÀI TẬP (HÃY COMMENT/UNCOMMENT CÁC BÀI MUỐN CHẠY)
// ====================================

// console.log("=== BÀI 1 ===");
// bai1_InSo1Den10();

// console.log("\n=== BÀI 2 ===");
// bai2_InSoChauTu2Den20();

// console.log("\n=== BÀI 3 ===");
// bai3_TinhTongTu1Den100();

// console.log(bai20_InSanPham());

