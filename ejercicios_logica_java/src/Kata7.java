import java.util.Scanner;
public class Kata7 {
    public static void main(String[] args) {
        double descuento = 0;
        String agregarProducto = "S";
        String porcentaje = "";
        double totalCompra = 0;
        Scanner scanner = new Scanner(System.in);
        while (agregarProducto.toUpperCase().equals("S")) {
            System.out.print("Ingresa el precio del producto: ");
            int precio = scanner.nextInt();
            System.out.print("Ingresa la cantidad: ");
            int cantidad = scanner.nextInt();
            int subtotal = precio * cantidad;
            if (cantidad < 3 && cantidad > 0) {
                descuento = subtotal * 0;
                porcentaje = "(0%)";
            } else if (cantidad > 2 && cantidad < 6) {
                descuento = subtotal * 0.05;
                porcentaje = "(5%)";
            } else if (cantidad > 5 && cantidad < 11) {
                descuento = subtotal * 0.10;
                porcentaje = "(10%)";
            } else if (cantidad > 10) {
                descuento = subtotal * 0.15;
                porcentaje = "(15%)";
            }
            double iva = (subtotal - descuento) * 0.19;
            double total = subtotal - (descuento - iva);
            totalCompra += total;
            System.out.println("Subtotal: " + subtotal);
            System.out.println("Descuento:" + porcentaje + ": $" + descuento);
            System.out.println("IVA (19%): " + iva);
            System.out.println("Total: " + total);
            System.out.print("¿Agregar otro producto? (S/N): ");
            agregarProducto = scanner.next();
        }
        System.out.println("Total de la compra: "+ totalCompra);
    }
}
