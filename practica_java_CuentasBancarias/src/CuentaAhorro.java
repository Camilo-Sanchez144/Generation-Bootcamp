public class CuentaAhorro extends CuentaBancaria {
    private String fechaApertura;
    public CuentaAhorro(String numeroCuenta, String titular, double saldoInicial, String fechaApertura){
        super(numeroCuenta, titular, saldoInicial, 2.5);
        if(saldoInicial<1000){
            System.out.println("El saldo debe ser mayor o igual a 1000");;
        }
        this.fechaApertura = fechaApertura;
    }
    @Override
    public void retirar(double monto) {
    if (monto > getSaldo()){
        System.out.println("No se puede retirar mas del saldo");
    }else {
        setSaldo(getSaldo() - monto);
        System.out.println("Retiro realizado.");
    }
    }
    @Override
    public void mostrarInfo(){
        System.out.println("\nNumero de cuenta: "+ getNumeroCuenta());
        System.out.println("Nombre del titular: "+ getTitular());
        System.out.println("Saldo Actual: "+ getSaldo());
        System.out.println("Tasa de interes: "+ getTasaInteres());
        System.out.println("Fecha Apertura: "+ this.fechaApertura);
    }
}
