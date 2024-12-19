public class StringExamples {
        public static void main(String[] args) {
            String str1 = "Java";
            String str2 = "Java";
            String str3 = new String("Java");
            String str4 = str3.intern();

            System.out.println(str1 == str2); // Example 1
            System.out.println(str1.equals(str2)); // Example 2
            System.out.println(str1 == str3); // Example 3
            System.out.println(str1.equals(str3)); // Example 4
            System.out.println(str3 == str4); // Example 5
            System.out.println(str3.equals(str4)); // Example 6

            String str5 = "Programming";
            String str6 = "Programming";
            String str7 = new String("Programming");

            System.out.println(str5 == str6); // Example 7
            System.out.println(str5.equals(str6)); // Example 8
            System.out.println(str5 == str7); // Example 9
            System.out.println(str5.equals(str7)); // Example 10
        }
    }


