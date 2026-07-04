
import java.util.Scanner;

public class Kata1 {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        double totalCuenta;
        double porcentajePropina;
        double propina;
        double totalPagar;

        System.out.print("Ingresa el valor total de la cuenta: ");
        totalCuenta = teclado.nextDouble();

        System.out.print("Ingresa el porcentaje de propina voluntaria: ");
        porcentajePropina = teclado.nextDouble();

        propina = totalCuenta * porcentajePropina / 100;
        totalPagar = totalCuenta + propina;

        System.out.println("Propina: $" + propina);
        System.out.println("Total a pagar: $" + totalPagar);

        if (porcentajePropina > 300) {
            System.out.println("¡Propina generosa!");
        } else if (porcentajePropina < 50) {
            System.out.println("Propina muy baja");
        }

        teclado.close();
    }
}
