function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (contact.length === 11 && contact.startsWith("01")) {
    for (const char of contact) {
      if (char < "0" || char > "9") {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// console.log(validContact("02145678900"));
