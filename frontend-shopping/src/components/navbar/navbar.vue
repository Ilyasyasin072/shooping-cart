<template>
  <nav class="navbar .container.is-widescreen" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>
    </div>
    <navbar-item></navbar-item>
  </nav>
</template>

<script>
import  NavbarItem  from "./navitem";
export default {
  name: "Navbar",
  components: {
    NavbarItem: NavbarItem,
  },
};
</script>
