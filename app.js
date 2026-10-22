// let hisobMalumoti = {
//   firstName: "   aSaDbEk  ",
//   lastName: " aBDULHAMIDOV ",
//   email: "  ASADBEK@GMAIL.COM",
//   username: " asadbek_dev   "
// };

// function birinchiHarfKatta(matn) {
//   let tozalanganMatn = matn.trim();
//   if (tozalanganMatn.length === 0) return "";
//   return tozalanganMatn[0].toUpperCase() + tozalanganMatn.slice(1).toLowerCase();
// }

// function kichikHarfgaOt(matn) {
//   return matn.trim().toLowerCase();
// }

// function pochtaTekshirish(pochta) {
//   let tozalanganPochta = pochta.trim();
//   let birinchiBelgi = tozalanganPochta.indexOf("@");
//   let oxirgiBelgi = tozalanganPochta.lastIndexOf("@");
//   return (
//     tozalanganPochta.endsWith(".com") &&
//     tozalanganPochta.includes("@") &&
//     birinchiBelgi === oxirgiBelgi &&
//     birinchiBelgi > 0
//   );
// }

// function taxallusTekshirish(taxallus) {
//   return taxallus.trim().length >= 5;
// }

// hisobMalumoti.firstName = birinchiHarfKatta(hisobMalumoti.firstName);
// hisobMalumoti.lastName = birinchiHarfKatta(hisobMalumoti.lastName);
// hisobMalumoti.email = kichikHarfgaOt(hisobMalumoti.email);
// hisobMalumoti.username = kichikHarfgaOt(hisobMalumoti.username);

// console.log(`Ism: ${hisobMalumoti.firstName}`);
// console.log(`Familiya: ${hisobMalumoti.lastName}`);
// console.log(`Email: ${hisobMalumoti.email}`);
// console.log(`Username: ${hisobMalumoti.username}`);

// let ismYozilganmi = hisobMalumoti.firstName.length > 0;
// let familiyaYozilganmi = hisobMalumoti.lastName.length > 0;
// let pochtaTogrimi = pochtaTekshirish(hisobMalumoti.email);
// let taxallusTogrimi = taxallusTekshirish(hisobMalumoti.username);

// if (pochtaTogrimi && taxallusTogrimi && ismYozilganmi && familiyaYozilganmi) {
//   console.log("Holat: muvaffaqiyatli ro‘yxatdan o‘tdi");
// } else {
//   console.log("Xatolik: Ro‘yxatdan o‘tishda xatolik yuz berdi!");
//   if (!pochtaTogrimi) {
//     console.log("- Email formati noto‘g‘ri (yagona @ va .com bilan tugashi shart)");
//   }
//   if (!taxallusTogrimi) {
//     console.log("- Username kamida 5 ta belgidan iborat bo‘lishi kerak");
//   }
//   if (!ismYozilganmi) {
//     console.log("- Ism kiritilmagan");
//   }
//   if (!familiyaYozilganmi) {
//     console.log("- Familiya kiritilmagan");
//   }
// }

// // =========================================================

// let mijozMalumoti = {
//   name: " hASanboy ",
//   email: "   haSanboy@H.COM    ",
//   phone: " +998 77 459 77 50   ",
//   password: " haSanboy_1709 "
// };

// const kattaHarfBoshiga = function (satr) {
//   let tozaSatr = satr.trim();
//   if (tozaSatr.length === 0) return "";
//   return tozaSatr[0].toUpperCase() + tozaSatr.slice(1).toLowerCase();
// };

// const pastkiRegistr = function (satr) {
//   return satr.trim().toLowerCase();
// };

// const boshJoyOlish = function (satr) {
//   return satr.trim();
// };

// const elektronPochtaTekshir = function (satr) {
//   let tozaSatr = satr.trim();
//   let boshIndex = tozaSatr.indexOf("@");
//   let sungiIndex = tozaSatr.lastIndexOf("@");
//   return (
//     tozaSatr.includes("@") &&
//     tozaSatr.endsWith(".com") &&
//     boshIndex === sungiIndex &&
//     boshIndex > 0 &&
//     tozaSatr.lastIndexOf(".com") > boshIndex + 1
//   );
// };

