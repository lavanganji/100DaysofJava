package org.califcoder.javabasics;

public class _1LocalVariables {

	public static void main(String[] args) {
		
		System.out.println("Variables Declared inside a functions are local to that function."
				+ "\nWe Cannot call the variables out the funcitons since their scope is limited to that function.");
		getMessageFunction();
		
		//System.out.println("Pringing the Message from inside the funcion\t"+message);
		
		System.out.println("The above line is giving the compile time error"
				+ "message cannot be resolved to a variable"
				+ "Since message is declared in the function getMessageFunction"
				+ "message is local to getMessageFunction only."
				+ "To overcome this , message should be declared in the class level.");

		
	}

	private static void getMessageFunction() {
		String message = new String("This is the Message");
		System.out.println("Pringing the Message from inside the funcion\t"+message);
	}
	
	

}
