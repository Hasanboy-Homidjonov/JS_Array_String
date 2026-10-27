// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida
// nechta belgi borligini aytsin. Bunda length propertisidan foydalamang va rekursiv funksiya ishlating

// const text_lenght = str => str.length;
// console.log(text_lenght("apple"));

// =====================================

// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// const bolinsin = (son1, son2) => son1 % son2 === 0 ? true : false;
// console.log(bolinsin(98,7));
// console.log(bolinsin(94,9));


// ===================================

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.

// const raqam = str => Number(str);
// console.log(raqam("123"));

// ====================================

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin

// const tortYuz = (a, b) => {
//     if (a <= 0 || b <= 0) {
//         return -1;
//     }
//     return a * b;
// }
// console.log(tortYuz(3,4));
// console.log(tortYuz(3,-4));


// =================================
// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin

// const ismFam = (ism, fam) => {
//     return "" + ism + ", " + fam;
// }
// console.log(ismFam("Hasanboy","Homidjonov"));


// ========================================

// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true) ➞ "sad days"
// bug(false) ➞ "it's a good day"

// const bug = isBug => isBug ? "sad days" : "it's a good day";
// console.log(bug(false));
// console.log(bug(true));


// ==========================================

// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib
// qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.

// const tushirMassiv = (arr, int) => {
//     for (let i = 1; i <= int; i++){
//         arr.shift();
//     }
//     return arr;
// }
// console.log(tushirMassiv([1,2,3,4,5],2));


// =============================================
// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.


// const ovozlar = obj => obj.upvotes - obj.downvotes;

// ===============================================

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

// const negativini = int => int > 0 ? (-1) * int : int;
// console.log(negativini(17));
// console.log(negativini(-17));
// console.log(negativini(0));


// =====================================
// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.

// const testkariArray = arr => {
//     let new_arr = [];
//     for (let i =  arr.length-1; i >=0; i--){
//         new_arr.push(arr[i]);
//     }
//     return new_arr;
// }
// console.log(testkariArray([1,2,3,4,5]));

// ======================================

// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.

// const kinogaKirish = (age, parents) => age >= 15 || parents;

// console.log(kinogaKirish(14, true));
// console.log(kinogaKirish(14, false));
// console.log(kinogaKirish(16, false));

// ==============================================

// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.


// const oshir1ga = arr => {
//     for (let i in arr) {
//         arr[i] += 1;
//     }
//     return arr;
// }
// console.log(oshir1ga([-1,-2,-3,-4,-5]));

// ================================================

// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling

// var ism = "Donyor";
// var familiya = "Olimov";

// var natija = `${ism} ${familiya}`;
// console.log(natija);

// =======================================

// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// Ternary operatorga misol:
// 2===2 ? 'teng' : 'tengemas'

// const ternary = (a, b) => a === b ? "teng" : "teng emas";
// console.log(ternary(1,2));
// console.log(ternary(1,1));
// -------------------------------------------------
// const holatYaxshimi = bool => bool ? "Yaxshi" : "Yaxshi emas";
// console.log(holatYaxshimi(false));
// console.log(holatYaxshimi(true));

// =============================================

// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false

// const sonUzunligi = str => str.trim().length % 2 === 0 ?true:false;
// console.log(sonUzunligi("Hasanboy"));

// ==================================================

// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.

// const darajaga = (x, y) => x ** y;
// console.log(darajaga(5,5));
// console.log(darajaga(3,3));
// console.log(darajaga(3,1));

// =================================================

// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.

// const lastElement = arr => arr[arr.length - 1];
// console.log(lastElelement(["Hasanboy", "Jasurbek", "Ahmadullox"]));
// console.log(lastElelement([1,2,3,4,5,6,7]));

// ====================================================

// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.


// const kabisami = year => {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     }
//     return false;
// }
// console.log(kabisami(1968));
// =====================================================

// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.

// const firstLetter = str => str.slice(1);
// console.log(fistLatter("Hasanboy"));

// =============================================

// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.

// const flipBool = bool => !bool;
// console.log(flipBool(false));
// console.log(flipBool(true));

// ===============================================

// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.

// const juftMi = int => int % 2 === 0 ? "juft" : "toq";
// console.log(juftMi(12));
// console.log(juftMi(11));


// =======================================================

// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi.
// Agar funskiyaga qutilarning qavati berilsa, nechta quti turganini
// qaytarsin.

// const qutilar = son => Math.pow(son, 2);
// console.log(qutilar(1));
// console.log(qutilar(0));
// console.log(qutilar(2));
// console.log(qutilar(3));

// ==================================================

// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.

// const arraytoString = arr => arr.join("");
// console.log(arraytoString([1,2,3,4,5,6,7]));
// console.log(arraytoString(["a","b","c","d"]));

