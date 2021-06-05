<template>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      
      <a class="navbar-item">
        <router-link to="/"> Home </router-link>
      </a>

      <a class="navbar-item">
        <router-link to="/">
          About
        </router-link>
      </a>


      <a class="navbar-item">
        <router-link to="/">
          Service
        </router-link>
      </a>

      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <router-link to="login">
            <a class="navbar-item">
              Home
            </a>
          </router-link>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <router-link to="login"
            ><a class="button is-light">
              Log in
            </a></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarItem",
};
</script>
