const sqInRect = (lng, wdth) => {
  if (lng === wdth) {
    return null;
  }

  const results = [];

  while (lng > 0 && wdth > 0) {
   results.push(lng > wdth ? wdth : lng);
   lng > wdth ? lng -= wdth : wdth -= lng;
  }

  return results;
}

console.log(sqInRect(3, 5));
