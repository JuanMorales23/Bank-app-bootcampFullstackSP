package co.juan.bankappback.resources;
import java.util.List;
import java.util.Random;
public class Challenge1 {
    public static String generateRandom(String type){
        Random rnd = new Random();
        String random = "";
        Integer intRandom;
        if(type.equals("Tipo A")){
            random = "46";
            for (int i = 0; i < 8; i++) {
                intRandom = rnd.nextInt(10);
                random = random + intRandom.toString();
            }
        }else if(type.equals("Tipo B")){
            random = "23";
            for (int i = 0; i < 8; i++) {
                intRandom = rnd.nextInt(10);
                random = random + intRandom.toString();
            }
        }else{
            random = "Opción no valida";
        }
        return random;
    }

    public static boolean verifyString(String text, List<String> stringList){
        Boolean result = true;
        for (String s: stringList) {
            if(s.equals(text)){
                result = false;
                break;
            }else{
                result = true;
            }
        }
        return result;
    }
}
