package org.califcoder.javabasics;

public class _001LocalVariables {

	public static void main(String[] args) {
		
		System.out.println("Variables Declared inside a functions are local to that function."
				+ "\nWe Cannot call the variables out the funcitons since their scope is limited to that function.");
		getMessageFunction();
		
		//System.out.println("Printing the Message from inside the funcion\t"+message);
		
		System.out.println("\n\nThe above line is giving the compile time error"
				+ "\nmessage cannot be resolved to a variable"
				+ "\nSince message is declared in the function getMessageFunction"
				+ "\nmessage is local to getMessageFunction only."
				+ "\nTo overcome this , message should be declared in the class level."
				+ "\n\nThese are called FEILDS as known as Class Level Variables.");

		
	}

	private static void getMessageFunction() {
		String message = new String("This is the Message");
		System.out.println("\nPrinting the Message from inside the funcion :\t"+message);
	}
	
	

}
