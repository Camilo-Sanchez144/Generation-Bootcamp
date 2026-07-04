public class CuentaCorriente extends CuentaBancaria{
    double limiteSobregiro = 50000;
    double porcentajeComisionSobregiro = 5.0;
    public CuentaCorriente(String numeroCuenta, String titular, double saldoInicial, double limiteSobregiro, double porcentajeComisionSobregiro) {
        super(numeroCuenta, titular, saldoInicial, 0.0);
        this.limiteSobregiro = limiteSobregiro;
        this.porcentajeComisionSobregiro = porcentajeComisionSobregiro;
    }
    public CuentaCorriente(String numeroCuenta, String titular, double saldoInicial){
        super(numeroCuenta, titular, saldoInicial, 0.0);
        this.limiteSobregiro = 50000;
        this.porcentajeComisionSobregiro = 5.0;
    }
    @Override
    public void retirar(double monto) {
        double limiteSobregiro = getSaldo() + this.limiteSobregiro;
        if(monto > limiteSobregiro){
            System.out.println("Está solicitando mas dinero del que le podemos sobregirar");
            return;
        }
        setSaldo(getSaldo()-monto);
        System.out.println("Retiro exitoso");

        if(getSaldo() < 0 ){
            double comision = getSaldo() * porcentajeComisionSobregiro / 100;
            System.out.println("Comision por sobregiro: " + comision);
            double nuevoSaldo = getSaldo() - comision;
            System.out.println("Nuevo saldo: " + nuevoSaldo);
        }

    }
}
