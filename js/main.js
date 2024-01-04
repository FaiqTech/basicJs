//* 29. Verilən üç tam dəyərin 50..99 (daxil olmaqla) aralığında olub olmadığını yoxlamaq üçün JavaScript
//* proqramı yazın. Onlardan biri və ya bir neçəsi göstərilən aralığındadırsa, geri qayıdın.

// function aralıq(dəyər1, dəyər2, dəyər3) {
//   return (
//     (dəyər1 >= 50 && dəyər1 <= 99) ||
//     (dəyər2 >= 50 && dəyər2 <= 99) ||
//     (dəyər3 >= 50 && dəyər3 <= 99)
//   );
// }

// console.log(aralıq(50, 90, 99)); //true
// console.log(aralıq(3, 4, 178)); //false
// console.log(aralıq(53, 87, 305)); //true

//* 38. Müxtəlif imtahanlarda bir tələbənin ümumi işarələrini yoxlamaq üçün JavaScript proqramı yazın.
//* Tələbə ümumi qiymətlər 89..100 aralığında olduqda, imtahan "Final-imtahan" olduqda A + dərəcəsi alacaq"
//* tələbə A + dərəcəsi alacaq və ümumi qiymətlər 90-dan çox və ya bərabər olmalıdır.
//* Tələbə A + dərəcəsi alırsa, gerçək qayıdın, əks halda yalan danışın.

// function imtahan(qiymet) {
//   if (qiymet >= 89 && qiymet <= 100) {
//     return "A + dərəcəsi alacaqsınız";
//   } else {
//     return false;
//   }
// }

// console.log(imtahan(95)); // A + dərəcəsi alacaqsınız
// console.log(imtahan(70)); // false
// console.log(imtahan(96)); // A + dərəcəsi alacaqsınız

//* 60. Verilmiş bir sətrin ilk və son simvolları olmadan yeni bir soz yaratmaq üçün JavaScript proqramı yazın.

// function yeniSetr(sətr) {
//   return sətr.substring(1, sətr.length - 1); //substrinq- hansi indeksdaxil olmaqla hansi indekse qeder gotursunu teyin edir
// }

// console.log(yeniSetr("Coders")); // "oder"
// console.log(yeniSetr("Baku")); // "aku"

//* 86. Müəyyən bir bucağın növlərini tapmaq üçün JavaScript proqramı yazın. Bucaq növləri:

//* Iti bucaq: 0 ilə 90 dərəcə arasındakı bir derece.
//* Duz bucaq: 90 dərəcə beraber.
//* Kor bucaq: 90 ilə 180 dərəcə arasındakı bir derece.
//* Aciq bucaq: 180 dərəcə bir derece.

// function bucaqNovu(derece) {
//   if (0 < derece && derece < 90) {
//     return "İti bucaqlı";
//   } else if (derece === 90) {
//     return "Düz bucaqlı";
//   } else if (90 < derece && derece < 180) {
//     return "Kor bucaqlı";
//   } else if (derece === 180) {
//     return "Açıq bucaqlı";
//   } else {
//     return "Yanlış derece";
//   }
// }

// console.log(bucaqNovu(45)); // İti bucaqlı
// console.log(bucaqNovu(90)); // Düz bucaqlı
// console.log(bucaqNovu(120)); // Kor bucaqlı
// console.log(bucaqNovu(180)); // Açıq bucaqlı
// console.log(bucaqNovu(200)); // Yanlış derece

//* 72. İlk və son elementlərin uzunluğu 3 ədəd olan bir sıra
//* eyni olub olmadığını yoxlamaq üçün JavaScript proqramı yazın.

// function eynilik(reqemler) {
//   var son = reqemler.length - 1;
//   if (reqemler[0] == reqemler[son]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(eynilik([1, 2, 3])); // false
// console.log(eynilik([1, 2, 1])); // true
// console.log(eynilik([10, 40, 60])); //false
