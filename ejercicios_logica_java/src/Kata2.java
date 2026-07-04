
import java.util.Scanner;

public class Kata2 {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        String bebida;
        double temperatura;

        System.out.print("Que bebida quieres?: ");
        bebida = teclado.nextLine();

        System.out.print("Como te gusta?: ");
        temperatura = teclado.nextDouble();

        if (temperatura > 60) {
            System.out.println(bebida + ": Caliente");
        } else if (temperatura >= 30) {
            System.out.println(bebida + ": Templada");
        } else {
            System.out.println(bebida + ": Fría");
        }

        teclado.close();
    }
}