// const raqamBoshlanishi = function (satr) {
//   let tozaSatr = satr.trim();
//   return tozaSatr.startsWith("+998");
// };

// const maxfiyKalitUzunligi = function (satr) {
//   let tozaSatr = satr.trim();
//   return tozaSatr.length >= 8;
// };

// mijozMalumoti.name = kattaHarfBoshiga(mijozMalumoti.name);
// mijozMalumoti.email = pastkiRegistr(mijozMalumoti.email);
// mijozMalumoti.phone = boshJoyOlish(mijozMalumoti.phone);
// mijozMalumoti.password = boshJoyOlish(mijozMalumoti.password);

// console.log(`Ism: ${mijozMalumoti.name}`);
// console.log(`Email: ${mijozMalumoti.email}`);
// console.log(`Telefon: ${mijozMalumoti.phone}`);
// console.log(`Parol uzunligi: ${mijozMalumoti.password.length}`);

// let ismHolati = mijozMalumoti.name.length > 0;
// let pochtaHolati = elektronPochtaTekshir(mijozMalumoti.email);
// let raqamHolati = raqamBoshlanishi(mijozMalumoti.phone);
// let kalitHolati = maxfiyKalitUzunligi(mijozMalumoti.password);

// if (ismHolati && pochtaHolati && raqamHolati && kalitHolati) {
//   console.log("Holat: ma’lumotlar qabul qilindi");
// } else {
//   console.log("Holat: tekshiruvdan o‘tmadi!");
//   if (!ismHolati) console.log("Xatolik: Ism to‘g‘ri kiritilmagan!");
//   if (!pochtaHolati) console.log("Xatolik: Email noto‘g‘ri shaklda!");
//   if (!raqamHolati) console.log("Xatolik: Telefon raqami +998 bilan boshlanishi kerak!");
//   if (!kalitHolati) console.log("Xatolik: Parol kamida 8 ta belgidan iborat bo‘lishi lozim!");
// }

// // =========================================================

// let tovarTafsiloti = {
//   name: " wIRELESS HEADPHONES ",
//   category: " ELECTRONICS ",
//   description: " Bluetooth headphones with noise cancellation ",
//   code: " WH-2026 "
// };

// const qirqibOlish = satr => satr.trim();

// const nomniFormatlash = satr => {
//   let tozaQiymat = qirqibOlish(satr);
//   if (tozaQiymat.length === 0) return "";
//   return tozaQiymat[0].toUpperCase() + tozaQiymat.slice(1).toLowerCase();
// };

// const hammaHarfKatta = satr => qirqibOlish(satr).toUpperCase();

// const tavsifniSinash = satr => {
//   let tozaQiymat = qirqibOlish(satr);
//   return tozaQiymat.length >= 20 && tozaQiymat.toLowerCase().includes("bluetooth");
// };

// const maxsusKodniSinash = satr => qirqibOlish(satr).startsWith("WH-");

// tovarTafsiloti.name = nomniFormatlash(tovarTafsiloti.name);
// tovarTafsiloti.category = hammaHarfKatta(tovarTafsiloti.category);
// tovarTafsiloti.description = qirqibOlish(tovarTafsiloti.description);
// tovarTafsiloti.code = qirqibOlish(tovarTafsiloti.code);

// let tovarNomiTogrimi = tovarTafsiloti.name.length > 0;
// let toifaTogrimi = tovarTafsiloti.category.length > 0;
// let tavsifTogrimi = tavsifniSinash(tovarTafsiloti.description);
// let kodTogrimi = maxsusKodniSinash(tovarTafsiloti.code);

