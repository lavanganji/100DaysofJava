package org.califcoder.javabasics;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.califcoder.enums.Months;

public class _006SwitchStmtExample {

	public static void main(String[] args) {
		switchByInteger();
		switchByString();
		switchByENUMs();
		
	}

	private static void switchByENUMs() {

		Months month = Months.MAY;

		switch (month) {
		case JAN: System.out.println("Selected Month Enum:\t January");break;
		case FEB: System.out.println("Selected Month Enum:\t Febrary");break;
		case MAR: System.out.println("Selected Month Enum:\t MARCH");break;


		default:System.out.println("Selected Month Enum:\t DEFAULT");
		break;
		}
	}

	private static void switchByString() {
		
	}

	/**
	 * @throws NumberFormatException
	 */
	private static void switchByInteger() throws NumberFormatException {
		
		try{
			String input = getInput("Enter a Number between 1 and 12");
		
		int month = Integer.parseInt(input);
		
		switch (month) {
		case 1: System.out.println("User Entered the Month : January");
			
			break;
		case 2: System.out.println("User Entered the Month : Feb");
		
		break;
		case 3: System.out.println("User Entered the Month : March");
		
		break;

		default:System.out.println("User Entered the Month : Unkonwn Number");
			break;
		}
		}catch(Exception e){
			System.out.println("Error:\t"+ e.getMessage());
			System.out.println("Stack Trace:\n");
			e.printStackTrace();
		}
	}
	private static String getInput(String prompt) {
		
		BufferedReader b = new BufferedReader(new InputStreamReader(System.in));
		System.out.print(prompt);
		System.out.flush();
		
		try {
			return b.readLine();
		}catch(Exception e) {
			return "Error:"+ e.getMessage();
		}
	}

}
