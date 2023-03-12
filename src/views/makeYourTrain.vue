<template>
  <div></div>
</template>
<script>
export default {

}
</script>
<style>
/**Aqui está todo o css relacionado ao header e app-bar */
@media only screen and (max-width: 768px) {
  header {
    height: auto;
    padding: 10px;
  }
  .menu-content {
    flex-direction: column;
    align-items: center;
  }
  .logo {
    margin: 0;
    margin-bottom: 10px;
  }
  .header-menu {
    position: static;
    max-height: none;
    overflow: visible;
    display: none;
    width: 100%;
    background-color: #222;
  }
  .list-itens {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .router-link {
    display: block;
    padding: 10px;
    margin: 0;
    width: 100%;
    text-align: center;
  }
  .router-link:hover {
    background-color: #111;
  }
  .menu-toggle {
    display: block;
  }
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    color: white;
    font-family: 'Lato', sans-serif;
}
header{
    width: 100%;
    height: 7vh;
    background-color: rgba(22, 22, 22, 0.5)
}
.router-link{
    cursor: pointer;
    letter-spacing: 4px;
    color: inherit;
    text-decoration: none;
}



.menu-content{
    height: 100%;
    align-items: center;
    text-transform: uppercase;
    justify-content: space-around;
    display: flex;
    font-size: 1.8rem;
}

.list-itens, li {
    color: white;
    cursor: pointer;
    gap: 40px;
    list-style: none;
    display: flex;
    transform: 2ms ease-in;
    position: relative;
}
.list-itens li:before{
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background-color: yellow;
    transition: all 1.5s ease;
}
.list-itens li:hover:before{
    width: 100%;
}
.logo{
    letter-spacing: 6px;
    font-size: 2.4rem;
    cursor: pointer;
}
body{
    background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)),url(../assets/academiaWallapaper.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.fit{
    max-height: 5vh;
}

</style>