// if (tovarNomiTogrimi && toifaTogrimi && tavsifTogrimi && kodTogrimi) {
//   console.log(`Mahsulot: ${tovarTafsiloti.name}`);
//   console.log(`Kategoriya: ${tovarTafsiloti.category}`);
//   console.log(`Kod: ${tovarTafsiloti.code}`);
//   console.log("Holat: tekshiruvdan o‘tdi");
// } else {
//   console.log("Holat: tekshiruvdan o‘tmadi (ma’lumotlar to‘liq emas)!");
//   if (!tovarNomiTogrimi) console.log("Xatolik: Mahsulot nomi to‘g‘ri kiritilmagan!");
//   if (!toifaTogrimi) console.log("Xatolik: Kategoriya kiritilmagan!");
//   if (!tavsifTogrimi) console.log("Xatolik: Tavsif kamida 20 belgi va tarkibida 'bluetooth' so‘zi bo‘lishi kerak!");
//   if (!kodTogrimi) console.log("Xatolik: Kod 'WH-' prefiksi bilan boshlanishi zarur!");
// }

// // =========================================================

// let murojaatXati = {
//   sender: " sARDOR ",
//   subject: " PAYMENT ISSUE ",
//   text: " I cannot complete my payment. Please help! ",
//   email: " SARDOR@MAIL.COM "
// };

// const boshJoyTozala = matn => matn.trim();

// const ismniKeltirish = matn => {
//   let tayyorMatn = boshJoyTozala(matn);
//   if (tayyorMatn.length === 0) return "";
//   return tayyorMatn[0].toUpperCase() + tayyorMatn.slice(1).toLowerCase();
// };

// const kichikSatrQil = matn => boshJoyTozala(matn).toLowerCase();

// const xabarMatniniTekshir = matn => {
//   let tayyorMatn = boshJoyTozala(matn);
//   return tayyorMatn.length >= 20 && tayyorMatn.toLowerCase().includes("payment");
// };

// const pochtadaBelgiBormi = matn => {
//   let tayyorMatn = kichikSatrQil(matn);
//   return tayyorMatn.includes("@");
// };

// murojaatXati.sender = ismniKeltirish(murojaatXati.sender);
// murojaatXati.subject = kichikSatrQil(murojaatXati.subject);
// murojaatXati.text = boshJoyTozala(murojaatXati.text);
// murojaatXati.email = kichikSatrQil(murojaatXati.email);

// let yuboruvchiBor = murojaatXati.sender.length > 0;
// let mavzuBor = murojaatXati.subject.length > 0;
// let matnMosKeldi = xabarMatniniTekshir(murojaatXati.text);
// let pochtaMosKeldi = pochtadaBelgiBormi(murojaatXati.email);

// if (yuboruvchiBor && mavzuBor && matnMosKeldi && pochtaMosKeldi) {
//   console.log(`Yuboruvchi: ${murojaatXati.sender}`);
//   console.log(`Mavzu: ${murojaatXati.subject}`);
//   console.log(`Email: ${murojaatXati.email}`);
//   console.log("Holat: murojaat qabul qilindi");
// } else {
//   console.log("Holat: murojaat qabul qilinmadi (xatolik bor)!");
//   if (!yuboruvchiBor) console.log("Xatolik: Yuboruvchi maydoni to‘ldirilmagan!");
//   if (!mavzuBor) console.log("Xatolik: Mavzu bo‘sh bo‘lishi mumkin emas!");
//   if (!matnMosKeldi) console.log("Xatolik: Xabar kamida 20 belgi va unda 'payment' so‘zi bo‘lishi zarur!");
//   if (!pochtaMosKeldi) console.log("Xatolik: Email manzilida '@' belgisi mavjud emas!");
// }

// // =========================================================

// let shaxsiyProfil = {
//   fullName: " dILSHOD kARIMOV ",
//   email: " DILSHOD@GMAIL.COM ",
//   username: " dilshod_uz ",
//   city: " tOSHKENT ",
//   website: " https://dilshod.uz "
// };

// const matnniTozala = qiymat => qiymat.trim();

// const ismSharifniTuzat = qiymat => {
//   let tozalangan = matnniTozala(qiymat);
//   let oraliqJoyIndex = tozalangan.indexOf(" ");

