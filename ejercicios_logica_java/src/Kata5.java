import java.util.Scanner;
public class Kata5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int seleccion = 0;
        int precio = 0;
        while (seleccion < 6) {
            System.out.println("--- Menú de la cafetería ---");
            System.out.println("1. Café ($4.000)");
            System.out.println("2. Muffin ($3.500)");
            System.out.println("3. Sandwich ($7.500)");
            System.out.println("4. Jugo ($5.000)");
            System.out.println("5. Té ($3.000)");
            System.out.println("6. Salir");
            System.out.print("Elige una opción: ");
            seleccion = scanner.nextInt();

            switch (seleccion) {
                case 1:
                    System.out.println("Producto agregado: Café ($4.000)");
                    precio += 4000;
                    break;
                case 2:
                    System.out.println("Producto agregado: Muffin ($3.500)");
                    precio += 3500;
                    break;
                case 3:
                    System.out.println("Producto agregado: Sandwich ($7.500)");
                    precio += 7500;
                    break;
                case 4:
                    System.out.println("Producto agregado: Jugo ($5.000)");
                    precio += 5000;
                    break;
                case 5:
                    System.out.println("Producto agregado: Té ($3.000)");
                    precio += 3000;
                    break;
            }
        }
        System.out.println("Total de la compra: " + precio);
    }
}
