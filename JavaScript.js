document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // 1) Animate the Name
  // ----------------------------
  const fullName = "Vinayak Sanjay Dhulubulu";
  const nameHeading = document.getElementById("nameHeading");
  nameHeading.textContent = ""; // Clear any existing text

  const baseDelayName = 1;       // initial delay for the first letter
  const letterDelayName = 0.2;   // delay increment for each subsequent letter
  const animationDuration = 0.6; // duration of the jump animation

  fullName.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.classList.add("name-letter");
    span.style.animationDelay = `${baseDelayName + index * letterDelayName}s`;
    nameHeading.appendChild(span);
  });

  // Calculate total time until the name animation completes:
  const totalNameAnimationTime =
    baseDelayName + (fullName.length - 1) * letterDelayName + animationDuration;

  // ----------------------------
  // 2) Animate Only the Role (the "I am" remains constant)
  // ----------------------------
  const roles = [
    "Web Developer",
    "Data Stuctures & Algorithm",
    "Software Developer",
    "Problem Solver"
  ];
  const roleHeading = document.getElementById("roleHeading");
  let currentRoleIndex = 0;

  // Render the role statically (without animation)
  function showRoleStatic(roleText) {
    roleHeading.textContent = roleText;
  }

  // Render the role with letter-by-letter jump animation
  function showRoleAnimated(roleText) {
    roleHeading.textContent = "";
    const baseDelayRole = 0;   // start delay for role letters
    const letterDelayRole = 0.2;

    roleText.split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.classList.add("name-letter");
      span.style.animationDelay = `${baseDelayRole + index * letterDelayRole}s`;
      roleHeading.appendChild(span);
    });
  }

  // Initially, display the first role statically so it's visible immediately.
  showRoleStatic(roles[currentRoleIndex]);

  // After the name animation completes, start cycling roles with animation.
  setTimeout(() => {
    // Animate the current role once immediately.
    showRoleAnimated(roles[currentRoleIndex]);

    function cycleRoles() {
      const roleText = roles[currentRoleIndex];
      // Determine wait time: role letters delay + animation duration + extra pause (reduced gap)
      const animationTimeForRole = roleText.length * 0.2 + animationDuration + 1;
      setTimeout(() => {
        // Move to the next role.
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        // Immediately show the next role as static text.
        showRoleStatic(roles[currentRoleIndex]);
        // After a short delay, animate it.
        setTimeout(() => {
          showRoleAnimated(roles[currentRoleIndex]);
          cycleRoles();
        }, 300);
      }, animationTimeForRole * 1000);
    }

    cycleRoles();
  }, totalNameAnimationTime * 1000);
});
