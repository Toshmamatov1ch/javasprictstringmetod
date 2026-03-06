// Uyga vazifa

// 1-masala  foydalanuvchi matn kiritiadi uni uzunigini toping va konsolega chiqaring

// let user = prompt(
//   "Menga matn kiritng uni nechta harfsan iboraligini bilib beraman: ",
// );

// console.log(user.length);

// >================================================================================

// 2-masala foydalanuvchi ismini kiritadi uni uni katta harflarda qaytaring

// let name = prompt("Ismingizni kiriting: ");

// console.log(name.toLocaleUpperCase());

// >===============================================================================

// 3-masala foydalanuvchi ismini kiritadi uni uni katta kichik harflarda qaytaring qaytaring

// let userName = prompt("Ismingizni kiriting: ");

// console.log(userName.toLocaleUpperCase());
// console.log(userName.toLocaleLowerCase());

// >================================================================================

// 4-masala foydalanuvchi ismini kiritadi uni biirnchi harfini katta qolganlaini kichik harfda qaytring

// let userName = prompt("Ismingizni kirting: ");

// if (userName) {
//   let natija = "";

//   for (let d = 0; d < userName.length; d++) {
//     if (d === 0) {
//       natija += userName[d].toUpperCase();
//     } else {
//       natija += userName[d].toLocaleLowerCase();
//     }
//   }

//   console.log(natija);
// }

// >=====================================================================================

//5-  foydalanuvchi matn va harf kiritadi harf shu matn ichida bormi yoqi boolean type qaytarsin

// let matn = prompt("Matn kiting:");
// let harf = prompt("Qidirgan harfingini krting");

// let bor = false;

// for (let d = 0; d < matn.length; d++) {
//   if (matn[d] === harf) {
//     bor = true;
//     break;
//   }
// }
// console.log(bor);

// >==========================================================================================

//6-masala foydalanuvchi matn kiritadi unda nechta unli harf borligini qaytaring

// let matn = prompt("Matn kiriting:");
// let unlilar = "aeiouo'AEIOUO'";
// let count = 0;

// for (let i = 0; i < matn.length; i++) {
//   if (unlilar.includes(matn[i])) {
//     count++;
//   }
// }

// console.log("Jami unlilar soni: " + count);

// >======================================================================================

//7-mASALA foydalanuvchi matn kiritadi unda nechta element qatnashganini aniqlang bunda probellar yani bosh joylar inobatga olinmasin

// let user = prompt("Matn kiriting: ");

// let bor = 0;

// for (d = 0; d < user.length; d++) {
//   if (user[d] !== " ") {
//     bor++;
//   }
// }

// console.log(bor);

// >================================================================================================

//8-masala matn kiritadi va harf kiritadi shu harfni indexsini toping

// let matn = prompt("Matn kiriting: ");
// let harf = prompt("Harf kiriting: ");

// let index = matn.indexOf(harf);

// if (index !== -1) {
//   console.log("Harfning indeksi: " + index);
// } else {
//   console.log("Kechirasiz, bunday harf matnda yo'q");
// }

// >==================================================================================================

// let matn = prompt("Matn kiriting: ");
// let harf = prompt("Qidirilayotgan harfni kiriting: ");

// let index = -1;

// for (let i = 0; i < matn.length; i++) {
//   if (matn[i].toLowerCase() === harf.toLowerCase()) {
//     index = i;
//     break;
//   }
// }

// if (index !== -1) {
//   console.log(index);
// } else {
//   console.log("Kechirasiz, bunday harf matnda yo'q.");
// }

// >========================================================================

// 10-masala foydalanuvchi raqam va matn aralash string kiritadi bundan raqamlarni ajratib olib qaytaring

// let matn = prompt("matn va raqam kiting:");
// let natija = "";

// for (let i = 0; i < matn.length; i++) {
//   if (matn[i] >= "0" && matn[i] <= "9") {
//     natija += matn[i];
//   }
// }

// console.log(natija);

// >==============================================================================