// ========================================================

// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.

// const birlashtirib = (arr1, arr2) => {
//     return arr1.concat(arr2);
// }
// console.log(birlashtirib([1,2,3,4],[5,6,7,8]));
// =======================================================

// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.

// const topIndex = (arr, son) => arr.indexOf(son);
// console.log(topIndex([1,2,3,4,],4));
// console.log(topIndex(["Hasanboy","Jasurbek","Diyorbek","Nodirbek","Asrorbek"],"Asrorbek"));
// ================================================

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
// !!! Indexni eng kichik qiymatga qarab yaxlitlang

// const arrEelement = (arr, index) => arr[Math.floor(index)];
// console.log(arrEelement([1,2,3,4,5],4));
// ====================================================

// 66.Quyidagi namunani kuzatgan holda funksiya yasang.
// namuna([1, 2, 3, 4, 5]) ➞ 15
// namuna([-1, 0, 1]) ➞ 0
// namuna([0, 4, 8, 12]) ➞ 24

// const sumArray = arr => {
//     return arr.reduce((sum, son) => sum + son,0);
// }
// console.log(sumArray([1,2,3,4,5]));
// console.log(sumArray([1,0,-1]));
// ===========================================

// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin

// const sozSon = str => {
//     switch (str) {
//         case "bir": return 1;
//         case "ikki": return 2;
//         case "uch": return 3;
//         case "tort":
//         case "to'rt":return 4;
//         case "besh": return 5;
//         case "olti":return 6;
//         case "yetti":return 7;
//         case "sakkiz":return 8;
//         case "to'qqiz":return 9;
//         case "nol":return 0;
//         default: return "bunday raqam yoq";
//     }
// }
// console.log(sozSon("to'qqiz"));

// ============================================

// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
// true qaytarsin, aks holda false

// const bormi = (bor, son) => bor.includes(son) ? true : false;
// console.log(bormi([1,2,3,4],3));
// console.log(bormi([1,2,3,4],5));

// ==================================================

// 69.Funskiya sonlar va stringlar massivi berilsa, massivning
// ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
// qaytarib bersin

// const sonString = arr => {
//     return arr.map(i=>String(i))
// }
// console.log(sonString([1,2,3,"a","c"]));

// ==============================================

// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin.

// const kub = son => 6 * Math.pow(son, 2);
// console.log(kub(3));
// console.log(kub(2));
// console.log(kub(1));

// ================================================

// 71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
// olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
// odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.

// const odamSigadimi = son => Math.ceil(son / 5);
// console.log(odamSigadimi(11));
// console.log(odamSigadimi(0));
// console.log(odamSigadimi(5));

// =====================================================

// 72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
// mavjud bo’lsa true qaytarsin, aks holda false.

// 1-usul
// const boshjoyBormi = str => str.includes(" ")
// 2-usul
// const boshjoyBormi = str => str.split("").some(belgi => belgi === " ");
// console.log(boshjoyBormi(" "));
// console.log(boshjoyBormi("Hello world"));
// console.log(boshjoyBormi(""));

// ==================================================

// 73.Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik

// const hajm = obj => {
//     let arr = Object.values(obj);
//     return arr.reduce((sum, son) => sum * son, 1);
// }
// console.log(hajm({ width: 2, length: 5, height: 1 }));
// console.log(hajm({ width: 4, length: 2, height: 2 }));

// =====================================================

// 74.Funksiya son1, son2 va massiv qabul qiladi. Funksiya ushbu
// massivni ichidan son1dan katta va son2dan kichik sonlarni
// ajratib olib yangi massiv qaytarsin. Bunda son1 doim son2dan
// kichik.


// function sonlar(son1, son2, arr) {
//     return arr.filter(num => num > son1 && num < son2);
// }
// console.log(sonlar(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(sonlar(1, 10, [1, 10, 25, 8, 11, 6]));


// ============================================

// 75.Funksiya massiv qabul qiladi. Ushbu funksiya unga berilgan
// massiv elementlariga mos o’rinda joylashgan elementlarning
// turini saqlagan massiv qaytarsin.

// const typeArr = arr => arr.map(i => typeof i);
// console.log(typeArr([1, 2, "Hello", true, {}, []]));

// ==================================================

// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// string ko’rinishida qaytarsin.
// function qaytarString(str, miqdor) {
// // code...
// }

// const takrorStr = (str, son) => {
//     if (typeof str !== "string") return "Not A String !!";
//     return str.repeat(son);
// }
// console.log(takrorStr("Hasanboy ",4));
// console.log(takrorStr(123,4));

// =================================================

// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
// funksiya true qaytarsin, aks holda false

// const koplikmi = str => str.endsWith("lar");
// console.log(koplikmi("Daraxtlar"));
// console.log(koplikmi("Daraxt"));
// ===================================================

// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin

// const boshOxiri = str => str[0].concat(str[str.length - 1]);
// console.log(boshOxiri("Hasanboy"));

// =================================================

// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
// qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
// Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin

// const jonQiynal = str => {
//     let new_word = str[0] + str[1] + ".".repeat(3);
//     return new_word + " " + new_word + " " + str;
// }
// console.log(jonQiynal("Daraxt"));


// ============================================

// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy") ➞ "Today, I am feeling happy"
// ahvol("sad") ➞ "Today, I am feeling sad"
// ahvol() ➞ "Today, I am feeling neutral

// const today = str => "Today, I am feeling " + str;
// console.log(today("happy"));
// console.log(today("sad"));

// ====================================================

// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.

// const boginlar = str => {
//     let unli = "aeoiu";
//     let count = 0;
//     for (let i of str) {
//         if (unli.includes(i.toLowerCase())) count++;
//     }
//     return count;
// }
// console.log(boginlar("Hasanboy"));

// ======================================================

// 82.Funskiyaga belgi kiritilsa ushbu belgining ASCII kodini
// qaytarsin.

// const ASCII = belgi => belgi.charCodeAt(0);
// console.log(ASCII("A"));

// ========================================

// 83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
// yoki kichik harflarda yozilgani ahamiyatsiz deb oling

// const tengmi = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
// console.log(tengmi("Hasanboy","haSANBOy"));
// console.log(tengmi("Hasanboy","haSANBO"));

// ==========================================================

// 84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdan foydalanish mumkin emas !!!

// const countBelgi = str => {
//     if(str === "") return 0;
//     return 1 + countBelgi(str.slice(1));
// }
// console.log(countBelgi("Hasanboy"));
// console.log(countBelgi("Diyor"));
// console.log(countBelgi("Axmadullo"));

// ===============================================

// 85. Karona virusdan tuzalganlar soni, yangi kasallanganlar
// soni va hozirda kasallar soni natijalari qo’limizda mavjud.
// Tuzalganlar soni va yangi kasallar soni har kuni bir xil natija.
// Funksiya necha kundan keyin barcha tuzalishini qaytarsin

// const endCorona = (tuzal, kasal, boshlangich)=> {
//     return Math.ceil(boshlangich / (tuzal - kasal));
// }
// console.log(endCorona(4000,2000,77000));
// console.log(endCorona(3000, 2000, 50699));
// console.log(endCorona(30000, 25000, 390205));

// =========================================================

// 86.Quyidagi namunani kuzatgan holda funkisya yasang.
// Namuna:
// namuna([2, 5, 3]) ➞ [4, 10, 6]
// namuna([1, 86, -5]) ➞ [2, 172, -10]
// namuna([5, 382, 0]) ➞ [10, 764, 0]

// const arr_ikki = arr => arr.map(i => i*2);
// console.log(arr_ikki([1,2,3,4]));
// console.log(arr_ikki([10,-10,24,43]));

// ============================================================

// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin

// const wordLength = function (arr) {
//     let new_arr = [];
//     for (let i of arr) {
//         new_arr.push(i.length);
//     }
//     return new_arr;
// }
// console.log(wordLength(["Hasanboy","Jasur","Axmadullo"]));

// ====================================================
// 88.Taksi kilometriga 1000 so’mdan haq oladi. Lekin birinchi
// kilometri 4000 so’m. Agar funksiya taksiga to’langan yakuniy
// summani qabul qilsa. Funksiya taksining necha kilometr
// yurganini qaytarsin.

// const taksi = son => {
//     return 1 + (son - 4000) / 1000;
// }
// console.log(taksi(5000));

// ==========================================================

// 89.Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
// harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
// katta kichikligini ahamiyati yo’q

// const dlar = str => {
//     let count = 0;
//     for (let i of str) {
//         if (i.toLowerCase() === "d") count++;
//     }
//     return count;
// }
// console.log(dlar("Daraxtlarni davolash daromad"));

// ========================================================

// 90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
// qo’yib qaytarsin.

// const specLar = str => str.split("").join(" ");
// console.log(specLar("Hasanboy"));

// =========================================================

// 91.Funksiya 2ta son argument qabul qiladi. Funksiya shunday
// qiymat qaytarsinki, ushbu qiymat ana shu ikkala sondan katta
// va 2-chi songa bo’linsin.

// const namuna = (a, b) => {
//   let max = Math.max(a, b);
//   return max + (b - (max % b));
// };

// console.log(namuna(17,8));
// console.log(namuna(98,3));
// console.log(namuna(14,11));
// =====================================================

// 92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
// berishadi. Funksiya nechta kofe olsam meni qo’limda jami
// nechta kofe bo’lishini qaytarsin.

