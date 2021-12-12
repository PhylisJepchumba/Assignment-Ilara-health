function palindrome(str)
{
	
	// Create a list
	let list = [];

	for(let i = 0; i < str.length; i++)
	{
		if (list.includes(str[i]))
			list.splice(list.indexOf(str[i]), 1);
		else
			list.push(str[i]);
	}

	if (str.length % 2 == 0 && list.length == 0 ||
	(str.length % 2 == 1 && list.length == 1))
		return true;
	
	// If string length is odd
	else
		return false;
}

// Driver code
if (canFormPalindrome("eye"))
	document.write("True<br>");
else
	document.write("False<br>");