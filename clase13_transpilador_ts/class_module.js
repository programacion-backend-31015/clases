class MyClass {}
export default MyClass


import MyClass from './MyClass.js'

if( true ) {
    const { default: Clase } = await import('./MiClase.js')
    const { f } = await import('./libreria.js')
}