// const nechtaKonfed = son => son + Math.floor(son/3);
// console.log(nechtaKonfed(4));
// console.log(nechtaKonfed(10));
// console.log(nechtaKonfed(200));

// ============================================

// 93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
// belgisini funksiya son marta takrorlab qaytarib bersin.

// const lastRepeat = (str, son) => str + str[str.length - 1].repeat(son-1);
// console.log(lastRepeat("Hasanboy",3));

// ==================================================

// 94.Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan
// katta bo’lgan elementlarni yig’indiisini qaytarsin.

// const beshdanKatta = arr => arr.filter(item => item > 5).reduce((sum, son) => sum + son,0)
// console.log(beshdanKatta([1, 5, 20, 30, 4, 9, 18]));
// console.log(beshdanKatta([1, 2, 3, 4]));

// =========================================================

// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini barchasini yig’indisini qaytarsin

// const summArr = arr => arr.reduce((sum, son) => sum + son, 0);
// console.log(summArr([2, 7, 4]));
// console.log(summArr([45, 3, 0]));
// console.log(summArr([-2, 84, 23]));

// =========================================================

// 96.Funksiyaga faylning manzili kiritiladi. Funksiya ushbu
// ma’lumotdan faylining nomi ajratib bersin.

// Namuna("C:/Projects/pil_tests/ascii/edabit.txt") ➞
// "edabit.txt"
// Namuna("C:/Users/johnsmith/Music/Beethoven_5.mp3")
// ➞"Beethoven_5.mp3"
// getFNamunailename("ffprobe.exe") ➞ "ffprobe.exe"

// ----------------

// const faylName = str => {
//     let new_arr = str.split("/");
//     return new_arr[new_arr.length - 1];
// }
// console.log(faylName("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
// console.log(faylName("C:/Projects/pil_tests/ascii/edabit.txt"));

// ==========================================================

// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib
// o’tishini aytsin

// const massofalarSum = arr => Math.abs(arr.reduce((sum, son) => sum + son, 0));
// console.log(massofalarSum([2, 4, 2, 5]));
// console.log(massofalarSum([-1, -4, -3, -2]));
// console.log(massofalarSum([3, 4, -5, -2]));


// ===============================================

// 98.Funksiya uchburchakning tomonlari argument qilib beriladi.
// Agar ushbu berilgan tomonlardan uchburchak yasab bo’lsa
// unda funksiya true qaytarsin, aks holda false. Uchburchakning
// qoida, istalgan 2ta tomonining yig’igindisi uchunchi tomondan
// katta bo’lsagina uchburchak hosil bo’ladi

// const uchburchakMi = (a, b, c) => {
//     if (a + b > c && b + c > a && a + c > b) return true;
//     return false;
// }
// console.log(uchburchakMi(2, 3, 4));
// console.log(uchburchakMi(3, 4, 5));
// console.log(uchburchakMi(4, 3, 8));


// ==================================================

// 99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son
// orasidagi sonlardan tuzilgan massivni ushbu funksiya
// qaytarsin.

// const oraliqArr = (a, b) => {
//     let new_arr = [];
//     for (let i = a + 1; i < b; i++){
//         new_arr.push(i);
//     }
//     return new_arr;
// }
// console.log(oraliqArr(2,4));
// console.log(oraliqArr(5,9));
// console.log(oraliqArr(2,11));
// =====================================================

// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ➞ "<div></div><div></div>"
// Namuna("p*1") ➞ "<p></p>"
// Namuna("li*3") ➞ "<li></li><li></li><li></li>"

// const tagYasa = str => {
//     let new_arr = str.split("*");
//     return ("<" + new_arr[0] + ">" + "</" + new_arr[0] + ">").repeat(new_arr[1]);
// }
// console.log(tagYasa("div*2"));
// console.log(tagYasa("p*1"));

// ========================================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin

// const summaBirdan = son => {
//     let sum = 0;
//     for (let i = 1; i <= son; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(summaBirdan(3));

// ======================================================

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false


// const orasidami = (son, obj) => son >= obj.min && son <= obj.max ? true : false;
// console.log(orasidami(4, { min: 0, max: 5 }));
// console.log(orasidami(4, { min: 6, max: 10 }));
// console.log(orasidami(5, { min: 5, max: 5 }));

// ====================================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// const oxirigisiTengmi = son => Math.pow(son, 2).toString().endsWith(son.toString());
// console.log(oxirigisiTengmi(6));

// ==================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

// const indexPulsQiymat = arr => arr.map((qiymat, index) => qiymat + index);
// console.log(indexPulsQiymat([0, 0, 0, 0, 0]));
// console.log(indexPulsQiymat([0, 1, 0, 4, 10]));

// ==========================================================

