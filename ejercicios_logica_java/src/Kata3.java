import java.util.Scanner;

public class Kata3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        System.out.print("Introduce el día de la semana (1 = Lunes, 7 = Domingo): ");
        int dia = scanner.nextInt();

        System.out.print("Introduce la hora (0-23): ");
        int hora = scanner.nextInt();


        boolean estaAbierta = false;
        String horarioMensaje = "";


        switch (dia) {
            case 1: // Lunes
            case 2: // Martes
            case 3: // Miércoles
            case 4: // Jueves
            case 5: // Viernes
                horarioMensaje = "Lunes a Viernes de 6:00 AM a 8:00 PM";
                if (hora >= 6 && hora < 20) {
                    estaAbierta = true;
                }
                break;

            case 6: // Sábado
                horarioMensaje = "Sábados de 7:00 AM a 2:00 PM";
                if (hora >= 7 && hora < 14) {
                    estaAbierta = true;
                }
                break;

            case 7: // Domingo
                horarioMensaje = "Domingos: Cerrado";
                estaAbierta = false;
                break;

            default:
                System.out.println("Día no válido. Debe ser un número entre 1 y 7.");
                return;
        }


        if (estaAbierta) {
            System.out.println("\n[ESTADO]: ABIERTA");
        } else {
            System.out.println("\n[ESTADO]: CERRADA");
        }
        System.out.println("Horario del día seleccionado: " + horarioMensaje);

        scanner.close();
    }
}