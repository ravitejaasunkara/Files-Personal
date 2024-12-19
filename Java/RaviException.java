public class RaviException extends RuntimeException{
    private String message;
    private Integer code;
    public RaviException() {};
    public RaviException(String message, Integer code) {
        super(message);
    }
}
