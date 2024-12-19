public class ExceptionsExamples {
    public static void main(String[] args) {
        String a = null;
        try {
            System.out.println(a.length());
        } catch (Exception e) {
            throw new RaviException(e.getMessage(),500);
        }
    }
}
