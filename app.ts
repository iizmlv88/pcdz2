
// !dz
// Задача 1: Перевірка типу об'єкту

// Напишіть функцію, яка приймає параметр, і перевіряє, чи є цей параметр об'єктом з властивістю name. 
// Якщо параметр є об'єктом з властивістю name, виведіть на екран повідомлення зі значенням name. Інакше, виведіть повідомлення, що параметр не має властивості name.

function checkObj(name: unknown): void {
   if (typeof name === 'object' && name !== null && 'name' in name)
    {
    console.log(name.name);
  } else {
    console.log('параметр не має властивості name');
  }
}

const obj1 = { name: 'Ildar' };
const obj2 = { age: 33 };
const str = 'affaffafa';
checkObj(obj1)
checkObj(obj2)
checkObj(str)

// Задача 2: Перевірка типу масиву чисел

// Напишіть функцію, яка приймає параметр, і перевіряє, чи є цей параметр масивом чисел. Якщо параметр є масивом чисел, виведіть на екран їх суму.
//  Інакше, виведіть повідомлення, що параметр не є масивом чисел.

function numsSum(params: unknown): void {
  if (Array.isArray(params)) {
    let sum = 0;
    for (let index = 0; index < params.length; index++) {
      if (typeof params[index] === 'number') {
        sum += params[index];
      }
    }
    console.log('параметр є масивом чисел, виведено їх суму', sum);
  } else {
    console.log('параметр не є масивом чисел');
  }
}

const numbers = [33, 4, 5, 23, 1]
numsSum(numbers)