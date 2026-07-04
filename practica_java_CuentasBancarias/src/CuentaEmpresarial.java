public class CuentaEmpresarial extends CuentaBancaria {
    String nombreEmpresa;
    String RUT;
    double comisionRetiro = 2000;
    public CuentaEmpresarial(String numeroCuenta, String titular, double saldoInicial,  String nombreEmpresa, String RUT) {
        super(numeroCuenta, titular, saldoInicial, 1.5);
        if(saldoInicial<100000){
            throw new IllegalArgumentException("El saldo inicial no puede ser menor a $100.000");
        }
        this.RUT = RUT;
        this.nombreEmpresa = nombreEmpresa;
    }

    @Override
    public void retirar(double monto) {
        double comisionRetiro = 2000;
        if(monto > getSaldo()){
            System.out.println("No se puede retirar mas del saldo");
            return;
        }
        double cominsionmasmonto = monto + comisionRetiro;
        if(cominsionmasmonto>getSaldo()){
            System.out.println("Error: Total monto a retirar mas comisiones: " + cominsionmasmonto + "y su saldo es:" + getSaldo());
            return;
        }
        setSaldo(getSaldo()-(monto-comisionRetiro));
        System.out.println("Retiro Exitoso");
        System.out.println("Comision por retiro: " + comisionRetiro);
        System.out.println("Nuevo saldo: " + getSaldo());
    }

    @Override
    public void mostrarInfo(){
        System.out.println("\nNumero de cuenta: "+ getNumeroCuenta());
        System.out.println("Nombre del titular: "+ getTitular());
        System.out.println("Saldo Actual: "+ getSaldo());
        System.out.println("Tasa de interes: "+ getTasaInteres());
        System.out.println("Nombre Empresa: "+ this.nombreEmpresa);
        System.out.println("RUT: "+ this.RUT);
    }
}
