package org.califcoder.javabasics;

import java.math.BigDecimal;

public class _004StringExample {

	public static void main(String[] args) {
		System.out.println(" String is the instance i.e object of the STRING Class");
		
		System.out.println("Always store the most precision values like currency or income in the Big Decimal to carry the "
				+ "Correct Value.");
		System.out.println("Big Decimal store the string value first and retireve we can retrieve the string value i.e. exact precision value.");
		
		BigDecimal b = new BigDecimal(1115.34);
		System.out.println(b.toString());
		
		double bigDecimal = 1115.34d;
		String bdStr = Double.toString(bigDecimal);
		BigDecimal bd = new BigDecimal(bigDecimal);
		System.out.println(bd.toString());
		System.out.println(bdStr.toString());
		System.out.println("\n");
		System.out.println("PREFIX and POSTFIX INCREMENTING A VARIABLE");
		System.out.println("------------------------------------------");
		
		int a = 10;
		
		System.out.println("POSTFIX INCREMENT : Answer will be 10\t"+a++);
		
		a = 10;
		System.out.println("PREFIX INCREMENT  : Answer will be 11\t"+ ++a);
		System.out.println("\n");
		System.out.println("INSTANCE OF  COMPARISION:");
		System.out.println("-------------------------");
		
		System.out.println("This is used for the comparision whether object is");
		System.out.println("given class object or not.");
		System.out.println("Lets see a example");
		System.out.println();
		String s = " Indian";
		if( s instanceof java.lang.String) {
			System.out.println("So instance of is used to determine");
			System.out.println("the given obj is given class instance or not.");
			
		}

		

		
	}

}