//   if (oraliqJoyIndex === -1) {
//     if (tozalangan.length === 0) return "";
//     return tozalangan[0].toUpperCase() + tozalangan.slice(1).toLowerCase();
//   }

//   let berilganIsm = tozalangan.slice(0, oraliqJoyIndex);
//   let berilganFamiliya = tozalangan.slice(oraliqJoyIndex + 1).trim();

//   let tayyorIsm = berilganIsm.length > 0 
//     ? berilganIsm[0].toUpperCase() + berilganIsm.slice(1).toLowerCase() 
//     : "";
//   let tayyorFamiliya = berilganFamiliya.length > 0 
//     ? berilganFamiliya[0].toUpperCase() + berilganFamiliya.slice(1).toLowerCase() 
//     : "";

//   return `${tayyorIsm} ${tayyorFamiliya}`.trim();
// };

// const bittaBoshHarfKatta = qiymat => {
//   let tozalangan = matnniTozala(qiymat);
//   if (tozalangan.length === 0) return "";
//   return tozalangan[0].toUpperCase() + tozalangan.slice(1).toLowerCase();
// };

// const kichikQilibTozala = qiymat => matnniTozala(qiymat).toLowerCase();

// const pochtaOxiriTekshir = qiymat => {
//   let toza = kichikQilibTozala(qiymat);
//   return toza.includes("@") && toza.endsWith(".com");
// };

// const foydalanuvchiNominiTekshir = qiymat => matnniTozala(qiymat).length >= 6;

// const sahifaBoshlanishiTekshir = qiymat => matnniTozala(qiymat).startsWith("https://");

// shaxsiyProfil.fullName = ismSharifniTuzat(shaxsiyProfil.fullName);
// shaxsiyProfil.email = kichikQilibTozala(shaxsiyProfil.email);
// shaxsiyProfil.username = kichikQilibTozala(shaxsiyProfil.username);
// shaxsiyProfil.city = bittaBoshHarfKatta(shaxsiyProfil.city);
// shaxsiyProfil.website = matnniTozala(shaxsiyProfil.website);

// let ismFamiliyaBor = shaxsiyProfil.fullName.length > 0;
// let pochtaMuvaffaqiyatli = pochtaOxiriTekshir(shaxsiyProfil.email);
// let foydalanuvchiNomiMuvaffaqiyatli = foydalanuvchiNominiTekshir(shaxsiyProfil.username);
// let shaharKiritilgan = shaxsiyProfil.city.length > 0;
// let sahifaMuvaffaqiyatli = sahifaBoshlanishiTekshir(shaxsiyProfil.website);

// if (ismFamiliyaBor && pochtaMuvaffaqiyatli && foydalanuvchiNomiMuvaffaqiyatli && shaharKiritilgan && sahifaMuvaffaqiyatli) {
//   console.log(`F.I.Sh.: ${shaxsiyProfil.fullName}`);
//   console.log(`Email: ${shaxsiyProfil.email}`);
//   console.log(`Username: ${shaxsiyProfil.username}`);
//   console.log(`Shahar: ${shaxsiyProfil.city}`);
//   console.log(`Website: ${shaxsiyProfil.website}`);
//   console.log("Holat: profil tasdiqlandi");
// } else {
//   console.log("Holat: profil tasdiqlanmadi!");
//   if (!ismFamiliyaBor) console.log("Xatolik: F.I.Sh. to‘g‘ri kiritilmagan!");
//   if (!pochtaMuvaffaqiyatli) console.log("Xatolik: Email tarkibida '@' bo‘lishi va '.com' bilan tugashi lozim!");
//   if (!foydalanuvchiNomiMuvaffaqiyatli) console.log("Xatolik: Username uzunligi kamida 6 belgidan iborat bo‘lishi kerak!");
//   if (!shaharKiritilgan) console.log("Xatolik: Shahar nomi kiritilmagan!");
//   if (!sahifaMuvaffaqiyatli) console.log("Xatolik: Website manzili 'https://' bilan boshlanishi kerak!");
// }