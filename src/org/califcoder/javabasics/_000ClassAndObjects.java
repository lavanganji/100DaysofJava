package org.califcoder.javabasics;

public class _000ClassAndObjects {

	public static void main(String[] args) {
		
		Welcome welcome = new Welcome();
		System.out.println("Printing Message from Welcom Class");
		welcome.sayHello();
		System.out.println("Printing Message from Welcom Properties\n"+welcome.welcome);


	}

}

 class Welcome{
	public String welcome = "Hello Welcome to Java Basics Class and Objects!";
	public void sayHello() {
		System.out.println("Message is :"+welcome);
		
	}
}