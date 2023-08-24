import java.util.Scanner;

public class CheckPalindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter A Number: ");
        int n = sc.nextInt();
        
        //Palindrome is one which is same from forward and backward
        int reverse = 0;
        //Storing n in temporary variable
        int temp = n;
        while (temp > 0) {
            reverse = reverse * 10 + temp % 10;
            temp = temp / 10; 
        }

        if (n == reverse) {
            System.out.print("Paindrome");
        }else {
            System.out.print("Not Palindrome");
        }
        sc.close();
    }
}
