// Список курсов
let courses = [
   { name: "Courses in England", prices: [0, 100] },
   { name: "Courses in Germany", prices: [500, null] },
   { name: "Courses in Italy", prices: [100, 200] },
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
 ];

// Варианты цен (фильтры), которые ищет пользователь
 let requiredRange1 = [null, 200];
 let requiredRange2 = [100, 350];
 let requiredRange3 = [200, null];

function filter(rng) {
    // начальная цена фильтра
    let rangeStartPrice = rng[0];
    // конечная цена фильтра
    let rangeEndPrice = rng[1];
    // список отфильтрованных курсов
    let result = [];
    courses.forEach(cource => {
      // начальная цена курса
      courceStartPrice = cource.prices[0];
      // конечная цена курса
      courceEndPrice = cource.prices[1];
  
      // если начальная цена фильтра null
      if(rangeStartPrice == null) {
        // если конечная цена фильтра null
        if(rangeEndPrice == null) {
          // все курсы
          return courses;
        }
        // если конечная цена фильтра есть
        // все курсы, у которых начальная цена null или начальная цена <= конечная цена фильтра и конечная цена курса null или <= конечной цене фильтра
        if((courceStartPrice == null || courceStartPrice <= rangeEndPrice)
         && (courceEndPrice == null || courceEndPrice <= rangeEndPrice)) {
          result.push(cource);
        }
      }
      // если начальная цена фильтра есть
      else {
        // если конечная цена фильтра null
        if(rangeEndPrice == null) {
          // все курсы, у которых начальная цена null или начальная цена >= начальной цене фильтра и конечная цена курса null или начальная цена фильтра <= конечной цене курса
          if((courceStartPrice == null || courceStartPrice >= rangeStartPrice)
           && (rangeEndPrice == null || rangeStartPrice <= courceEndPrice)) {
            result.push(cource);
           }
        }
        // если конечная цена фильтра есть
        else {
          // если начальная цена курса null
          if(courceStartPrice == null) {
            // все курсы, у которых конечная цена null или конечная цена курса <= конечной цене фильтра
            if(courceEndPrice == null || courceEndPrice <= rangeEndPrice) {
              result.push(cource);
            }
          }
          // если начальная цена курса есть
          else {
            // если конечная цена курса null
            if(courceStartPrice == null) {
              // все курсы, у которых начальная цена >= начальная цена фильтра
              if(courceStartPrice >= rangeStartPrice) {
                result.push(cource);
              }
            }
            // если конечная цена курса есть
            else {
              // все курсы, у которых начальная цена >= начальная цена фильтра и конечная цена курса <= конечная цена фильтра
              if(courceStartPrice >= rangeStartPrice && courceEndPrice <= rangeEndPrice) {
                result.push(cource);
              }
            }
          }
         
        }
          
      }
    });
  
    return result;
  }

  // функция сортировки курсов по ценам
function courseCompare(first, second) {
    // нач. цена первого курса
    let firstStartPrice = first.prices[0];
    // кон. цена первого курса
    let firstEndPrice = first.prices[1];
    // нач. цена второго курса
    let secondStartPrice = second.prices[0];
    // кон. цена второго курса
    let secondEndPrice = second.prices[1];

    // если обе цены обоих курсов null - они равны
    if (firstStartPrice === null && firstEndPrice === null && secondStartPrice === null && secondEndPrice === null) {
        return 0;
    }

    // если обе цены первого курса null
    if (firstStartPrice === null && firstEndPrice === null) {
        return -1;
    }

    // если обе цены второго курса null
    if (secondStartPrice === null && secondEndPrice === null) {
        return 1;
    }

    // смотрим условия, когда не обе цены null

    // если нач. цена первого null
    if (firstStartPrice === null) {
        // если нач. цена второго null
        if (secondStartPrice === null) {
            // возвращаем первым тот, чья конечная цена меньше
            return firstEndPrice < secondEndPrice ? -1 : 1;
        }
    // если нач. цена второго не null
    // возвращаем первым первый
        return 1;
    }

    // если нач. цена первого не null
    // если нач. цена второго null
    if (secondStartPrice === null) {
        // возвращаем первым второй
        return 1;
    }
    // если нач. цена второго не null
    // возвращаем первым тот, чья первая цена меньше
    return firstStartPrice < secondStartPrice ? -1 : 1;
}

courses.sort(courseCompare);
  
filter(requiredRange1);