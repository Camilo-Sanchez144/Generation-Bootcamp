public abstract class CuentaBancaria {
    private String numeroCuenta;
    private String titular;
    private double saldo;
    private double tasaInteres;
    public CuentaBancaria(String numeroCuenta, String titular, double saldoInicial, double tasaInteres){
        if(saldoInicial<0){
            System.out.println("El saldo incial nop puede ser negativo");
            return;
        }
        else if(tasaInteres<0){
            System.out.println("La tasa de interes no puede ser negativa");
            return;
        }
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldoInicial;
        this.tasaInteres = tasaInteres;
    }

    public double getTasaInteres() {
        return tasaInteres;
    }

    public void setTasaInteres(double tasaInteres) {
        this.tasaInteres = tasaInteres;
    }

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public void setNumeroCuenta(String numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
    public String depositar(double monto){
        if(monto < 0){
            return "El monto no puede ser menor de cero";
        }
        this.saldo += monto;
        return "\nSe ha añadido el monto a tu cuenta";
    }
    public abstract void retirar(double monto);

    public void aplicarInteres(){
        this.saldo += this.tasaInteres;
        System.out.println("\nSaldo con interes: "+ this.saldo);
    }

    public void mostrarInfo(){
        System.out.println("\nNumero de cuenta: "+ this.numeroCuenta);
        System.out.println("Nombre del titular: "+ this.titular);
        System.out.println("Saldo Actual: "+ this.saldo);
        System.out.println("Tasa de interes: "+ this.tasaInteres);
    }
}
