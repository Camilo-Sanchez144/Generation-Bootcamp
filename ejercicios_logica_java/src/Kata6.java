import java.util.Scanner;
public class Kata6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hora = 0;
        int totalClientes = 0;
        int contadorHoras = 0;

        int maxClientes = 0;
        int horaMaxClientes = 0;
        while(hora !=-1) {
            System.out.print("Ingresa la hora(0-23, -1 para terminar): ");
            hora = scanner.nextInt();
            if (hora == -1) {
                break;
            }
            System.out.print("Ingresa el número de clientes en esa hora: ");
            int clientesHora = scanner.nextInt();

            totalClientes += clientesHora;
            contadorHoras++;
            if (clientesHora > maxClientes) {
                maxClientes = clientesHora;
                horaMaxClientes = hora;
            }

        }
        System.out.println("--- Reporte de Clientes ---");
        System.out.println("Total de clientes: " + totalClientes);

        if (contadorHoras > 0) {
            double promedio = (double) totalClientes / contadorHoras;
            System.out.println("Promedio por hora: " + promedio);
            System.out.println("Hora con más clientes: " + horaMaxClientes);
        } else {
            System.out.println("No se ingresaron datos.");
        }

    }

    public static class Kata1 {

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

    public static class Kata2 {

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
}
