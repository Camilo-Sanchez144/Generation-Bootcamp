import java.util.*;

public class Agenda {

    private Map<String, Contacto> contactos = new HashMap<>();
    private List<Contacto> contactosEnOrden = new ArrayList<>();
    private Map<String, List<Contacto>> grupos = new HashMap<>();

    public void agregarContacto(Contacto c) {
        String nombre = c.getNombre().toLowerCase();

        if (contactos.containsKey(nombre)) {
            System.out.println("Error: ya existe un contacto con ese nombre.");
            return;
        }

        contactos.put(nombre, c);
        contactosEnOrden.add(c);

        System.out.println("Contacto agregado correctamente.");
    }

    public void buscarContacto(String nombre) {
        Contacto contacto = contactos.get(nombre.toLowerCase());

        if (contacto == null) {
            System.out.println("No se encontró el contacto.");
            return;
        }

        System.out.println("Contacto encontrado:");
        System.out.println(contacto);
    }

    public boolean eliminarContacto(String nombre) {
        Contacto eliminado = contactos.remove(nombre.toLowerCase());

        if (eliminado == null) {
            System.out.println("No existe un contacto con ese nombre.");
            return false;
        }

        contactosEnOrden.remove(eliminado);

        for (List<Contacto> lista : grupos.values()) {
            lista.remove(eliminado);
        }

        System.out.println("Contacto eliminado correctamente.");
        return true;
    }

    public void listarContactos() {

        if (contactosEnOrden.isEmpty()) {
            System.out.println("No hay contactos registrados.");
            return;
        }

        contactosEnOrden.sort(Comparator.comparing(Contacto::getNombre));

        System.out.println("===== CONTACTOS =====");

        for (Contacto c : contactosEnOrden) {
            System.out.println(c);
        }
    }

    public void agregarGrupo(String nombreGrupo) {

        String grupo = nombreGrupo.toLowerCase();

        if (grupos.containsKey(grupo)) {
            System.out.println("Ese grupo ya existe.");
            return;
        }

        grupos.put(grupo, new ArrayList<>());

        System.out.println("Grupo creado correctamente.");
    }

    public void agregarContactoAGrupo(String nombrePersona, String nombreGrupo) {

        Contacto contacto = contactos.get(nombrePersona.toLowerCase());

        if (contacto == null) {
            System.out.println("El contacto no existe.");
            return;
        }

        List<Contacto> grupo = grupos.get(nombreGrupo.toLowerCase());

        if (grupo == null) {
            System.out.println("El grupo no existe.");
            return;
        }

        if (grupo.contains(contacto)) {
            System.out.println("El contacto ya pertenece a este grupo.");
            return;
        }

        grupo.add(contacto);

        System.out.println("Contacto agregado al grupo correctamente.");
    }

    public void listarGrupos() {

        if (grupos.isEmpty()) {
            System.out.println("No hay grupos registrados.");
            return;
        }

        System.out.println("===== GRUPOS =====");

        for (String grupo : grupos.keySet()) {
            System.out.println("- " + grupo);
        }
    }

    public void mostrarContactosPorGrupo(String nombreGrupo) {

        List<Contacto> lista = grupos.get(nombreGrupo.toLowerCase());

        if (lista == null) {
            System.out.println("El grupo no existe.");
            return;
        }

        if (lista.isEmpty()) {
            System.out.println("El grupo no tiene contactos.");
            return;
        }

        System.out.println("===== CONTACTOS DEL GRUPO " + nombreGrupo + " =====");

        for (Contacto c : lista) {
            System.out.println(c);
        }
    }

}