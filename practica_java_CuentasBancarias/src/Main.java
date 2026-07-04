//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
    CuentaAhorro cuentaAhorro1 = new CuentaAhorro("AH001","Ana Perez",50000,"2024-01-15");
    CuentaCorriente cuentaCorriente = new CuentaCorriente("CC001","Luis Gomez", 20000);
    CuentaEmpresarial cuentaEmpresarial = new CuentaEmpresarial("EM001", "Tech Solutions", 200000,"Tech Solutions", "123456789-0");
    CuentaAhorro cuentaAhorro2 = new CuentaAhorro("AH002", "Maria Lopez",15000, "2024-01-01");

    cuentaAhorro1.mostrarInfo();
    cuentaAhorro2.mostrarInfo();
    cuentaCorriente.mostrarInfo();
    cuentaEmpresarial.mostrarInfo();

    System.out.println("\nAna deposita $10.000 "+ cuentaAhorro1.depositar(10000));
    System.out.println("Luis retira $25.000");
    cuentaCorriente.retirar(25000);
    System.out.println("\nTech Solutions retira $10.000");
    cuentaEmpresarial.retirar(10000);
    System.out.println("\nMaria intenta retirar $20.000");
    cuentaAhorro2.retirar(20000);

    cuentaAhorro1.aplicarInteres();
    cuentaAhorro2.aplicarInteres();
    cuentaCorriente.aplicarInteres();
    cuentaEmpresarial.aplicarInteres();

    cuentaAhorro1.mostrarInfo();
    cuentaAhorro2.mostrarInfo();
    cuentaCorriente.mostrarInfo();
    cuentaEmpresarial.mostrarInfo();
    }
}

