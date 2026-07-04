
import java.util.Scanner;

public class Kata8 {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        System.out.print("Número de empleados: ");
        int empleados = teclado.nextInt();

        teclado.nextLine();

        int totalHoras = 0;
        int mas40 = 0;
        int menos20 = 0;

        String nombresMas40 = "";

        for (int i = 1; i <= empleados; i++) {

            System.out.print("Nombre del colaborador " + i + ": ");
            String nombre = teclado.nextLine();

            System.out.print("Cuantas horas trabajo?: ");
            int horas = teclado.nextInt();
            teclado.nextLine();

            totalHoras += horas;

            if (horas > 40) {
                mas40++;

                if (nombresMas40.equals("")) {
                    nombresMas40 = nombre;
                } else {
                    nombresMas40 += ", " + nombre;
                }
            }

            if (horas < 20) {
                menos20++;
            }

        }

        double promedio = (double) totalHoras / empleados;
        int sueldoTotal = totalHoras * 12000;

        System.out.println("\n--- Reporte de Turnos ---");
        System.out.println("Total de horas: " + totalHoras);
        System.out.println("Promedio de horas: " + promedio);
        System.out.println("Empleados con más de 40 horas: " + mas40);

        if (mas40 > 0) {
            System.out.println("Nombres: " + nombresMas40);
        }

        System.out.println("Empleados con menos de 20 horas: " + menos20);
        System.out.println("Sueldo total a pagar: $" + sueldoTotal);

        teclado.close();
    }
}
