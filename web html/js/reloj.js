function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}