import java.util.Scanner;

public class Kata4 {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);


        double subtotal = 0;
        double precio;

        System.out.println("--- Sistema de Registro de Pedidos ---");


        while (true) {
            System.out.print("Ingrese el precio del producto (o marque 0 para terminar): ");
            precio = teclado.nextDouble();


            if (precio == 0) {
                break;
            }


            subtotal += precio;
        }


        teclado.close();


        double iva = subtotal * 0.19;
        double totalInicial = subtotal + iva;
        double descuento = 0;


        if (totalInicial > 50000) {
            descuento = totalInicial * 0.10;
        }

        double totalFinal = totalInicial - descuento;


        System.out.println("\n==================================");
        System.out.println("        RESUMEN DE FACTURA        ");
        System.out.println("==================================");
        System.out.printf("Subtotal:            $%,.2f\n", subtotal);
        System.out.printf("IVA (19%%):           $%,.2f\n", iva);
        System.out.printf("Total Inicial:       $%,.2f\n", totalInicial);
        System.out.printf("Descuento (10%%):     $%,.2f\n", descuento);
        System.out.println("----------------------------------");
        System.out.printf("TOTAL A PAGAR:       $%,.2f\n", totalFinal);
        System.out.println("==================================");
    }
}