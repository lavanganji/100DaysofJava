package org.califcoder.java.datatypes;

public class ByteDemo {

	public static void main(String[] args) {
		System.out.print("byte - Max Value "+Byte.MAX_VALUE+"  Min Value  "+Byte.MIN_VALUE);

		byte b = 127;
		System.out.println("\nByte Value : "+b);
		//++b;
		b = (byte) (b+1);
		System.out.println("Byte Value : "+b);
		
		System.out.println("\n1.byte  : MAX Value  "+Byte.MAX_VALUE+"  Min Value  "+Byte.MIN_VALUE + "\t Memory : 1 BYTE 2^8");
		System.out.println("2.short : MAX Value  "+Short.MAX_VALUE+"  Min Value  "+Short.MIN_VALUE + "\t Memory : 2 BYTE 2^15");
		System.out.println("3.int : MAX Value  "+Integer.MAX_VALUE+"  Min Value  "+Integer.MIN_VALUE + "\t Memory : 4 BYTE 2^31");
		System.out.println("4.long : MAX Value  "+Long.MAX_VALUE+"  Min Value  "+Long.MIN_VALUE + "\t Memory : 8 BYTE 2^63");

		System.out.println("5.char - Unsigned : MAX Value  "+Character.MAX_VALUE+"  Min Value  "+Character.MIN_VALUE + "\t Memory : 2 BYTE 2^15");
		System.out.println("6.float : MAX Value  "+Float.MAX_VALUE+"  Min Value  "+Float.MIN_VALUE + "\t Memory : 4 BYTE ");
		System.out.println("7.double : MAX Value  "+Double.MAX_VALUE+"  Min Value  "+Double.MIN_VALUE + "\t Memory : 8 BYTE ");
		System.out.println("8.boolean : only two Value  "+Boolean.TRUE+"  other  Value  "+Boolean.FALSE + "\t Memory : Not Specified");

		
	}

}
