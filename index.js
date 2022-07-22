// Bai 1
/*mô hình 3 khối
 - Đầu vào
 Nhập vào 3 số nguyên
 -Xử Lý
 So sánh 3 số và sắp xếp theo chiều tăng dần
 -Đầu ra
 hiện thị lên cho người dùng kết quả
 */
function soNguyen() {
  // dau vao
  let sna = +document.getElementById("sna").value;
  let snb = +document.getElementById("snb").value;
  let snc = +document.getElementById("snc").value;

  // Xu ly
  let tangDan = 0;
  if (sna > snb) {
    tangDan = sna;
    sna = snb;
    snb = tangDan;
  }
  if (sna > snc) {
    tangDan = sna;
    sna = snc;
    snc = tangDan;
  }
  if (snb > snc) {
    tangDan = snb;
    snb = snc;
    snc = tangDan;
  }
  // Đầu ra
  let result = "Số theo thứ tự tăng dần: " + sna + " " + snb + " " + snc;
  document.getElementById("showInfoSN").innerHTML = result;
  document.getElementById("showInfoSN").className =
    "card-footer bg-success text-center text-white";
}
// bai 2
/*mô hình 3 khối
 - Đầu vào
 Chọn các hiện thị thành viên
 -Xử Lý
 Gán giá trị cho các option khi gọi tới thì hiện thì xin chào tướng ứng giá trị
 -Đầu ra
 Hiện thị lơi chào
 */
function chaoHoi() {
  // Đâu vào
  let chaoHoi = +document.getElementById("chonNG").value;
  let result = "Xin chào ";
  //   Xử lý
  if (chaoHoi === 1) {
    result += "Bố!";
  } else if (chaoHoi === 2) {
    result += "Mẹ!";
  } else if (chaoHoi === 3) {
    result += "Anh Trai!";
  } else {
    result += "Em gái!";
  }
  //   Đầu ra
  document.getElementById("showInfoChao").innerHTML = result;
  document.getElementById("showInfoChao").className =
    "card-footer bg-success text-center text-white";
}
// bai 3
/*mô hình 3 khối
 - Đầu vào
 Nhập 3 số chẵn lẽ từ người dùng
 -Xử Lý
 Lấy từng số chia %2 nếu dư 0 thì số đó chia hết cho 2 là số chẵn
 Sô k chia hết cho 2 la số lẻ
 -Đầu ra
 Hiển thị  đếm số lẻ vè chăn
 */
function demSo() {
  // Đầu vào
  let so1 = +document.getElementById("so1").value;
  let so2 = +document.getElementById("so2").value;
  let so3 = +document.getElementById("so3").value;
  //   Xử Lý
  let soChan = 0;
  let soLe = 0;

  if (so1 % 2 == 0) {
    soChan++;
  }
  if (so2 % 2 == 0) {
    soChan++;
  }
  if (so3 % 2 == 0) {
    soChan++;
  }
  soLe = 3 - soChan;
  //   Đầu ra
  document.getElementById("showInfoSo").innerHTML =
    "Sổ chẵn là " + soChan + " Số lẻ là " + soLe;
  document.getElementById("showInfoSo").className =
    "card-footer bg-success text-center text-white";
}
// bai 4
/*mô hình 3 khối
 - Đầu vào
 Nhập 3 canh của tam giac
 -Xử Lý
 Đều: Nếu 3 cạnh bằng nhau
 Đều: Nếu 3 cạnh bằng nhau
 Vuông: c^2 = a^2 + b^2
 -Đầu ra
 Hiện thi loại tam giác
 */
function tamGiac() {
  // đầu vao
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  //    Xử lý
  let result = "";

  if (a == b && b == c && c == a) {
    result = "Hình tam giác đều";
  } else if (a == b || a == c || b == c) {
    result = "Hình tam giác cân";
  } else if (
    a * a == b * b + c * c ||
    b * b === c * c + a * a ||
    c * c == a * a + b * b
  ) {
    result = "Hình tam giác vuông";
  } else {
    result = "Một loại tam giác nào đó";
  }
  //   Đầu ra
  document.getElementById("showInfoTamG").innerHTML = result;
  document.getElementById("showInfoTamG").className =
    "card-footer bg-success text-center text-white";
}
