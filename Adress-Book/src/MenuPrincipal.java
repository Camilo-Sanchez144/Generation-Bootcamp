import java.util.Scanner;

public class MenuPrincipal {
    public static void main(String[] args) {
        Agenda agenda = new Agenda();
        int opcion = 0;
        Scanner sc = new Scanner(System.in);
        while (opcion != 9) {
            System.out.print("""
            ==========================
            === AGENDA DE CONTACTOS ===
            1. Agregar contacto
            2. Buscar contacto
            3. Eliminar contacto
            4. Listar todos los contactos
            5. Agregar grupo
            6. Agregar contacto a grupo
            7. Listar grupos
            8. Mostrar contactos por grupo
            9. Salir
            ==========================
            Elige una opción:
            """);
            opcion = sc.nextInt();
            sc.nextLine();
            if(opcion>9){
                System.out.println("Opcion no válida");
            }
            if(opcion < 0){
                System.out.println("Opcion no valida");
            }
            switch (opcion){
                case 1: {
                    System.out.println("--- AGREGAR CONTACTO ---");

                    System.out.print("Nombre: ");
                    String nombre = sc.nextLine();

                    System.out.print("Teléfono: ");
                    String telefono = sc.nextLine();

                    System.out.print("Email: ");
                    String email = sc.nextLine();

                    Contacto contacto = new Contacto(nombre, telefono, email);
                    agenda.agregarContacto(contacto);
                    break;
                }
                case 2: {
                    System.out.println("--- BUSCAR CONTACTO ---");
                    System.out.print("Nombre contacto: ");
                    String nombreContacto = sc.nextLine();
                    agenda.buscarContacto(nombreContacto);
                    break;
                }
                case 3: {
                    System.out.println("--- ELIMINAR CONTACTO ---");
                    System.out.print("Nombre contacto: ");
                    String nombreContacto = sc.nextLine();
                    agenda.eliminarContacto(nombreContacto);
                    break;
                }
                case 4: {
                    System.out.println("--- LISTA DE CONTACTOS ---");
                    agenda.listarContactos();
                    break;
                }
                case 5: {
                    System.out.println("--- CREAR GRUPO ---");
                    System.out.print("Nombre contacto: ");
                    String nombreGrupo = sc.nextLine();
                    agenda.agregarGrupo(nombreGrupo);
                    break;
                }
                case 6: {
                    System.out.println("--- AGREGAR CONTACTO A UN GRUPO ---");
                    System.out.print("Nombre Contacto: ");
                    String nombreContacto = sc.nextLine();

                    System.out.print("Nombre del Grupo: ");
                    String nombreGrupo = sc.nextLine();

                    agenda.agregarContactoAGrupo(nombreContacto,nombreGrupo);
                    break;
                }
                case 7: {
                    System.out.println("--- LISTAR GRUPOS ---");
                    agenda.listarGrupos();
                    break;
                }
                case 8:
                    System.out.println("--- MOSTRAR CONTACTOS POR GRUPOS ---");
                    System.out.print("Nombre del grupo: ");
                    String nombreGrupo = sc.nextLine();
                    agenda.mostrarContactosPorGrupo(nombreGrupo);
                    break;
                case 9:
                    System.out.println("Gracias por usar el programa");
                    break;
            }
        }
    }
}
