package org.califcoder.javabasics;

public class _005CharExamples {

	public static void main(String[] args) {
		char a  ='1';
		char b = '2';
		char c = '3';
		
		char dollar ='\u0024';
		
		System.out.print(a);
		System.out.print(b);
		System.out.println(c);
		
		System.out.println("\n");
		System.out.println("You Can alos set the char variable using a UNICODE value.");
		System.out.println("You Can get the unicode values at www.unicode.org");
		System.out.println(dollar);
		

		System.out.println("\n");
		System.out.println("char variable has a Wrapper Class \"Character\"");
		System.out.println("There are useful functions in Wrapper Class and some of them are");
		System.out.println("Character.isDigit()       --> Check given char is digit or not      :-->Checks for 1 \t" +Character.isDigit(a));
		System.out.println("Character.isAlphabetic()  --> Check given char is alphabetic or not :-->Checks for 1 \t" +Character.isAlphabetic(a));
		System.out.println("Character.isLetterOrDigit()  --> Check given char is digit or alphabetic is not :-->Checks for 1 \t" +Character.isLetterOrDigit(a));
		
		System.out.println("Character.reverseBytes()  --> returns the value obtained by reversing the "
				+ "order of the bytes in the specified char value. :-->Checks for 1 \t" +Character.reverseBytes(a));

		System.out.println("Character.toUpperCase()  --> Converts given char to uppercase :-->Checks for 1 \t" +Character.toUpperCase(a));
		System.out.println("Character.toLowerCase()  --> Converts given char to lowercase :-->Checks for 1 \t" +Character.toLowerCase(a));
		
		System.out.println("Character.toUpperCase()  --> Converts given char to uppercase :-->Checks for 1 \t" +Character.toUpperCase(Character.getType(a)));
		System.out.println("Character.toLowerCase()  --> Converts given char to lowercase :-->Checks for 1 \t" +Character.toLowerCase(Character.forDigit(a, 10)));
	}

}
