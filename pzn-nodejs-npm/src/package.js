import { sayHello, sum } from 'learn-npm-package'
import { max, min } from 'learn-npm-package/number'

const hello = sayHello('World')
console.log(hello)
console.log(sum(1, 2, 3, 4, 5))

console.info(max(1, 2))
console.info(min(1, 2))